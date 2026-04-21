import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Rss } from "lucide-react";
import {
  Container,
  NarrowContainer,
  Prose,
  SiteShell,
  Tag,
} from "@/components/site-shell";
import { formatDate, getNote, sortedNotes } from "@/content/data";

export const Route = createFileRoute("/notes/$slug")({
  loader: ({ params }) => {
    const note = getNote(params.slug);
    if (!note) throw notFound();
    const all = sortedNotes();
    const idx = all.findIndex((n) => n.slug === note.slug);
    return {
      note,
      prev: idx < all.length - 1 ? all[idx + 1] : null,
      next: idx > 0 ? all[idx - 1] : null,
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Note · Nathan Mike Sidi Bakari" }] };
    const n = loaderData.note;
    const title = `${n.title} · Notes · Nathan Mike Sidi Bakari`;
    const meta = [
      { title },
      { name: "description", content: n.summary },
      { property: "og:title", content: title },
      { property: "og:description", content: n.summary },
      { property: "og:type", content: "article" },
      { property: "article:published_time", content: n.date },
    ];
    if (n.cover) {
      meta.push({ property: "og:image", content: n.cover });
      meta.push({ name: "twitter:image", content: n.cover });
    }
    return { meta };
  },
  notFoundComponent: () => (
    <SiteShell>
      <NarrowContainer>
        <div className="text-xs text-ink-faint mb-3">404 · note not found</div>
        <h1 className="text-xl font-medium">No note at this slug.</h1>
        <Link to="/notes" className="mt-6 inline-block text-sm underline">
          ← all notes
        </Link>
      </NarrowContainer>
    </SiteShell>
  ),
  component: NoteDetail,
});

function NoteDetail() {
  const { note: n, prev, next } = Route.useLoaderData();

  return (
    <SiteShell>
      <article>
        {/* breadcrumb sits in a narrow container above the hero */}
        <Container className="!py-6 sm:!py-8">
          <Link
            to="/notes"
            className="text-xs text-ink-soft hover:text-ink underline underline-offset-4"
          >
            ← notes
          </Link>
        </Container>

        {/* hero cover, full width like Gates Notes */}
        {n.cover && (
          <figure className="w-full">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <div className="aspect-[16/9] sm:aspect-[16/8] overflow-hidden bg-secondary">
                <img
                  src={n.cover}
                  alt={n.coverAlt ?? n.title}
                  width={1600}
                  height={1024}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </figure>
        )}

        {/* title block, narrow column */}
        <header className="mx-auto max-w-3xl px-5 sm:px-8 pt-10 sm:pt-14 pb-8">
          <div className="text-[11px] tracking-[0.08em] text-ink-faint mb-5">
            note · {formatDate(n.date, { long: true })} · {n.readingMinutes} min read
          </div>
          <h1 className="text-3xl sm:text-[2.4rem] font-medium tracking-tight text-ink leading-[1.15]">
            {n.title}
          </h1>
          <p className="mt-5 text-base sm:text-lg text-ink-soft leading-relaxed font-light">
            {n.summary}
          </p>
          <div className="mt-6 h-px w-12 bg-rule" />
        </header>

        {/* body, narrow reading column */}
        <div className="mx-auto max-w-3xl px-5 sm:px-8 pb-12">
          <div className="prose-archive prose-archive--lg text-ink">
            {n.body
              .split(/\n\n+/)
              .map((p, i) => (
                <p key={i}>{renderInline(p)}</p>
              ))}
          </div>

          <div className="mt-12 pt-5 border-t border-rule flex flex-wrap gap-x-3 gap-y-1">
            {n.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>

        {/* prev / next + rss */}
        <div className="mx-auto max-w-3xl px-5 sm:px-8 pb-16">
          <nav className="pt-6 border-t border-rule grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {prev ? (
              <Link
                to="/notes/$slug"
                params={{ slug: prev.slug }}
                className="block hover:bg-secondary/40 -m-2 p-2 transition-colors"
              >
                <div className="text-ink-faint mb-1">← previous</div>
                <div className="text-ink">{prev.title}</div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                to="/notes/$slug"
                params={{ slug: next.slug }}
                className="block sm:text-right hover:bg-secondary/40 -m-2 p-2 transition-colors"
              >
                <div className="text-ink-faint mb-1">next →</div>
                <div className="text-ink">{next.title}</div>
              </Link>
            ) : (
              <div />
            )}
          </nav>

          <div className="mt-8 flex items-center gap-2 text-xs text-ink-faint">
            <a
              href="/rss.xml"
              aria-label="Subscribe via RSS"
              className="inline-flex items-center gap-2 hover:text-ink"
            >
              <Rss size={13} strokeWidth={1.5} />
              <span>subscribe via rss</span>
            </a>
          </div>
        </div>
      </article>
    </SiteShell>
  );
}

function renderInline(text: string) {
  const parts: React.ReactNode[] = [];
  const regex = /\*([^*]+)\*|_([^_]+)_/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = regex.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) parts.push(<em key={i++}>{m[1]}</em>);
    else if (m[2]) parts.push(<em key={i++}>{m[2]}</em>);
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

// keep Prose imported (used elsewhere) — silence unused warning by referencing
void Prose;
