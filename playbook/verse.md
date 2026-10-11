# @homingo.verse playbook

Account: handle `homingo.verse` (display name "Homingo | Creative Studio"). Find its id with `list_accounts`; don't rely on a stored id.

## What the account is for
Reach. Curiosity-driven stories that people save, share and follow for: Indian history, China, Space and Mythology. **Feed = reels only (owner, 2026-10-11): never post a carousel or a single image on this account.** Four reels a day, one per category. The account belongs to Homingo, but it is a story account, not an ad: the only brand touch is the caption sign-off and the orbit-dot mark on every scene.

The owner's laptop automation may also post reels here. Never repeat a topic any reel covered in the last 14 days (check `list_posts`); a reel can go deeper on an earlier reel's topic as "part 2" if that reel promised one.

## Categories (one reel each per day)
- **Indian history** (`indian-history`): kings and empires, forgotten people, inventions, battles, monuments, trade routes, science and maths of ancient India, coins, scripts, lost cities.
- **China** (`china`): ancient engineering, dynasties, the Silk Road, inventions, science and culture. Factual, not political: never cover modern Chinese politics, the CCP, Taiwan, Tibet, Xinjiang, Hong Kong, Tiananmen, or India–China border disputes.
- **Space** (`space`): missions, discoveries, ISRO and world space history, how things in space work, strange objects, what's in the sky this week.
- **Mythology** (`mythology`): stories from the Ramayana, the Mahabharata and the Puranas (and occasionally other world mythologies), always framed as "the epic says" / "according to the Bhagavata Purana", never as historical fact. Respectful to every tradition: no mockery, no claims about which faith is right, no caste or communal angles.

Slots: 4 reels a day (times and keys in RUN.md). Each slot gets the category not yet covered today. Default order: slot 1 Indian history, slot 2 Space, slot 3 China, slot 4 Mythology. The learning loop may reorder slots once the data shows a category does better at another time; write the new order into learnings/homingo.verse.md.

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

## Visual system: the logo palette (owner, 2026-10-11)
Every reel, cover and story matches the account's logo: blue, orange, white. One look for all four categories; the category shows in the label, the imagery and the story, never in a different colour scheme. (The old per-category palettes, parchment, lacquer, indigo and so on, are retired.)
- Link `../../tools/fonts.css` then `../../assets/components/verse-brand.css` and use its tokens: navy `#0B1640` ground on every scene (default), navy-2 `#121F55` for panels and map land, logo blue `#1F50FE` for bars, rules and diagram strokes, logo orange `#F3701F` for the one key word, number or arrow per scene, white `#FFFFFF` text, mute `#AEB8DA` sub-lines. At most one light scene per reel on cream `#F5F1EA` with navy text (good for the reveal).
- No other colours: no sepia, red, gold, jade, purple or pink, and no full-colour photo washes. Topic imagery is drawn in blue, white and orange line art on navy, or faded into the navy.
- Contrast: never orange text on the blue, never blue text on navy (both are hard to read). Orange goes on navy or cream; text on blue is white.
- The orbit-dot mark (`assets/components/verse-mark.svg.html` + "homingo.verse") sits top-left at the same place on every scene (`.v-mark`); it stays legible on cream automatically.
- Type: headlines "Fraunces" 600 (88–120px), the key phrase in orange; body and sub-lines in "Sans" (Inter); labels in letter-spaced caps (`.v-label`); small data in "Mono". Devanagari ("Noto Serif Devanagari") or Chinese ("Noto Serif SC") only for an accurate name or word, in white.
- Images: the workspace can't download from the web, so illustrate with SVG and CSS (maps, cutaways, silhouettes, star charts, timelines, artefacts as line art). Mythology figures are stylised silhouettes, never photoreal or AI-styled faces of deities. If `assets/library/` holds a suitable licensed image, use it toned into the palette and credit it in the caption. Label drawn reconstructions "Illustration".
- Reference: `posts/verse/example-reel-logo-palette.html` (render it to see the look).

## Reels (feed)
- 1080×1920 scene deck rendered with `node tools/reel.js <reel.html>`: 5–9 scenes, 18–40 s in total, one idea per scene, at most about 18 words per scene. Scene 1 is the hook and must work in the first second (big headline, no build-up). The payoff lands in the last third; the final scene is the connection to today plus a follow or share line.
- Keep text out of the reel UI zones: top 220px, bottom 420px, right 150px (the tool warns).
- Sound: the tool adds a quiet generated ambient pad. No voiceover in the cloud runs (the voice keys are on the owner's laptop), so every scene must read on its own with the sound off.
- Same story craft as CAROUSEL.md: the hook gate, the payoff sentence, curiosity from scene to scene (each scene makes people stay for the next).
- Cover: Instahook can't set a custom cover, so Instagram uses the first frame. Scene 1 must read as a thumbnail in the profile grid (big headline, mark, navy ground); check `<name>-cover.jpg`.

## Captions
- Line 1: the hook, reworded. Then 3 to 5 short lines that add context without spoiling the payoff, then the CTA (share or save; "Follow for part 2" when a part 2 is planned).
- "Sources: …" line.
- Sign-off: "Made by Homingo, Lucknow's local marketplace app."
- Up to 8 specific hashtags (for example #indianhistory #ancientindia #isro #spacefacts #mahabharata #ramayana #chinesehistory #silkroad #didyouknow).
- Alt text for the reel if `create_post` accepts one: one or two sentences on what the scenes show.

## Stories (two per day, 1080×1920)
Story 1 (14:47) and story 2 (21:47). Rotate widely; never the same type two days running:
- Teaser of today's reel: the hook and "Watch today's reel on our feed" (no stickers; write it in the image).
- On this day: one verified event that happened on today's date in history, science or space.
- Tonight's sky: what's visible from India tonight (planets, Moon phase, meteor shower), from a reputable source.
- One-frame wonder: a single astonishing verified fact with one strong illustration.
- The epic says: a 2–3 line moment from the Ramayana, Mahabharata or Puranas, framed as the text says it.
- Word origin: a word we still use that comes from Sanskrit, Persian, Chinese or an ancient trade route.
- Map moment: a trade route, empire or mission path drawn as a map.
Same visual system as the feed (the logo palette and the mark). Sources in alt text when a fact is stated. Keep the top 250px and bottom 300px free of text.
