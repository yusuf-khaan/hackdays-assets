# Learnings: @homingo.hackdays

Read on every run; the weekly review rewrites it. Keep it under about 120 lines. Evidence lives in data/homingo.hackdays.jsonl (cloud posts) and list_posts (the owner's reels and partner posts). Last rewrite: weekly review 2026-W44 (1 Nov).

## State of the evidence (2026-W44)
- Cloud output is stories only since 15 Oct (log: "carousels discontinued by owner"; FEEDBACK.md and RUN.md still say 2 carousels a day; asked W42, W43).
- **Account outage 27-29 Oct:** @homingo.hackdays was missing from Instahook list_accounts; 6 stories (27-29 Oct, both slots) were never made. Back on 30 Oct (token now valid to 27 Dec).
- Stories 26 Oct-1 Nov (8 made, 6 measured): **reach 0 on every one**, views 0-1. Total since 18 Oct: reach 0 on all 19 measured stories. Judge by views; even views barely move.
- Owner's posts: no reel since 25 Oct (none created). Partner carousels 29 Oct: n8n Cloud Pro licences reach 5 (3 likes), .xyz domains reach 3. Last week's partner post (Crustdata) reached 89, the owner's reels 67-121. The whole account's reach fell this week, not just stories.
- 9 of 14 owner reels from 17-24 Oct were already unreadable on Instagram ("may have been deleted"), raised in W43.

## Proven (do more)
_Nothing proven: every measured story reads 0 reach._
- Leading signal from the owner's posts (W42-W43): concrete things you GET (credits, perks, "walk away with 3 things") out-reach logistics (dates, team size).

## Avoid
- (Owner, 2026-10-11) "Live demo" as a requirement. Submission = public GitHub repo + short demo video; live link and deck optional.
- Claims outside hackdays.md Facts. Not in Facts yet (asked W41-W43): "AI tools allowed", "students from 6 colleges", Crustdata $1,500 credits, Keploy badges, and now the owner's 29 Oct partner offers: n8n (500 one-month n8n Cloud Pro licences, one per team) and .xyz (350 free first-year domains). Use them only after the owner adds them to Facts.
- Unquoted `font-family:Serif` (renders Times).
- Two text tables side by side with no visual change; small evenly spaced chat bubbles.
- Formats already used as single posts: terminal boot, character-select, timeline/roadmap, myth vs fact, patch notes, git log (26 Oct story too).

## Experiments closed (2026-W44)
- Partner/perk story vs generic tip: no partner story could run (offers not in Facts). Perks story 31 Oct views 1, tips/culture views 0-1. No signal. Closed until Facts change.
- Story 1 vs story 2 at equal age: views 1 vs 0-1. No difference. Closed.
- Deadline frames: 21 days (25 Oct) views 1, 14 days (1 Nov) views 1 at 10 h. No lift so far; finish the set (7 and 1 days) since registration closes 15 Nov.
- Sonnet story helper: 8 stories, 0 sent back. Keep Sonnet.

## Next week's experiments (judged by views at ~20 h)
1. Deadline frames on fixed dates only, in story 1: "7 days left" on 8 Nov (also Diwali: say "Happy Diwali" and the deadline, nothing more) and "1 day left" on 14 Nov. Compare views with the weekday average.
2. Motion story: 2 story 2s as a 6-10 s silent MP4 (tools/reel.js) vs stills. Hypothesis: motion gets more views. Tag `"experiment": "motion story"`.
3. Partner story, only if the owner adds an offer to Facts this week; otherwise skip.

## Owed
- Ideas follow-up to the 11 Oct scoping post: one-loop Agent / Automation / LLM-app ideas, one idea per story frame.

## Backlog (verify every fact against hackdays.md Facts)
- What you get: ₹5,000 to the winner only; Recommendation Certificate for the top 3.
- What you get: internship/freelance opportunities with SurgeLabs; fast-track interview consideration.
- Tips: the last 10 seconds of your demo video (what a judge remembers).
- Tips: README in one scroll (ok from 1 Nov).
- Ideas: 5 agent projects you can scope in two weeks (problem, user, core loop, stretch).
- Ideas: automation for a college office: attendance, fee reminders.
- How it works: registration → team formation (until 18 Nov) → kick-off 21 Nov (timeline used 26 Oct; rest until 5 Nov).
- How it works: mentors online and async; a good 4-line ask (never name a mentor).
- Countdown: what to have ready before 15 Nov, 11:59 PM IST.
- Countdown: solo or a team of 2-4? Decide before 18 Nov.
- After 15 Nov: "Registration closed. Kick-off 21 Nov." frames (true only after it closes).
- Trend: a big model or agent launch told as "what you could build with it for Hack Days".

## Notes from runs
- Blur a withheld word (filter:blur ≥9px) instead of naming it. WebSearch returns titles only: use exact-phrase queries.

## Changelog
- 2026-10-10: file created with the carousel system.
- 2026-10-11: 'live demo' wording fixed; Serif and overlap traps found.
- 2026-W41 review: Serif and overlap WARNs (tools/lint.js).
- 2026-W42 review: carousel metrics filled; stories measured by the evening run.
- 2026-W43 review: stories judged by views; reel deletions raised with the owner.
- 2026-W44 review: 27-29 Oct account outage recorded; n8n and .xyz offers listed as not-in-Facts; `stats.js` shows views per story group; motion-story experiment opened.
