# The Foreman — Marketing Site

Landing page and waitlist for [The Foreman](https://github.com/hellotheforeman/The-Foreman) — a WhatsApp-based business assistant for UK tradespeople.

## Stack

- Pure HTML + CSS (no frameworks, no build step)
- Google Fonts (Inter)
- Netlify Forms for waitlist signups (works out of the box on Netlify)

## Deploying

### Option 1: Netlify (recommended — free, forms work automatically)

1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Select this repo, deploy
4. Done — form submissions go to your Netlify dashboard

### Option 2: GitHub Pages

1. Go to repo Settings → Pages
2. Set source to `main` branch, root directory
3. Done — site is live at `https://hellotheforeman.github.io/the-foreman-site`

> Note: GitHub Pages won't handle the Netlify form. For a working waitlist on GitHub Pages, replace the form with a Tally.so or Typeform embed.

## Files

- `index.html` — main landing page
- `style.css` — all styles
- `thanks.html` — post-submission thank-you page
- `README.md` — this file
