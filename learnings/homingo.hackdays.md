# Learnings: @homingo.hackdays

Read on every run; the weekly review rewrites it. Keep it under about 120 lines. Evidence lives in data/homingo.hackdays.jsonl. Last rewrite: weekly review 2026-W41 (11 Oct).

## State of the evidence (2026-W41)
- No post is 48 h old yet (the system started 11 Oct), so no `metrics` are filled and nothing is proven or ruled out by numbers.
- Early snapshot, NOT a metric (11 Oct, 23:09 IST): the two cloud carousels reached 6 each after 6-7 h (scope 16 days, solo vs squad; 3 likes each). Reels reached far more: "3 AI agent ideas" 104 (10 Oct), "use AI" rule reel 12 after 2.5 h with 1 save. Reels out-reach carousels by roughly 10× on all four accounts; raised with the owner.
- Two "campuses on the board" carousels (952fe056 at 22:18, c2d8fc6d at 22:24, 11 Oct) went live 6 minutes apart with no data or log line: not made by the cloud runs. Their "students registered from 6 colleges" claim is not in hackdays.md Facts. Raised with the owner; don't build on that claim until it is in Facts.

## Proven (do more)
_Nothing proven yet: a pattern needs at least 3 posts beating the account median. Until metrics exist, lean on CAROUSEL.md and the phase calendar._

## Avoid
- (Owner, 2026-10-11) "Live demo" as a submission requirement. Submission = public GitHub repo + short demo video (required); live link and deck optional. The 11 Oct c1 had to be cancelled and remade for this.
- Claims outside hackdays.md Facts. "AI tools allowed" went out on 11 Oct c2 and in a reel but is not in Facts; until the owner adds it, don't repeat it (asked in the 2026-W41 review).
- Unquoted `font-family:Serif`: renders Times, not Instrument Serif. Write `font-family:"Serif"`. Since 2026-W41 the render tools WARN on it (older hackdays decks and stories still carry it: don't copy their CSS).
- Comparison slides that are two text tables with no visual change (11 Oct c2 self-review). Give each side its own visual.
- Formats already used as single posts (log.md): terminal boot screen, character-select, timeline/roadmap, myth vs fact, patch notes. Reuse them only as slides inside richer carousels.

## Experiments running
- From 12 Oct: stories by a Sonnet helper, carousels on Opus. Next review: compare `sent_back` and self-reviews with the 11 Oct Opus stories; if they fall short, move stories back to Opus.
- Carried over, unmeasured (fill metrics on 13 Oct+): `versus` hook + comment CTA (c2 solo vs squad) vs save-CTA tips post (c1 scope 16 days); one cursor-line `.rail` bleed as the swipe cue (c1).
- Closed without data: `you-in-it` vs `countdown-list`, and "scoped weekend plan vs stretch goals" ending: never run in week 1. The first is reopened below.

## Next week's experiments (open 2026-W42)
1. Registration-conversion phase starts 16 Oct: `you-in-it` hook ("You're a judge. You have 20 seconds.") vs `countdown-list` ("35 days, 5 things to do") on Countdown/How posts. Hypothesis: putting the viewer in a role drives more saves.
2. Ideas carousels that end with a 3-line scope (user / task / done) as a fill-in template slide. Hypothesis: a template slide earns saves.
3. Slide count: 6 vs 8 slides on tips posts. Hypothesis: 6 holds swipe-through better at this follower count.

## Owed (promised part 2s and follow-ups)
- Ideas follow-up to the 11 Oct scoping post: one-loop Agent / Automation / LLM-app ideas, each scoped with the 3-line scope.

## Backlog (verify every fact against hackdays.md Facts)
- Tips: what a judge sees in the first 20 seconds of your demo video.
- Tips: a README that gets your repo understood in one scroll (sections, GIF, run command).
- Ideas: 5 agent projects you can scope in two weeks (problem, user, core loop, stretch).
- Ideas: 3 automation ideas from a real college office (attendance, fee reminders, hostel requests).
- How it works: from registration to certificate, step by step (dates from Facts).
- How it works: the verifiable participation certificate (unique ID + QR) for everyone who submits.
- How it works: mentors are online and async; what a mentor review looks like (never name a mentor).
- Countdown: a week-by-week plan from today to kick-off on 21 Nov.
- Countdown: "15 Nov, 11:59 PM IST": what to have ready before registration closes.
- Rewards: ₹5,000 to the winner only, Recommendation Certificate for the top 3: what each means for a portfolio.
- Trend: a big model or agent launch told as "what you could build with it for Hack Days".

## Changelog
- 2026-10-10: learnings file created with the carousel system.
- 2026-10-11: decks c1/c2 quote "Serif"; c1 cancelled and remade for the 'live demo' wording; story 2 terminal checklist hit the headline/sub-line overlap trap.
- 2026-W41 review: the Serif and overlap traps are now WARNs in `tools/carousel.js` and `tools/render.js` (tools/lint.js); carousels with 5 or fewer slides no longer crash the contact sheet.
- 2026-10-13 batch: c1 tips README (6 slides, W42 #3 test), c2 how mentors-async '4-line ask'. Blur a withheld word on slide 1 (filter:blur ≥9px) instead of naming it; WebSearch returns titles/URLs only, so exact-phrase queries are the way to confirm a quote.
