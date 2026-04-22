import { readFileSync } from "node:fs";

const shellSource = readFileSync("src/components/site-shell.tsx", "utf8");
const stylesSource = readFileSync("src/styles.css", "utf8");
const entryMosaicSource = readFileSync("src/components/entry-mosaic.tsx", "utf8");
const noteDetailSource = readFileSync("src/routes/notes.$slug.tsx", "utf8");
const searchSource = readFileSync("src/components/search-palette.tsx", "utf8");

const checks = [
  {
    name: "site shell has main landmark",
    pass: shellSource.includes("<main"),
  },
  {
    name: "primary nav has aria label",
    pass: shellSource.includes('aria-label="Primary"'),
  },
  {
    name: "footer navs have aria labels",
    pass:
      shellSource.includes('aria-label="Sitemap"') && shellSource.includes('aria-label="Legal"'),
  },
  {
    name: "social and rss icon links have aria labels",
    pass:
      shellSource.includes('aria-label="LinkedIn"') &&
      shellSource.includes('aria-label="GitHub"') &&
      shellSource.includes('aria-label="RSS feed"'),
  },
  {
    name: "global focus-visible style exists",
    pass: stylesSource.includes(":focus-visible") && stylesSource.includes("outline-offset"),
  },
  {
    name: "search trigger and filter controls are labelled",
    pass:
      searchSource.includes('aria-label={open ? "close search" : "search"}') &&
      searchSource.includes('aria-label="Toggle filters"'),
  },
  {
    name: "meaningful note cover image has alt text",
    pass: noteDetailSource.includes("alt={n.coverAlt ?? n.title}"),
  },
  {
    name: "decorative mosaic images are hidden from screen readers",
    pass:
      entryMosaicSource.includes('alt=""') &&
      entryMosaicSource.includes('aria-label="Media mosaic"'),
  },
  {
    name: "major layout primitives include responsive classes",
    pass:
      shellSource.includes("sm:") &&
      noteDetailSource.includes("sm:") &&
      entryMosaicSource.includes("sm:"),
  },
];

const failures = checks.filter((check) => !check.pass);

if (failures.length > 0) {
  console.error("Accessibility/responsive validation failed:");
  for (const failure of failures) {
    console.error(`- ${failure.name}`);
  }
  process.exit(1);
}

console.log("Accessibility/responsive validation passed.");
console.log(`Validated ${checks.length} structural accessibility safeguards.`);
