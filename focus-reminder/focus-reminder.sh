#!/bin/bash
set -euo pipefail

# Simple reminder script that sends a message via Pushover
title="Focus Reminder"
message="Time to focus on your top task!"

if [ -z "${PUSHOVER_APP_TOKEN:-}" ] || [ -z "${PUSHOVER_USER_KEY:-}" ]; then
  echo "Pushover environment variables are missing" >&2
  exit 1
fi

curl -s \
  --form-string "token=$PUSHOVER_APP_TOKEN" \
  --form-string "user=$PUSHOVER_USER_KEY" \
  --form-string "title=$title" \
  --form-string "message=$message" \
  https://api.pushover.net/1/messages.json >/dev/null
