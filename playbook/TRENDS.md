# Trend radar: when the internet is reacting, we post about it in our way

Every carousel run spends a few minutes checking whether something happened recently that a lot of people are reacting to. If it fits the account, it replaces the planned topic. Being early and having a sharp angle matters more than being comprehensive.

## How to scan (5 searches at most, use WebSearch)
1. Search the account's world for the last 24 to 72 hours (search terms are in each account playbook under "Trend radar"), plus a broad "trending in India today" / "viral this week" style search.
2. Look for **mass-reaction signals**, at least two of them:
   - covered by 3 or more reputable outlets in the last 72 hours
   - described as viral, trending, "the internet is", "people are", sparked debate or outrage, memes, record views
   - an official event with a big audience (a launch, a landing, a verdict, a festival, an anniversary, a result, a big release)
   - a big public reaction: Reddit or X threads, YouTube or Instagram reels about it reported by the press
3. Confirm the core facts in at least 2 reputable sources. Note the date and source names for the caption.

## Does it fit? (all must be true)
- It sits inside the account's world, or there is an honest bridge to it (see "Our angle" in the account playbook). A space account can cover a viral eclipse photo; it cannot cover a cricket controversy.
- We can add something the news doesn't: history behind it, how it works, what it means for the reader, a surprising connection, a myth to bust.
- It is safe: not a tragedy to be turned into content, not partisan politics, not religious controversy, not about a private person, not an unverified rumour. For anything involving deaths, disasters or conflict, skip it.
- It hasn't been posted on this account already (check data/<account>.jsonl).

## Turning it into our post
Don't repeat the headline. Find the curiosity angle only we would take:
- **The hidden history**: "Everyone's talking about X. It happened once before, in 1400."
- **How it actually works**: "The internet saw the photo. Here's why it looks impossible."
- **What it means for you**: "X happened yesterday. If you're a student in Lucknow, here's what changes."
- **The myth around it**: "No, X doesn't mean Y. Here's what really happened."
- **The builder's take** (Hack Days and SurgeLabs): "X launched. Here's what you can build with it this weekend."

Mark the data line `"trend": true` and add `"trend_signal": "<what showed mass reaction>"`. The weekly review compares trend posts against planned posts, so the loop learns how much to chase trends on each account.

## Limits
- At most 1 trend post per account per day, unless the owner says otherwise in FEEDBACK.md.
- If the signal is weak or the fit is forced, post the planned topic. A forced trend post is worse than a great evergreen one.
- Log good trend ideas you skipped (wrong slot, already posted) in the learnings backlog with the date; they expire after 3 days.
