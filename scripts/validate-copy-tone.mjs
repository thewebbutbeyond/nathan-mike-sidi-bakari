import { readFileSync } from "node:fs";

const files = [
  "src/routes/index.tsx",
  "src/routes/notes.index.tsx",
  "src/routes/contact.tsx",
  "src/routes/about.tsx",
  "src/routes/chefs-doeuvre.tsx",
  "src/routes/lenses.index.tsx",
];

const bannedPhrases = [
  "not introductions",
  "(not so) random thoughts",
  "messages are more than welcome!",
  "hire me",
  "book a call",
  "thought leader",
  "world-class",
  "elite",
  "high-achiever",
  "roughly half",
  "i read everything",
];

const requiredPhrases = [
  {
    file: "src/routes/contact.tsx",
    phrase: "Messages are welcome",
  },
  {
    file: "src/routes/notes.index.tsx",
    phrase: "Notes from the logbook.",
  },
  {
    file: "src/routes/lenses.index.tsx",
    phrase: "Four ways of looking through the same archive.",
  },
];

const errors = [];

for (const file of files) {
  const source = readFileSync(file, "utf8");
  const lower = source.toLowerCase();

  for (const phrase of bannedPhrases) {
    if (lower.includes(phrase)) {
      errors.push(`${file} contains banned tone phrase: "${phrase}"`);
    }
  }
}

for (const { file, phrase } of requiredPhrases) {
  const source = readFileSync(file, "utf8");
  if (!source.includes(phrase)) {
    errors.push(`${file} is missing required copy tone phrase: "${phrase}"`);
  }
}

if (errors.length > 0) {
  console.error("Copy tone validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Copy tone validation passed.");
console.log(`Scanned ${files.length} public route files for known tone regressions.`);
