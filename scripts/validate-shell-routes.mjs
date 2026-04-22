import { existsSync, readFileSync } from "node:fs";

const routeFiles = {
  "/": "src/routes/index.tsx",
  "/chefs-doeuvre": "src/routes/chefs-doeuvre.tsx",
  "/timeline": "src/routes/timeline.tsx",
  "/lenses": "src/routes/lenses.tsx",
  "/lenses/": "src/routes/lenses.index.tsx",
  "/lenses/$slug": "src/routes/lenses.$slug.tsx",
  "/notes": "src/routes/notes.tsx",
  "/notes/": "src/routes/notes.index.tsx",
  "/notes/$slug": "src/routes/notes.$slug.tsx",
  "/entries/$slug": "src/routes/entries.$slug.tsx",
  "/about": "src/routes/about.tsx",
  "/contact": "src/routes/contact.tsx",
  "/privacy": "src/routes/privacy.tsx",
  "/terms": "src/routes/terms.tsx",
  "/colophon": "src/routes/colophon.tsx",
  "/rss.xml": "src/routes/rss[.]xml.ts",
  "/fr": "src/routes/fr.tsx",
  "/fr/": "src/routes/fr.index.tsx",
  "/fr/chefs-doeuvre": "src/routes/fr.chefs-doeuvre.tsx",
  "/fr/timeline": "src/routes/fr.timeline.tsx",
  "/fr/lenses": "src/routes/fr.lenses.tsx",
  "/fr/lenses/": "src/routes/fr.lenses.index.tsx",
  "/fr/lenses/$slug": "src/routes/fr.lenses.$slug.tsx",
  "/fr/notes": "src/routes/fr.notes.tsx",
  "/fr/notes/": "src/routes/fr.notes.index.tsx",
  "/fr/notes/$slug": "src/routes/fr.notes.$slug.tsx",
  "/fr/entries/$slug": "src/routes/fr.entries.$slug.tsx",
  "/fr/about": "src/routes/fr.about.tsx",
  "/fr/contact": "src/routes/fr.contact.tsx",
  "/fr/privacy": "src/routes/fr.privacy.tsx",
  "/fr/terms": "src/routes/fr.terms.tsx",
  "/fr/colophon": "src/routes/fr.colophon.tsx",
  "/fr/rss.xml": "src/routes/fr.rss[.]xml.ts",
};

const requiredRoutes = [
  "/",
  "/chefs-doeuvre",
  "/timeline",
  "/lenses",
  "/lenses/",
  "/lenses/$slug",
  "/notes",
  "/notes/",
  "/notes/$slug",
  "/entries/$slug",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/colophon",
  "/rss.xml",
  "/fr",
  "/fr/",
  "/fr/chefs-doeuvre",
  "/fr/timeline",
  "/fr/lenses",
  "/fr/lenses/",
  "/fr/lenses/$slug",
  "/fr/notes",
  "/fr/notes/",
  "/fr/notes/$slug",
  "/fr/entries/$slug",
  "/fr/about",
  "/fr/contact",
  "/fr/privacy",
  "/fr/terms",
  "/fr/colophon",
  "/fr/rss.xml",
];

const filesToScan = [
  "src/components/site-shell.tsx",
  "src/components/search-palette.tsx",
  "src/components/entry-list.tsx",
  "src/routes/__root.tsx",
  "src/routes/index.tsx",
  "src/routes/entries.$slug.tsx",
  "src/routes/lenses.$slug.tsx",
  "src/routes/lenses.index.tsx",
  "src/routes/notes.$slug.tsx",
  "src/routes/notes.index.tsx",
  "src/routes/timeline.tsx",
  "src/routes/fr.index.tsx",
  "src/routes/fr.entries.$slug.tsx",
  "src/routes/fr.lenses.$slug.tsx",
  "src/routes/fr.lenses.index.tsx",
  "src/routes/fr.notes.$slug.tsx",
  "src/routes/fr.notes.index.tsx",
  "src/routes/fr.timeline.tsx",
];

const knownRoutes = new Set(Object.keys(routeFiles));
const intentionalExternal = [
  "https://www.linkedin.com/in/nathan-sidi-bakari-686007199",
  "https://github.com/Nabakator",
  "https://www.thewebbutbeyond.com/",
  "https://fonts.googleapis.com",
  "https://fonts.gstatic.com",
  "mailto:nathan.sidibakari@icloud.com",
];

const errors = [];

for (const route of requiredRoutes) {
  const file = routeFiles[route];
  if (!file || !existsSync(file)) {
    errors.push(`Missing route file for ${route}: ${file ?? "(not mapped)"}`);
  }
}

for (const file of filesToScan) {
  if (!existsSync(file)) {
    errors.push(`Missing scan target: ${file}`);
    continue;
  }

  const source = readFileSync(file, "utf8");
  const routeMatches = [...source.matchAll(/\bto=["']([^"']+)["']/g)].map((match) => match[1]);
  const navigateMatches = [...source.matchAll(/\bto:\s*["']([^"']+)["']/g)].map(
    (match) => match[1],
  );
  const internalHrefMatches = [...source.matchAll(/\bhref=["'](\/[^"']+)["']/g)].map(
    (match) => match[1],
  );
  const externalHrefMatches = [
    ...source.matchAll(/\bhref=["'](https?:\/\/[^"']+|mailto:[^"']+)["']/g),
  ].map((match) => match[1]);

  for (const route of [...routeMatches, ...navigateMatches, ...internalHrefMatches]) {
    if (!knownRoutes.has(route)) {
      errors.push(`${file} references unknown internal route: ${route}`);
    }
  }

  for (const href of externalHrefMatches) {
    if (!intentionalExternal.includes(href)) {
      errors.push(`${file} references unreviewed external URL: ${href}`);
    }
  }
}

const shellSource = readFileSync("src/components/site-shell.tsx", "utf8");
const searchSource = readFileSync("src/components/search-palette.tsx", "utf8");

for (const route of ["/chefs-doeuvre", "/timeline", "/lenses", "/notes", "/about", "/contact"]) {
  if (!shellSource.includes(`to="${route}"`) && !shellSource.includes(`to: "${route}"`)) {
    errors.push(`SiteShell does not include required navigation route ${route}`);
  }
}

if (!shellSource.includes("activeProps")) {
  errors.push("SiteShell does not define active navigation styling.");
}

if (!shellSource.includes("<SearchTrigger locale={locale} />")) {
  errors.push("SiteShell does not render SearchTrigger.");
}

if (!searchSource.includes('aria-label={open ? "close search" : "search"}')) {
  errors.push("SearchTrigger is missing the expected accessible label.");
}

if (!searchSource.includes('target.tagName === "INPUT"')) {
  errors.push("Search keyboard shortcut guard does not account for input elements.");
}

if (!searchSource.includes('target.tagName === "TEXTAREA"')) {
  errors.push("Search keyboard shortcut guard does not account for textarea elements.");
}

if (!searchSource.includes("target.isContentEditable")) {
  errors.push("Search keyboard shortcut guard does not account for contenteditable elements.");
}

if (errors.length > 0) {
  console.error("Shell route validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Shell route validation passed.");
console.log(
  `Validated ${requiredRoutes.length} route patterns and ${filesToScan.length} source files.`,
);
