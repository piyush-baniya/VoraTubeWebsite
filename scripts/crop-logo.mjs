/**
 * Derives public/favicon.png (64x64) from the source logo at public/logo.png.
 * No artwork is redesigned. Run: npm run assets:logo
 */
import sharp from "sharp";
import { existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "public", "logo.png");
const outDir = join(root, "public");
mkdirSync(outDir, { recursive: true });

if (!existsSync(src)) {
  console.error("Source logo not found:", src);
  process.exit(1);
}

await sharp(src)
  .resize(64, 64)
  .png()
  .toFile(join(outDir, "favicon.png"));

console.log("Favicon regenerated from public/logo.png");
