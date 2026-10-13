# Learnings: @homingo._

Read on every run; the weekly review rewrites it. Keep it under about 120 lines. Evidence lives in data/homingo._.jsonl. Last rewrite: weekly review 2026-W41 (11 Oct).

## State of the evidence (2026-W41)
- No post is 48 h old yet (the system started 11 Oct), so no `metrics` are filled and nothing is proven or ruled out by numbers.
- Early snapshot, NOT a metric (11 Oct, 23:09 IST, posts 4-7 h old): carousels reached 5-12 accounts (bike checks 12, which-ad 8, app overview 5); the reels (not made by the cloud runs) reached 66-117 (finding reel 66 after 3 h, list-free reel 117). Reels out-reach carousels here by roughly 10×. Same pattern on all four accounts; raised with the owner.
- Two @homingo._ reels on 10-11 Oct (74eeeb16 "PG or room in Lucknow") are no longer readable on Instagram (probably deleted by the owner).

## Proven (do more)
_Nothing proven yet: a pattern needs at least 3 posts beating the account median. Until metrics exist, follow homingo.md "Campaign lines" and CAROUSEL.md._

## Avoid
- (Owner, 2026-10-11) Explainer, how-to and checklist carousels. The feed advertises Homingo like a marketing agency: Pinterest-level campaign creative with a storyline (unused goods → sell on Homingo with one tap).
- (Owner, 2026-10-11) Dark backgrounds and orange. Blue and white only, like the app (#F5F6FA / white ground, #2563EB, #111827 text). The 11 Oct bike carousel and red-flag story went out in the old dark/orange style: don't reuse them as references.
- (Owner, 2026-10-11) The Chats screen in any post. Reference the real app UI from brand/homingo-app/ (Home, Listing, My Ads, Search).
- Repeating the reels' generic app overview (10-11 Oct). A campaign carousel sells one feeling or one object, not the whole app.
- Middle slides as text lists with no visual (self-reviews, 2 of 3 carousels). One hero visual per slide.
- Two absolutely positioned text blocks for a headline and its sub-line (overlapped three times on 11 Oct). `render.js`/`carousel.js` now WARN on it.

## Experiments running
- From 12 Oct: stories by a Sonnet helper, carousels on Opus. Next review: compare `sent_back` and self-reviews of Sonnet stories with the 11 Oct Opus stories; if they fall short, move stories back to Opus.
- From 12 Oct: campaign-ad format (reference deck c1 "Your room is full of money", hook 25). Measure it against the 11 Oct explainers once both are 48 h+ old: reach first, then saves+shares. A campaign deck should still beat the 24/30 hook gate.
- Carried over, unmeasured: interactive A-vs-B opener ("Which ad do you tap?", 11 Oct c2). Verdict waits for its 48 h metrics (fill on 13 Oct+).
- Closed: `mistake-warning` vs `countdown-list` hooks and save vs share CTA (explainer-only tests; explainers are retired by the owner).

## Next week's experiments (open 2026-W42)
1. Object-hero vs moodboard-collage opener: alternate campaign carousels between a single drawn object on slide 1 ("The treadmill is now a clothes stand") and a pin-board collage. Hypothesis: one object reads faster in the feed and lifts reach.
2. A recurring campaign series ("Exhibits": one forgotten object per post, same frame and numbering). Hypothesis: a series lifts follows and saves vs one-off ads.
3. CTA "Send this to the friend with the treadmill" (share) vs "List it free" (conversion) on the last slide. Record which in `cta`.

## Owed (promised part 2s and follow-ups)
- "Exhibits" part 2 if c1 "Your room is full of money" teases a series (check its last slide).
- "The Homingo Museum" Exhibit 02 (13 Oct c1, treadmill, last slide says "The museum has more exhibits. Next one soon."). Slide 3 already named the next exhibits: the guitar (02), last sem's books (03), the cycle (04), the spare mattress (05). Note: the guitar was a 12 Oct story, so pick books or the mattress for 02 within ~1 week, same frame (Mono "The Homingo Museum · Exhibit 0N" label, pinned card, museum plaque).

- "The Homingo Museum" Exhibit 03: the spare mattress (14 Oct c1 Exhibit 02 = last sem's books; its last slide says "Next exhibit: the spare mattress."). Post within ~1 week, same frame.

## Backlog (campaign ideas; verify any fact before use, every claim must be true of the app)
- Let it go: "Moving out? Don't carry it." Hostel/PG move-out; boxes that never get unpacked.
- Let it go: "The treadmill is now a clothes stand." Exhibits: treadmill, exam books, the second mattress.
- Let it go: "Upgraded your phone? Your old one has a second life waiting." (time with a phone launch).
- Let it go: Diwali safai (around 8 Nov 2026, verify date): "Clean the house. Fill the wallet."
- Let it go: "Semester over. Your books aren't." Exam books to the next batch.
- Let it go: "The cycle you rode once." Gym/fitness gear bought in January.
- Find it here: "Furnish a whole room. Buy nothing new." Room built object by object from listings.
- Find it here: "First job in Lucknow, first room." Bed, desk, cooler from local sellers.
- The app: product hero "Chat or Call: straight to the person who listed it" (Listing screen, never Chats).
- The app: "Three taps to list" on the real My Ads screen.
- Lucknow: "Lucknow shares. Tehzeeb, chai, and now your old cycle."
- Winter: "Your heater has one more winter in it. Someone else's." (late Oct/Nov).

## Notes from runs
- 2026-10-13 batch: first object-hero opener (c1 treadmill, W42 experiment 1) and first Lucknow-line campaign ("Pehle aap", c2). Both with conversion CTA. WebFetch and curl to most sites are blocked (proxy 403), so web research gives titles only; keep outside claims to well-known cultural facts with several matching titles.
- 2026-10-14 batch: c1 Museum Exhibit 02 (books) with the first share CTA (W42 #3), product shot on my-ads.jpg with Sell circled; c2 first "Find it here" campaign (first room after a job offer) on the real search-rent.jpg. claims.js flags "Search Homingo" in captions (unrelated App Store app): write "On Homingo, search…" instead.
- lint.js does not flag text sitting on top of an SVG drawing (slide-1 swipe cue overlapped the doorstep in round 1); check swipe cues by eye.

## Changelog
- 2026-10-10: learnings file created with the carousel system.
- 2026-10-11: first decks (bike papers-first, which-ad-would-you-tap, red-flag deposit story). Blue #2563EB from the app theme.
- 2026-10-11 (owner): blue-and-white rule; real app UI; switch from explainers to campaign ads. Reference deck 2026-10-12 c1.
- 2026-W41 review: overlap trap logged here is now a WARN in `tools/carousel.js` and `tools/render.js` (tools/lint.js); carousels with 5 or fewer slides no longer crash the contact sheet. Old how-to backlog and explainer experiments retired.
