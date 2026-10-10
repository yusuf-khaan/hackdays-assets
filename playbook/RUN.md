# Running the content system

Four Instagram accounts, published through the Instahook connector by scheduled runs. Every feed post is a carousel. Stories run on @homingo.hackdays and @surgelabs_.

## Schedule (IST)
| Run | Times | Account | Per run |
|---|---|---|---|
| Verse carousels | 08:47, 12:47, 16:47, 20:47 | @homingo.verse | 1 carousel (slot 1–4) |
| Homingo carousels | 09:52, 18:52 | @homingo._ | 1 carousel (slot 1–2) |
| SurgeLabs carousels | 09:12, 18:12 | @surgelabs_ | 1 carousel (slot 1–2) |
| Hack Days carousels | 10:20, 17:20 | @homingo.hackdays | 1 carousel (slot 1–2) |
| Stories | 12:40, 19:40 | @homingo.hackdays + @surgelabs_ | 1 story each (story / story2) |
| Weekly review | Sunday 23:07 | all | learning + system improvement |

Slot from the run's IST hour. Four-a-day accounts: before 11:00 → 1, 11:00–14:59 → 2, 15:00–18:59 → 3, 19:00 or later → 4. Two-a-day accounts: before 14:00 → 1, otherwise 2.

## Read first, every run
1. playbook/FEEDBACK.md (the owner's word, overrides everything but facts and Never rules)
2. The account playbook: verse.md, homingo.md, hackdays.md, or surgelabs.md + surgelabs-lab.md
3. playbook/CAROUSEL.md (carousel runs), playbook/TRENDS.md, playbook/LEARNING.md
4. learnings/<handle>.md and the last 20 lines of data/<handle>.jsonl

## Setup (fresh session)
1. Attach yusuf-khaan/hackdays-assets with push access (add_repo), clone it, work in the clone.
2. `cd tools && npm ci` (fonts and playwright-core). Chromium: /opt/pw-browsers/chromium-1194/chrome-linux/chrome (tools pick it up; set CHROME_PATH if it moved).
3. Load the Instahook tools. `list_accounts`: find the account by handle and use that id. If the account is missing or `can_publish` is false, stop and tell the owner (it probably needs reconnecting in Instahook → Accounts).

## Feed carousel run
1. Today's IST date and slot. Idempotency key: `<verse|homingo|hackdays|surgelabs>-c-YYYY-MM-DD-<slot>`.
2. `list_posts` (limit 30). If this key is already PUBLISHED, stop. Note everything posted recently on the account (including the owner's own reels and posts) so you don't repeat topics.
3. If an Instahook insights tool exists, fill in metrics for older posts (LEARNING.md "measure").
4. Trend check (TRENDS.md). Then decide category, topic, hook archetype, format and whether this is an experiment (LEARNING.md "decide").
5. Research: web search; confirm every fact as the account playbook requires. Write the payoff sentence.
6. Write 10+ hooks, score them, pick one that clears the gate (CAROUSEL.md). Write all slides; run the swipe test.
7. Design the deck: `posts/<folder>/YYYY-MM-DD-c<slot>-<slug>.html` (folders: verse, homingo, hackdays, surgelabs). Link `../../tools/fonts.css`. Render: `node tools/carousel.js <deck.html>`. Fix every WARN, look at the contact sheet and at slides 1, 2 and the payoff at full size; check spelling, facts, contrast, clipping. Re-render until it is right.
8. `git add` the deck and its JPEGs, commit, `git pull --rebase`, push.
9. For each slide in order: `add_media_from_url` with `https://raw.githubusercontent.com/yusuf-khaan/hackdays-assets/main/<path>.jpg` (if it fails right after a push, wait a minute and retry, up to 3 times).
10. `create_post`: type `carousel`, media_ids in slide order, caption, alt_texts for every slide, theme `<category>: <topic>`, the key. Then `publish_post`. If PROCESSING, check `get_post` each minute for up to 5 minutes. If FAILED with "media not found", wait a minute and publish the same post once more. Never create a second post for the same key.
11. Append the data line (LEARNING.md "record") with an honest self_review, and a line to log.md: `- YYYY-MM-DD · <account> · c<slot> · <category>: <topic> · <hook archetype> · <permalink>`.
12. Improve the system if something got in your way (LEARNING.md "improve"). Commit, pull --rebase, push.
13. Send the owner a short message: permalink, category and topic, the hook, whether it was a trend or experiment post, any repo improvement, and anything that failed.

## Stories run (@homingo.hackdays and @surgelabs_)
- 12:40 run: key `<hackdays|surgelabs>-story-YYYY-MM-DD`. 19:40 run: key `<hackdays|surgelabs>-story2-YYYY-MM-DD`.
- Skip a story whose key is already PUBLISHED.
- What to post: "Stories" in each account playbook. A strong trend (TRENDS.md) can be a story too. Stories complement that day's carousels (tease them, add a fact, ask a question); never repeat them.
- Design 1080×1920: `posts/<folder>/YYYY-MM-DD-story-<slug>.html` (or `story2`), render with `node tools/render.js <html> <same-name>.jpg 1080 1920`. Keep the top 250px and bottom 300px free of text. Instagram's API can't add stickers, so put calls to action in the image ("Link in bio", the site).
- Even a single story frame should hook: open a question or tease the carousel ("Swipe through today's post: #3 surprised us").
- Push, `add_media_from_url`, `create_post` (type `story`, caption `""`, alt text, theme, key), wait about 60 seconds, `publish_post`, one story at a time. On "media not found", wait a minute and publish the same post once more.
- Record a `"kind":"story"` data line and a log.md line.

## Never
- Invent facts, prize amounts, numbers, sponsors, winners, mentor names, clients, results, quotes, listings, prices, reviews or testimonials.
- Post a single-image feed post. Feed = carousel.
- Repeat the same topic on an account within 14 days, or the same category and format two runs in a row.
- Publish twice, retry a PUBLISHED post, or change an idempotency key to force a duplicate.
- Post one account's content on another account.
- Edit FEEDBACK.md, any playbook's Facts or Never sections, or published files and data lines (except filling metrics).
