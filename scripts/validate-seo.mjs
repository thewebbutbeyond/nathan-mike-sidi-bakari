import { readFileSync } from "node:fs";

const staticRoutes = [
  "src/routes/__root.tsx",
  "src/routes/chefs-doeuvre.tsx",
  "src/routes/timeline.tsx",
  "src/routes/lenses.index.tsx",
  "src/routes/notes.index.tsx",
  "src/routes/about.tsx",
  "src/routes/contact.tsx",
  "src/routes/colophon.tsx",
  "src/routes/privacy.tsx",
  "src/routes/terms.tsx",
];

const dynamicRoutes = [
  {
    file: "src/routes/entries.$slug.tsx",
    required: ["`${a.title} · Nathan Mike Sidi Bakari`", "content: a.summary"],
  },
  {
    file: "src/routes/notes.$slug.tsx",
    required: ["`${n.title} · Notes · Nathan Mike Sidi Bakari`", "content: n.summary"],
  },
  {
    file: "src/routes/lenses.$slug.tsx",
    required: ["loaderData.meta.label", "content: loaderData.meta.description"],
  },
];

const bannedMetadataPhrases = [
  "hire me",
  "book a call",
  "thought leader",
  "world-class",
  "elite",
  "high-achiever",
  "not introductions",
];

const errors = [];

for (const file of staticRoutes) {
  const source = readFileSync(file, "utf8");
  const lower = source.toLowerCase();

  if (!source.includes("{ title:")) {
    errors.push(`${file} is missing a title metadata entry`);
  }
  if (!source.includes('name: "description"')) {
    errors.push(`${file} is missing a description metadata entry`);
  }
  if (!source.includes('property: "og:title"')) {
    errors.push(`${file} is missing og:title metadata`);
  }
  if (!source.includes('property: "og:description"')) {
    errors.push(`${file} is missing og:description metadata`);
  }

  for (const phrase of bannedMetadataPhrases) {
    if (lower.includes(phrase)) {
      errors.push(`${file} metadata/source contains overstatement phrase: "${phrase}"`);
    }
  }
}

for (const { file, required } of dynamicRoutes) {
  const source = readFileSync(file, "utf8");
  for (const snippet of required) {
    if (!source.includes(snippet)) {
      errors.push(`${file} is missing dynamic metadata snippet: ${snippet}`);
    }
  }
  if (!source.includes('property: "og:title"') || !source.includes('property: "og:description"')) {
    errors.push(`${file} is missing Open Graph title/description metadata`);
  }
}

const rootSource = readFileSync("src/routes/__root.tsx", "utf8");
const notesIndexSource = readFileSync("src/routes/notes.index.tsx", "utf8");

for (const [name, source] of [
  ["root", rootSource],
  ["notes index", notesIndexSource],
]) {
  if (
    !source.includes('rel: "alternate"') ||
    !source.includes('type: "application/rss+xml"') ||
    !source.includes('href: "/rss.xml"')
  ) {
    errors.push(`${name} is missing RSS alternate metadata`);
  }
}

if (errors.length > 0) {
  console.error("SEO metadata validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("SEO metadata validation passed.");
console.log(`Validated ${staticRoutes.length + dynamicRoutes.length} public route metadata files.`);
