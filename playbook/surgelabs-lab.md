# @surgelabs_ lab series (3 feed posts a day)

The owner approved this look on 2026-10-10. It runs alongside the daily run in RUN.md and does not replace it. Read playbook/surgelabs.md first: its facts and rules ("What the account is for", "Rules") apply here too.

## Schedule and keys
- Three runs a day at 09:12, 15:12 and 21:12 IST. Each run publishes exactly ONE lab post.
- Slot by IST hour of the run: before 12:00 → 1, 12:00–17:59 → 2, 18:00 or later → 3.
- Idempotency key: `surgelabs-lab-YYYY-MM-DD-<slot>` (IST date). If that key is already PUBLISHED, stop: never publish twice.
- Account: find the account whose handle is `surgelabs_` with `list_accounts` (use its id; don't rely on a stored id).

## What the series is
SurgeLabs presented as an engineering lab, not an agency: building, experiments, systems. Teach and show how things work; invite businesses to build with us.

## Formats (rotate; check list_posts and log.md, never the same format twice in one day or two lab posts running)
1. Lab hook: one bold claim + a tiny 3-node flow (template: posts/surgelabs/lab-templates/hook.html).
2. Diagnostic list: "N signs…" / "N questions to ask before…", numbered [01]–[05], teal CTA bar (template: signs.html).
3. Module grid: four cards with MOD-0X codes, e.g. what we build, parts of an agent, layers of a backend (template: build.html).
4. Experiment card: "EXP-0X" hypothesis → setup → what it shows, about a general technique (never a fake client result).
5. Under the hood: how one system works, as a labelled pipeline of nodes and wires.
6. Lab notes: 3 short numbered engineering tips in mono labels.
7. Myth vs fact about AI agents or automation.
8. System log: a short terminal-style log telling a mini story of an automation running.

Topics: autonomous agents, backend automation, scalable infrastructure, integrations, and the concepts behind them (RAG, MCP, queues, retries, idempotency, observability, vector databases, evals). Practical value for businesses first.

## Visual system (copy the templates; keep it consistent)
- 1080×1350. Background flat #0A0A0C (hooks may add the faint 90px grid #17171C). No glows, no gradients other than that grid.
- Teal #2DD4BF and purple #A78BFA as accents; text #F2F2F0; secondary #C8C8CE; muted #9A9AA3; lines #2A2A31; card edges #3A3A42.
- Type: "Sans" weight 600, big tight headlines (letter-spacing about -0.045em), key words in teal or purple; "Mono" for lab labels, codes ([01], MOD-01, LAB-01, EXP-01), comments (// …) and terminal lines ($ …).
- Brand mark top-left: "SurgeLabs_" with the underscore in teal; a mono uppercase label top-right (e.g. "LAB-04 · Agents").
- Every post ends with surgeit.co.in.
- Filled teal or purple cards carry dark #0A0A0C text; outlined cards carry light text.

## Making each post
Follow RUN.md steps 4–9 for a feed post: write `posts/surgelabs/YYYY-MM-DD-lab<slot>-<slug>.html` starting from the closest template (copy its <style>, link ../../tools/fonts.css), render with `node tools/render.js <html> <same-name>.jpg`, open the JPEG and check it (spelling, nothing clipped or overlapping, contrast, no invented facts), commit, rebase on origin/main, push, add_media_from_url, create_post (type feed, caption, alt_texts, theme `lab-<format>`), publish_post. Log the line in log.md as `surgelabs · lab<slot> · <slug> · <format> · <permalink>`.

## Copy rules
- Never invent clients, case studies, numbers, results, prices or partnerships. Describe SurgeLabs only as in surgelabs.md.
- Captions: lead with the insight, 2–4 short lines, end with "Build with us → surgeit.co.in", up to 5 hashtags (#SurgeLabs #AIAgents #Automation #AIEngineering #BackendEngineering).
