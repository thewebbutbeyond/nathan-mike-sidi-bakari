import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ARTIFACTS,
  COLLECTIONS,
  NOTES,
  SITE,
  selectedArtifacts,
} from "@/content/data";
import { fmtDateShort } from "@/components/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — Personal archive` },
      { name: "description", content: SITE.description },
      { property: "og:title", content: `${SITE.name} — Personal archive` },
      { property: "og:description", content: SITE.description },
    ],
  }),
  component: PortalPage,
});

function PortalPage() {
  const selected = selectedArtifacts().slice(0, 3);
  const recent = [...ARTIFACTS]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 5);
  const note = NOTES[0];
  const counts = {
    artifacts: ARTIFACTS.length,
    notes: NOTES.length,
    years: new Set(ARTIFACTS.map((a) => a.year)).size,
  };

  return (
    <div className="mx-auto max-w-6xl px-6 md:px-10">
      {/* Portal */}
      <section className="grid gap-12 border-b border-rule py-16 md:grid-cols-12 md:gap-16 md:py-28">
        <div className="md:col-span-8">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-lamp">
            Portal · Vol. {new Date().getFullYear() - 2017}
          </div>
          <h1 className="mt-6 font-display text-[2.4rem] leading-[1.05] tracking-tight md:text-[4.2rem]">
            A personal archive of work, notes, and traces.
          </h1>
          <p className="mt-8 max-w-2xl font-serif text-lg leading-relaxed text-ink-soft md:text-xl">
            A self-addressed record kept across engineering, entrepreneurship, investing, and
            art. Catalogued slowly, written quietly, opened to the public for the small
            number of readers it might serve.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft">
            <Link to="/selected" className="hover:text-ink">→ Selected</Link>
            <Link to="/timeline" className="hover:text-ink">→ Timeline</Link>
            <Link to="/collections" className="hover:text-ink">→ Collections</Link>
            <Link to="/notes" className="hover:text-ink">→ Notes</Link>
          </div>
        </div>

        <aside className="border-t border-rule pt-8 md:col-span-4 md:border-l md:border-t-0 md:pl-12 md:pt-0">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
            Catalog
          </div>
          <dl className="mt-5 space-y-4 font-serif">
            <Stat label="Artifacts accessioned" value={counts.artifacts} />
            <Stat label="Editorial notes" value={counts.notes} />
            <Stat label="Years on record" value={counts.years} />
            <Stat label="Collections" value={COLLECTIONS.length} />
          </dl>
          <p className="mt-8 font-serif italic text-sm text-ink-faint">
            Open daily. Quiet hours observed.
          </p>
        </aside>
      </section>

      {/* Selected */}
      <section className="py-16 md:py-24">
        <SectionHead
          eyebrow="Selected"
          title="Three entry points"
          aside={<Link to="/selected" className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft hover:text-ink">All selected →</Link>}
        />
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-x-12">
          {selected.map((a) => (
            <Link
              key={a.slug}
              to="/artifacts/$slug"
              params={{ slug: a.slug }}
              className="group block border-t border-rule pt-6"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
                {a.id}
              </div>
              <h3 className="mt-4 font-display text-[1.7rem] leading-tight text-ink transition-colors group-hover:text-lamp">
                {a.title}
              </h3>
              <p className="mt-3 font-serif text-[15px] leading-relaxed text-ink-soft">
                {a.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent */}
      <section className="border-t border-rule py-16 md:grid md:grid-cols-12 md:gap-16 md:py-24">
        <div className="md:col-span-4">
          <SectionHead eyebrow="Recent accessions" title="Lately on the desk" />
          <p className="mt-6 max-w-sm font-serif text-base leading-relaxed text-ink-soft">
            New entries added to the archive, ordered by date of accession rather than
            completion.
          </p>
          <Link
            to="/timeline"
            className="mt-8 inline-block font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft hover:text-ink"
          >
            Open timeline →
          </Link>
        </div>
        <ul className="mt-10 divide-y divide-rule md:col-span-8 md:mt-0">
          {recent.map((a) => (
            <li key={a.slug}>
              <Link
                to="/artifacts/$slug"
                params={{ slug: a.slug }}
                className="group flex items-baseline gap-6 py-4 transition-colors"
              >
                <span className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
                  {fmtDateShort(a.date)}
                </span>
                <span className="flex-1 font-display text-xl text-ink group-hover:text-lamp">
                  {a.title}
                </span>
                <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint md:inline">
                  {a.type}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Note preview */}
      {note && (
        <section className="border-t border-rule py-16 md:grid md:grid-cols-12 md:gap-16 md:py-24">
          <div className="md:col-span-4">
            <SectionHead eyebrow="From the notes" title="Currently reading" />
            <Link
              to="/notes"
              className="mt-8 inline-block font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft hover:text-ink"
            >
              All notes →
            </Link>
          </div>
          <div className="mt-10 md:col-span-8 md:mt-0">
            <Link to="/notes/$slug" params={{ slug: note.slug }} className="group block">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-faint">
                Note {note.id} · {fmtDateShort(note.date)} · {note.readingMinutes} min read
              </div>
              <h3 className="mt-5 font-display text-3xl leading-tight text-ink transition-colors group-hover:text-lamp md:text-4xl">
                {note.title}
              </h3>
              <p className="mt-4 max-w-2xl font-serif text-lg italic leading-relaxed text-ink-soft">
                {note.dek}
              </p>
              <span className="mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.22em] text-lamp">
                Continue reading →
              </span>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-3">
      <dt className="font-serif text-sm text-ink-soft">{label}</dt>
      <dd className="font-display text-2xl text-ink">{value}</dd>
    </div>
  );
}

function SectionHead({
  eyebrow,
  title,
  aside,
}: {
  eyebrow: string;
  title: string;
  aside?: React.ReactNode;
}) {
  return (
    <div className="flex items-end justify-between gap-6 border-b border-rule pb-5">
      <div>
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-lamp">
          {eyebrow}
        </div>
        <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight md:text-4xl">
          {title}
        </h2>
      </div>
      {aside}
    </div>
  );
}
