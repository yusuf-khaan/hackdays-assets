# Daily posting run

One feed post per account per day: @homingo.hackdays and @surgelabs_. Read playbook/hackdays.md and playbook/surgelabs.md first; they are the source of truth for facts, tone and visuals.

## Setup (fresh session)
1. Work in the clone of yusuf-khaan/hackdays-assets (attach it with push access if needed and `git pull`).
2. `cd tools && npm ci` (installs fonts and playwright-core). Chromium is at /opt/pw-browsers/chromium-1194/chrome-linux/chrome.
3. Load the Instahook tools; `list_accounts` must show both handles with can_publish true.

## For each account
1. Today's date in IST. Idempotency key: `<hackdays|surgelabs>-YYYY-MM-DD`.
2. `list_posts` (last 14 days). If a post with today's key/date already exists and is PUBLISHED, skip this account. Note recent themes and formats; don't repeat them.
3. Choose the theme from the phase calendar / mix in the playbook. For news, research with web search first; skip news if nothing solid.
4. Write `posts/<account>/YYYY-MM-DD-<slug>.html` (1080×1350, link ../../tools/fonts.css, reuse the reference post's structure). Render: `node tools/render.js <html> <same-name>.jpg`.
5. Open the JPEG and check it: spelling, dates (registrations close 15 Nov 11:59 PM IST), nothing clipped or overlapping, contrast, no invented facts. Fix and re-render if needed.
6. Commit both files and `git push` (rebase on origin/main first).
7. `add_media_from_url` (if it times out right after a push, wait a minute and retry, up to 3 times) with `https://raw.githubusercontent.com/yusuf-khaan/hackdays-assets/main/posts/<account>/<file>.jpg`, tags `[<account>, <theme>]`.
8. `create_post` (type feed, caption, alt_texts, theme, idempotency key), then `publish_post`. Publish posts one at a time, never several in parallel. If PROCESSING, check `get_post` after a minute. Never publish twice.
9. Append a line to `log.md`: date, account, theme, format, permalink. Commit and push.

## Daily stories (two per account per day)
- Midday run (with the feed post): story 1, key `<hackdays|surgelabs>-story-YYYY-MM-DD`.
- Evening run (stories only, no feed post): story 2, key `<hackdays|surgelabs>-story2-YYYY-MM-DD`. Story 2 must use a different category and visual format from that day's story 1 and feed post (check list_posts).

For each story:
1. Skip if `list_posts` already shows that key's story PUBLISHED.
2. Design a 1080×1920 (9:16) story in the account's visual system: `posts/<account>/YYYY-MM-DD-story-<slug>.html`, render with `node tools/render.js <html> <same-name>.jpg 1080 1920`. Keep the top 250px and bottom 300px free of text (Instagram UI covers them).
3. What to post: see "Stories" in each account's playbook. Stories must differ from that day's feed post (complement it, don't repeat it).
4. Check, commit, push, `add_media_from_url`, then `create_post` with type `story`, caption `""`, alt_texts, theme, and the story key. Wait about 60 seconds after `create_post` (e.g. `sleep 60`), then `publish_post`, one story at a time. If it returns FAILED with Instagram "media not found" (sometimes in another language), check `get_post` to confirm it is not PUBLISHED, wait another minute and call `publish_post` once more on the same post; retrying a FAILED post cannot create a duplicate. If it fails again, log it and report it.
5. Instagram's API can't add stickers (links, polls, countdowns), so put any call to action in the image itself ("Link in bio", the site URL).
6. Log it in `log.md` like the feed posts.

## SurgeLabs lab series
Three extra @surgelabs_ feed posts a day run on their own schedule: see playbook/surgelabs-lab.md. The midday SurgeLabs feed post should not repeat a format or topic already posted by the lab series that day (check list_posts).

## Never
- Invent prize amounts, numbers, sponsors, winners, mentor names, clients or quotes.
- Post the same format or theme on the same account two days running.
- Retry a publish that returned PUBLISHED, or change an idempotency key to force a duplicate.

## At the end
Send the user a short message: both permalinks, the theme of each post, and anything that failed.
