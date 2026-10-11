# @homingo._ playbook

Account: handle `homingo._` (display name "Homingo"). Find its id with `list_accounts`; don't rely on a stored id.

## What the account is for
Grow the Homingo marketplace in Lucknow: more people finding rooms, flats, PGs and second-hand things, and more people listing. Two carousels a day. Every carousel must be genuinely useful even to someone who never installs the app; the app is the natural next step, not the whole post.

The owner's laptop automation also posts reels here. Don't repeat a reel's topic from the last 7 days (check `list_posts`).

## Facts (Never section; source of truth; never invent beyond these)
- Homingo is a local marketplace app, live in Lucknow.
- Rentals: rooms, flats and PGs. Second-hand: bikes, cars, phones and electronics, furniture, and more.
- 1K+ active listings. 3 to 4 thousand people use it.
- Listing is free. Tap Sell to list. Track views and inquiries on every ad in My Ads.
- Search, then filter by budget and distance. Buyers chat with or call the seller directly; enquiries go straight to the person who listed.
- Android: https://play.google.com/store/apps/details?id=com.surgelabs.homingo
- iPhone: https://apps.apple.com/in/app/homingo/id6770641448
- Website: homingo.co.in. "Link in bio" for the app.
- Never invent listings, prices, rents, user counts, reviews, testimonials, success stories or features. Don't claim listings are verified unless the owner adds that fact here.
- Lucknow facts (areas, distances, transport, rent ranges, colleges) must come from web search with reputable sources; when giving price ranges, say they are approximate and name the source. General advice (what to check before paying a deposit, how to photograph a bike) is fine without a source if it is common sense and not a legal claim.

## Categories (two different ones a day; cover all four every two days)
- **Finding** (`finding`): rooms, flats and PGs on rent; second-hand bikes, cars, phones, furniture. Checklists, red flags, questions to ask, what to inspect, how to compare.
- **Selling** (`selling`): listing for free, pricing an item, photos and titles that get more inquiries, staying safe when meeting buyers.
- **Using the app well** (`app`): budget and distance filters, chatting or calling the seller, tracking your ads. Show the flow with the REAL app UI: the screenshots in `brand/homingo-app/` (Home, Listing, My Ads, Search), or screens redrawn to match them exactly (sample data labelled "Sample"). See brand/homingo-app/README.md.
- **Lucknow life** (`lucknow`): moving to the city, areas, student and newcomer tips, local culture and food, all tied to the marketplace where it fits.

## Our angle
The smart friend who already lives in Lucknow and has been burned before: practical, specific, a bit witty, never salesy. Hooks lean on `mistake-warning`, `number-twist`, `you-in-it`, `countdown-list` and `before-after`, but test others.

## Trend radar (search terms for TRENDS.md)
Lucknow news this week (events, metro, new openings, festivals, weather that affects moving), college admissions and hostel season in Lucknow, Lucknow viral, UP students, rent and housing news India, second-hand market news (phone launches that make old phones cheaper, bike prices). Skip crime, accidents, politics.

## Visual system
- **The app's real interface is the reference (owner, 2026-10-11).** Any phone screen, app flow or UI element in a post must match `brand/homingo-app/` (real screenshots + README with tokens). Prefer the real screenshots in a phone frame; never invent a different-looking app.
- 1080×1350. Homingo palette = the app's: primary blue #2563EB (buttons, prices, accents), light ground #F5F6FA with white rounded cards (radius ~28px), near-black text #111827, grey #6B7280. Dark variant allowed: black #0A0A0B ground with the same blue. Orange #F37021 only as a small warning/highlight accent (red flags), never as the main colour.
- Prices in app screens use the app's own format "Rs 18,000".
- Type: "Sans" (Inter) 600, big and tight, for headlines; key word in blue or orange; "Mono" for small labels (prices, distances, "TIP 03").
- Compact, minimal UI feel: no loud colours, no heavy gradients, no bulky cards. Drawn icons and phone mockups in HTML/SVG.
- Last slide: the CTA plus "Homingo · Lucknow's local marketplace" and "Link in bio".

## Captions
- Hook reworded on line 1, useful detail, the CTA ("Save this for your room hunt", "Send this to a friend moving to Lucknow").
- Then: "Get Homingo (link in bio):" with the Android and iPhone links.
- Up to 8 hashtags from: #lucknow #lucknowcity #lucknowrentals #pginlucknow #roomforrent #lucknowstudents #secondhand #buyandsell #gomtinagar #aliganj #hazratganj #homingo
- Alt text for every slide.

## Stories (two per day, 1080×1920)
Story 1 (13:22) and story 2 (20:22). Rotate widely; never the same type two days running:
- Tip of the day: one practical tip for renters, buyers or sellers.
- Red flag: one warning sign when renting a room or buying second-hand.
- How to in the app: one step on one real screen from `brand/homingo-app/` (search, filters, chat or call, Sell, My Ads), or a redraw matching it with sample data labelled "Sample".
- Lucknow moment: a verified local fact, place, food or event this week.
- Teaser of today's carousel: the hook and "on our feed now".
- Download nudge: why Homingo, with "Link in bio".
Same Homingo visual system as the feed. Never show fake listings, prices or reviews as real. Keep the top 250px and bottom 300px free of text.
