# My Kundli Quiz

A personal, question-and-multiple-choice version of Deepak's Honest Diagnostic
Janam Kundli report (21-page PDF, generated October 08, 2026 by Dharma Path
USA Foundation). Instead of reading the PDF straight through, this turns every
major finding into a question with 4 options — pick one, get immediate
feedback plus the real explanation pulled from the report.

## Content

47 questions across 7 sections, in `src/data/questions.ts`:

1. **Birth Chart Basics** — Lagna, Moon, nakshatra, Manglik, Atmakaraka
2. **Planets & Houses** — who's where in the D1 chart, which houses are empty
3. **Strength & Affliction** — Shadbala ranking, Peedit planets, Ashtakavarga
4. **Doshas & Yogas** — 11 present / 32 absent, Yogakaraka, Parivartana
5. **Dasha & Timing** — current Mahadasha/Antardasha/Pratyantardasha, Sade Sati, Maraka analysis
6. **Career, Marriage & Health** — Arudha Lagna, D9, D10 deep-dives
7. **The Big Picture** — the report's own closing summary, distilled to 3 questions

All content is hand-transcribed from the source PDF at
`astrojyotishprivate/report/deepak/latest9/20261008-161237_honest-diagnostic-deepak-shukla.pdf`
— nothing is fetched or generated at runtime, so there's no backend and no
PDF parsing in the app itself. To update it for a newer report, edit
`src/data/questions.ts` directly.

## Stack

Vite + React + TypeScript, no router (single `useState` toggles between the
home screen and an active section). Progress (best score per section) is
saved to `localStorage` as a pure per-device convenience — nothing is sent
anywhere.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Connect this repo to Netlify (or run `netlify deploy`) — `netlify.toml`
already sets the build command (`npm run build`) and publish directory
(`dist`), plus an SPA redirect so refreshing mid-quiz doesn't 404.

The page sets `<meta name="robots" content="noindex, nofollow">` since this
contains personal birth-chart details — it won't show up in search results,
but the Netlify URL itself is not private/password-protected unless you add
that separately in Netlify's site settings.
