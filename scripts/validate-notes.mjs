import { readFileSync } from "node:fs";

const indexSource = readFileSync("src/routes/notes.index.tsx", "utf8");

const checks = [
  {
    name: "notes index uses sortedNotes",
    pass: indexSource.includes("sortedNotes()"),
  },
  {
    name: "notes index renders note dates",
    pass: indexSource.includes("formatDate(n.date)"),
  },
  {
    name: "notes index renders titles and summaries",
    pass: indexSource.includes("n.title") && indexSource.includes("n.summary"),
  },
  {
    name: "notes index renders reading time and tags",
    pass: indexSource.includes("n.readingMinutes") && indexSource.includes("n.tags.map"),
  },
  {
    name: "notes index links to note detail",
    pass:
      indexSource.includes('to="/notes/$slug"') &&
      indexSource.includes("params={{ slug: n.slug }}"),
  },
  {
    name: "rss link is visible",
    pass: indexSource.includes('href="/rss.xml"') && indexSource.includes("subscribe via rss"),
  },
  {
    name: "empty state is quiet",
    pass: indexSource.includes("notes.length === 0") && indexSource.includes("No notes yet."),
  },
];

const failures = checks.filter((check) => !check.pass);

if (failures.length > 0) {
  console.error("Notes validation failed:");
  for (const failure of failures) {
    console.error(`- ${failure.name}`);
  }
  process.exit(1);
}

console.log("Notes validation passed.");
console.log(`Validated ${checks.length} notes index safeguards.`);
