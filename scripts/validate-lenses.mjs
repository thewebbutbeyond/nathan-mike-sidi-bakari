import { readFileSync } from "node:fs";

const dataSource = readFileSync("src/content/data.ts", "utf8");
const indexSource = readFileSync("src/routes/lenses.index.tsx", "utf8");
const detailSource = readFileSync("src/routes/lenses.$slug.tsx", "utf8");

const checks = [
  {
    name: "data defines the expected lens slugs",
    pass: ["engineer", "entrepreneur", "investor", "artist"].every((slug) =>
      dataSource.includes(`slug: "${slug}"`),
    ),
  },
  {
    name: "entriesByLens preserves multi-lens membership",
    pass: dataSource.includes("a.lenses.includes(slug)"),
  },
  {
    name: "lenses index maps all lens definitions",
    pass: indexSource.includes("LENSES.map"),
  },
  {
    name: "lenses index shows entry counts",
    pass: indexSource.includes("items.length") && indexSource.includes("entries"),
  },
  {
    name: "lenses index shows preview entries",
    pass:
      indexSource.includes("preview = items.slice(0, 3)") && indexSource.includes("preview.map"),
  },
  {
    name: "lens detail uses entriesByLens",
    pass: detailSource.includes("entriesByLens(slug)"),
  },
  {
    name: "invalid lens slugs throw notFound",
    pass: detailSource.includes("if (!meta) throw notFound();"),
  },
  {
    name: "invalid lens state returns to lenses index",
    pass: detailSource.includes('to="/lenses"') && detailSource.includes("Lens not found."),
  },
  {
    name: "lens detail uses lens-specific empty state",
    pass: detailSource.includes("No entries through this lens yet."),
  },
];

const failures = checks.filter((check) => !check.pass);

if (failures.length > 0) {
  console.error("Lens browsing validation failed:");
  for (const failure of failures) {
    console.error(`- ${failure.name}`);
  }
  process.exit(1);
}

console.log("Lens browsing validation passed.");
console.log(`Validated ${checks.length} lens browsing safeguards.`);
