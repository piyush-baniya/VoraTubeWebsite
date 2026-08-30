/**
 * Crops the real VoraTube in-app logo (top-left of the Home screenshot)
 * into public/logo.png and public/favicon.png. No artwork is redesigned.
 * Run: npm run assets:logo
 */
import sharp from "sharp";
import { existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "public", "screenshots", "Home.png");
const outDir = join(root, "public");
mkdirSync(outDir, { recursive: true });

if (!existsSync(src)) {
  console.error("Source screenshot not found:", src);
  process.exit(1);
}

const meta = await sharp(src).metadata();
const W = meta.width ?? 1080;
const H = meta.height ?? 2400;

// Logo occupies roughly x 57..149, y 45..137 on the 1080-wide Home screenshot.
const left = Math.round(W * 0.0525);
const top = Math.round(H * 0.0198);
const size = Math.round(W * 0.0855);

await sharp(src)
  .extract({ left, top, width: size, height: size })
  .resize(512, 512)
  .png()
  .toFile(join(outDir, "logo.png"));

await sharp(join(outDir, "logo.png"))
  .resize(64, 64)
  .png()
  .toFile(join(outDir, "favicon.png"));

console.log(`Logo cropped from ${W}x${H} screenshot at (${left},${top}) size ${size}px`);
