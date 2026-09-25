import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import process from "node:process";

const appRootInput = process.argv[2] ?? process.env.VORATUBE_APP_ROOT;

if (!appRootInput) {
  console.error(
    "Usage: npm run verify:legal -- <path-to-v1.4.0-app-checkout>",
  );
  process.exit(2);
}

const appRoot = resolve(appRootInput);
const files = [
  ["privacy-policy.md", "assets/legal/privacy_policy.md"],
  ["terms-of-use.md", "assets/legal/terms_of_use.md"],
];
let failed = false;

for (const [websiteFile, appFile] of files) {
  const websitePath = resolve("src/content/legal", websiteFile);
  const appPath = resolve(appRoot, appFile);

  try {
    const [websiteContent, appContent] = await Promise.all([
      readFile(websitePath),
      readFile(appPath),
    ]);

    if (!websiteContent.equals(appContent)) {
      console.error(`Mismatch: ${websiteFile} differs from ${appPath}`);
      failed = true;
    } else {
      console.log(`Match: ${websiteFile} (${websiteContent.length} bytes)`);
    }
  } catch (error) {
    console.error(`Could not compare ${websiteFile}:`, error);
    failed = true;
  }
}

if (failed) process.exit(1);
