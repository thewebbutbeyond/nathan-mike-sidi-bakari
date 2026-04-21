import { createFileRoute } from "@tanstack/react-router";
import { ARTIFACTS, NOTES, SITE } from "@/content/data";

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildFeed() {
  const items = [
    ...NOTES.map((n) => ({
      title: n.title,
      link: `${SITE.url}/notes/${n.slug}`,
      date: n.date,
      description: n.dek,
    })),
    ...ARTIFACTS.map((a) => ({
      title: a.title,
      link: `${SITE.url}/artifacts/${a.slug}`,
      date: a.date,
      description: a.summary,
    })),
  ].sort((a, b) => (a.date < b.date ? 1 : -1));

  const xmlItems = items
    .map(
      (i) => `    <item>
      <title>${escape(i.title)}</title>
      <link>${escape(i.link)}</link>
      <guid>${escape(i.link)}</guid>
      <pubDate>${new Date(i.date + "T12:00:00Z").toUTCString()}</pubDate>
      <description>${escape(i.description)}</description>
    </item>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${escape(SITE.name)}</title>
    <link>${escape(SITE.url)}</link>
    <description>${escape(SITE.description)}</description>
    <language>en</language>
${xmlItems}
  </channel>
</rss>`;
}

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(buildFeed(), {
          headers: {
            "content-type": "application/rss+xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        }),
    },
  },
});
