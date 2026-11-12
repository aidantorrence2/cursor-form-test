"""Exercise real curl retry behavior against loopback, never external services."""

from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import json
from pathlib import Path
import shutil
import subprocess
import tempfile
import threading
import time
import unittest

from test_reminders import ROOT, SCRIPTS, SECRETS


REAL_CURL = shutil.which("curl")
LOCAL_CURL = r'''#!/usr/bin/env python3
import os, sys
urls = {
    "https://api.todoist.com/api/v1/tasks/filter": "/todoist",
    "https://api.pushover.net/1/messages.json": "/pushover",
}
args = sys.argv[1:]
assert sum(arg in urls for arg in args) == 1, args
args = [os.environ["FIXTURE_URL"] + urls[arg] if arg in urls else arg for arg in args]
if os.environ.get("TEST_TIMEOUT"):
    args[args.index("--max-time") + 1] = os.environ["TEST_TIMEOUT"]
os.execv(os.environ["REAL_CURL"], [os.environ["REAL_CURL"], *args, "--noproxy", "*"])
'''


@unittest.skipUnless(REAL_CURL, "curl is required for loopback integration tests")
class CurlRetryTests(unittest.TestCase):
    def run_fixture(self, todoist_statuses, *, pushover_status=200, retry_after=None, partial=False):
        requests = []

        class Handler(BaseHTTPRequestHandler):
            def log_message(self, *_):
                pass

            def do_GET(self):
                attempt = sum(method == "GET" for method, _ in requests)
                requests.append(("GET", self.path))
                status = todoist_statuses[min(attempt, len(todoist_statuses) - 1)]
                payload = json.dumps({"results": [{"content": "Safe task"}]}).encode()
                self.send_response(status)
                self.send_header("Content-Length", str(len(payload)))
                if retry_after is not None and status != 200:
                    self.send_header("Retry-After", str(retry_after))
                self.end_headers()
                if partial and attempt == 0:
                    self.wfile.write(payload[:5])
                    self.wfile.flush()
                    time.sleep(0.5)
                    return
                self.wfile.write(payload)

            def do_POST(self):
                requests.append(("POST", self.path))
                self.rfile.read(int(self.headers.get("Content-Length", 0)))
                self.send_response(pushover_status)
                self.end_headers()
                self.wfile.write(b'{"status": 1}')

        server = ThreadingHTTPServer(("127.0.0.1", 0), Handler)
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()
        try:
            with tempfile.TemporaryDirectory() as directory:
                wrapper = Path(directory) / "curl"
                wrapper.write_text(LOCAL_CURL)
                wrapper.chmod(0o755)
                started = time.monotonic()
                result = subprocess.run(
                    ["bash", str(ROOT / SCRIPTS[0])],
                    env={
                        "PATH": f"{directory}:/usr/local/bin:/usr/bin:/bin",
                        **SECRETS,
                        "REAL_CURL": REAL_CURL,
                        "FIXTURE_URL": f"http://127.0.0.1:{server.server_port}",
                        "TEST_TIMEOUT": "0.2" if partial else "",
                    },
                    capture_output=True, text=True, timeout=15,
                )
                return result, requests, time.monotonic() - started
        finally:
            server.shutdown()
            server.server_close()
            thread.join()

    def test_transient_todoist_errors_retry_then_send_once(self):
        result, requests, _ = self.run_fixture([502, 503, 200])
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual([method for method, _ in requests], ["GET", "GET", "GET", "POST"])
        self.assertIn("Todoist: curl: (22)", result.stderr)
        self.assertNotIn("Pushover:", result.stderr)

    def test_todoist_retry_exhaustion_never_sends(self):
        result, requests, _ = self.run_fixture([503])
        self.assertEqual(result.returncode, 22, result.stderr)
        self.assertEqual([method for method, _ in requests], ["GET"] * 3)
        self.assertIn("Todoist request failed (curl exit 22)", result.stderr)

    def test_auth_failure_is_not_retried(self):
        result, requests, _ = self.run_fixture([401])
        self.assertEqual(result.returncode, 22, result.stderr)
        self.assertEqual(len(requests), 1)

    def test_pushover_transient_failure_is_never_retried(self):
        result, requests, _ = self.run_fixture([200], pushover_status=503)
        self.assertEqual(result.returncode, 22, result.stderr)
        self.assertEqual([method for method, _ in requests], ["GET", "POST"])
        self.assertIn("Pushover request failed (curl exit 22)", result.stderr)

    def test_retry_after_cannot_exceed_retry_window(self):
        result, requests, elapsed = self.run_fixture([503], retry_after=3600)
        # Some curl versions return success when Retry-After exceeds the
        # retry budget. Response validation must still fail closed.
        self.assertNotEqual(result.returncode, 0, result.stderr)
        self.assertEqual(len(requests), 1)
        self.assertLess(elapsed, 5)
        self.assertIn("Todoist", result.stderr)

    def test_partial_response_is_discarded_before_retry(self):
        result, requests, _ = self.run_fixture([200], partial=True)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual([method for method, _ in requests], ["GET", "GET", "POST"])
        self.assertIn("Todoist: curl: (28)", result.stderr)


if __name__ == "__main__":
    unittest.main()
