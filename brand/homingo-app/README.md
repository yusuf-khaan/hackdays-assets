# Homingo app: real UI reference (owner, 2026-10-11)

Real iPhone screenshots of the Homingo marketplace app (738×1600). Every post on @homingo._
that shows the app must match THIS interface. Either use these screenshots directly, or redraw
screens that copy this layout exactly. No more invented app designs.

| File | Screen | What it shows |
|---|---|---|
| home.jpg | Home | "Home" title with the blue house icon, "Lucknow ▾" location, search bar "Search for anything…" + filter button, category pills (All, Furniture, Electronics, Home…), "Featured for you · See all", "Range: Any budget" and "Distance: Any" dropdowns, listing cards (photo, heart, blue price "Rs 18,000", bold title, 📍 area, "13d ago", category chip), floating blue "Services" button, bottom nav |
| listing.jpg | Listing detail | back arrow, "Listing", heart and ⋯; photo carousel with dots; big title; blue price; "SALE" tag, blue verified tick, "7 views"; 📍 area; description; "Quick specs" chips (Age, Box, Bill, Type, Brand); bottom bar with a blue "Chat with seller" button and a "Call" button |
| my-ads.jpg | My Ads | "My Ads · Manage all your ads in one place"; stat cards Total Ads / Total Views / Total Inquiries; All / Active / Inactive tabs; ad cards with Views, Inquiries, "Available"; blue "Boost this ad"; Edit / Stats / Mark Sold / Relist |
| listing-rental.png | Listing (rental) | the same listing screen for a rent ad: "RENT" tag, Rs 11,000, Gomti Nagar; use it for room/flat posts |
| app-icon.png | App icon | the real Homingo app icon (blue rounded square, white H with a house); use it on CTA slides |
| search-rent.jpg | Search | Search for "rent" in Lucknow: suggestion list (rent-apartments, 1 BHK flat for rent…) |

Not in this repo: the Chats screen. It shows real people's names and must never be published.

## Design tokens (measured from the screenshots)
- Primary blue: #2563EB (buttons, prices, active tab, icons). Sampled #2560DE from the Chat button.
- Background #F5F6FA (light grey-white); cards white, radius about 28px, soft shadow; pills radius 999px with a thin #E5E7EB border.
- Text near-black #111827; secondary grey #6B7280.
- Type: a clean geometric sans (use "Sans"/Inter): bold titles, semibold prices.
- Price format: "Rs 18,000" (not ₹ in the app UI).
- Bottom nav: Home · My Ads · (blue + Sell) · Chat · Account. Floating "Services" pill bottom-right.

## Rules for posts
- Real screenshots may be shown as they are (it's the real app). Don't edit a price, title or count into something it isn't.
- Drawn/sample screens must copy this layout and be labelled "Sample" if the data is made up. Never invent listings presented as real.
- The numbers on my-ads.jpg (97 views, 11 inquiries) are the owner's own ads: don't present them as platform traction or results.
- The verified tick on listing.jpg: don't claim "all listings are verified" (not an approved fact).
- Never use a screenshot of chats or anything that shows a person's name or phone number.
