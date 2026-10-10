# Carousel craft: hooks that force the swipe

Every feed post on every account is a carousel (2 to 10 slides, usually 6 to 9). Single-image feed posts are retired. Stories stay single 9:16 images (see RUN.md).

The job of a carousel is one thing: **make the reader unable to stop swiping, then reward them so they save, share and follow.** Instagram reshows carousels to people who didn't swipe the first time, starting from slide 2, so slide 2 is a second hook, not filler.

## 1. Find the story before the slides
Pick a topic, then find the single most surprising true thing inside it: the twist, the odd number, the thing nobody expects. Build backwards from that payoff. If you can't find a payoff that makes you say "wait, really?", pick another topic.

Write the payoff in one sentence before writing any slide. Example: "The stepwell that vanished for 700 years is printed on the ₹100 note in your wallet."

## 2. The hook (slide 1)
Write at least 10 candidate hooks using different archetypes, score each one, and use the best. Tag the archetype in data/posts.csv so the learning loop can compare them.

Hook archetypes (codes used in the data):
- `impossible`: an impossible-sounding true fact ("A machine detected an earthquake nobody could feel. In 132 AD.")
- `mystery-object`: show or name a strange thing and withhold what it is ("This bronze jar had 8 dragons. One of them saved an empire.")
- `vanished`: lost, forgotten, buried, erased ("A queen built a palace that goes underground. Then it disappeared for 700 years.")
- `number-twist`: a specific number that doesn't add up ("₹0 deposit. 3 checks. Most people skip number 2.")
- `you-are-wrong`: everyone believes X, but ("You've been told the Great Wall is visible from space. It isn't.")
- `you-in-it`: second person, the reader is inside the story ("You're a judge. You have 20 seconds. This demo just lost.")
- `countdown-list`: N items, best one last ("5 things in space that shouldn't exist. #1 is still unexplained.")
- `before-after`: show the end state, withhold how ("He answered 60 WhatsApp questions a day. Now he answers 0.")
- `mistake-warning`: a costly mistake to avoid ("Don't pay a PG deposit in Lucknow until you've checked this.")
- `forbidden-secret`: hidden, banned, behind the scenes ("The epic says one weapon was never to be used. Arjuna got it anyway.")
- `versus`: two things compared, winner withheld
- `cliffhanger-story`: drop into the middle of a moment ("The rocket was 2.1 km above the Moon. Then the signal went silent.")
- `question`: one sharp question the reader can't answer yet

Hook scoring: score each candidate 1 to 5 on six criteria:
1. **Gap**: does it open a question the reader needs closed?
2. **Specific**: concrete names, numbers, places, not vague ("a king", "many")?
3. **Stakes**: something lost, won, risked, strange or personal?
4. **Fast**: readable in under 2 seconds, 12 words or fewer for the main line?
5. **Fresh**: unlike our last 14 hooks on this account (check data/posts.csv)?
6. **True**: fully paid off by the slides, no exaggeration or clickbait?

Use a hook only if it scores **at least 24/30 and True = 5**. If nothing reaches 24, rethink the payoff and write new hooks. Record the winning score in data/posts.csv.

Slide 1 rules: one big line (the hook), one optional small line under it that deepens the gap, a strong visual, and a swipe cue (an arrow, a "→", a cut-off element at the right edge, or a part of the image that continues onto slide 2). Never put the brand logo large on slide 1, and never open with "Did you know".

## 3. The middle slides: open loops
- **Slide 2 is a second hook.** It must work on its own for people who see the post starting from slide 2: restate the mystery from a new angle and add one new detail.
- **Every slide ends unfinished**: "But…", "Then…", "Except…", "That's when…", a question, or a line that sets up the next slide. Never end a middle slide on a full, satisfying full stop.
- **Escalate**: each slide is bigger, stranger, more personal or higher-stakes than the one before.
- **One idea per slide, 10 to 30 words.** Large type. If you need more words, split the slide.
- **Withhold the name or answer** for as long as it stays fair, usually until slides 4 to 6.
- **Micro-payoffs**: give a small reward every 2 slides (a fact, an image, a reveal) so swiping feels worth it.
- Use the swipe test: read only the last line of each slide. Would you need the next slide? If not, rewrite that line.

## 4. The payoff and the end
- **Second-to-last slide: the payoff.** The answer, the reveal, the "wait, really?" moment.
- **Last slide: twist plus action.** A final surprise, a "so what" for the reader, or a part-2 tease, plus ONE call to action matched to the goal:
  - reach: "Send this to someone who…" (shares)
  - value: "Save this for when you…" (saves)
  - series: "Part 2 tomorrow. Follow so you don't miss it." (follows; only promise a part 2 if you log it in learnings so a later run posts it)
  - conversation: one specific question ("Which one did you know?") (comments)
  - conversion (marketplace, Hack Days, SurgeLabs only): one action, "Link in bio" or the site.

## 5. Design rules for carousels
- All slides 1080×1350, the same shape and one visual system per post, so the post feels like one object.
- Build the deck as ONE HTML file with slides side by side and render it with `node tools/carousel.js <deck.html>` (see the comment at the top of that file). This lets one image, line or shape run across a slide edge and continue after the swipe; a seamless edge is one of the strongest swipe cues.
- Slide number on every slide except the first, small (for example "02 / 08").
- Text stays at least 64px from every edge; nothing important in the bottom 120px of slide 1 (Instagram's dots).
- Contrast: text must be clearly readable on a phone at arm's length. No light grey on grey.
- Vary the layout between slides (full-bleed statement, image plus caption, list, diagram, quote, number) while keeping the type and palette constant.
- Visuals: there is no image download from the web in this environment, so draw them: SVG illustrations, maps, diagrams, timelines, orbits, silhouettes, patterns, textures, typographic compositions, and images already in the repo (brand/, assets/). If assets/library/ has a suitable licensed image, use it and credit it in the caption.
- Check the contact sheet (`<name>-sheet.jpg`) as a whole story, then open at least slide 1, slide 2 and the payoff slide at full size. Fix every WARN line the tool prints.

## 6. Caption
- Line 1 restates the hook in different words (it shows before "more").
- 3 to 6 short lines that add value without giving away the payoff. People read the caption while swiping.
- The call to action from the last slide.
- Sources, when the post states facts about history, science, space or news: "Sources: <publication or institution>".
- Hashtags: up to 8, specific beats generic. Alt text for every slide.

## 7. Truth beats curiosity
A hook that the slides don't pay off loses trust and followers. Never exaggerate a fact to make a hook work. If a claim is disputed, say so in the slides ("Historians still argue about…"); a real debate is itself a great hook.
