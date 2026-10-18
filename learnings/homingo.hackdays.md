# Learnings: @homingo.hackdays

Read on every run; the weekly review rewrites it. Keep it under about 120 lines. Evidence lives in data/homingo.hackdays.jsonl (cloud posts) and list_posts (the owner's reels). Last rewrite: weekly review 2026-W42 (18 Oct).

## State of the evidence (2026-W42)
- Since 15 Oct the cloud runs make only stories here; the feed is the owner's reels (no cloud carousel after 14 Oct). Raised with the owner: RUN.md still says 2 carousels a day.
- Cloud carousels, 11-14 Oct (8, measured 18 Oct 23:09): reach 5-8, median 7; likes 0-4; **0 saves and 0 shares on all 8.** The weakest carousel reach of the three cloud-carousel accounts after SurgeLabs.
- Owner's reels (latest stored readings): median ~60 reach. Top: "Didn't win? You still walk away with 3 things" 142 (1 save), "use AI, as much as you want" 133 (2 saves, 1 share), "AI at every step" 115, "build for one person you know" 108, "3 AI agent ideas" 109, "35 days left" 101, README 91. The daily "₹5,000 to the winner, free" opener (since 16 Oct) ranges 13-115: the opener alone doesn't carry a reel.
- The owner's "campuses on the map" carousel (c2d8fc6d, 11 Oct 22:24) reached 109 with 1 share, 15× the cloud carousels: social proof travels. Its "6 colleges" claim is still not in Facts; the duplicate (952fe056) is gone from Instagram.
- Stories: 18 Oct story 1 (28 days left) reach **0** at 15 h, story 2 (who it's for) 0 at 3.5 h. Stories here reach almost nobody yet (few followers watch stories). From now on the evening run records every story (RUN.md "Story metrics").

## Proven (do more)
_Nothing proven by the rule (3+ posts beating the median). Carousel reach sat at 5-8 whatever the hook, CTA or slide count._
- Leading signal from the owner's reels: posts about what you GET (walk away with 3 things, AI allowed, build for one person) out-reach logistics posts (16 days, teams, one-sentence test: 8-21).

## Avoid
- (Owner, 2026-10-11) "Live demo" as a submission requirement. Submission = public GitHub repo + short demo video (required); live link and deck optional.
- Claims outside hackdays.md Facts. "AI tools allowed" is in the owner's own reels daily but still not in Facts (asked again in 2026-W42); "students from 6 colleges" likewise. Don't use either until they are in Facts.
- Unquoted `font-family:Serif` (renders Times). Write `font-family:"Serif"`; the render tools WARN on it.
- Comparison slides or story halves that are two text tables with no visual change; and chat-bubble stories with small, evenly spaced bubbles (16 Oct self-review).
- Formats already used as single posts: terminal boot screen, character-select, timeline/roadmap, myth vs fact, patch notes, git log. Reuse only inside richer frames.

## Experiments closed (2026-W42)
- `you-in-it` vs `countdown-list` hooks: both at reach 6-7. No difference. Closed.
- Fill-in 3-line-scope template slide (12 and 14 Oct ideas posts): reach 7 and 6, 0 saves. The template did not earn saves. Closed.
- 6 vs 8 slides: the 6-slide README deck reached 7, the 8-slide median 7. No difference. Closed.
- `versus` hook + comment CTA (solo vs squad): 7 reach, 0 comments. Closed.
- Sonnet story helper: 16 stories, 0 sent back, no owner complaint. Keep Sonnet (evidence weak: 12 of 16 story lines had no self_review).

## Next week's experiments (open 2026-W42; stories, measured by reach at the evening run)
1. Story that points at that day's reel ("Today's reel: …", same topic, one new fact) vs a standalone story. Hypothesis: a tie-in gets viewers who just watched the reel; standalone stories are reaching 0.
2. "What you get" story (₹5,000 to the winner, certificate with unique ID + QR for everyone who submits, mentor reviews) vs logistics story (dates, team size). Hypothesis: the reel signal holds for stories.
3. Countdown number as the whole frame ("27 days") vs a question frame ("Solo or squad?").

## Owed (promised part 2s and follow-ups)
- Ideas follow-up to the 11 Oct scoping post: one-loop Agent / Automation / LLM-app ideas, each with a 3-line scope (story version now: one idea per frame).

## Backlog (verify every fact against hackdays.md Facts)
- What you get: the verifiable participation certificate (unique ID + QR) for everyone who submits.
- What you get: ₹5,000 to the winner only, Recommendation Certificate for the top 3: what each means for a portfolio.
- Tips: what a judge sees in the first 20 seconds of your demo video.
- Tips: the README in one scroll (done 13 Oct carousel, 15 Oct reel, 17 Oct story: rest it until 1 Nov).
- Ideas: 5 agent projects you can scope in two weeks (problem, user, core loop, stretch).
- Ideas: 3 automation ideas from a real college office (attendance, fee reminders, hostel requests; hostel used 17 Oct).
- How it works: from registration to certificate, step by step (dates from Facts).
- How it works: mentors are online and async; what a good 4-line ask looks like (never name a mentor).
- Countdown: "15 Nov, 11:59 PM IST": what to have ready before registration closes.
- Countdown: Diwali 8 Nov is 7 days before registration closes: register by 7 Nov (14 Oct carousel; story reminder around 1 Nov).
- Trend: a big model or agent launch told as "what you could build with it for Hack Days".

## Notes from runs
- Blur a withheld word on slide 1 (filter:blur ≥9px) instead of naming it. WebSearch returns titles/URLs only: use exact-phrase queries to confirm a quote.

## Changelog
- 2026-10-10: learnings file created with the carousel system.
- 2026-10-11: c1 cancelled and remade for the 'live demo' wording; Serif and overlap traps found.
- 2026-W41 review: Serif and overlap traps became WARNs (tools/lint.js); small-deck contact-sheet crash fixed.
- 2026-W42 review: carousel metrics filled (8); stories now measured by the evening run (RUN.md "Story metrics"); `stats.js` compares reach when no post has a save or share; experiments closed, story experiments opened.
