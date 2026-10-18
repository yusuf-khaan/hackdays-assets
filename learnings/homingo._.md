# Learnings: @homingo._

Read on every run; the weekly review rewrites it. Keep it under about 120 lines. Evidence lives in data/homingo._.jsonl (cloud posts) and list_posts (the owner's reels). Last rewrite: weekly review 2026-W42 (18 Oct).

## State of the evidence (2026-W42)
- Since 15 Oct the cloud runs make only stories here; the feed is the owner's reels (no cloud carousel after 14 Oct). Raised with the owner: RUN.md still says 2 carousels a day.
- Cloud carousels, 11-14 Oct (8, measured 18 Oct 23:09, 4-7 days old): reach 11-23, median 14; likes 2-6; **0 saves and 0 shares on all 8.** Best: bike checks 23 and which-ad 19 (the two 11 Oct explainers, first posts on the feed); campaign ads 11-15.
- Owner's reels (latest stored readings, 1-7 days old): median ~96 reach, 7× the carousels. Top: "furnish your room without buying anything new" 147 (1 save), real Alto listing 121, "list it free" 118, real iPad mini listing 112 (12 h), used-bike checks 106, sofa 96.
- Stories: Instagram only reports them while live (24 h). First reading: 18 Oct story 1 (Diwali, make room) reach 17 at 15 h; story 2 (1K+ listings) 9 at 3 h. From now on the evening run records every story (RUN.md "Story metrics").
- The 18 Oct 17:17 reel (Yamaha Fazer, 2c5bb764) is published in Instahook but unreadable on Instagram 2 h later; raised with the owner.

## Proven (do more)
_Nothing proven by the rule (3+ posts beating the median). Carousel reach sat in a tight 11-23 band whatever the hook, CTA or format, so no carousel pattern separates._
- Leading signal from the owner's reels (not cloud data): a real listing with its price in the first line (Alto Rs 2.95 lakh 121, iPad mini Rs 26,000 112, bed Rs 8,500 73). Stories can borrow it: real listing screen + price from brand/homingo-app/ or a live listing the owner names; never invent a listing or price.

## Avoid
- (Owner, 2026-10-11) Explainer, how-to and checklist carousels. The feed advertises Homingo like a marketing agency: campaign creative with a storyline (unused goods → sell on Homingo with one tap). Note: the two explainers out-reached the campaign ads (23, 19 vs 11-15), but they were also the first two posts; the owner's rule stands.
- (Owner, 2026-10-11) Dark backgrounds and orange. Blue and white only, like the app (#F5F6FA / white ground, #2563EB, #111827 text).
- (Owner, 2026-10-11) The Chats screen in any post. Reference the real app UI from brand/homingo-app/ (Home, Listing, My Ads, Search).
- Invented listings or prices. A price on a story must be on a real screen (the 17 Oct Rs 11,000 story used a real listing screen: keep doing that).
- "Search Homingo" in captions (claims.js flags it: an unrelated App Store app). Write "On Homingo, search…".
- Text over an SVG drawing near the swipe cue or story edges: lint.js doesn't catch it; check by eye.
- Middle slides or story halves left empty (most common self-review complaint, 5 of 8 carousels). One hero visual filling the frame.

## Experiments closed (2026-W42)
- Object-hero vs moodboard opener: object-hero (Museum 01, 02) reached 13 and 13, the same as everything else. No effect at this reach. Closed.
- "Exhibits" series: 2 parts, 13 each, 0 saves. No lift. Closed; Exhibit 03 (mattress) can run as a story.
- Share CTA vs "List it free": share 13 vs conversion median 13; 0 shares either way. Closed, no difference.
- A-vs-B "which ad do you tap" opener: 19, second-best carousel, but 1 post. Not proven.
- Sonnet story helper: 16 stories, 0 sent back, no owner complaint. Keep Sonnet. (Evidence weak: 12 of 16 story lines had no self_review.)

## Next week's experiments (open 2026-W42; stories, measured by reach at the evening run)
1. Real-listing story (real screen + price, like the best reels) vs "Let it go" object story. Hypothesis: a concrete price lifts story reach. Record `experiment` on both.
2. Story 1 (08:22) vs story 2 (20:22): which slot reaches more over the week. No change to slots; just compare.
3. A story that points at that day's reel ("New on the feed: …") vs a standalone story. Hypothesis: tie-in stories pull reel views and reach the same.

## Owed (promised part 2s and follow-ups)
- "The Homingo Museum" Exhibit 03: the spare mattress (Exhibit 02's last slide promised it). Carousels have stopped: make it a story frame in the same Museum style, or drop it after 28 Oct.

## Backlog (verify any fact before use; every claim must be true of the app)
- Let it go: "Moving out? Don't carry it." Hostel/PG move-out; boxes that never get unpacked.
- Let it go: Diwali safai (8 Nov 2026): "Clean the house. Fill the wallet." (18 Oct story used "make room": next angle is the cleaning itself.)
- Let it go: "Upgraded your phone? Your old one has a second life waiting." (time with a phone launch).
- Let it go: "Semester over. Your books aren't." (Museum 02 covered books on 14 Oct; wait until 28 Oct.)
- Let it go: "The cycle you rode once." (17 Oct story was the cycle; wait until 31 Oct.)
- Let it go: "Your heater has one more winter in it. Someone else's." (late Oct/Nov).
- Find it here: "Furnish a whole room. Buy nothing new." (the owner's best reel; a story version with real screens).
- Find it here: "First job in Lucknow, first room." Bed, desk, cooler from local sellers.
- The app: "Three taps to list" on the real My Ads screen.
- The app: Listing screen product hero: "Chat or Call: straight to the person who listed it" (never Chats).
- Lucknow: "Lucknow shares. Tehzeeb, chai, and now your old cycle."
- Lucknow: Diwali week countdown frames (1-8 Nov): one object to clear per day.

## Notes from runs
- WebFetch and curl to most sites are blocked (proxy 403); web research gives titles only. Keep outside claims to well-known cultural facts with several matching titles.

## Changelog
- 2026-10-10: learnings file created with the carousel system.
- 2026-10-11 (owner): blue-and-white rule; real app UI; switch from explainers to campaign ads.
- 2026-W41 review: overlap trap became a WARN (tools/lint.js); small-deck contact-sheet crash fixed.
- 2026-10-13/14: first object-hero opener, first Lucknow line, first share CTA, first "Find it here" campaign.
- 2026-W42 review: carousel metrics filled (8); stories now measured by the evening run (RUN.md "Story metrics"); `stats.js` compares reach when no post has a save or share; experiments closed, story experiments opened.
