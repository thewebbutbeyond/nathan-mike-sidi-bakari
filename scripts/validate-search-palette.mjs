import { readFileSync } from "node:fs";

const source = readFileSync("src/components/search-palette.tsx", "utf8");

const checks = [
  {
    name: "search opens with slash shortcut",
    pass: source.includes('e.key === "/"') && source.includes("!typing"),
  },
  {
    name: "search opens with command/control k",
    pass: source.includes('e.key === "k"') && source.includes("e.metaKey || e.ctrlKey"),
  },
  {
    name: "typing guard includes inputs textareas and contenteditable",
    pass:
      source.includes('target.tagName === "INPUT"') &&
      source.includes('target.tagName === "TEXTAREA"') &&
      source.includes("target.isContentEditable"),
  },
  {
    name: "entries match title summary tags and lenses",
    pass:
      source.includes("e.title") &&
      source.includes("e.summary") &&
      source.includes("...e.tags") &&
      source.includes("...lensLabels(e.lenses)"),
  },
  {
    name: "notes match title summary and tags",
    pass:
      source.includes("n.title") && source.includes("n.summary") && source.includes("...n.tags"),
  },
  {
    name: "entry results navigate to entry detail",
    pass:
      source.includes('to: "/entries/$slug"') && source.includes("params: { slug: entry.slug }"),
  },
  {
    name: "note results navigate to note detail",
    pass: source.includes('to: "/notes/$slug"') && source.includes("params: { slug: note.slug }"),
  },
  {
    name: "keyboard can move through results",
    pass:
      source.includes('event.key === "ArrowDown"') && source.includes('event.key === "ArrowUp"'),
  },
  {
    name: "keyboard can select and close",
    pass:
      source.includes('event.key === "Enter"') &&
      source.includes('event.key === "Escape"') &&
      source.includes("data-search-result"),
  },
  {
    name: "empty result copy remains plain",
    pass: source.includes("no matches."),
  },
];

const failures = checks.filter((check) => !check.pass);

if (failures.length > 0) {
  console.error("Search palette validation failed:");
  for (const failure of failures) {
    console.error(`- ${failure.name}`);
  }
  process.exit(1);
}

console.log("Search palette validation passed.");
console.log(`Validated ${checks.length} search safeguards.`);
