#!/usr/bin/env bash
set -euo pipefail

# Fetch the top Todoist task and send it via Pushover

if [ -z "${TODOIST_TOKEN:-}" ] || [ -z "${PUSHOVER_APP_TOKEN:-}" ] || [ -z "${PUSHOVER_USER_KEY:-}" ]; then
  echo "Required environment variables are missing" >&2
  exit 1
fi

TASK=$(curl -sf \
  -H "Authorization: Bearer $TODOIST_TOKEN" \
  "https://api.todoist.com/rest/v2/tasks?filter=priority%204%20|%20priority%203&limit=1" | \
  jq -r '.[0].content // "No top-priority tasks"')

curl -sf \
  -F "token=$PUSHOVER_APP_TOKEN" \
  -F "user=$PUSHOVER_USER_KEY" \
  -F "title=$TASK" \
  -F "message=$TASK" \
  https://api.pushover.net/1/messages.json >/dev/null
