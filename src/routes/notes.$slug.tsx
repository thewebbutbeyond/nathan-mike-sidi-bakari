import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  PageContainer,
  PageHeader,
  Prose,
} from "@/components/site-shell";
import { formatDate, noteBySlug, notesSorted } from "@/content/data";

export const Route = createFileRoute("/notes/$slug")({
  loader: ({ params }) => {
    const n = noteBySlug(params.slug);
    if (!n) throw notFound();
    const all = notesSorted();
    const idx = all.findIndex((x) => x.slug === n.slug);
    return {
      note: n,
      prev: all[idx + 1] ?? null,
      next: all[idx - 1] ?? null,
    };
  },
  head: ({ params }) => {
    const n = noteBySlug(params.slug);
    if (!n) return { meta: [{ title: "Note — Archive" }] };
    return {
      meta: [
        { title: `${n.title} — Notes ${n.number}` },
        { name: "description", content: n.summary },
        { property: "og:title", content: `${n.title} — Notes ${n.number}` },
        { property: "og:description", content: n.summary },
        { property: "article:published_time", content: n.date },
      ],
    };
  },
  notFoundComponent: () => (
    <PageContainer>
      <div className="py-24">
        <div className="eyebrow">404</div>
        <h1 className="mt-3 font-display text-4xl">No such note.</h1>
        <Link to="/notes" className="mt-4 inline-block underline">
          Back to notes
        </Link>
      </div>
    </PageContainer>
  ),
  component: NoteDetail,
});

function NoteDetail() {
  const { note: n, prev, next } = Route.useLoaderData();
  return (
    <PageContainer>
      <PageHeader
        eyebrow={`Note · ${n.number}`}
        title={n.title}
        lede={n.summary}
        meta={
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
            <span>{formatDate(n.date)}</span>
            <span>{n.reading}</span>
            <Link to="/notes" className="hover:text-foreground">
              ← All notes
            </Link>
          </div>
        }
      />
      <article className="py-12">
        <Prose text={n.body} />
      </article>

      <nav className="mt-6 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
        {prev ? (
          <Link
            to="/notes/$slug"
            params={{ slug: prev.slug }}
            className="group block bg-background p-6 transition-colors hover:bg-muted/40"
          >
            <div className="eyebrow">← Previous note</div>
            <div className="accession mt-2">{prev.number}</div>
            <h3
              className="mt-1 font-display text-[1.2rem] tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              {prev.title}
            </h3>
          </Link>
        ) : (
          <div className="bg-background p-6 text-sm text-muted-foreground">
            <div className="eyebrow">No earlier note</div>
          </div>
        )}
        {next ? (
          <Link
            to="/notes/$slug"
            params={{ slug: next.slug }}
            className="group block bg-background p-6 text-right transition-colors hover:bg-muted/40"
          >
            <div className="eyebrow">Next note →</div>
            <div className="accession mt-2">{next.number}</div>
            <h3
              className="mt-1 font-display text-[1.2rem] tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              {next.title}
            </h3>
          </Link>
        ) : (
          <div className="bg-background p-6 text-right text-sm text-muted-foreground">
            <div className="eyebrow">Most recent</div>
          </div>
        )}
      </nav>
    </PageContainer>
  );
}
