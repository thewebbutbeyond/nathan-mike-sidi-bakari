import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Rss } from "lucide-react";
import type { ReactNode } from "react";
import { Container, SiteShell, Tag } from "@/components/site-shell";
import { formatLocalizedDate, getLocalizedNote, sortedLocalizedNotes } from "@/content/localized";
import { withBasePath } from "@/lib/public-paths";

export const Route = createFileRoute("/fr/notes/$slug")({
  loader: ({ params }) => {
    const note = getLocalizedNote(params.slug, "fr");
    if (!note) throw notFound();
    const all = sortedLocalizedNotes("fr");
    const idx = all.findIndex((item) => item.slug === note.slug);
    return {
      note,
      prev: idx < all.length - 1 ? all[idx + 1] : null,
      next: idx > 0 ? all[idx - 1] : null,
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Note · Nathan Mike Sidi Bakari" }] };
    const note = loaderData.note;
    const title = `${note.title} · Notes · Nathan Mike Sidi Bakari`;
    const meta = [
      { title },
      { name: "description", content: note.summary },
      { property: "og:title", content: title },
      { property: "og:description", content: note.summary },
      { property: "og:type", content: "article" },
      { property: "article:published_time", content: note.date },
    ];
    if (note.cover) {
      meta.push({ property: "og:image", content: note.cover });
      meta.push({ name: "twitter:image", content: note.cover });
    }
    return { meta };
  },
  notFoundComponent: () => (
    <SiteShell locale="fr">
      <Container>
        <div className="text-xs text-ink-faint mb-3">404 · note introuvable</div>
        <h1 className="text-xl font-medium">aucune note à cette adresse.</h1>
        <Link to="/fr/notes" className="mt-6 inline-block text-sm underline">
          ← toutes les notes
        </Link>
      </Container>
    </SiteShell>
  ),
  component: NoteDetail,
});

function NoteDetail() {
  const { note, prev, next } = Route.useLoaderData();

  return (
    <SiteShell locale="fr">
      <article>
        <Container className="!py-6 sm:!py-8">
          <Link
            to="/fr/notes"
            className="text-xs text-ink-soft hover:text-ink underline underline-offset-4"
          >
            ← notes
          </Link>
        </Container>

        {note.cover && (
          <figure className="w-full">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <div className="aspect-[16/9] sm:aspect-[16/8] overflow-hidden bg-secondary">
                <img
                  src={note.cover}
                  alt={note.coverAlt ?? note.title}
                  width={1600}
                  height={1024}
                  className="h-full w-full object-cover"
                />
              </div>
              {note.coverCredit && (
                <figcaption className="mt-2 text-[11px] text-ink-faint">
                  {note.coverCredit}
                </figcaption>
              )}
            </div>
          </figure>
        )}

        <header className="mx-auto max-w-3xl px-5 sm:px-8 pt-10 sm:pt-14 pb-8">
          <div className="text-[11px] tracking-[0.08em] text-ink-faint mb-5">
            note · {formatLocalizedDate(note.date, "fr", { long: true })} · {note.readingMinutes}{" "}
            min de lecture
          </div>
          <h1 className="text-3xl sm:text-[2.4rem] font-medium tracking-tight text-ink leading-[1.15]">
            {note.title}
          </h1>
          <p className="mt-5 text-base sm:text-lg text-ink-soft leading-relaxed font-light">
            {note.summary}
          </p>
          <div className="mt-6 h-px w-12 bg-rule" />
        </header>

        <div className="mx-auto max-w-3xl px-5 sm:px-8 pb-12">
          <div className="prose-archive prose-archive--lg text-ink">
            {note.body.split(/\n\n+/).map((paragraph: string, index: number) => (
              <p key={index}>{renderInline(paragraph)}</p>
            ))}
          </div>

          <div className="mt-12 pt-5 border-t border-rule flex flex-wrap gap-x-3 gap-y-1">
            {note.tags.map((tag: string) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-5 sm:px-8 pb-16">
          <nav className="pt-6 border-t border-rule grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {prev ? (
              <Link
                to="/fr/notes/$slug"
                params={{ slug: prev.slug }}
                className="block hover:bg-secondary/40 -m-2 p-2 transition-colors"
              >
                <div className="text-ink-faint mb-1">← précédent</div>
                <div className="text-ink">{prev.title}</div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                to="/fr/notes/$slug"
                params={{ slug: next.slug }}
                className="block sm:text-right hover:bg-secondary/40 -m-2 p-2 transition-colors"
              >
                <div className="text-ink-faint mb-1">suivant →</div>
                <div className="text-ink">{next.title}</div>
              </Link>
            ) : (
              <div />
            )}
          </nav>

          <div className="mt-8 flex items-center gap-2 text-xs text-ink-faint">
            <a
              href={withBasePath("/fr/rss.xml")}
              aria-label="s'abonner via RSS"
              className="inline-flex items-center gap-2 hover:text-ink"
            >
              <Rss size={13} strokeWidth={1.5} />
              <span>s'abonner via rss</span>
            </a>
          </div>
        </div>
      </article>
    </SiteShell>
  );
}

function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /\*([^*]+)\*|_([^_]+)_/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let index = 0;
  while ((match = regex.exec(text))) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    if (match[1]) parts.push(<em key={index++}>{match[1]}</em>);
    else if (match[2]) parts.push(<em key={index++}>{match[2]}</em>);
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
