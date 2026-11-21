#!/usr/bin/env bash
# Export each resume design (*.html) in this folder to a PDF next to it.
# Uses Playwright's Chromium if present, otherwise any chrome/chromium on PATH.
set -euo pipefail
cd "$(dirname "$0")"

CHROME="${CHROME:-$(ls ~/.cache/ms-playwright/chromium-*/chrome-linux/chrome 2>/dev/null | head -1 || true)}"
CHROME="${CHROME:-$(command -v google-chrome || command -v chromium || command -v chromium-browser || true)}"
[ -n "$CHROME" ] || { echo "No Chrome/Chromium found. Set CHROME=/path/to/chrome"; exit 1; }

for f in *.html; do
  out="${f%.html}.pdf"
  "$CHROME" --headless=new --disable-gpu --no-sandbox --no-pdf-header-footer \
    --virtual-time-budget=8000 --print-to-pdf="$out" "file://$PWD/$f" 2>/dev/null
  echo "$out: $(pdfinfo "$out" 2>/dev/null | awk '/^Pages/{print $2}') page(s)"
done
