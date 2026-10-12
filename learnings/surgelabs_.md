# Learnings: @surgelabs_

Read on every run; the weekly review rewrites it. Keep it under about 120 lines. Evidence lives in data/surgelabs_.jsonl. Last rewrite: weekly review 2026-W41 (11 Oct).

## State of the evidence (2026-W41)
- No post is 48 h old yet (the system started 11 Oct), so no `metrics` are filled and nothing is proven or ruled out by numbers.
- Early snapshot, NOT a metric (11 Oct, 23:09 IST): the cloud carousels reached 3 (Deno two clocks, 6.5 h) and 2 (one failing test, 5 h). The reels reached 20-140 (lead-reply agent 140, website before/after 85, N+1 64 within an hour, eval file 20). This account has the weakest carousel reach of the four; raised with the owner.
- Three test posts from 5 Oct ("fsfds", "njknk", "abfffd…") are listed as published in Instahook but unreadable on Instagram (deleted). Ignore them in any analysis.

## Proven (do more)
_Nothing proven yet: a pattern needs at least 3 posts beating the account median. Until metrics exist, lean on CAROUSEL.md._

## Avoid
- Middle slides with empty lower thirds and text-only beats (both 11 Oct self-reviews). One bigger visual per middle slide (calendar strip, terminal, diagram).
- Emoji glyphs in slide text: they don't render reliably in headless Chromium. Caption only.
- Recently used as single posts (log.md): system log (agent queues), RAG in 4 steps, architecture news card. Go deeper or pick other topics.

## Experiments running
- From 12 Oct: stories by a Sonnet helper, carousels on Opus. Next review: compare `sent_back` and self-reviews with the 11 Oct Opus stories; if they fall short, move stories back to Opus.
- Carried over, unmeasured (fill metrics on 13 Oct+): news through a "two clocks" builder lens (c1 Deno) vs straight news cards; developer humour as a timestamped swipe saga (c2 one failing test); quiz story ("Agent or automation?"); real pipeline incident as a story (story 2, the retry).
- Closed without data: `before-after` vs `impossible` hooks (never run in week 1; reopened below).

## Next week's experiments (open 2026-W42)
1. `before-after` hook on an AI agents / automation topic (e.g. a clinic front desk before and after an agent), vs the `number-twist` news lens. Hypothesis: a visible before/after earns more saves on a services account.
2. Real-pipeline stories ("how this account's posts are made": idempotency keys, retries, the overlap lint) as a recurring lab-notes series. Hypothesis: real build stories beat generic explainers on shares.
3. Humour carousel with the punchline on the second-to-last slide and a one-line practical fix last (c2 pattern) vs punchline last. Record which in `format`.

## Owed (promised part 2s and follow-ups)
- None.

## Backlog (verify every fact before use)
- Agents: what an AI agent could do for a clinic's front desk (illustrative scenario, labelled as such).
- Websites: 6 mistakes on small-business websites that lose WhatsApp leads (generic mock site).
- Build: how an idempotency key stops a double post (this very pipeline uses one).
- Build: the N+1 query told as a carousel with a drawn ORM log (the reel's topic, different format; wait 14 days after 11 Oct).
- Build: evals before prompts: a 10-line eval file walk-through (after 25 Oct; the reel covered it 11 Oct).
- Build: why your agent needs a job queue and a dead-letter list (deeper than the 10 Oct single post).
- Automation: a lead-reply flow from WhatsApp to a sheet, step by step (illustrative).
- Websites: page speed: what 3 seconds of loading costs a small shop (sourced numbers only).
- Humour: "it works on my machine" (done 13 Oct as the case-sensitive filename saga; don't reuse before 27 Oct).
- Build: verifying WhatsApp (Meta) webhooks end to end: verify token handshake + X-Hub-Signature-256 (after 27 Oct; 13 Oct c1 covered signatures in general).
- Humour: the 2 AM deploy, told as a timestamped chat.
- News lens: the next big dev-platform acquisition or pricing change, as "what to check in your stack".

## Used recently (don't repeat within 14 days)
- 2026-10-13: webhook signatures (HMAC of raw body, constant-time compare, 5-min timestamp replay window) (c1 build), case-only rename: green on Mac, red on Linux CI (c2 humour). Reels 13 Oct: avg vs p99 latency, retries with backoff + jitter.
- 2026-10-11: Deno team joins Cloudflare / platform exit plan (c1), AI assistant deletes the failing test (c2), agent vs automation quiz (story), failed story publish + safe retry (story 2). Reels 11 Oct: eval file before prompts, N+1 query.

## Changelog
- 2026-10-10: learnings file created with the carousel system.
- 2026-10-11: WebFetch fails with DNS errors in the sandbox; WebSearch with 2+ agreeing outlets instead (already in RUN.md "Known environment issues"). Emojis kept out of slides.
- 2026-W41 review: overlap and unquoted-Serif checks added to `tools/carousel.js` and `tools/render.js` (tools/lint.js); carousels with 5 or fewer slides no longer crash the contact sheet.
