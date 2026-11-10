#!/usr/bin/env bash
set -euo pipefail

# Fetch the top Todoist task and send it via Pushover

if [ -z "${TODOIST_TOKEN:-}" ] || [ -z "${PUSHOVER_APP_TOKEN:-}" ] || [ -z "${PUSHOVER_USER_KEY:-}" ]; then
  echo "Required environment variables are missing" >&2
  exit 1
fi

# Todoist REST v2 was retired. API v1 uses a filter endpoint and a results envelope.
# Preserve the existing filter and first-result behavior during this migration.
TASK=$(curl -fsS --connect-timeout 10 --max-time 30 --get \
  -H "Authorization: Bearer $TODOIST_TOKEN" \
  --data-urlencode 'query=priority 4 | priority 3' \
  --data-urlencode 'limit=1' \
  "https://api.todoist.com/api/v1/tasks/filter" | \
  jq -er '
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
    end')

if [ -z "$TASK" ]; then
  echo "Todoist returned an empty response" >&2
  exit 1
fi

curl -fsS --connect-timeout 10 --max-time 30 \
  --form-string "token=$PUSHOVER_APP_TOKEN" \
  --form-string "user=$PUSHOVER_USER_KEY" \
  --form-string "title=$TASK" \
  --form-string "message=$TASK" \
  https://api.pushover.net/1/messages.json >/dev/null
