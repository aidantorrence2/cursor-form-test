#!/usr/bin/env bash
set -euo pipefail

# Fetch the top Todoist task and send it via Pushover

if [ -z "${TODOIST_TOKEN:-}" ] || [ -z "${PUSHOVER_APP_TOKEN:-}" ] || [ -z "${PUSHOVER_USER_KEY:-}" ]; then
  echo "Required environment variables are missing" >&2
  exit 1
fi

WORK_DIR=$(mktemp -d)
trap 'rm -rf -- "$WORK_DIR"' EXIT

# Label curl diagnostics without exposing response bodies or credentials.
request() {
  local service=$1 status=0
  shift
  curl -q "$@" 2>"$WORK_DIR/curl-error" || status=$?
  sed "s/^/$service: /" "$WORK_DIR/curl-error" >&2
  if [ "$status" -ne 0 ]; then
    echo "$service request failed (curl exit $status)" >&2
  fi
  return "$status"
}

# Todoist REST v2 was retired. API v1 uses a filter endpoint and a results envelope.
# Preserve the existing filter and first-result behavior during this migration.
# Retry only this read, at most twice. The retry window is 10 seconds; each
# attempt is capped at 30 seconds. A file lets curl discard a partial response
# before retrying instead of concatenating JSON on stdout.
request Todoist -fsS --connect-timeout 10 --max-time 30 \
  --retry 2 --retry-delay 1 --retry-max-time 10 --get \
  --output "$WORK_DIR/todoist-response" \
  -H "Authorization: Bearer $TODOIST_TOKEN" \
  --data-urlencode 'query=priority 4 | priority 3' \
  --data-urlencode 'limit=1' \
  "https://api.todoist.com/api/v1/tasks/filter"

if TASK=$(jq -er '
    if type != "object" then
      error("Unexpected Todoist response: expected an object")
    elif (.results | type) != "array" then
      error("Unexpected Todoist response: results must be an array")
    elif (.results | length) == 0 then
      "No top-priority tasks"
    elif (.results[0].content | type) != "string" then
      error("Unexpected Todoist response: task content must be a string")
    elif (.results[0].content | length) == 0 then
      error("Unexpected Todoist response: task content is empty")
    else
      .results[0].content
    end' "$WORK_DIR/todoist-response"); then
  :
else
  status=$?
  echo "Todoist response validation failed (jq exit $status)" >&2
  exit "$status"
fi

if [ -z "$TASK" ]; then
  echo "Todoist returned an empty response" >&2
  exit 1
fi

# A failed send can still have been delivered. Never retry this POST.
request Pushover -fsS --connect-timeout 10 --max-time 30 --retry 0 \
  --form-string "token=$PUSHOVER_APP_TOKEN" \
  --form-string "user=$PUSHOVER_USER_KEY" \
  --form-string "title=$TASK" \
  --form-string "message=$TASK" \
  https://api.pushover.net/1/messages.json >/dev/null
