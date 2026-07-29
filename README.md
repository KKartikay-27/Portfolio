# Portfolio — Kumar Kartikay

Personal portfolio built with **React + Vite**.

## Develop
```bash
npm install
npm run dev      # http://localhost:5173
```

## Build
```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Deploy (GitHub Pages, automatic)
This repo ships a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds
and deploys to Pages on every push to `main`.

One-time setup after the first push:
1. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to `main` (or re-run the workflow) — the site goes live at the URL shown in the
   workflow's **deploy** step.

`vite.config.js` uses `base: './'`, so it works whether the repo is `portfolio`
(served at `/portfolio/`) or `KKartikay-27.github.io` (served at root).
