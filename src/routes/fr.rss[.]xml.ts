import { createFileRoute } from "@tanstack/react-router";
import "@tanstack/react-start";
import { sortedLocalizedNotes } from "@/content/localized";
import { publicBasePath } from "@/lib/public-paths";

function escape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildRss(origin: string) {
  const items = sortedLocalizedNotes("fr")
    .map((note) => {
      const link = `${origin}${publicBasePath}/fr/notes/${note.slug}`;
      const pubDate = new Date(`${note.date}T00:00:00Z`).toUTCString();
      return `    <item>
      <title>${escape(note.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escape(note.summary)}</description>
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Nathan Mike Sidi Bakari · Notes</title>
    <link>${origin}${publicBasePath}/fr/notes</link>
    <description>réflexions longues et pièces éditoriales.</description>
    <language>fr</language>
${items}
  </channel>
</rss>`;
}

export const Route = createFileRoute("/fr/rss.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const url = new URL(request.url);
        const origin = (process.env.SITE_ORIGIN ?? url.origin).replace(/\/$/, "");
        const xml = buildRss(origin);
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
