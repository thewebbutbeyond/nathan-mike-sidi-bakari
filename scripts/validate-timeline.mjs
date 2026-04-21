import { readFileSync } from "node:fs";

const source = readFileSync("src/routes/timeline.tsx", "utf8");

const checks = [
  {
    name: "timeline uses sortedEntries",
    pass: source.includes("sortedEntries()"),
  },
  {
    name: "timeline groups by year",
    pass: source.includes("formatYear(a.date)") && source.includes("byYear"),
  },
  {
    name: "timeline links to entry detail",
    pass: source.includes('to="/entries/$slug"') && source.includes("params={{ slug: a.slug }}"),
  },
  {
    name: "timeline preserves timeline context in entry links",
    pass: source.includes('search={{ from: "timeline" }}'),
  },
  {
    name: "timeline highlights chefs-d'oeuvre entries",
    pass: source.includes("a.chefDoeuvre") && source.includes("◆ chef-d’œuvre"),
  },
  {
    name: "timeline has quiet empty state",
    pass: source.includes("all.length === 0") && source.includes("No timeline entries yet."),
  },
];

const failures = checks.filter((check) => !check.pass);

if (failures.length > 0) {
  console.error("Timeline validation failed:");
  for (const failure of failures) {
    console.error(`- ${failure.name}`);
  }
  process.exit(1);
}

console.log("Timeline validation passed.");
console.log(`Validated ${checks.length} timeline browsing safeguards.`);
