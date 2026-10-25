# Learnings: @homingo._

Read on every run; the weekly review rewrites it. Keep it under about 120 lines. Evidence lives in data/homingo._.jsonl (cloud posts) and list_posts (the owner's reels). Last rewrite: weekly review 2026-W43 (25 Oct).

## State of the evidence (2026-W43)
- Cloud output is stories only since 15 Oct (log says "carousels discontinued by owner"; FEEDBACK.md and RUN.md still say 2 carousels a day; raised with the owner again).
- Stories, 18-23 Oct (10 measured): reach 12-28, median 16; 0 likes, replies or shares on all. Best: "1K+ listings. Room for one more." 28 and "Sold it? Say so." (My Ads screen) 22, both story 2s read at ~21 h.
- Slot comparison is confounded: story 1s were read at ~9 h, story 2s at ~21 h (median 13 vs 17). From W43 the morning batch re-reads story 1 at ~20 h (RUN.md "Story metrics"), so next week compares like with like.
- Lost readings: 19 Oct s1 (published 9 h late, read at 0), 23 Oct s2 and 24 Oct s1 (the 24 Oct evening run did not run). 24 Oct story 2 was never made.
- Owner's reels (real listing + price): iPad mini Rs 26,000 120, furnished 1BHK Aliganj Rs 9,013 104 (1 share), study tables from Rs 3,200 74, Dell Rs 16,000 68, iPhone 7 Plus Rs 8,000 31. Median ~74 (W42 ~96). No reel since 20 Oct (two reels cancelled 21 Oct). Yamaha Fazer reel (18 Oct) still unreadable on Instagram.
- Cloud carousels 11-14 Oct: reach 11-23, 0 saves/shares (closed W42).

## Proven (do more)
_Nothing proven from cloud data: stories sit in a tight 12-28 band whatever the topic or hook._
- Leading signal from the owner's reels (8+ reels over two weeks): a real listing with its price in the first line. Rentals and electronics (iPad, 1BHK, Alto) beat small furniture and old phones. Stories can borrow it only with a real screen from brand/homingo-app/ or a live listing the owner names.

## Avoid
- (Owner, 2026-10-11) Explainer, how-to and checklist posts. Advertise Homingo like an agency: storyline from unused goods to selling with one tap.
- (Owner, 2026-10-11) Dark backgrounds and orange. Blue and white only (#F5F6FA / white ground, #2563EB, #111827 text).
- (Owner, 2026-10-11) The Chats screen anywhere. Real app UI only (Home, Listing, My Ads, Search).
- Invented listings or prices; a price appears only on a real screen.
- "Search Homingo" in captions (claims.js flags it). Write "On Homingo, search…".
- Sale promises ("sell here", "sell fast"): 18 Oct copy was fixed to "List your unused things here". Listing is free; a sale is never promised.
- Re-running the same question frame: "Keep it, or sell it?" ran 20 and 22 Oct (18 then 13). Vary the frame.
- Empty story halves; text over drawings near the edges (check by eye).

## Experiments closed (2026-W43)
- Real-listing story vs object story: object stories 13-18 (n=4), real-screen stories 12-22 (n=4); the two real-listing-with-price stories (24, 25 Oct) were never measured. No difference shown. Carried over once more, now with same-age readings.
- Story 1 vs story 2 slot: 13 vs 17, but read at 9 h vs 21 h. Not a fair test; reopened below.
- Tie-in story pointing at the day's reel: did not run (no reel after 20 Oct). Dropped until reels return.
- Sonnet story helper: 13 stories, 1 sent back (19 Oct study table, remade on Opus), no owner complaint. Keep Sonnet.

## Next week's experiments (stories, judged by reach read at ~20 h)
1. Real listing + price story (real Listing or Home screen with the price shown) vs "Let it go" object story. Tag both. Hypothesis: the reel signal (price first) lifts story reach.
2. Story 1 (08:22) vs story 2 (20:22) at equal age. Hypothesis: evening reaches more. No slot change; owner rule keeps story 1 early.
3. Diwali run-up (8 Nov): one "clear one thing" frame per day from 1 Nov vs ordinary stories. Hypothesis: a dated festival hook beats evergreen copy.

## Owed
- Museum Exhibit 03 (the spare mattress): drop after 28 Oct if not made as a story.

## Backlog (verify any fact; every claim must be true of the app)
- Find it here: rentals under Rs 10,000 a month, on the real Listing screen (best reel topic was a rental).
- Find it here: "Your first room in Lucknow": bed, desk, cooler from local sellers.
- Let it go: Diwali safai: "Clean the house. List what you find." (25 Oct used "Dust it off. Don't dump it": next angle is a room-by-room frame.)
- Let it go: "Upgraded your phone? The old one has a second life."
- Let it go: "Your heater has one more winter in it. Someone else's." (November)
- Let it go: "Semester over. Your books aren't." (books last 14 Oct; ok after 28 Oct)
- Let it go: "The cycle you rode once." (last 17 Oct; ok after 31 Oct)
- The app: "Three taps to list" on the real My Ads screen.
- The app: Listing screen product hero: Chat with seller / Call buttons (never the Chats screen).
- Lucknow: Diwali week countdown frames, 1-8 Nov, one object to clear per day.
- Lucknow: "Lucknow shares: tehzeeb, chai, and now your old cycle."

## Notes from runs
- WebFetch and most direct fetches are blocked; WebSearch gives titles only. Keep outside claims to well-known facts with several matching titles.

## Changelog
- 2026-10-10: file created with the carousel system.
- 2026-10-11 (owner): blue-and-white rule; real app UI; campaign ads instead of explainers.
- 2026-W41 review: overlap trap became a WARN (tools/lint.js).
- 2026-W42 review: carousel metrics filled; stories measured by the evening run; `stats.js` reach fallback.
- 2026-W43 review: story experiments judged (no difference yet); story 1 now re-read at ~20 h by the morning batch so slots compare fairly; backlog refreshed.
