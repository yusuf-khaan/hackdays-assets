# Learnings: @surgelabs_

Read on every run; the weekly review rewrites it. Keep it under about 120 lines. Evidence lives in data/surgelabs_.jsonl (cloud posts) and list_posts (the owner's reels). Last rewrite: weekly review 2026-W43 (25 Oct).

## State of the evidence (2026-W43)
- Cloud output is stories only since 15 Oct (log says "carousels discontinued by owner"; FEEDBACK.md and RUN.md still say 2 carousels a day; raised with the owner again).
- Stories, 18-23 Oct (11 measured): reach 0-9, median 6; 0 replies or shares. Every story 1 read at ~10 h reads 0 (5 of 6); every story 2 read at ~22 h reads 6-9. Partly age, partly the morning slot: from W43 story 1 is re-read at ~20 h to separate the two.
- Lost readings: 23 Oct s2, 24 Oct s1; 24 Oct story 2 never made.
- Owner's reels, the account's real reach (stored readings, 1-7 days old):
  - Wrong NUMBER you can check: Postgres let one email sign up twice 2,003 (11 saves, 3 shares), JS month 10 is November 1,526, JSON.parse changed an ID by one 1,402 (4 saves), Python round(2.5) is 2 1,039; earlier JS sort 1000 before 99 1,956. Exception: parseInt(0.0000005) 234.
  - Wrong BEHAVIOUR: JWT readable payload 438, LEFT JOIN returns 1 of 3 239, lambdas all return 2 193, one write changes every row 175, .env still committed 162, token expired on arrival 154, DEBUG=false still on 138, rstrip eats logs.csv 129.
- Reels in the 08:29 slot did not beat the 19:29 slot this week (both have 1,000+ and sub-200 posts).

## Proven (do more)
- From the owner's reels (all 5 reels above 1,000; parseInt 234 the one numeric miss): the hook shows a concrete wrong output the viewer can check in one glance, best when it is a number or a duplicate (1000 before 99, month 10 = November, ID off by one, 2.5 → 2, one email twice). Stories borrow it as a quiz frame.
_Cloud stories: nothing proven (reach 0-9)._

## Avoid
- (Watch, not yet a rule) Concept stories with no concrete output: circuit breaker 0, polling vs webhooks 0, 401/403 0. All three were story 1s read at ~10 h, so the slot may explain it; decide at W44.
- Empty lower thirds and text-only beats; emoji glyphs in images (headless Chromium).
- A sub-line that gives the answer straight away: hold it for the next frame or the reel.
- Invented clients, numbers or results; label scenarios "illustrative".
- Topics a reel covered in the last 14 days (check list_posts): sort, NULL/NOT IN, Postgres case-sensitive UNIQUE, Date months, parseInt, JSON.parse 2^53, round(2.5), lambdas late binding, [[0]*3]*3, rstrip, DEBUG=false, JWT payload, LEFT JOIN + WHERE, utcnow token, .env in .gitignore, float money, mutable default, await in a loop, idempotency, N+1, indexes.

## Experiments closed (2026-W43)
- Gotcha quiz story vs concept story: typeof null 7 (s2), 401/403 quiz 0 (s1), concept stories 0-9. Leaning quiz but n=2 and slot-confounded. Carried over with same-age readings.
- Story teasing the day's reel vs standalone: DEBUG tease 7 (s2), LEFT JOIN tease 0 (s1), 24 Oct tease unmeasured. No difference beyond slot. Closed.
- Lab notes from this pipeline vs generic patterns: no lab-notes story ran. Dropped; back to backlog.
- Sonnet story helper: 13 stories, 0 sent back, no owner complaint. Keep Sonnet.

## Next week's experiments (stories, reach read at ~20 h)
1. Wrong-number quiz story ("What does this print?" with a numeric output) vs behaviour or concept story. Hypothesis: the reel winner shape lifts stories too.
2. Story 1 vs story 2 at equal age. Hypothesis: the 0s on story 1 were mostly early readings.
3. "Reply with your answer" in the frame on quiz stories (Instagram replies count as interactions). Hypothesis: a quiz earns the first replies this account has had.

## Owed
- None.

## Backlog (verify every fact; check list_posts so no reel has used it)
- Quiz: `[10, 9, 1].sort()` default sort order (sort reel ran before 14 Oct; ok as a story).
- Quiz: `0.1 + 0.2 === 0.3` is false.
- Quiz: SQL `COUNT(col)` skips NULLs, `COUNT(*)` doesn't.
- Quiz: `'b' + 'a' + +'a' + 'a'` → "baNaNa" (JS unary plus).
- Quiz: Python `int('٣')` → 3 (Unicode digits; verify).
- Quiz: a date saved at midnight IST shows as the day before in UTC.
- Quiz: `Math.max()` is -Infinity.
- Build: how an idempotency key stopped a double post in this pipeline (real, ours).
- Build: verifying WhatsApp (Meta) webhooks: verify-token + X-Hub-Signature-256.
- Automation: WhatsApp lead to a sheet, step by step (illustrative).
- Websites: what slow loading costs a small shop (sourced numbers only).

## Changelog
- 2026-10-10: file created with the carousel system.
- 2026-10-11: WebFetch fails; 2+ agreeing outlets instead. No emojis in images.
- 2026-W41 review: overlap and Serif WARNs (tools/lint.js).
- 2026-W42 review: carousel metrics filled; stories measured by the evening run; reel topics added to Avoid.
- 2026-W43 review: wrong-number gotcha marked proven from the owner's reels; concept stories to Avoid; story 1 re-read at ~20 h.
