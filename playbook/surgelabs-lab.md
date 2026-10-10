# @surgelabs_ lab look (visual and voice direction for every SurgeLabs carousel)

The owner approved this look on 2026-10-10. Since 2026-10-11 the separate 3-a-day lab series is replaced by 2 carousels a day (see playbook/surgelabs.md and RUN.md); this file now sets the look and voice for those carousels. Read playbook/surgelabs.md first: its facts and rules apply here too.

## What the series is
SurgeLabs presented as an engineering lab, not an agency: building, experiments, systems. Teach and show how things work; invite businesses to build with us.

## Slide formats (a starting list, not a limit: invent new ones; mix them inside a carousel)
1. Lab hook: one bold claim + a small visual idea (example: posts/surgelabs/lab-templates/hook.html).
2. Diagnostic list: "N signs…" / "N questions to ask before…" (example: signs.html).
3. Module grid: a set of parts, e.g. what we build, parts of an agent, layers of a backend (example: build.html).
4. Experiment card: "EXP-0X" hypothesis → setup → what it shows, about a general technique (never a fake client result).
5. Under the hood: how one system works, as a labelled pipeline of nodes and wires.
6. Lab notes: 3 short numbered engineering tips in mono labels.
7. Myth vs fact about AI agents or automation.
8. System log: a short terminal-style log telling a mini story of an automation running.

Topics: autonomous agents, backend automation, scalable infrastructure, integrations, and the concepts behind them (RAG, MCP, queues, retries, idempotency, observability, vector databases, evals). Practical value for businesses first.

## Visual direction
The three files in posts/surgelabs/lab-templates/ are examples of ONE taste the owner liked, not templates every post must copy. Use them to understand the quality bar and the feel (premium, technical, confident, lots of contrast, lab details), then design each post fresh: new layouts, compositions, diagrams, type scales, crops and visual ideas. Avoid a feed where every post looks the same; never reuse the same layout twice in a row. Stay recognisably SurgeLabs through the palette, type and the small lab details below.

Brand constants (keep these) and defaults (vary freely):
- 1080×1350. Dark grounds by default (#0A0A0C or the #08080A of surgelabs.md); grids, schematics, light glows from surgelabs.md, inverted light posts or full teal/purple fields are all fine when the idea calls for it. Keep it minimal and premium: no loud colours or heavy gradients.
- Teal #2DD4BF and purple #A78BFA as accents; text #F2F2F0; secondary #C8C8CE; muted #9A9AA3; lines #2A2A31; card edges #3A3A42.
- Type: "Sans" weight 600, big tight headlines (letter-spacing about -0.045em), key words in teal or purple; "Mono" for lab labels, codes ([01], MOD-01, LAB-01, EXP-01), comments (// …) and terminal lines ($ …).
- Brand mark top-left: "SurgeLabs_" with the underscore in teal; a mono uppercase label top-right (e.g. "LAB-04 · Agents").
- Every post ends with surgeit.co.in.
- Filled teal or purple cards carry dark #0A0A0C text; outlined cards carry light text.

## Making each carousel
Follow RUN.md "Feed carousel run". Deck file: `posts/surgelabs/YYYY-MM-DD-c<slot>-<slug>.html`. Theme: `<category>: <topic>`.

## Copy rules
- Never invent clients, case studies, numbers, results, prices or partnerships. Describe SurgeLabs only as in surgelabs.md.
- Captions: lead with the insight (the hook reworded), 2–4 short lines, end with "Build with us → surgeit.co.in", up to 5 hashtags (#SurgeLabs #AIAgents #Automation #AIEngineering #BackendEngineering).
