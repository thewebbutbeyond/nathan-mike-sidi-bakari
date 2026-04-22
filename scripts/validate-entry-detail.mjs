import { readFileSync } from "node:fs";

const source = readFileSync("src/routes/entries.$slug.tsx", "utf8");

const checks = [
  {
    name: "unknown entries throw notFound",
    pass: source.includes("if (!a) throw notFound();"),
  },
  {
    name: "notFoundComponent is defined",
    pass: source.includes("notFoundComponent"),
  },
  {
    name: "not-found state has timeline return path",
    pass: source.includes('to="/timeline"') && source.includes("entry not found"),
  },
  {
    name: "metadata renders independently of optional fields",
    pass:
      source.includes('<MetaRow label="type">') &&
      source.includes('<MetaRow label="status">') &&
      source.includes('<MetaRow label="date">') &&
      source.includes('<MetaRow label="lenses">') &&
      source.includes('<MetaRow label="tags">'),
  },
  {
    name: "body renders independently of media",
    pass: source.includes("<Prose text={a.body} />"),
  },
  {
    name: "role is optional",
    pass: source.includes("a.role &&"),
  },
  {
    name: "outcome is optional",
    pass: source.includes("a.outcome &&"),
  },
  {
    name: "links are optional",
    pass: source.includes("a.links && a.links.length > 0"),
  },
  {
    name: "related entries are optional",
    pass: source.includes("related.length > 0"),
  },
  {
    name: "related entries link to entry detail",
    pass: source.includes('to="/entries/$slug"') && source.includes("params={{ slug: r.slug }}"),
  },
];

const failures = checks.filter((check) => !check.pass);

if (failures.length > 0) {
  console.error("Entry detail validation failed:");
  for (const failure of failures) {
    console.error(`- ${failure.name}`);
  }
  process.exit(1);
}

console.log("Entry detail validation passed.");
console.log(`Validated ${checks.length} missing/sparse entry safeguards.`);
