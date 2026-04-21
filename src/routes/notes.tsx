import { createFileRoute, Link } from "@tanstack/react-router";
import { PageFrame, PageHeader, fmtDate } from "@/components/site-shell";
import { NOTES } from "@/content/data";

export const Route = createFileRoute("/notes")({
  head: () => ({
    meta: [
      { title: "Notes — Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content:
          "Editorial notes — long-form writing curated for slow reading. Not a blog feed.",
      },
      { property: "og:title", content: "Notes — Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "Editorial notes — long-form writing curated for slow reading.",
      },
    ],
  }),
  component: NotesIndex,
});

function NotesIndex() {
  const ordered = [...NOTES].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <PageFrame className="max-w-4xl">
      <PageHeader
        eyebrow="Notes · editorial"
        title="A small reading room."
        description="A curated set of long-form notes. Published rarely, edited slowly, intended to be read once at length rather than skimmed many times."
      />

      <div className="mt-6 flex items-center justify-end font-mono text-[11px] uppercase tracking-[0.22em] text-ink-faint">
        <a href="/rss.xml" className="hover:text-ink">RSS feed →</a>
      </div>

      <ol className="mt-8 divide-y divide-rule border-y border-rule">
        {ordered.map((n) => (
          <li key={n.slug}>
            <Link to="/notes/$slug" params={{ slug: n.slug }} className="group block py-10">
              <div className="grid gap-4 md:grid-cols-[5rem_1fr_auto] md:items-baseline md:gap-10">
                <div className="font-display text-3xl text-lamp md:text-4xl">
                  {n.id}
                </div>
                <div>
                  <h2 className="font-display text-3xl leading-tight text-ink transition-colors group-hover:text-lamp md:text-[2.2rem]">
                    {n.title}
                  </h2>
                  <p className="mt-3 max-w-2xl font-serif text-lg italic leading-relaxed text-ink-soft">
                    {n.dek}
                  </p>
                  <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
                    {fmtDate(n.date)} · {n.readingMinutes} min read
                  </div>
                </div>
                <div className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-ink-faint md:block">
                  Read →
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </PageFrame>
  );
}
