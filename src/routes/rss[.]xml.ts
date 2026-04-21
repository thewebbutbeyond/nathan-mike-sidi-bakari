import { createFileRoute } from "@tanstack/react-router";
import { notes, artifacts } from "@/content/data";

const SITE_URL = "https://nathansidibakari.com";

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: () => {
        const items = [
          ...notes.map((n) => ({
            title: n.title,
            link: `${SITE_URL}/notes/${n.slug}`,
            date: n.date,
            description: n.summary,
            category: "Note",
          })),
          ...artifacts.map((a) => ({
            title: a.title,
            link: `${SITE_URL}/artifacts/${a.slug}`,
            date: a.date,
            description: a.summary,
            category: "Artifact",
          })),
        ].sort((a, b) => b.date.localeCompare(a.date));

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Nathan Mike Sidi Bakari — A personal archive</title>
    <link>${SITE_URL}</link>
    <description>Notes and artifacts from a working archive.</description>
    <language>en</language>
    ${items
      .map(
        (it) => `<item>
      <title>${escapeXml(it.title)}</title>
      <link>${it.link}</link>
      <guid>${it.link}</guid>
      <pubDate>${new Date(it.date).toUTCString()}</pubDate>
      <category>${it.category}</category>
      <description>${escapeXml(it.description)}</description>
    </item>`,
      )
      .join("\n    ")}
  </channel>
</rss>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
