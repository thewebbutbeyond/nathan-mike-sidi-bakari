import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { SiteShell, Prose } from "@/components/site-shell";
import { getNoteBySlug, formatDate, notes } from "@/content/data";

export const Route = createFileRoute("/notes/$slug")({
  loader: ({ params }) => {
    const note = getNoteBySlug(params.slug);
    if (!note) throw notFound();
    const sorted = [...notes].sort((a, b) => b.date.localeCompare(a.date));
    const idx = sorted.findIndex((n) => n.slug === note.slug);
    return {
      note,
      prev: sorted[idx + 1] ?? null,
      next: sorted[idx - 1] ?? null,
    };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.note.title} — Notes — Nathan Mike Sidi Bakari` },
          { name: "description", content: loaderData.note.summary },
          { property: "og:title", content: loaderData.note.title },
          { property: "og:description", content: loaderData.note.summary },
          { property: "og:type", content: "article" },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <SiteShell>
      <div className="py-20 text-center">
        <h1 className="font-display text-4xl text-ink">Note not found</h1>
        <Link
          to="/notes"
          className="label-mono mt-6 inline-block text-ink hover:text-accent-ink"
        >
          ← Back to notes
        </Link>
      </div>
    </SiteShell>
  ),
  component: NotePage,
});

function NotePage() {
  const { note, prev, next } = Route.useLoaderData();

  return (
    <SiteShell>
      <article className="mx-auto max-w-[42rem]">
        <nav className="label-mono mb-10">
          <Link to="/notes" className="hover:text-ink">
            ← Notes
          </Link>
        </nav>

        <header className="mb-10 text-center">
          <p className="label-mono mb-5">
            {note.number} · {formatDate(note.date)} · {note.readingMinutes} min read
          </p>
          <h1 className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink md:text-5xl">
            {note.title}
          </h1>
          <p className="mt-6 font-serif text-xl italic leading-relaxed text-ink-muted">
            {note.summary}
          </p>
          <div className="rule-double mx-auto mt-10 w-32" />
        </header>

        <Prose text={note.body} dropcap />

        <footer className="mt-16 border-t border-rule pt-8">
          <p className="label-mono mb-4 text-ink-faint">Filed under</p>
          <p className="label-mono">{note.tags.map((t) => `#${t}`).join("  ")}</p>
        </footer>
      </article>

      <nav className="mx-auto mt-16 grid max-w-[60rem] grid-cols-1 gap-px border border-rule bg-rule md:grid-cols-2">
        {prev ? (
          <Link
            to="/notes/$slug"
            params={{ slug: prev.slug }}
            className="block bg-paper p-6 transition-colors hover:bg-paper-deep"
          >
            <p className="label-mono mb-2">← Previous · {prev.number}</p>
            <p className="font-display text-xl text-ink">{prev.title}</p>
          </Link>
        ) : (
          <div className="bg-paper p-6">
            <p className="label-mono text-ink-faint">— First note —</p>
          </div>
        )}
        {next ? (
          <Link
            to="/notes/$slug"
            params={{ slug: next.slug }}
            className="block bg-paper p-6 text-right transition-colors hover:bg-paper-deep"
          >
            <p className="label-mono mb-2">Next · {next.number} →</p>
            <p className="font-display text-xl text-ink">{next.title}</p>
          </Link>
        ) : (
          <div className="bg-paper p-6 text-right">
            <p className="label-mono text-ink-faint">— Latest note —</p>
          </div>
        )}
      </nav>
    </SiteShell>
  );
}
