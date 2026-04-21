import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, PageHeader, SiteShell, Tag } from "@/components/site-shell";
import { formatDate, sortedNotes } from "@/content/data";

export const Route = createFileRoute("/notes")({
  head: () => ({
    meta: [
      { title: "Notes · Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content:
          "Curated long-form writing on practice, engineering, investing, and the work of finishing.",
      },
      { property: "og:title", content: "Notes · Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content:
          "Curated long-form writing on practice, engineering, investing, and the work of finishing.",
      },
    ],
    links: [
      { rel: "alternate", type: "application/rss+xml", href: "/rss.xml", title: "Notes" },
    ],
  }),
  component: NotesIndex,
});

function NotesIndex() {
  const notes = sortedNotes();

  return (
    <SiteShell>
      <Container>
        <div className="flex items-start justify-between gap-6 mb-10 flex-wrap">
          <PageHeader
            eyebrow="notes"
            title="(Not so) random thoughts."
            description="Irregular reflections, loosely structured."
          />
          <a
            href="/rss.xml"
            className="text-xs text-ink-soft hover:text-ink underline underline-offset-4 mt-2"
          >
            rss feed →
          </a>
        </div>

        <ul className="border-t border-rule">
          {notes.map((n) => (
            <li key={n.slug} className="border-b border-rule">
              <Link
                to="/notes/$slug"
                params={{ slug: n.slug }}
                className="block px-1 py-5 hover:bg-secondary/40 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:gap-6">
                  <time className="text-xs text-ink-faint sm:w-24 shrink-0 tabular-nums pt-0.5">
                    {formatDate(n.date)}
                  </time>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-base text-ink font-medium leading-snug">
                      {n.title}
                    </h2>
                    <p className="mt-2 text-sm text-ink-soft leading-relaxed max-w-2xl">
                      {n.summary}
                    </p>
                    <div className="mt-2 flex items-center gap-3 text-[11px] text-ink-faint flex-wrap">
                      <span>{n.readingMinutes} min read</span>
                      <span>·</span>
                      <span className="flex gap-2">
                        {n.tags.map((t) => (
                          <Tag key={t}>{t}</Tag>
                        ))}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </SiteShell>
  );
}
