# Learnings: @homingo._

Read on every run; the weekly review rewrites it. Keep it under about 120 lines. Evidence lives in data/homingo._.jsonl (cloud posts) and list_posts (the owner's reels). Last rewrite: weekly review 2026-W44 (1 Nov).

## State of the evidence (2026-W44)
- Cloud output is stories only since 15 Oct (log: "carousels discontinued by owner"; FEEDBACK.md and RUN.md still say 2 carousels a day; asked in W42 and W43, no answer yet).
- Stories 25-31 Oct, read at ~20 h (12): reach 15-22, median 17; views 16-22. 0 likes, replies or shares again. Best: "close to home" (real Home screen, budget and distance filter) 22, semester books (object) 20, download nudge 19.
- Five weeks of stories sit in a 12-28 band whatever the topic, screen, hook or slot. Reach looks capped by how many followers open stories; copy is not moving it.
- Equal-age slot test (first fair week): story 1 median 17, story 2 median 17. No slot effect.
- Not live: 31 Oct story 2 (Diwali "eight days to go") FAILED and was rightly not retried (date-bound claim).
- Owner's reels: none since 20 Oct. Last readings: iPad mini Rs 26,000 120, 1BHK Aliganj Rs 9,013 104, study tables 74, Dell 68, iPhone 7 Plus 31. Yamaha reel still unreadable.

## Proven (do more)
_Nothing proven from cloud data._
- Leading signal from the owner's reels (8+ reels, W42-W43): a real listing with its price in the first line; rentals and electronics beat small furniture and old phones. Stories may use a price only on a real screen from brand/homingo-app/ or a live listing the owner names.

## Avoid
- (Owner, 2026-10-11) Explainer, how-to and checklist posts. Advertise Homingo like an agency: storyline from unused goods to selling with one tap.
- (Owner, 2026-10-11) Dark backgrounds and orange. Blue and white only (#F5F6FA / white ground, #2563EB, #111827 text).
- (Owner, 2026-10-11) The Chats screen anywhere. Real app UI only (Home, Listing, My Ads, Search).
- Invented listings or prices; a price appears only on a real screen.
- "Search Homingo" in captions (claims.js flags it). Write "On Homingo, search…".
- Sale promises ("sell here", "sell fast"). Listing is free; a sale is never promised.
- Re-running one question frame on consecutive days ("Keep it, or sell it?" 20 and 22 Oct).
- Date-bound countdown copy ("eight days to Diwali") scheduled for the evening slot: if it fails it cannot be retried the next day. Put dated frames in story 1 (repair and evening runs can still catch it the same day).
- Empty story halves; text over drawings near the edges (check by eye).

## Experiments closed (2026-W44)
- Real-screen story vs object story (run three weeks): real screens 16, 17, 17, 22 (median 17); object stories 17, 18, 20 (median 18). No difference. Closed; both stay in the rotation, choose by topic.
- Story 1 vs story 2 at equal age: 17 vs 17. No difference. Closed; keep the owner's early slot.
- Diwali run-up frames: only one ran (31 Oct) and it FAILED. Carried into next week with the date-bound rule above.
- Sonnet story helper: 14 stories this week, 0 sent back, no owner complaint. Keep Sonnet.

## Next week's experiments (stories, read at ~20 h; judge by views as well as reach)
1. Motion story: 2 story 2s as a 6-10 s silent MP4 (tools/reel.js, one or two scenes, story ≤ 60 s and ≤ 100 MB) vs still stories. Hypothesis: motion holds more viewers through the tray (views up). Tag `"experiment": "motion story"`.
2. Diwali week in story 1 only (2-7 Nov): "clear one corner" frames, one object a day, true on the day they go out. Hypothesis: a dated festival hook beats evergreen copy.
3. Price-first frame on a real Listing screen (only listings visible in brand/homingo-app/) vs object story. Hypothesis: the reel signal (price first) shows up in views even if reach is capped.

## Owed
- None (Museum Exhibit 03 dropped after 28 Oct as planned).

## Backlog (verify any fact; every claim must be true of the app)
- Let it go, Diwali: room-by-room "clear one corner" (kitchen, loft, study table, balcony), 2-7 Nov.
- Let it go: "Your heater has one more winter in it. Someone else's." (November)
- Let it go: "The cycle you rode once." (last 17 Oct; ok now)
- Let it go: "Wedding season: the lehenga worn once." (verify season framing; no sale promise)
- Find it here: rentals under Rs 10,000 a month, on the real Listing screen.
- Find it here: winter finds near you: heater, quilt, geyser (search on Homingo).
- Find it here: "Moving to Lucknow in December? Bed, desk, cooler from local sellers."
- The app: "Three taps to list" on the real My Ads screen.
- The app: Search screen: type what you need, see what's near.
- Lucknow: "Lucknow shares: tehzeeb, chai, and now your old cycle."
- Lucknow: winter mornings in Lucknow, the first-fog list (what people need).

## Notes from runs
- WebFetch and most direct fetches are blocked; WebSearch gives titles only. Keep outside claims to well-known facts with several matching titles.

## Changelog
- 2026-10-10: file created with the carousel system.
- 2026-10-11 (owner): blue-and-white rule; real app UI; campaign ads instead of explainers.
- 2026-W41 review: overlap trap became a WARN (tools/lint.js).
- 2026-W42 review: carousel metrics filled; stories measured by the evening run; `stats.js` reach fallback.
- 2026-W43 review: story 1 re-read at ~20 h so slots compare fairly.
- 2026-W44 review: equal-age slot test and real-screen test closed (no difference); `stats.js` now compares only ≥18 h story readings and shows views and story experiments; motion-story experiment opened.
