import { copyFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = "dist/client";
const indexPath = join(outputDir, "index.html");
const shellPath = join(outputDir, "_shell.html");
const fallbackPath = join(outputDir, "404.html");
const nojekyllPath = join(outputDir, ".nojekyll");
const rssPath = join(outputDir, "rss.xml");

if (!existsSync(outputDir)) {
  console.error(`Missing GitHub Pages output directory: ${outputDir}`);
  process.exit(1);
}

if (!existsSync(indexPath) && existsSync(shellPath)) {
  copyFileSync(shellPath, indexPath);
}

if (!existsSync(indexPath)) {
  console.error("GitHub Pages output is missing index.html.");
  process.exit(1);
}

if (!existsSync(rssPath)) {
  console.error("GitHub Pages output is missing rss.xml.");
  process.exit(1);
}

const rssSource = readFileSync(rssPath, "utf8");
if (rssSource.includes("localhost") || rssSource.includes("127.0.0.1")) {
  console.error("GitHub Pages rss.xml contains a local origin. Set SITE_ORIGIN for the build.");
  process.exit(1);
}

copyFileSync(existsSync(shellPath) ? shellPath : indexPath, fallbackPath);
writeFileSync(nojekyllPath, "");

console.log("Prepared GitHub Pages output.");
console.log(`- ${indexPath}`);
console.log(`- ${fallbackPath}`);
console.log(`- ${nojekyllPath}`);
console.log(`- ${rssPath}`);
