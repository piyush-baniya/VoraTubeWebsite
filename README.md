# VoraTube Website

Official single-page website for **VoraTube** — a Flutter music player for Android.
Built with React + Vite + TypeScript, dark purple theme, real app screenshots.

## Development

```bash
npm install
npm run dev        # start dev server
npm run build      # type-check + production build (outputs to dist/)
npm run preview    # preview the production build
npm run assets:logo # regenerate the favicon from public/logo.png
```

## Deploying to Vercel

The project ships with `vercel.json` (framework: vite, output: `dist`).

### Option A — Git integration (recommended)
1. Push this folder to a GitHub/GitLab/Bitbucket repository.
2. On [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Vercel auto-detects Vite. Leave defaults (install: `npm install`, build: `npm run build`, output: `dist`) and click **Deploy**.
4. Every push to the production branch redeploys automatically; PRs get preview deployments.

### Option B — CLI
```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

### Local deploy check
```bash
npm run build && npx vercel deploy dist --prebuilt --prod
```

## Notes
- The primary installation CTA is **"Get it on Google Play"**. The destination is the single constant `GOOGLE_PLAY_URL` in `src/config.ts` (currently a `#` placeholder while the app is not yet published). Replace that one value once the Play listing is live and every CTA (hero, header, download section) updates automatically. Before publication, the button renders as a visibly inactive element.
- The old direct APK download (`public/VoraTube.apk`) has been retired; do not re-add APK links.
