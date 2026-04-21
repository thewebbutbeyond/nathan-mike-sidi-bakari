import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site-shell";
import { notes, formatDate } from "@/content/data";

export const Route = createFileRoute("/notes")({
  head: () => ({
    meta: [
      { title: "Notes — Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content: "Long-form editorial writing. Curated, not streamed.",
      },
      { property: "og:title", content: "Notes — Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "Long-form editorial writing on craft, capital, and quiet work.",
      },
    ],
  }),
  component: NotesIndex,
});

function NotesIndex() {
  const sorted = [...notes].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Section · IV"
        title="Notes"
        lede="Long-form editorial writing on craft, capital, and the quiet middle of things. Published when there is something worth saying — not on a schedule."
        meta={
          <div className="flex items-baseline gap-6">
            <p className="label-mono">{notes.length} entries</p>
            <a href="/rss.xml" className="label-mono text-ink hover:text-accent-ink">
              Subscribe via RSS →
            </a>
          </div>
        }
      />

      <ul className="border-t border-rule">
        {sorted.map((n) => (
          <li key={n.slug} className="border-b border-rule">
            <Link
              to="/notes/$slug"
              params={{ slug: n.slug }}
              className="grid grid-cols-12 gap-4 py-10 transition-colors hover:bg-paper-deep/40 md:gap-10 md:py-12"
            >
              <div className="col-span-12 md:col-span-2">
                <p className="font-display text-2xl text-ink-faint">{n.number}</p>
                <p className="label-mono mt-3">{formatDate(n.date, "short")}</p>
                <p className="label-mono mt-1 text-ink-faint">{n.readingMinutes} min</p>
              </div>
              <div className="col-span-12 md:col-span-10">
                <h2 className="font-display text-3xl leading-tight text-ink md:text-[2.25rem]">
                  {n.title}
                </h2>
                <p className="mt-4 max-w-3xl font-serif text-lg leading-relaxed text-ink-muted">
                  {n.summary}
                </p>
                <p className="label-mono mt-4 text-ink-faint">
                  {n.tags.map((t) => `#${t}`).join("  ")}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </SiteShell>
  );
}
