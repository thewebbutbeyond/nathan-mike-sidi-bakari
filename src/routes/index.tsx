import { createFileRoute, Link } from "@tanstack/react-router";

import { Container, SiteShell, Tag } from "@/components/site-shell";
import { ENTRIES, NOTES, formatDate, sortedEntries, sortedNotes } from "@/content/data";
import { EntryList } from "@/components/entry-list";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const ROUTES = [
  {
    to: "/chefs-doeuvre" as const,
    label: "chefs-d’œuvre",
    description: "Marked entries I would hand someone as a first way in.",
  },
  {
    to: "/timeline" as const,
    label: "timeline",
    description: "Everything in order, so the thread stays visible.",
  },
  {
    to: "/lenses" as const,
    label: "lenses",
    description: "Different ways of looking through the same archive.",
  },
  {
    to: "/notes" as const,
    label: "notes",
    description: "Slower pieces, loose reflections, and things worth returning to.",
  },
];

function HomePage() {
  const recent = sortedEntries().slice(0, 6);
  const latestNotes = sortedNotes().slice(0, 3);

  const contentYears = [...ENTRIES.map((entry) => entry.date), ...NOTES.map((note) => note.date)]
    .map((date) => date.slice(0, 4))
    .filter((year) => /^\d{4}$/.test(year))
    .sort();
  const years = new Set(contentYears);
  const earliest = contentYears[0];

  const stats = [
    { label: "entries", value: ENTRIES.length },
    { label: "notes", value: NOTES.length },
    { label: "years", value: years.size, sub: earliest ? `since ${earliest}` : "not yet" },
  ];

  return (
    <SiteShell>
      <Container>
        {/* premise */}
        <section className="mb-10 max-w-2xl">
          <div className="text-xs text-ink-faint mb-4 tracking-wide">
            personal logbook · {earliest ? `kept since ${earliest}` : "newly opened"}
          </div>
          <h1 className="text-xl sm:text-2xl font-medium tracking-tight leading-relaxed text-ink">
            A personal logbook of work, notes, and traces.
          </h1>
          <p className="mt-4 text-sm text-ink-soft leading-relaxed">
            I keep this to remember what I made, what I was thinking, and how different threads keep
            crossing. It is open to anyone who wants to wander.
          </p>
        </section>

        {/* stats / catalog block */}
        <section className="mb-16">
          <dl className="grid grid-cols-3 border-y border-rule">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-4 py-4 ${i < stats.length - 1 ? "border-r border-rule" : ""}`}
              >
                <dt className="text-[11px] tracking-[0.08em] text-ink-faint">{s.label}</dt>
                <dd className="mt-1.5 flex items-baseline gap-2">
                  <span className="text-xl font-medium tabular-nums text-ink">
                    {s.value.toString().padStart(2, "0")}
                  </span>
                  {s.sub && <span className="text-[11px] text-ink-faint">{s.sub}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* primary routes */}
        <section className="mb-16">
          <SectionHeading label="places to start" />
          <ul className="grid grid-cols-1 sm:grid-cols-2 border-t border-rule">
            {ROUTES.map((r, i) => (
              <li key={r.to} className={`border-b border-rule ${i % 2 === 0 ? "sm:border-r" : ""}`}>
                <Link
                  to={r.to}
                  className="group block px-4 py-5 hover:bg-secondary/60 transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm font-medium text-ink">→ {r.label}</span>
                    <span className="text-[11px] text-ink-faint group-hover:text-ink-soft">
                      {r.to}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-ink-soft leading-relaxed">{r.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* recent entries */}
        <section className="mb-16">
          <SectionHeading
            label="recent entries"
            right={
              <Link
                to="/timeline"
                className="text-xs text-ink-soft hover:text-ink underline underline-offset-4"
              >
                timeline →
              </Link>
            }
          />
          <EntryList entries={recent} />
        </section>

        {/* notes preview */}
        <section>
          <SectionHeading
            label="from the notes"
            right={
              <Link
                to="/notes"
                className="text-xs text-ink-soft hover:text-ink underline underline-offset-4"
              >
                notes →
              </Link>
            }
          />
          <ul className="border-t border-rule">
            {latestNotes.map((n) => (
              <li key={n.slug} className="border-b border-rule">
                <Link
                  to="/notes/$slug"
                  params={{ slug: n.slug }}
                  className="block px-1 py-4 hover:bg-secondary/40 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-6">
                    <time className="text-xs text-ink-faint sm:w-24 shrink-0 tabular-nums">
                      {formatDate(n.date)}
                    </time>
                    <div className="min-w-0">
                      <div className="text-sm text-ink font-medium">{n.title}</div>
                      <p className="mt-1 text-xs text-ink-soft leading-relaxed">{n.summary}</p>
                      <div className="mt-1.5 flex items-center gap-3 text-[11px] text-ink-faint">
                        <span>{n.readingMinutes} min read</span>
                        <span>·</span>
                        <span className="flex gap-2">
                          {n.tags.slice(0, 3).map((t) => (
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
        </section>
      </Container>
    </SiteShell>
  );
}

function SectionHeading({ label, right }: { label: string; right?: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between mb-3">
      <h2 className="text-xs tracking-[0.08em] text-ink-faint">{label}</h2>
      {right}
    </div>
  );
}
