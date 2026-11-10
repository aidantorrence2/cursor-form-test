"""Offline contract tests for the Render focus reminder (requires bash and jq)."""

import json
from pathlib import Path
import subprocess
import tempfile
import unittest


ROOT = Path(__file__).resolve().parents[1]
SCRIPTS = (
    "focus-reminder/focus-reminder.sh",
)
SECRETS = {
    "TODOIST_TOKEN": "test-todoist-token",
    "PUSHOVER_APP_TOKEN": "test-pushover-token",
    "PUSHOVER_USER_KEY": "test-pushover-user",
}

# Replacing curl on PATH ensures no real service is contacted or notified.
FAKE_CURL = r'''#!/usr/bin/env python3
import json, os, sys
args = sys.argv[1:]
with open(os.environ["MOCK_CALLS"], "a") as calls:
    calls.write(json.dumps(args) + "\n")
if any("api.todoist.com" in arg for arg in args):
    assert "https://api.todoist.com/api/v1/tasks/filter" in args, args
    assert "--get" in args, args
    assert "query=priority 4 | priority 3" in args, args
    assert "limit=1" in args, args
    assert "Authorization: Bearer test-todoist-token" in args, args
    code = int(os.environ.get("MOCK_TODOIST_EXIT", "0"))
    if code:
        print("curl: (22) The requested URL returned error: 410", file=sys.stderr)
        sys.exit(code)
    print(os.environ["MOCK_RESPONSE"])
else:
    sys.exit(int(os.environ.get("MOCK_NOTIFY_EXIT", "0")))
'''


class ReminderTests(unittest.TestCase):
    def run_script(self, script, response, *, todoist_exit=0, notify_exit=0, missing=None):
        with tempfile.TemporaryDirectory() as directory:
            directory = Path(directory)
            curl = directory / "curl"
            curl.write_text(FAKE_CURL)
            curl.chmod(0o755)
            calls = directory / "calls.jsonl"
            env = {
                "PATH": f"{directory}:/usr/local/bin:/usr/bin:/bin",
                **SECRETS,
                "MOCK_CALLS": str(calls),
                "MOCK_RESPONSE": response,
                "MOCK_TODOIST_EXIT": str(todoist_exit),
                "MOCK_NOTIFY_EXIT": str(notify_exit),
            }
            if missing:
                env.pop(missing)
            result = subprocess.run(
                ["bash", str(ROOT / script)], env=env, capture_output=True, text=True
            )
            requests = [json.loads(line) for line in calls.read_text().splitlines()] if calls.exists() else []
            return result, requests

    def assert_notification(self, script, args, task):
        self.assertIn("title=" + task, args)
        self.assertIn("message=" + task, args)
        self.assertNotIn("-F", args)
        self.assertEqual(args.count("--form-string"), 4)
        for call_flag in ("--connect-timeout", "--max-time"):
            self.assertIn(call_flag, args)
        self.assertIn("-fsS", args)

    def test_api_v1_response_and_literal_task_content(self):
        for script in SCRIPTS:
            for task in ("Top task", '@private.txt;type=text/plain "quote" \\ slash\nsecond line ☀'):
                with self.subTest(script=script, task=task):
                    result, calls = self.run_script(script, json.dumps({"results": [{"content": task}], "next_cursor": "more-tasks"}))
                    self.assertEqual(result.returncode, 0, result.stderr)
                    self.assertEqual(len(calls), 2)
                    self.assert_notification(script, calls[1], task)

    def test_empty_results_keep_existing_fallback(self):
        for script in SCRIPTS:
            with self.subTest(script=script):
                result, calls = self.run_script(script, '{"results": [], "next_cursor": null}')
                self.assertEqual(result.returncode, 0, result.stderr)
                self.assertEqual(len(calls), 2)
                self.assert_notification(script, calls[1], "No top-priority tasks")

    def test_invalid_response_never_sends_notification(self):
        for script in SCRIPTS:
            for response in ('', '   ', 'not json', '{}', '[]', 'null', '{"results": null}', '{"results": {}}', '{"results": [{}]}', '{"results": [{"content": null}]}', '{"results": [{"content": ""}]}', '{"results": [{"content": 12}]}'):
                with self.subTest(script=script, response=response):
                    result, calls = self.run_script(script, response)
                    self.assertNotEqual(result.returncode, 0)
                    self.assertEqual(len(calls), 1)

    def test_todoist_http_error_never_sends_notification(self):
        for script in SCRIPTS:
            with self.subTest(script=script):
                result, calls = self.run_script(script, '', todoist_exit=22)
                self.assertNotEqual(result.returncode, 0)
                self.assertEqual(len(calls), 1)
                self.assertIn("410", result.stderr)

    def test_notification_http_error_fails_cron(self):
        for script in SCRIPTS:
            with self.subTest(script=script):
                result, calls = self.run_script(script, '{"results": []}', notify_exit=22)
                self.assertEqual(result.returncode, 22)
                self.assertEqual(len(calls), 2)

    def test_missing_required_environment_never_calls_network(self):
        required = {
            SCRIPTS[0]: ("TODOIST_TOKEN", "PUSHOVER_APP_TOKEN", "PUSHOVER_USER_KEY"),
        }
        for script, variables in required.items():
            for missing in variables:
                with self.subTest(script=script, missing=missing):
                    result, calls = self.run_script(script, '{}', missing=missing)
                    self.assertNotEqual(result.returncode, 0)
                    self.assertEqual(calls, [])


if __name__ == "__main__":
    unittest.main()
