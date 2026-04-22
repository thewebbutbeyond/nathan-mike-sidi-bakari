import { readFileSync } from "node:fs";

const shellSource = readFileSync("src/components/site-shell.tsx", "utf8");
const frenchHomeSource = readFileSync("src/routes/fr.index.tsx", "utf8");
const frenchFiles = [
  "src/routes/fr.about.tsx",
  "src/routes/fr.chefs-doeuvre.tsx",
  "src/routes/fr.colophon.tsx",
  "src/routes/fr.contact.tsx",
  "src/routes/fr.lenses.$slug.tsx",
  "src/routes/fr.lenses.index.tsx",
  "src/routes/fr.notes.index.tsx",
  "src/routes/fr.privacy.tsx",
  "src/routes/fr.terms.tsx",
  "src/routes/fr.timeline.tsx",
  "src/content/localized.ts",
];

const errors = [];

if (!shellSource.includes('to={locale === "fr" ? "/fr" : "/"}')) {
  errors.push("logo link is not locale-aware");
}

if (frenchHomeSource.includes(">{r.to}</span>")) {
  errors.push("french home cards still display raw route paths");
}

const fullSentenceProps = [
  /title="([a-zàâçéèêëîïôûùüÿñæœ][^"]*[.!?])"/g,
  /description="([a-zàâçéèêëîïôûùüÿñæœ][^"]*[.!?])"/g,
  /emptyMessage="([a-zàâçéèêëîïôûùüÿñæœ][^"]*[.!?])"/g,
  /content: "([a-zàâçéèêëîïôûùüÿñæœ][^"]*[.!?])"/g,
  /summary:\s*"([a-zàâçéèêëîïôûùüÿñæœ][^"]*[.!?])"/g,
  /role:\s*"([a-zàâçéèêëîïôûùüÿñæœ][^"]*[.!?])"/g,
  /outcome:\s*"([a-zàâçéèêëîïôûùüÿñæœ][^"]*[.!?])"/g,
  /coverAlt:\s*"([a-zàâçéèêëîïôûùüÿñæœ][^"]*[.!?])"/g,
  /description: "([a-zàâçéèêëîïôûùüÿñæœ][^"]*[.!?])"/g,
];

for (const file of frenchFiles) {
  const source = readFileSync(file, "utf8");
  for (const regex of fullSentenceProps) {
    for (const match of source.matchAll(regex)) {
      errors.push(`${file} starts a sentence-like copy string lowercase: "${match[1]}"`);
    }
  }
}

if (errors.length > 0) {
  console.error("French localization validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("French localization validation passed.");
console.log(`Validated locale-aware shell and ${frenchFiles.length} French copy files.`);
