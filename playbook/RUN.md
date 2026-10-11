# Running the content system

Four Instagram accounts, published through the Instahook connector by scheduled runs. Feed posts are carousels on @homingo._, @homingo.hackdays and @surgelabs_. **@homingo.verse feed is reels only, and the owner's laptop automation makes those reels; cloud runs make only stories on verse, never a feed post** (owner, 2026-10-11). Stories run on all four accounts.

## How the day runs (IST)
Scheduled runs make everything and schedule it in Instahook with `publish_at`; Instahook publishes at the slot time.

| Run | When | Makes |
|---|---|---|
| Morning batch | 04:52 | 6 carousels + story 1 on all four accounts, scheduled for today's slots |
| Morning repair | 07:22 | checks the morning batch and repairs everything; all repairs done before 11:00 |
| Evening run | 17:52 | catch-up, story 2 on all four accounts, trend check (may add or swap a carousel; on verse only a story) |
| Weekly review | Sunday 23:07 | learning + system improvement |

Publishing slots and idempotency keys (IST date):
| Account | Slots | Feed keys |
|---|---|---|
| @homingo.verse | none: reels come from the owner's laptop | cloud runs never create a verse feed post |
| @surgelabs_ | 09:12, 18:12 | `surgelabs-c-YYYY-MM-DD-1`, `-2` |
| @homingo._ | 09:52, 18:52 | `homingo-c-YYYY-MM-DD-1`, `-2` |
| @homingo.hackdays | 10:20, 17:20 | `hackdays-c-YYYY-MM-DD-1`, `-2` |
| Stories: Hack Days + SurgeLabs | 12:40 (story 1), 19:40 (story 2) | `<hackdays\|surgelabs>-story-YYYY-MM-DD`, `…-story2-YYYY-MM-DD` |
| Stories: Verse | 14:47 (story 1), 21:47 (story 2) | `verse-story-YYYY-MM-DD`, `verse-story2-YYYY-MM-DD` |
| Stories: Homingo | 13:22 (story 1), 20:22 (story 2) | `homingo-story-YYYY-MM-DD`, `homingo-story2-YYYY-MM-DD` |

A cloud day is 6 carousels and 8 stories: the morning batch makes 10 items, the evening run makes 4. `verse-c-` keys (until 11 Oct) are retired: never recreate them.

**Late beats missing.** Every planned item must go live the same day. If a carousel or story can't be ready before its slot, schedule it for the next free time that day (prefer 2 hours apart on one account, but posting closer is better than not posting) and say so in the report. Never skip a slot because it is late.

## Token budget (owner, 2026-10-11): do what's needed, nothing extra
These rules apply to every run and every helper. They cut cost without cutting the quality gates (facts, hook gate, WARN-free renders).
1. **Check before you build.** Start every run with `list_accounts` + `list_posts` only. If there is nothing to make or fix, send the one-line message and stop: no clone, no `npm ci`, no reading playbooks.
2. **Read only your part.** Lead: FEEDBACK.md and this file. Helper: FEEDBACK.md, its account playbook, its learnings file, `tail -10` of its data file, and only the RUN.md section it follows (`sed -n '/^## Making one carousel/,/^## Facts gate/p'`); CAROUSEL.md only if it makes a carousel. Nobody reads LEARNING.md, TRENDS.md or log.md in daily runs (the lead already has the trend scan; the weekly review does the learning). Use `grep`/`sed` for a section instead of reading whole files.
3. **One trend scan per run, by the lead:** at most 5 WebSearch calls for all four accounts together (TRENDS.md "Does it fit" rules, which are summarised here: mass reaction in 3+ outlets, fits the account, safe, not posted before). Pass any hit to the right helper in one line; helpers don't search for trends themselves.
4. **Research only what you state.** Verify each fact you put on a slide; stop at 2 agreeing sources. About 6 searches per carousel, 2 per story.
5. **Hooks:** write 6 candidates across different archetypes, score the best 3 in full, use the winner (the gate is unchanged: 24/30, True = 5).
6. **Images cost tokens.** Helpers look at the contact sheet and slide 1 at full size; open other slides only when a WARN or a doubt points there. The lead opens only contact sheets. At most 3 render rounds per post.
7. **Three helpers, all in parallel**, never more: SurgeLabs; Hack Days; Homingo + the verse story. Give each helper its brief in a few lines; don't paste playbooks into the brief.
8. **Improve the repo only when something broke or blocked you** in this run. Other ideas: one line in the learnings changelog for the weekly review. Metrics are filled by the weekly review only.
9. **Short reports.** The owner message is a compact list; no recap of steps.

