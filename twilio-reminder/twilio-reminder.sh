#!/usr/bin/env bash
set -euo pipefail

# Fetch the top Todoist task and send it via Twilio SMS

if [ -z "${TODOIST_TOKEN:-}" ] || [ -z "${TWILIO_ACCOUNT_SID:-}" ] || [ -z "${TWILIO_AUTH_TOKEN:-}" ] || [ -z "${TWILIO_FROM_NUMBER:-}" ] || [ -z "${TWILIO_TO_NUMBER:-}" ]; then
  echo "Required environment variables are missing" >&2
  exit 1
fi

TASK=$(curl -s \
  -H "Authorization: Bearer $TODOIST_TOKEN" \
  "https://api.todoist.com/rest/v2/tasks?filter=priority%204%20|%20priority%203&limit=1" | \
  jq -r '.[0].content // "No top-priority tasks"')

curl -s -X POST "https://api.twilio.com/2010-04-01/Accounts/$TWILIO_ACCOUNT_SID/Messages.json" \
  --data-urlencode "From=$TWILIO_FROM_NUMBER" \
  --data-urlencode "To=$TWILIO_TO_NUMBER" \
  --data-urlencode "Body=$TASK" \
  -u "$TWILIO_ACCOUNT_SID:$TWILIO_AUTH_TOKEN" >/dev/null
