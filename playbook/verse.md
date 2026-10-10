# @homingo.verse playbook

Account: handle `homingo.verse` (display name "Homingo | Creative Studio"). Find its id with `list_accounts`; don't rely on a stored id.

## What the account is for
Reach. Curiosity-driven stories that people save, share and follow for: Indian history, China, Space and Mythology. Four carousels a day, one per category. The account belongs to Homingo, but it is a story account, not an ad: the only brand touch is the caption sign-off and a small mark on the slides.

The owner's laptop automation also posts reels here. Carousels must not repeat a topic a reel covered in the last 14 days (check `list_posts`); a carousel can go deeper on a reel's topic as "part 2" if the reel promised one.

## Categories (one carousel each per day)
- **Indian history** (`indian-history`): kings and empires, forgotten people, inventions, battles, monuments, trade routes, science and maths of ancient India, coins, scripts, lost cities.
- **China** (`china`): ancient engineering, dynasties, the Silk Road, inventions, science and culture. Factual, not political: never cover modern Chinese politics, the CCP, Taiwan, Tibet, Xinjiang, Hong Kong, Tiananmen, or India–China border disputes.
- **Space** (`space`): missions, discoveries, ISRO and world space history, how things in space work, strange objects, what's in the sky this week.
- **Mythology** (`mythology`): stories from the Ramayana, the Mahabharata and the Puranas (and occasionally other world mythologies), always framed as "the epic says" / "according to the Bhagavata Purana", never as historical fact. Respectful to every tradition: no mockery, no claims about which faith is right, no caste or communal angles.

Slots: 4 runs a day. Each run publishes the category not yet published today. Default order: slot 1 Indian history, slot 2 Space, slot 3 China, slot 4 Mythology. The learning loop may reorder slots once the data shows a category does better at another time; write the new order into learnings/homingo.verse.md.

## Facts and sourcing (Never section; runs may not loosen these)
- Every factual claim is checked with web search in at least 2 reputable sources (ISRO, NASA, ESA, ASI, UNESCO, museums, university pages, Britannica, major newspapers, peer-reviewed summaries). Dates, numbers and names must match the sources.
- If historians disagree, say so on a slide. Legends about real places are labelled as legends.
- Mythology: name the text the story comes from; use the commonly known version; mention when versions differ.
- Captions end with "Sources: …" naming the sources.
- No invented quotes. Quoting a text: only well-known, verifiable lines, attributed.
- Never present AI or code illustrations as real photos or historical artwork. If a slide shows a drawn reconstruction, add a small label "Illustration".

## Our angle (what makes this account different)
Each post is a mini-documentary with a twist: start inside the strangest moment, withhold the name, reveal it late, and end with a connection to the reader's world today (the ₹100 note, a word we still use, a satellite above them right now, a festival they celebrate).

## Trend radar (search terms for TRENDS.md)
ISRO / NASA / ESA / CNSA mission news, launches and landings, eclipses, meteor showers, comets, "visible tonight India"; archaeological discovery India / China; viral history video; UNESCO; festival of the week and its story (Dussehra, Diwali, Chhath, Holi, Janmashtami, Lunar New Year, Mid-Autumn); anniversaries of famous events this week; big films or series based on history, epics or space (cover the real history or the text, never review the film).

## Visual system: "the atlas"
A premium museum-and-atlas feel. One system across categories, with a category palette:
- Shared: 1080×1350. Headlines in "Fraunces" (600, tight, can go very large), body in "Sans" (Inter), small data labels in "Mono". Category label top-left in letter-spaced caps ("INDIAN HISTORY · 04/08"), a small "homingo.verse" mark bottom-left on the last slide only. Generous space, film grain, one strong image or illustration per slide.
- Indian history: ink #0E0B08 or parchment #EFE6D2 grounds; saffron-ochre #D98E2B; deep red #8E2A1E. Devanagari accents in "Noto Serif Devanagari" (a name or word in its original script).
- China: lacquer black #0B0A0A; cinnabar #C8372D; jade #3E8E7E; gold #C9A45C. A red seal-stamp motif; Chinese characters in "Noto Serif SC" only where accurate (name of the dynasty, invention or person).
- Space: deep space #05060A with generated starfields; cool white #E8EEF7; ion blue #6EA8FF; amber #FFB347 for highlights. Orbit diagrams, trajectories, scale comparisons, mission-patch-style badges, telemetry labels in Mono.
- Mythology: indigo night #0D0B1E; temple gold #D4A64A; vermilion #D9472B; lotus pink #E7A3B5. Ornamental borders and motifs drawn in SVG, inspired by traditional Indian art (Pattachitra, Kalamkari, Madhubani, temple carving): figures as stylised silhouettes, never as photoreal or AI-styled faces of deities.
- Images: the workspace can't download from the web, so illustrate with SVG and CSS (maps, cutaways, silhouettes, star charts, timelines, artefacts drawn as line art). If `assets/library/` holds a suitable licensed image (public domain or CC, with a `credits.md` line), use it and credit it in the caption.
- Strong swipe cues suit this account: a map or a carving that runs across two slides, a timeline continuing past the edge.

## Captions
- Line 1: the hook, reworded. Then 3 to 5 short lines that add context without spoiling the payoff, then the CTA (share or save; "Follow for part 2" when a part 2 is planned).
- "Sources: …" line.
- Sign-off: "Made by Homingo, Lucknow's local marketplace app."
- Up to 8 specific hashtags (for example #indianhistory #ancientindia #isro #spacefacts #mahabharata #ramayana #chinesehistory #silkroad #didyouknow).
- Alt text for every slide.

## Stories (two per day, 1080×1920)
Story 1 (14:47) and story 2 (21:47). Rotate widely; never the same type two days running:
- Teaser of today's carousel: the hook and "Swipe today's post on our feed" (no stickers; write it in the image).
- On this day: one verified event that happened on today's date in history, science or space.
- Tonight's sky: what's visible from India tonight (planets, Moon phase, meteor shower), from a reputable source.
- One-frame wonder: a single astonishing verified fact with one strong illustration.
- The epic says: a 2–3 line moment from the Ramayana, Mahabharata or Puranas, framed as the text says it.
- Word origin: a word we still use that comes from Sanskrit, Persian, Chinese or an ancient trade route.
- Map moment: a trade route, empire or mission path drawn as a map.
Same visual system as the feed (category palettes). Sources in alt text when a fact is stated. Keep the top 250px and bottom 300px free of text.