## Morning batch run (04:52)
1. `list_accounts`; stop and report if any account can't publish. `list_posts` (limit 30) for each account: note what already exists today (PUBLISHED, SCHEDULED, PENDING_APPROVAL) by key, and skip those slots. If all 10 exist, send one line and stop.
2. Setup (below). Read FEEDBACK.md and this file. Run the one trend scan (Token budget, rule 3).
3. Hand the creative work to 3 helpers (the Agent tool), all at once, each with a fresh context:
   - SurgeLabs: both carousels + story 1 · Hack Days: both carousels + story 1 · Homingo: both carousels + story 1, then the verse story 1 (logo palette, verse.md "Stories" and "Visual system" sections only; not a topic a verse reel covered in the last 14 days: pass the helper the recent verse themes from list_posts)
   In each brief: the slots and keys, recent themes on that account (from list_posts), and any trend hit. Each helper: reads only what Token budget rule 2 lists; decides topics (different categories, nothing repeated); does the research, hooks, design and rendering exactly as "Making one carousel" (or "Making a story") says; writes only its own files (decks, JPEGs, and edits to its own learnings file); never runs git and never calls Instahook. It returns, per post: deck path, slide JPEG paths in order, caption, alt text per slide, theme, the full data line (without post_id/permalink), and any repo improvement it made or suggests.
4. You, the lead: check each returned post (open only the contact sheet; reject and send back anything with a WARN, a weak hook below the gate, an unsourced fact or a repeated topic). Then commit all files, `git pull --rebase`, push. For each post: `add_media_from_url` per slide, `create_post` with `publish_at` = its slot, type `carousel` (stories: `story`, caption ""), alt texts, theme, key. Check the result is SCHEDULED (or PENDING_APPROVAL, which you report).
5. Append the data lines (with post_id; permalink is filled by the evening run once published) and log.md lines (`cat >>`, don't read log.md). Apply a helper's repo fix only if it fixes something that broke. Commit, pull --rebase, push.
6. Send the owner one message: today's 10 scheduled items (time, account, topic, hook), trend and experiment posts, anything that failed.

## Morning repair run (07:22)
Its one job: by 11:00 every item the morning batch should have scheduled for today exists, is good, and is SCHEDULED or PUBLISHED. Work in order of slot time, earliest first.
1. `list_accounts` + `list_posts` for all four accounts (no clone yet); compare with today's keys (tables above): 6 carousels and 4 story 1s. **If all 10 exist and none is FAILED or PENDING_APPROVAL, send "all 10 morning items scheduled" and stop.** Only FAILED items → retry them with `publish_post` (no clone needed). Clone and set up only if something must be made or fixed.
2. For each item: missing → make it (helpers allowed, as in the morning batch) and schedule it at its slot, or as soon as possible if the slot is passed or too close. FAILED → `publish_post` on the same post (up to 3 tries); if it still fails, recreate with a key ending `-r` and publish now. PENDING_APPROVAL → report to the owner at once. A single-image feed post, any cloud-made feed post on @homingo.verse, or a post that breaks a Facts or Never rule → cancel it if not yet published and replace it.
3. Quality pass, only for items this run made or the morning batch flagged: open their contact sheets. Fix anything clearly broken (typo, clipped text, wrong fact) before its slot by cancelling and rescheduling a corrected version with a key ending `-f`. Never touch a PUBLISHED post or one due within 15 minutes.
4. Find why the morning batch failed or fell short, and fix the cause (playbook, tool, or a note for the owner if it is the scheduled task prompt). Record data and log lines for anything you made. Commit, push.
5. Message the owner only if something was missing, failed or fixed, or needs them; say what and when it goes out. If all was fine, a one-line "all 10 morning items scheduled" is enough.

## Evening run (17:52)
1. `list_accounts` + `list_posts` for all four accounts, then setup (story 2 needs the repo). For every post that has published since yesterday, fill `permalink` in its data line (`grep` for the post_id, edit that line only).
   **Catch-up first:** compare today's keys (tables above) with what exists. For any FAILED post, call `publish_post` on the same post (up to 3 tries, a minute or two apart; retrying a FAILED post can't duplicate it). If it still fails, recreate it with a new key ending `-r` and publish now. For any planned item that doesn't exist at all (the morning run failed or stopped early), make it now and schedule it for the next free time today, even if the slot has passed. Every planned item goes live today; late is fine, missing is not.
