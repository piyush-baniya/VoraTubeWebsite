// Emits static HTML for SPA routes so they work as direct filesystem hits on
// hosts where vercel.json rewrites may not be applied (e.g. /privacy-policy).
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const dist = join(process.cwd(), "dist");
const indexHtml = join(dist, "index.html");

mkdirSync(join(dist, "privacy-policy"), { recursive: true });
copyFileSync(indexHtml, join(dist, "privacy-policy", "index.html"));
copyFileSync(indexHtml, join(dist, "privacy-policy.html"));

console.log("✓ emitted static routes: /privacy-policy");
