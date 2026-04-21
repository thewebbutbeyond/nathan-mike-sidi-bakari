import { readFileSync } from "node:fs";

const indexSource = readFileSync("src/routes/notes.index.tsx", "utf8");
const detailSource = readFileSync("src/routes/notes.$slug.tsx", "utf8");
const rssSource = readFileSync("src/routes/rss[.]xml.ts", "utf8");
const rootSource = readFileSync("src/routes/__root.tsx", "utf8");

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
  {
    name: "note detail looks up notes by slug",
    pass:
      detailSource.includes("getNote(params.slug)") &&
      detailSource.includes("if (!note) throw notFound();"),
  },
  {
    name: "note detail has quiet not-found return path",
    pass: detailSource.includes("No note at this slug.") && detailSource.includes('to="/notes"'),
  },
  {
    name: "note detail derives SEO from note data",
    pass:
      detailSource.includes("const title = `${n.title} · Notes · Nathan Mike Sidi Bakari`;") &&
      detailSource.includes('{ name: "description", content: n.summary }') &&
      detailSource.includes('{ property: "og:description", content: n.summary }'),
  },
  {
    name: "note detail renders title date reading time and summary",
    pass:
      detailSource.includes("{n.title}") &&
      detailSource.includes("formatDate(n.date, { long: true })") &&
      detailSource.includes("{n.readingMinutes} min read") &&
      detailSource.includes("{n.summary}"),
  },
  {
    name: "note detail renders body and tags",
    pass: detailSource.includes("n.body.split") && detailSource.includes("n.tags.map"),
  },
  {
    name: "note detail supports optional cover image",
    pass:
      detailSource.includes("n.cover &&") && detailSource.includes("alt={n.coverAlt ?? n.title}"),
  },
  {
    name: "note detail has previous and next links",
    pass:
      detailSource.includes("prev:") &&
      detailSource.includes("next:") &&
      detailSource.includes("← previous") &&
      detailSource.includes("next →"),
  },
  {
    name: "note detail exposes rss link",
    pass: detailSource.includes('href="/rss.xml"') && detailSource.includes("subscribe via rss"),
  },
  {
    name: "rss route exists and serves rss xml",
    pass:
      rssSource.includes('createFileRoute("/rss.xml")') &&
      rssSource.includes('<rss version="2.0">') &&
      rssSource.includes('"content-type": "application/rss+xml; charset=utf-8"'),
  },
  {
    name: "rss items include required fields",
    pass:
      rssSource.includes("<item>") &&
      rssSource.includes("<title>${escape(n.title)}</title>") &&
      rssSource.includes("<link>${link}</link>") &&
      rssSource.includes('<guid isPermaLink="true">${link}</guid>') &&
      rssSource.includes("<pubDate>${pubDate}</pubDate>") &&
      rssSource.includes("<description>${escape(n.summary)}</description>"),
  },
  {
    name: "rss item links point to note routes",
    pass: rssSource.includes("`${origin}/notes/${n.slug}`"),
  },
  {
    name: "rss escapes core xml characters",
    pass:
      rssSource.includes('.replace(/&/g, "&amp;")') &&
      rssSource.includes('.replace(/</g, "&lt;")') &&
      rssSource.includes('.replace(/>/g, "&gt;")') &&
      rssSource.includes('.replace(/"/g, "&quot;")'),
  },
  {
    name: "root metadata exposes rss alternate link",
    pass:
      rootSource.includes('rel: "alternate"') &&
      rootSource.includes('type: "application/rss+xml"') &&
      rootSource.includes('href: "/rss.xml"'),
  },
  {
    name: "notes surfaces expose rss links",
    pass:
      indexSource.includes('href="/rss.xml"') &&
      detailSource.includes('href="/rss.xml"') &&
      indexSource.includes("subscribe via rss") &&
      detailSource.includes("subscribe via rss"),
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
