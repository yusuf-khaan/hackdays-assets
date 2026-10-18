# Learnings: @surgelabs_

Read on every run; the weekly review rewrites it. Keep it under about 120 lines. Evidence lives in data/surgelabs_.jsonl (cloud posts) and list_posts (the owner's reels). Last rewrite: weekly review 2026-W42 (18 Oct).

## State of the evidence (2026-W42)
- Since 15 Oct the cloud runs make only stories here; the feed is the owner's reels (no cloud carousel after 14 Oct). Raised with the owner: RUN.md still says 2 carousels a day.
- Cloud carousels, 11-14 Oct (8, measured 18 Oct 23:10): reach 4-10, median 6; 0-2 likes; **0 saves and 0 shares on all 8.** Best: the AI-deletes-the-failing-test humour saga (10). Lowest: Air Canada chatbot case and lab-vs-field speed score (4 each).
- Owner's reels (latest stored readings): a clear winner format. "JavaScript just sorted 1000 before 99" 1,956 reach, 5 saves, 2 shares, 3 comments; "One NULL made this query return zero rows" 908; indexes 375 (4 saves); 0.1 + 0.2 355; await in a loop 332; idempotency 315; race on stock 129 with 4 shares. Generic explainers (eval file, p99, timeouts, OFFSET) sit at 109-174.
- Pattern in the reels: a short code gotcha whose hook is a concrete wrong output ("1000 before 99", "zero rows", "charged twice") beats a concept explainer by 2-10×.
- Stories: 18 Oct story 1 (observability in three lines) reach 8 at 16 h; story 2 (problem to build) 0 at 3.5 h. From now on the evening run records every story (RUN.md "Story metrics").
- The three 5 Oct test posts ("fsfds", "njknk", "abfffd…") are deleted on Instagram; ignore them.

## Proven (do more)
_Nothing proven by the rule from cloud data (3+ posts beating the median): carousel reach sat at 4-10._
- Leading signal from the owner's reels, strong enough to steer stories: the "concrete wrong output" gotcha (JS sort, NULL in NOT IN, float money, await in a loop, idempotency). 6 of the account's 7 best reels follow it.

## Avoid
- Middle slides or story halves with empty lower thirds and text-only beats. One bigger visual (terminal, diagram, calendar strip).
- Emoji glyphs in slide or story text (headless Chromium). Caption only.
- A story whose sub-line gives the answer straight away (16 Oct self-review): hold the answer for the next frame or the reel.
- Invented clients, numbers or results; label scenarios "illustrative".
- Topics a reel covered in the last 14 days (check list_posts): sort, NULL/NOT IN, Postgres case-sensitive UNIQUE, Date months from 0, parseInt, JSON.parse 2^53, float money, mutable default, await in a loop, OFFSET, timeout, stock race, retries/jitter, p99, indexes, idempotency, N+1, eval file.

## Experiments closed (2026-W42)
- `before-after` (clinic front desk, 6) vs `number-twist` news lens (Deno, 6): no difference. Closed.
- Humour saga punchline position: 11 Oct (punchline second-to-last, 10) vs 13 Oct (6). One each; not proven. Closed.
- Real-pipeline lab-notes stories (11 Oct retry story, 15 Oct idempotency): no story metrics then. Reopened below with measurement.
- News through a builder lens vs straight news cards: only the lens ran. Closed.
- Sonnet story helper: 16 stories, 0 sent back, no owner complaint. Keep Sonnet (evidence weak: 12 of 16 story lines had no self_review).

## Next week's experiments (open 2026-W42; stories, measured by reach at the evening run)
1. "What does this print?" quiz story (one line of code, the surprising output withheld for the reel or story 2) vs concept stories (observability, capabilities). Hypothesis: the reel winner works as a story.
2. Story that teases that day's reel (same topic, "answer in today's reel") vs standalone. Hypothesis: tie-ins reach more and send views to the reel.
3. Lab notes from this very pipeline (idempotency keys, a failed publish and its retry, the overlap lint) vs generic patterns. Hypothesis: real build stories earn more replies/shares.

## Owed (promised part 2s and follow-ups)
- None.

## Backlog (verify every fact before use)
- Gotcha quiz: `[10, 9, 1].sort()` vs `typeof null` vs `NaN === NaN` (pick ones no reel has used; check list_posts).
- Gotcha quiz: SQL `COUNT(col)` skips NULLs, `COUNT(*)` doesn't.
- Gotcha quiz: Python `is` vs `==` on small vs large ints (CPython detail: say so).
- Gotcha quiz: timezone: a date saved at midnight IST shows as the day before in UTC.
- Build: how an idempotency key stopped a double post in this pipeline (real, ours).
- Build: why your agent needs a job queue and a dead-letter list (deeper than the 10 Oct post).
- Build: verifying WhatsApp (Meta) webhooks: verify-token handshake + X-Hub-Signature-256 (after 27 Oct).
- Agents: what an AI agent could do for a clinic's front desk (illustrative; carousel ran 12 Oct, story angle only).
- Automation: a lead-reply flow from WhatsApp to a sheet, step by step (illustrative).
- Websites: what 3 seconds of loading costs a small shop (sourced numbers only).
- Humour: the 2 AM deploy, told as a timestamped chat.
- News lens: the next big dev-platform acquisition or pricing change, as "what to check in your stack".

## Changelog
- 2026-10-10: learnings file created with the carousel system.
- 2026-10-11: WebFetch fails in the sandbox; WebSearch with 2+ agreeing outlets instead. Emojis kept out of slides.
- 2026-W41 review: overlap and unquoted-Serif checks in the render tools (tools/lint.js); small-deck contact-sheet crash fixed.
- 2026-W42 review: carousel metrics filled (8); stories now measured by the evening run (RUN.md "Story metrics"); `stats.js` compares reach when no post has a save or share; reel-topic list added to Avoid so stories don't repeat them.
