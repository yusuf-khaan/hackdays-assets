# Running the content system

Four Instagram accounts, published through the Instahook connector by scheduled runs. Every feed post is a carousel. Stories run on @homingo.hackdays and @surgelabs_.

## How the day runs (IST)
Two scheduled runs a day make everything and schedule it in Instahook with `publish_at`; Instahook publishes at the slot time.

| Run | When | Makes |
|---|---|---|
| Morning batch | 05:52 | all 10 carousels + story 1 on Hack Days and SurgeLabs, scheduled for today's slots |
| Evening run | 17:52 | story 2 on Hack Days and SurgeLabs + trend check (may add or swap a carousel) |
| Weekly review | Sunday 23:07 | learning + system improvement |

Publishing slots and idempotency keys (IST date):
| Account | Slots | Carousel keys |
|---|---|---|
| @homingo.verse | 08:47, 12:47, 16:47, 20:47 | `verse-c-YYYY-MM-DD-1` … `-4` |
| @surgelabs_ | 09:12, 18:12 | `surgelabs-c-YYYY-MM-DD-1`, `-2` |
| @homingo._ | 09:52, 18:52 | `homingo-c-YYYY-MM-DD-1`, `-2` |
| @homingo.hackdays | 10:20, 17:20 | `hackdays-c-YYYY-MM-DD-1`, `-2` |
| Stories (Hack Days + SurgeLabs) | 12:40 (story 1), 19:40 (story 2) | `<hackdays\|surgelabs>-story-YYYY-MM-DD`, `…-story2-YYYY-MM-DD` |

**Late beats missing.** Every planned item must go live the same day. If a carousel can't be ready before its slot, schedule it for the next free time that day (prefer 2 hours apart on one account, but posting closer is better than not posting) and say so in the report. Never skip a slot because it is late.

## Morning batch run (05:52)
1. Setup (below). `list_accounts`; stop and report if any account can't publish. `list_posts` (limit 30) for each account: note what already exists today (PUBLISHED, SCHEDULED, PENDING_APPROVAL) by key, and skip those slots.
2. Read FEEDBACK.md, this file, CAROUSEL.md, TRENDS.md and LEARNING.md once yourself.
3. Fill in metrics if an insights tool exists (LEARNING.md), then pull, so helpers start from fresh data.
4. Hand the creative work to helpers (the Agent tool), each with a fresh context, at most 3 running at once:
   - Verse A: verse slots 1 and 2 · Verse B: verse slots 3 and 4 (tell B which categories A is doing, so all 4 categories are covered once)
   - SurgeLabs: both carousels + story 1 · Hack Days: both carousels + story 1 · Homingo: both carousels
   Each helper: reads its account playbook, learnings/<handle>.md and the end of data/<handle>.jsonl; checks trends; decides topics (different categories, nothing repeated); does the research, hooks, design and rendering exactly as "Making one carousel" says; writes only its own files (decks, JPEGs, and edits to its own learnings file); never runs git and never calls Instahook. It returns, per post: deck path, slide JPEG paths in order, caption, alt text per slide, theme, the full data line (without post_id/permalink), and any repo improvement it made or suggests.
5. You, the lead: check each returned post (open the contact sheet; reject and send back anything with a WARN, a weak hook below the gate, an unsourced fact or a repeated topic). Then commit all files, `git pull --rebase`, push. For each post: `add_media_from_url` per slide, `create_post` with `publish_at` = its slot, type `carousel` (or `story`, caption ""), alt texts, theme, key. Check the result is SCHEDULED (or PENDING_APPROVAL, which you report).
6. Append the data lines (with post_id; permalink is filled by the evening run once published) and log.md lines. Apply small repo improvements the helpers suggested if they are safe; note them in the learnings changelog. Commit, pull --rebase, push.
7. Send the owner one message: a table of today's 12 scheduled items (time, account, topic, hook), trend posts and experiments, repo improvements, anything that failed.

