import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Container,
  PageHeader,
  SiteShell,
  Tag,
} from "@/components/site-shell";
import { formatDate, sortedArtifacts, sortedNotes } from "@/content/data";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const ROUTES = [
  {
    to: "/selected" as const,
    label: "selected",
    description: "A small set of entry points across domains.",
  },
  {
    to: "/timeline" as const,
    label: "timeline",
    description: "Everything, by date, oldest at the bottom.",
  },
  {
    to: "/collections" as const,
    label: "collections",
    description: "Engineer · entrepreneur · investor · artist.",
  },
  {
    to: "/notes" as const,
    label: "notes",
    description: "Curated long-form writing. Not a feed.",
  },
];

function HomePage() {
  const recent = sortedArtifacts().slice(0, 6);
  const latestNotes = sortedNotes().slice(0, 3);

  return (
    <SiteShell>
      <Container>
        {/* premise */}
        <section className="mb-14 max-w-2xl">
          <div className="text-xs text-ink-faint mb-4 tracking-wide">
            personal archive · est. 2017
          </div>
          <h1 className="text-xl sm:text-2xl font-medium tracking-tight leading-relaxed text-ink">
            A personal archive of work, notes, and traces.
          </h1>
          <p className="mt-4 text-sm text-ink-soft leading-relaxed">
            A minimally curated record of output across engineering, entrepreneurship,
            investing, art, and reflection. Browse by identity, by time, or through a
            small set of selected entry points.
          </p>
        </section>

        {/* primary routes */}
        <section className="mb-16">
          <SectionHeading label="routes" />
          <ul className="grid grid-cols-1 sm:grid-cols-2 border-t border-rule">
            {ROUTES.map((r, i) => (
              <li
                key={r.to}
                className={`border-b border-rule ${
                  i % 2 === 0 ? "sm:border-r" : ""
                }`}
              >
                <Link
                  to={r.to}
                  className="group block px-4 py-5 hover:bg-secondary/60 transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm font-medium text-ink">
                      → {r.label}
                    </span>
                    <span className="text-[11px] text-ink-faint group-hover:text-ink-soft">
                      {r.to}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-ink-soft leading-relaxed">
                    {r.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* recent artifacts */}
        <section className="mb-16">
          <SectionHeading
            label="recent / milestone artifacts"
            right={
              <Link
                to="/timeline"
                className="text-xs text-ink-soft hover:text-ink underline underline-offset-4"
              >
                full timeline →
              </Link>
            }
          />
          <ArtifactList artifacts={recent} />
        </section>

        {/* notes preview */}
        <section>
          <SectionHeading
            label="notes"
            right={
              <div className="flex items-center gap-3">
                <a
                  href="/rss.xml"
                  className="text-xs text-ink-faint hover:text-ink underline underline-offset-4"
                >
                  rss
                </a>
                <Link
                  to="/notes"
                  className="text-xs text-ink-soft hover:text-ink underline underline-offset-4"
                >
                  all notes →
                </Link>
              </div>
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
                      <p className="mt-1 text-xs text-ink-soft leading-relaxed">
                        {n.summary}
                      </p>
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

function SectionHeading({
  label,
  right,
}: {
  label: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-baseline justify-between mb-3">
      <h2 className="text-xs uppercase tracking-[0.14em] text-ink-faint">
        {label}
      </h2>
      {right}
    </div>
  );
}

import { ArtifactList } from "@/components/artifact-list";
