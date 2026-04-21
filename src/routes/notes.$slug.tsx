import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageFrame, Prose, fmtDate } from "@/components/site-shell";
import { NOTES, Note, getNote } from "@/content/data";

export const Route = createFileRoute("/notes/$slug")({
  loader: ({ params }) => {
    const note = getNote(params.slug);
    if (!note) throw notFound();
    const ordered = [...NOTES].sort((a, b) => (a.date < b.date ? 1 : -1));
    const idx = ordered.findIndex((n) => n.slug === note.slug);
    return {
      note,
      prev: ordered[idx + 1] ?? null,
      next: ordered[idx - 1] ?? null,
    };
  },
  head: ({ loaderData }) => {
    const n = loaderData?.note;
    const title = n ? `${n.title} — Notes` : "Note";
    const desc = n?.dek ?? "A note from the archive.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: NoteDetail,
  notFoundComponent: () => (
    <PageFrame>
      <h1 className="font-display text-3xl">Note not on file.</h1>
      <Link
        to="/notes"
        className="mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft hover:text-ink"
      >
        ← Return to notes
      </Link>
    </PageFrame>
  ),
});

function NoteDetail() {
  const { note, prev, next } = Route.useLoaderData() as {
    note: Note;
    prev: Note | null;
    next: Note | null;
  };

  return (
    <article className="mx-auto max-w-2xl px-6 py-16 md:px-8 md:py-28">
      <nav className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-faint">
        <Link to="/notes" className="hover:text-ink">← Notes</Link>
      </nav>

      <header className="mt-10 text-center">
        <div className="font-display text-4xl text-lamp md:text-5xl">{note.id}</div>
        <div className="mx-auto mt-6 h-px w-12 bg-rule" />
        <h1 className="mt-6 font-display text-[2.4rem] leading-[1.05] tracking-tight md:text-5xl">
          {note.title}
        </h1>
        <p className="mt-6 font-serif text-lg italic text-ink-soft md:text-xl">
          {note.dek}
        </p>
        <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
          {fmtDate(note.date)} · {note.readingMinutes} min read
        </div>
      </header>

      <div className="mx-auto mt-16 h-px w-16 bg-rule" />

      <div className="mt-14">
        <Prose markdown={note.body} dropcap />
      </div>

      <div className="mx-auto mt-20 h-px w-16 bg-rule" />

      <nav className="mt-14 grid gap-8 border-t border-rule pt-8 md:grid-cols-2">
        <div>
          {prev && (
            <Link to="/notes/$slug" params={{ slug: prev.slug }} className="group block">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
                Earlier · Note {prev.id}
              </div>
              <div className="mt-2 font-display text-xl text-ink group-hover:text-lamp">
                {prev.title}
              </div>
            </Link>
          )}
        </div>
        <div className="md:text-right">
          {next && (
            <Link to="/notes/$slug" params={{ slug: next.slug }} className="group block">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
                Later · Note {next.id}
              </div>
              <div className="mt-2 font-display text-xl text-ink group-hover:text-lamp">
                {next.title}
              </div>
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}
