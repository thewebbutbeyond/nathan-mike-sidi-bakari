import { createFileRoute } from "@tanstack/react-router";
import { sortedNotes } from "@/content/data";

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildRss(origin: string) {
  const notes = sortedNotes();
  const items = notes
    .map((n) => {
      const link = `${origin}/notes/${n.slug}`;
      const pubDate = new Date(n.date + "T00:00:00Z").toUTCString();
      return `    <item>
      <title>${escape(n.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escape(n.summary)}</description>
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Nathan Mike Sidi Bakari — Notes</title>
    <link>${origin}/notes</link>
    <description>Curated long-form writing.</description>
    <language>en</language>
${items}
  </channel>
</rss>`;
}

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const url = new URL(request.url);
        const xml = buildRss(url.origin);
        return new Response(xml, {
          headers: {
            "content-type": "application/rss+xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
