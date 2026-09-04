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
1. Push this folder to a GitHub/GitLab/Bitbucket repository (the APK in `public/` is 69 MB, so Git Large File Storage is not required, but the repo must allow files up to ~100 MB).
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
- The Android APK is served from the site itself at `/VoraTube.apk` and is linked by the Download button (`APK_DOWNLOAD_URL` in `src/components/DownloadCTA.tsx`). The file is deliberately named `VoraTube.apk` so browsers always save it with the app's name instead of the raw build filename.
- If you later move the APK to an external host, update that single constant.
