# Learnings: @surgelabs_

Read on every run; the weekly review rewrites it. Keep it under about 120 lines. Evidence lives in data/surgelabs_.jsonl (cloud posts) and list_posts (the owner's reels). Last rewrite: weekly review 2026-W44 (1 Nov).

## State of the evidence (2026-W44)
- Cloud output is stories only since 15 Oct (log: "carousels discontinued by owner"; FEEDBACK.md and RUN.md still say 2 carousels a day; asked W42, W43).
- **Instagram handle changed:** story permalinks since 28 Oct read `instagram.com/stories/homingolabs/…` (27 Oct and earlier: `surgelabs_`). Instahook still lists the account as `surgelabs_`; keep the data file name and keys. Raised with the owner; copy in images should not name the handle until he confirms.
- Stories 25 Oct-1 Nov, read at ~20 h (13): reach 0-7, median 5; views 4-7. 0 replies or shares, including the three quiz frames that asked "reply with your answer".
- New this week: 30 Oct s2 (humour) and 31 Oct s2 (baNaNa quiz) read **reach 0** at 22 h (views 4); 1 Nov s1 reach 0 at 10 h. Before 30 Oct every ~20 h reading was 5-7. Watch whether it follows the handle change.
- Equal-age slot test: story 1 median 5.5, story 2 median 5. No slot effect.
- Owner's reels: none since 24 Oct. **All 7 reels from 21-24 Oct are now unreadable** ("may have been deleted"): rstrip, [[0]*3]*3, JWT, DEBUG=false, LEFT JOIN, utcnow token, .env. Readable reels (17-20 Oct) kept their numbers: JS sort 1000 before 99 2,071 · Postgres email twice 2,003 (11 saves, 3 shares) · month 10 = November 1,526 · JSON.parse ID off by one 1,406 · NULL/NOT IN 1,071 · round(2.5) 1,041 · parseInt 235 · lambdas 196.

## Proven (do more)
- From the owner's reels (5 of 5 reels above 1,000; parseInt the one numeric miss): the hook shows a concrete wrong output the viewer can check in one glance, best a number or a duplicate (1000 before 99, month 10 = November, ID off by one, 2.5 → 2, one email twice). Stories borrow it as a quiz or explainer frame.
_Cloud stories: nothing proven (reach 0-7)._

## Avoid
- Concept stories with no concrete output (circuit breaker, polling vs webhooks): W43 watch item. With equal-age readings concept stories (zombie process 5, retries 6) match quizzes (5-7), so this is no longer a reach rule; keep it as a quality rule: every story shows one concrete output.
- "Reply with your answer" as the main CTA: 3 frames, 0 replies. Use it at most once a week.
- Empty lower thirds and text-only beats; emoji glyphs in images (headless Chromium).
- A sub-line that gives the answer straight away: hold it for the next frame or the reveal.
- Invented clients, numbers or results; label scenarios "illustrative".
- Topics a reel covered in the last 14 days (check list_posts): sort, NULL/NOT IN, Postgres case-sensitive UNIQUE, Date months, parseInt, JSON.parse 2^53, round(2.5), lambdas, [[0]*3]*3, rstrip, DEBUG=false, JWT payload, LEFT JOIN + WHERE, utcnow token, .env in .gitignore.
- Story topics used this fortnight: COUNT(*) vs COUNT(col), Math.max(), baNaNa, 0.1 + 0.2, Year 2038, zombie process, Meta webhook signature, 200 OK with GraphQL errors, retries + jitter, typeof null, NaN === NaN, map(parseInt).

## Experiments closed (2026-W44)
- Wrong-number quiz story vs concept/behaviour story: quizzes 7, 5, 0; wrong-number explainers 5; concept/pattern 5, 5, 6. No difference at story reach. Closed.
- "Reply with your answer" on quiz frames: 0 replies on 3. Closed (see Avoid).
- Story 1 vs story 2 at equal age: 5.5 vs 5. Closed.
- Quiz then evening answer reveal (29 Oct): 5 and 5. No lift. Closed.
- Sonnet story helper: 14 stories, 0 sent back. Keep Sonnet.

## Next week's experiments (stories, read at ~20 h; judge by views as well as reach)
1. Motion story: 2 story 2s as a 6-10 s silent MP4 (tools/reel.js) showing the wrong output appear, e.g. a terminal typing then printing the wrong number. Hypothesis: motion gets more views than stills. Tag `"experiment": "motion story"`.
2. Track the zero-reach readings: record the permalink handle on each new line's `self_review` only if it changes again; compare reach before and after 28 Oct in the W45 review.
3. Hack Days cross-promo story once (repo + demo video, registration closes 15 Nov) vs the usual frames. 30 Oct promo read 6, the account median; one more read decides whether cross-promo costs anything.

## Owed
- None.

## Backlog (verify every fact; check list_posts so no reel has used it)
- Quiz: `[10, 9, 1].sort()` default sort order (story ok; the reel used 1000/99).
- Quiz: Python `int('٣')` → 3 (Unicode digits; verify).
- Quiz: a date saved at midnight IST shows as the day before in UTC.
- Quiz: `new Date('2026-11-01')` vs `new Date('2026/11/01')` (UTC vs local; verify output in IST).
- Quiz: Python `0.1 * 3 == 0.3` is False (do not repeat 0.1 + 0.2 within 14 days).
- Quiz: `'10' > '9'` is false (string comparison).
- Build: how an idempotency key stopped a double post in this pipeline (real, ours).
- Build: WhatsApp verify-token handshake (the signature story ran 28 Oct; this is the GET side).
- Automation: WhatsApp lead to a sheet, step by step (illustrative).
- Websites: what slow loading costs a small shop (sourced numbers only).
- Pattern: outbox pattern (write once, publish reliably).

## Changelog
- 2026-10-10: file created with the carousel system.
- 2026-10-11: WebFetch fails; 2+ agreeing outlets instead. No emojis in images.
- 2026-W41 review: overlap and Serif WARNs (tools/lint.js).
- 2026-W42 review: carousel metrics filled; stories measured by the evening run; reel topics added to Avoid.
- 2026-W43 review: wrong-number gotcha marked proven from the owner's reels; story 1 re-read at ~20 h.
- 2026-W44 review: quiz, reply-prompt and slot experiments closed (no difference); handle change and 21-24 Oct reel removals recorded; `stats.js` story view; motion-story experiment opened.
