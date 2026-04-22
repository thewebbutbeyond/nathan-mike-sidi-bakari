import { createFileRoute, Link } from "@tanstack/react-router";
import { Rss } from "lucide-react";
import { Container, PageHeader, SiteShell, Tag } from "@/components/site-shell";
import { formatLocalizedDate, sortedLocalizedNotes } from "@/content/localized";
import { withBasePath } from "@/lib/public-paths";

export const Route = createFileRoute("/fr/notes/")({
  head: () => ({
    meta: [
      { title: "Notes · Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content:
          "écriture longue sur la pratique, l'ingénierie, l'investissement et l'art de finir.",
      },
      { property: "og:title", content: "Notes · Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content:
          "écriture longue sur la pratique, l'ingénierie, l'investissement et l'art de finir.",
      },
    ],
    links: [
      {
        rel: "alternate",
        type: "application/rss+xml",
        href: withBasePath("/fr/rss.xml"),
        title: "Notes",
      },
    ],
  }),
  component: NotesIndex,
});

function NotesIndex() {
  const allNotes = sortedLocalizedNotes("fr");

  return (
    <SiteShell locale="fr">
      <Container>
        <div className="flex items-start justify-between gap-6 mb-10 flex-wrap">
          <PageHeader
            eyebrow="notes"
            title="Notes depuis le carnet."
            description="Réflexions plus lentes, structure légère."
          />
          <a
            href={withBasePath("/fr/rss.xml")}
            aria-label="s'abonner via rss"
            className="inline-flex items-center gap-2 text-xs text-ink-soft hover:text-ink mt-2"
          >
            <Rss size={13} strokeWidth={1.5} />
            <span>s'abonner via rss</span>
          </a>
        </div>

        {allNotes.length === 0 ? (
          <div className="border-t border-rule">
            <p className="px-1 py-8 text-sm text-ink-soft">
              aucune note pour l'instant. les pièces plus lentes vivront ici quand elles seront
              prêtes.
            </p>
          </div>
        ) : (
          <ul className="border-t border-rule">
            {allNotes.map((note) => (
              <li key={note.slug} className="border-b border-rule">
                <Link
                  to="/fr/notes/$slug"
                  params={{ slug: note.slug }}
                  className="block px-1 py-5 hover:bg-secondary/40 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:gap-6">
                    <time className="text-xs text-ink-faint sm:w-24 shrink-0 tabular-nums pt-0.5">
                      {formatLocalizedDate(note.date, "fr")}
                    </time>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-base text-ink font-medium leading-snug">{note.title}</h2>
                      <p className="mt-2 text-sm text-ink-soft leading-relaxed max-w-2xl">
                        {note.summary}
                      </p>
                      <div className="mt-2 flex items-center gap-3 text-[11px] text-ink-faint flex-wrap">
                        <span>{note.readingMinutes} min de lecture</span>
                        <span>·</span>
                        <span className="flex gap-2">
                          {note.tags.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                          ))}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </SiteShell>
  );
}
