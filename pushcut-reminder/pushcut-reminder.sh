#!/usr/bin/env bash
set -euo pipefail

# Fetch the top Todoist task and send it via Pushcut

if [ -z "${TODOIST_TOKEN:-}" ] || [ -z "${PUSHCUT_URL:-}" ]; then
  echo "Required environment variables are missing" >&2
  exit 1
fi

TASK=$(curl -s \
  -H "Authorization: Bearer $TODOIST_TOKEN" \
  "https://api.todoist.com/rest/v2/tasks?filter=priority%204%20|%20priority%203&limit=1" | \
  jq -r '.[0].content // "No top-priority tasks"')

curl -s -X POST \
  -H "Content-Type: application/json" \
  -d "{\"input\":\"$TASK\"}" \
  "$PUSHCUT_URL" >/dev/null
