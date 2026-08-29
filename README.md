# The Foreman — Marketing Site

Landing page for [The Foreman](https://github.com/hellotheforeman/The-Foreman) — a WhatsApp-based business assistant for UK tradespeople. There's no waitlist or signup form — the single call to action throughout the site is a direct WhatsApp link (`wa.me/447888862241`), since getting started just means sending a message.

## Stack

- Pure HTML + CSS (no frameworks, no build step)
- Google Fonts (Inter)
- Google Analytics, Meta Pixel and Metricool — gated behind a cookie consent banner (`consent.js`), nothing loads until the visitor accepts

## Deploying

### Option 1: Netlify (recommended)

1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Select this repo, deploy

### Option 2: GitHub Pages

1. Go to repo Settings → Pages
2. Set source to `main` branch, root directory
3. Done — site is live at `https://hellotheforeman.github.io/the-foreman-site`

## Files

- `index.html` — main landing page
- `faq.html` — FAQ page
- `privacy.html` — privacy policy
- `style.css` — all styles
- `consent.js` — cookie consent banner + gated analytics loading, shared across all three pages
- `README.md` — this file
