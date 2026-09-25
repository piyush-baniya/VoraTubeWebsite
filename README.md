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
- The primary installation CTA is the official **"Get it on Google Play" badge graphic**, rendered by `src/components/GooglePlayCTA.tsx` (used in the navbar, hero and download section). Its destination is the single constant `GOOGLE_PLAY_URL` in `src/config.ts`, currently set to the live Play listing (`com.piyushbaniya.vora_tube`). Change that one value and every Play CTA updates automatically. Setting it back to `#` makes the badge render as a visibly inactive placeholder (`PLAY_URL_CONFIGURED` becomes `false`).
- The companion **"Get it on Apkpure"** graphic is rendered from the supplied `public/apkpure-badge.png` artwork by `src/components/ApkpureCTA.tsx` beside the Google Play badge in the navbar, hero and download section. Its destination is `APKPURE_URL` in `src/config.ts`.
- The Google Play badge artwork is vendored at `public/play-badge.png` — Google's unmodified `en_badge_web_generic.png` (646×250) from [play.google.com/intl/en_us/badges](https://play.google.com/intl/en_us/badges). Do **not** crop, recolor, or rebuild it; Google's brand guidelines forbid modifying the badge. The transparent padding baked into the file *is* the required clear space (¼ of the badge height), so size it only via the `.play-badge` rules in `src/index.css` (default 74px / `--small` 48px / `--big` 80px rendered box). Never scale below the 28px minimum badge height.
- The old direct APK download (`public/VoraTube.apk`) has been retired; the APKPure link points to its app listing, not a bundled APK.

## Legal content synchronization

The website copies of the legal documents are `src/content/legal/privacy-policy.md` and `src/content/legal/terms-of-use.md`. They are byte-for-byte copies of the v1.4.0 app assets and should be replaced together with the app's `assets/legal/privacy_policy.md` and `assets/legal/terms_of_use.md` files.

With a checkout of the v1.4.0 app, verify the copies without adding a dependency:

```bash
npm run verify:legal -- "C:\\path\\to\\VoraTube"
```

The command exits unsuccessfully if either website file differs from its authoritative app asset.
