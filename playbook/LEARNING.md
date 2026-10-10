# The learning loop: self-deciding, self-learning, self-improving

This repo is the content team's memory. Every run reads what earlier runs learned, decides for itself, records what it did, and leaves the system a little better. Nothing here needs a human to approve it, but the owner's word (playbook/FEEDBACK.md) always wins.

## Files
- `playbook/FEEDBACK.md`: the owner's notes and corrections. Read it first on every run. It overrides everything except facts and the "Never" rules. Only the owner writes here; runs never edit or delete it.
- `learnings/<account>.md`: what works on that account (proven rules), what to avoid, experiments running, promised part-2s, and the topic backlog. Every run reads it; runs add to it; the weekly review rewrites it.
- `data/<account>.jsonl`: one JSON line per published post (schema below). This is the evidence the learning comes from.
- `reviews/YYYY-Www.md`: the weekly review reports.
- `tools/stats.js`: summarises data/*.jsonl by hook archetype, category, format, slot and trend vs planned (`node tools/stats.js [account] [days]`).

## Every run: decide
1. Read FEEDBACK.md, the account playbook, CAROUSEL.md, TRENDS.md and learnings/<account>.md.
2. **Trend check** (TRENDS.md). A strong signal that fits the account replaces the planned topic.
3. Otherwise **choose the category** the account playbook allows for this slot (avoid what was posted most recently; respect any "do more of" rule in learnings), then a **topic** that hasn't been covered (search data/<account>.jsonl and the backlog). Owed part-2s come first when due.
4. **Explore or exploit**: about 7 posts in 10 use hook archetypes and formats that learnings mark as working; about 3 in 10 deliberately try something untested (a new archetype, format, slide count, visual idea, CTA type or posting angle). Mark those `"experiment": "<hypothesis>"` in the data line, and add them under "Experiments running" in learnings.
5. Write and design the carousel by CAROUSEL.md. The hook must clear the score gate.

## Every run: record
After publishing, append one line to `data/<account>.jsonl`:
```json
{"date":"2026-10-11","time":"09:12","account":"homingo.verse","slot":1,"kind":"carousel","category":"indian-history","topic":"Rani ki Vav","trend":false,"hook_archetype":"vanished","hook":"A queen built a palace that goes underground…","hook_score":27,"slides":8,"format":"story-reveal","visual":"svg cutaway + map","cta":"share","experiment":null,"post_id":"…","permalink":"…","metrics":null,"self_review":"Slide 4 was text-heavy; the ₹100 reveal landed. Next time show the note earlier as a silhouette."}
```
Stories get a line too, with `"kind":"story"` (no hook score needed).
- `self_review` is one honest sentence: the weakest part of this post and what to try next time. Be specific; "looks good" is useless.
- Never edit another post's line except to fill in `metrics`.

## Every run: measure what's measurable
Before choosing today's topic, look for an Instahook tool that returns post insights (a tool whose name contains "insight", "metric" or "stat"; check with ToolSearch). If one exists, fill `metrics` for this account's posts that are 48 hours to 14 days old and still have `metrics: null`: reach, views, likes, comments, saves, shares, as available, plus `"measured_at"`. If no such tool exists, leave metrics null; the loop then learns from self-reviews and owner feedback only, and says so in the weekly review.

## Every run: improve the system
If something in the repo slowed you down, confused you or produced a weak result (an unclear playbook line, a tool bug, a missing helper, a repeated design problem), fix it in the same run when the fix is small and safe:
- Tools: change them, then prove they still work by rendering this run's deck with them.
- Playbooks: clarify or tighten wording; add a new format, hook archetype or visual idea that worked; remove a line that proved wrong.
- Reusable pieces: add proven layouts or SVG motifs to `assets/components/` with a one-line comment on when to use them.
Write one line under "Changelog" in learnings/<account>.md (or in the review if it touches everything) saying what changed and why.

## Weekly review (Sunday night, its own scheduled task)
1. `git pull`; run `node tools/stats.js` for each account over 7 and 28 days.
2. If metrics exist, rank by **share + save rate** (saves + shares divided by reach) first, then reach. Without metrics, use self-reviews, hook scores and owner feedback, and say the evidence is weak.
3. Per account, rewrite learnings/<account>.md:
   - **Proven** (do more): a pattern goes here only after at least 3 posts beat the account's median.
   - **Avoid**: a pattern goes here after at least 3 posts below 0.7 × median, or after any owner complaint.
   - **Experiments**: close finished ones with a verdict; open 2 or 3 new ones for next week.
   - **Backlog**: 10+ strong topic ideas with their payoff sentence.
   - Keep each learnings file under about 120 lines: merge and condense, don't just append.
4. Improve the system: fix recurring self-review complaints at the source (playbook, tool or component), look for contradictions between playbooks, prune stale rules, and update formats and hook archetypes in CAROUSEL.md if the data supports it.
5. Write `reviews/YYYY-Www.md`: what worked, what didn't, what changed in the repo, next week's experiments.
6. Commit and push; send the owner a short summary.

## Guardrails (no run may change these)
- Never edit the "Facts" or "Never" sections of any playbook, or FEEDBACK.md. Facts change only when the owner says so; if the owner states a new fact in FEEDBACK.md, the weekly review copies it into Facts and notes it.
- Never let a learning override truth, sourcing or the account's purpose. "Clickbait got more reach" is never a reason to exaggerate.
- Never delete data/*.jsonl lines, log.md lines or published post files.
- Never publish twice; never change an idempotency key to force a post.
- Change only one big thing at a time in a run (one tool or one playbook section), and always test tool changes.
- Git: always `git pull --rebase` before pushing. data/*.jsonl and log.md use a union merge (.gitattributes), so concurrent appends keep both sides. If a push still fails, pull, rebase and retry up to 3 times.
