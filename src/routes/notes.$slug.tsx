import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
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
    if (!loaderData) return { meta: [{ title: "Note , Nathan Mike Sidi Bakari" }] };
    const n = loaderData.note;
    const title = `${n.title} , Notes , Nathan Mike Sidi Bakari`;
    return {
      meta: [
        { title },
        { name: "description", content: n.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: n.summary },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: n.date },
      ],
    };
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
      <NarrowContainer>
        <div className="mb-6 text-xs">
          <Link
            to="/notes"
            className="text-ink-soft hover:text-ink underline underline-offset-4"
          >
            ← notes
          </Link>
        </div>

        <article>
          <header className="mb-8">
            <div className="text-xs text-ink-faint mb-3 tabular-nums">
              {formatDate(n.date, { long: true })} · {n.readingMinutes} min read
            </div>
            <h1 className="text-2xl sm:text-[1.8rem] font-medium tracking-tight text-ink leading-tight">
              {n.title}
            </h1>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed italic">
              {n.summary}
            </p>
          </header>

          <Prose text={n.body} />

          <div className="mt-10 pt-4 border-t border-rule flex flex-wrap gap-x-3 gap-y-1">
            {n.tags.map((t: string) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </article>

        <nav className="mt-12 pt-6 border-t border-rule grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
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

        <div className="mt-8 text-xs text-ink-faint">
          <a href="/rss.xml" className="hover:text-ink underline underline-offset-4">
            subscribe via rss
          </a>
        </div>
      </NarrowContainer>
    </SiteShell>
  );
}
