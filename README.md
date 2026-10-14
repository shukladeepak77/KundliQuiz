# Kundli Quiz

A question-and-multiple-choice version of a Janam Kundli (Honest Diagnostic
PDF, from Dharma Path USA Foundation). Instead of reading the PDF straight
through, this turns every major finding into a question with 4 options —
pick one, get immediate feedback plus the real explanation pulled from the
report. Built to hold **multiple people's kundlis**, searchable by name from
the home screen.

## Content

Each person lives in their own file under `src/data/people/`, following
`deepak-shukla.ts` as the template — a `Person` (`slug`, `name`, `lagna`,
`reportDate`) with `sections`, each holding several `{q, options, correct,
explain}` questions. `src/data/people/index.ts` lists every person; add a
new file there and add it to the `people` array to add someone new — no
other file needs to change.

Deepak Shukla's kundli (89 questions across 10 sections — Birth Chart
Basics, Planets & Houses, Strength & Affliction, Doshas & Yogas, Dasha &
Timing, D9 Navamsa Chart, Planet-to-Planet Aspects, Bhava Lordship,
Career/Marriage/Health, The Big Picture) is hand-transcribed from every
page of `astrojyotishprivate/report/deepak/latest9/20261008-161237_honest-diagnostic-deepak-shukla.pdf`
— the full 21-page report, not just a subset: every chart table (D1, D9,
Graha Sthiti, Graha Drishti, Graha Peedit, Ashtakavarga, Bhava Lordship,
Shadbala), every one of the 11 present yogas, the full 9-Mahadasha
sequence plus the MD/AD relationship and Gochar-timing technique, and
every paragraph of the written analysis (Overview, Personality & Path,
Career, Marriage, Health, Maraka Analysis, Full Dasha Timeline, Closing
Technical Summary) is represented by at least one question. All content
is hand-written — nothing is fetched or generated at runtime, so there's
no backend and no PDF parsing in the app itself.

## Navigation

Home screen is a name search (`SearchHome`) — type a name, matching people
show as cards, click through to that person's hub (`PersonHub`, the list of
quiz sections) and then into a `SectionQuiz`. Routing is a minimal
hand-rolled hash router (`src/lib/route.ts`, no library) so every screen has
a real, shareable URL:

- `#/` — search
- `#/<personSlug>` — that person's section list
- `#/<personSlug>/<sectionId>` — an active quiz

## Stack

Vite + React + TypeScript. Progress (best score per section) is saved to
`localStorage`, namespaced by `personSlug::sectionId`, as a pure per-device
convenience — nothing is sent anywhere.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Connect this repo to Netlify (or run `netlify deploy`) — `netlify.toml`
already sets the build command (`npm run build`) and publish directory
(`dist`), plus an SPA redirect so refreshing mid-quiz doesn't 404 (not
strictly required since routing is hash-based, but harmless to keep).

The page sets `<meta name="robots" content="noindex, nofollow">` since this
contains personal birth-chart details — it won't show up in search results,
but the Netlify URL itself is not private/password-protected unless you add
that separately in Netlify's site settings.

## Adding a new person's kundli

1. Get their Honest Diagnostic PDF and read through it.
2. Create `src/data/people/<their-slug>.ts`, copying the shape of
   `deepak-shukla.ts` — same `Section`/`Question` structure, new content
   transcribed from their report.
3. Add them to the `people` array in `src/data/people/index.ts`.
4. They'll now show up in the home-screen search automatically.
