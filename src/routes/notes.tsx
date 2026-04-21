import { createFileRoute, Link } from "@tanstack/react-router";
import { PageContainer, PageHeader } from "@/components/site-shell";
import { formatDate, notesSorted } from "@/content/data";

export const Route = createFileRoute("/notes")({
  head: () => ({
    meta: [
      { title: "Notes — N. M. S. Bakari Archive" },
      {
        name: "description",
        content:
          "Long-form editorial writing from the archive. Curated, low-frequency, and fully edited — not a blog feed.",
      },
      { property: "og:title", content: "Notes — N. M. S. Bakari Archive" },
      {
        property: "og:description",
        content: "Long-form editorial writing from the archive.",
      },
    ],
  }),
  component: NotesIndex,
});

function NotesIndex() {
  const notes = notesSorted();
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Section D · Notes"
        title="Long-form, low frequency, fully edited."
        lede="Notes are written when there is something worth writing — not on a schedule. Each one is numbered and kept in the archive in the form it was published."
        meta={
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
            <span>{notes.length} notes</span>
            <a
              href="/rss.xml"
              className="hover:text-foreground"
            >
              RSS feed
            </a>
          </div>
        }
      />
      <section className="pt-8">
        <div className="border-t border-border">
          {notes.map((n) => (
            <Link
              key={n.slug}
              to="/notes/$slug"
              params={{ slug: n.slug }}
              className="group grid grid-cols-[4rem_1fr] gap-x-6 gap-y-1 border-b border-border py-7 transition-colors hover:bg-muted/40 sm:grid-cols-[5rem_7rem_1fr_auto]"
            >
              <span className="accession order-1">{n.number}</span>
              <span className="order-3 font-mono text-[0.72rem] text-muted-foreground sm:order-2">
                {formatDate(n.date)}
              </span>
              <div className="order-2 sm:order-3">
                <h2
                  className="font-display text-[1.5rem] leading-snug tracking-tight md:text-[1.7rem]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                >
                  {n.title}
                </h2>
                <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
                  {n.summary}
                </p>
              </div>
              <span className="order-4 hidden self-start font-mono text-[0.72rem] text-muted-foreground sm:inline">
                {n.reading}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