## Evening run (17:52)
1. Setup. `list_posts` for all four accounts. For every post that has published since yesterday, fill `permalink` in its data line.
   **Catch-up first:** compare today's keys (tables above) with what exists. For any FAILED post, call `publish_post` on the same post (up to 3 tries, a minute or two apart; retrying a FAILED post can't duplicate it). If it still fails, recreate it with a new key ending `-r` and publish now. For any planned item that doesn't exist at all (the morning run failed or stopped early), make it now and schedule it for the next free time today, even if the slot has passed. Every planned item goes live today; late is fine, missing is not.
2. Story 2 for Hack Days and SurgeLabs (one helper, or do it yourself): different category and format from that day's story 1 and carousels. Schedule each for 19:40 with `publish_at`.
3. Trend check (TRENDS.md) for all four accounts. If a strong, fitting signal appeared today: either make a trend carousel and schedule it into a free evening hour (at most 1 per account per day), or replace a not-yet-published scheduled carousel on that account (`cancel_post` it, schedule the trend carousel at the same time with a new key ending `-t`, and move the cancelled topic back to the learnings backlog). Never touch a post that is already PUBLISHED or due within 15 minutes.
4. Record data and log lines, improve the repo if something got in your way, commit, push, and send the owner a short message.

## Read first, every run
1. playbook/FEEDBACK.md (the owner's word, overrides everything but facts and Never rules)
2. The account playbook: verse.md, homingo.md, hackdays.md, or surgelabs.md + surgelabs-lab.md
3. playbook/CAROUSEL.md (carousel runs), playbook/TRENDS.md, playbook/LEARNING.md
4. learnings/<handle>.md and the last 20 lines of data/<handle>.jsonl

## Setup (fresh session)
1. Attach yusuf-khaan/hackdays-assets with push access (add_repo), clone it, work in the clone.
2. `cd tools && npm ci` (fonts and playwright-core). Chromium: /opt/pw-browsers/chromium-1194/chrome-linux/chrome (tools pick it up; set CHROME_PATH if it moved).
3. Load the Instahook tools. `list_accounts`: find the account by handle and use that id. If the account is missing or `can_publish` is false, stop and tell the owner (it probably needs reconnecting in Instahook → Accounts).

## Making one carousel (used by helpers; the lead does the git and Instahook steps)
The steps below describe one carousel end to end. In the batch runs, helpers do steps 4–7 and the lead does steps 1–3 and 8–13, scheduling with `publish_at` instead of publishing now.

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

## Making a story (@homingo.hackdays and @surgelabs_)
- Story 1 (made in the morning batch, scheduled 12:40): key `<hackdays|surgelabs>-story-YYYY-MM-DD`. Story 2 (made in the evening run, scheduled 19:40): key `<hackdays|surgelabs>-story2-YYYY-MM-DD`.
- Skip a story whose key is already PUBLISHED.
- What to post: "Stories" in each account playbook. A strong trend (TRENDS.md) can be a story too. Stories complement that day's carousels (tease them, add a fact, ask a question); never repeat them.
- Design 1080×1920: `posts/<folder>/YYYY-MM-DD-story-<slug>.html` (or `story2`), render with `node tools/render.js <html> <same-name>.jpg 1080 1920`. Keep the top 250px and bottom 300px free of text. Instagram's API can't add stickers, so put calls to action in the image ("Link in bio", the site).
- Even a single story frame should hook: open a question or tease the carousel ("Swipe through today's post: #3 surprised us").
- Push, `add_media_from_url`, `create_post` (type `story`, caption `""`, alt text, theme, key, `publish_at` = its slot). If a story ever has to go out immediately instead: create it without `publish_at`, wait about 60 seconds, `publish_post`; on "media not found", wait a minute and publish the same post once more.
- Record a `"kind":"story"` data line and a log.md line.

## Never
- Invent facts, prize amounts, numbers, sponsors, winners, mentor names, clients, results, quotes, listings, prices, reviews or testimonials.
- Post a single-image feed post. Feed = carousel.
- Repeat the same topic on an account within 14 days, or the same category and format two runs in a row.
- Publish twice, retry a PUBLISHED post, or change an idempotency key to force a duplicate.
- Post one account's content on another account.
- Edit FEEDBACK.md, any playbook's Facts or Never sections, or published files and data lines (except filling metrics).