2. Story 2 on all four accounts: up to 2 helpers (Hack Days + SurgeLabs; Homingo + Verse), or do them yourself; stories are small. Different category and format from that day's story 1 and carousels. Schedule at each account's story 2 slot with `publish_at`.
3. One trend scan for all four accounts (Token budget rule 3, at most 5 searches). If a strong, fitting signal appeared today: either make a trend carousel (on verse: a trend story instead) and schedule it into a free evening hour (at most 1 per account per day), or replace a not-yet-published scheduled carousel on that account (`cancel_post` it, schedule the trend post at the same time with a new key ending `-t`, and move the cancelled topic back to the learnings backlog). Never touch a post that is already PUBLISHED or due within 15 minutes.
4. Record data and log lines, fix the repo only if something broke, commit, push, and send the owner a short message.

## Read first, every run
Only what Token budget rule 2 lists. playbook/FEEDBACK.md always (the owner's word, overrides everything but facts and Never rules).

## Setup (fresh session)
1. Attach yusuf-khaan/hackdays-assets with push access (add_repo), clone it, work in the clone.
2. `cd tools && npm ci` (fonts and playwright-core). Chromium: /opt/pw-browsers/chromium-1194/chrome-linux/chrome (tools pick it up; set CHROME_PATH if it moved).
3. Load the Instahook tools. `list_accounts`: find the account by handle and use that id. If the account is missing or `can_publish` is false, stop and tell the owner (it probably needs reconnecting in Instahook → Accounts).

### Known environment issues (learned 2026-10-11)
- **Usage limit:** the 04:52 batch and 07:22 repair both failed with ROUTINE_RUN_FAILURE_REASON_USAGE_LIMIT_REACHED (weekly plan limit). The evening run's catch-up step is the fallback; nothing in the repo can prevent this.
- **Media import:** Instahook allows 10 `add_media_from_url` calls per minute. raw.githubusercontent.com often times out ("Downloading the URL took too long"); use `https://cdn.jsdelivr.net/gh/yusuf-khaan/hackdays-assets@<commit-sha>/<path>` (pin the pushed commit SHA, never @main, so the CDN serves the new file).
- **Research:** WebFetch fails with DNS errors in the cloud sandbox; use WebSearch and require 2+ agreeing sources.
- **Scheduled stories failing with "media not found":** @surgelabs_ story 1 failed this way on both 10 and 11 Oct; `publish_post` on the same post fixed it each time. The evening catch-up checks every story 1 for FAILED first.
- **WebSearch** often returns only titles and URLs, no snippets. For trend checks, judge mass reaction by how many separate outlets carry the same headline; for facts, run a second, more specific query and require 2+ agreeing outlets.
- **Fonts:** write `font-family:"Serif"` with quotes. Unquoted `Serif` is the generic CSS keyword and renders Times, not Instrument Serif.

## Making one carousel (used by helpers; the lead does the git and Instahook steps)
The steps below describe one carousel end to end. In the batch runs, helpers do steps 4–7 and the lead does steps 1–3 and 8–13, scheduling with `publish_at` instead of publishing now.

1. Today's IST date and slot. Idempotency key: `<verse|homingo|hackdays|surgelabs>-c-YYYY-MM-DD-<slot>`.
2. `list_posts` (limit 30). If this key is already PUBLISHED, stop. Note everything posted recently on the account (including the owner's own reels and posts) so you don't repeat topics.
3. (Metrics: weekly review only.)
4. Use the lead's trend hit if it was given one. Then decide category, topic, hook archetype, format and whether this is an experiment (LEARNING.md "decide").
5. Research: web search; confirm every fact as the account playbook requires. Write the payoff sentence.
6. Write 6 hooks, score the best 3, pick one that clears the gate (CAROUSEL.md). Write all slides; run the swipe test.
7. Design the deck: `posts/<folder>/YYYY-MM-DD-c<slot>-<slug>.html` (folders: verse, homingo, hackdays, surgelabs). Link `../../tools/fonts.css`. Render: `node tools/carousel.js <deck.html>`. Fix every WARN, look at the contact sheet and at slides 1, 2 and the payoff at full size; check spelling, facts, contrast, clipping. Re-render until it is right.
8. `git add` the deck and its JPEGs, commit, `git pull --rebase`, push.
9. For each slide in order: `add_media_from_url` with `https://raw.githubusercontent.com/yusuf-khaan/hackdays-assets/main/<path>.jpg` (if it fails right after a push, wait a minute and retry, up to 3 times).
10. `create_post`: type `carousel`, media_ids in slide order, caption, alt_texts for every slide, theme `<category>: <topic>`, the key. Then `publish_post`. If PROCESSING, check `get_post` each minute for up to 5 minutes. If FAILED with "media not found", wait a minute and publish the same post once more. Never create a second post for the same key.
11. Append the data line (LEARNING.md "record") with an honest self_review, and a line to log.md: `- YYYY-MM-DD · <account> · c<slot> · <category>: <topic> · <hook archetype> · <permalink>`.
12. Fix the repo only if something broke. Commit, pull --rebase, push.
13. Send the owner a short message: permalink, category and topic, the hook, whether it was a trend or experiment post, any repo improvement, and anything that failed.

## Making a story (all four accounts)
- Story 1 is made in the morning batch, story 2 in the evening run; slots and keys are in the tables above.
- Skip a story whose key is already PUBLISHED.
- What to post: "Stories" in each account playbook. A strong trend (TRENDS.md) can be a story too. Stories complement that day's carousels (tease them, add a fact, ask a question); never repeat them.
- Design 1080×1920: `posts/<folder>/YYYY-MM-DD-story-<slug>.html` (or `story2`), render with `node tools/render.js <html> <same-name>.jpg 1080 1920`. Keep the top 250px and bottom 300px free of text (nothing below y=1620). Put a headline and its sub-line in ONE element (sub-line as a `display:block` span), never two absolutely positioned blocks: a longer headline then overlaps the sub-line and no tool warns (hit three times on 11 Oct). Instagram's API can't add stickers, so put calls to action in the image ("Link in bio", the site).
- Even a single story frame should hook: open a question or tease the carousel ("Swipe through today's post: #3 surprised us").
- Push, `add_media_from_url`, `create_post` (type `story`, caption `""`, alt text, theme, key, `publish_at` = its slot). If a story ever has to go out immediately instead: create it without `publish_at`, wait about 60 seconds, `publish_post`; on "media not found", wait a minute and publish the same post once more.
- Record a `"kind":"story"` data line and a log.md line.

## Facts gate (owner, 2026-10-11, after a wrong prize claim went out on 9-10 Oct)
- The **only** source of facts is the account playbook's Facts section (plus web-verified outside facts). Never copy a claim, number or reward from an older post, deck, caption or data line: old posts can be out of date. Three posts on 9-10 Oct said "prize pool for the top 3" after the rule had become "₹5,000 to the winner only".
- `tools/carousel.js` and `tools/render.js` now print `CLAIM` warnings for wording listed in `playbook/retired-claims.json`. A CLAIM warning blocks scheduling like any WARN.
- Before every `create_post`, the lead runs the caption through the check: `echo "<caption>" | node tools/claims.js -`. It must print `OK: no retired claims`.
- Whenever the owner corrects a fact, add the old wording to `playbook/retired-claims.json` (pattern, why, instead) in the same run, so it can never come back.

## Never
- Invent facts, prize amounts, numbers, sponsors, winners, mentor names, clients, results, quotes, listings, prices, reviews or testimonials.
- Post a single-image feed post. Feed = carousel on @homingo._, @homingo.hackdays and @surgelabs_.
- Create any feed post (carousel, single image or reel) on @homingo.verse. Its reels come from the owner's laptop; cloud runs post only verse stories.
- Repeat the same topic on an account within 14 days, or the same category and format two runs in a row.
- Publish twice, retry a PUBLISHED post, or change an idempotency key to force a duplicate.
- Post one account's content on another account.
- Edit FEEDBACK.md, any playbook's Facts or Never sections, or published files and data lines (except filling metrics).
