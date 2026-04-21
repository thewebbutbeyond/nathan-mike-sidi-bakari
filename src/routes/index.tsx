import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { ArtifactList } from "@/components/artifact-list";
import { artifacts, notes, formatDate } from "@/content/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nathan Mike Sidi Bakari — A personal archive" },
      {
        name: "description",
        content:
          "A personal archive of work, notes, and traces across engineering, entrepreneurship, investing, and art.",
      },
      { property: "og:title", content: "Nathan Mike Sidi Bakari — A personal archive" },
      {
        property: "og:description",
        content:
          "A self-addressed archive of artifacts, notes, and traces, indexed by identity and time.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

const routes = [
  {
    to: "/selected" as const,
    label: "Selected",
    description: "A small set of entry points — the work most worth opening first.",
  },
  {
    to: "/timeline" as const,
    label: "Timeline",
    description: "Everything filed, in the order it happened.",
  },
  {
    to: "/collections" as const,
    label: "Collections",
    description: "Browse by identity: engineer, entrepreneur, investor, artist.",
  },
  {
    to: "/notes" as const,
    label: "Notes",
    description: "Long-form editorial writing. Curated, not streamed.",
  },
];

function HomePage() {
  const recent = [...artifacts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);
  const latestNotes = [...notes].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <SiteShell>
      <section className="grid grid-cols-12 gap-x-6 gap-y-10 md:gap-x-10">
        <div className="col-span-12 md:col-span-8">
          <p className="label-mono mb-6">Volume IV · Established 2018</p>
          <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink md:text-6xl">
            A personal archive of work, notes, and traces.
          </h1>
          <p className="mt-7 max-w-2xl font-serif text-lg leading-relaxed text-ink-muted md:text-xl">
            A minimally curated record of output across engineering,
            entrepreneurship, investing, and art. Browse by identity, by time,
            or through a small set of selected entry points.
          </p>
        </div>
        <aside className="col-span-12 border-t border-rule pt-6 md:col-span-4 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          <p className="label-mono mb-3">A note on the form</p>
          <p className="font-serif italic leading-relaxed text-ink-muted">
            This is not a portfolio. It is a working record kept primarily for
            its author, made public on the chance it proves useful to someone
            who arrives here in good faith.
          </p>
        </aside>
      </section>

      <div className="rule-double mt-14 mb-12" />

      <section>
        <p className="label-mono mb-6">Routes</p>
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-2">
          {routes.map((r) => (
            <Link
              key={r.to}
              to={r.to}
              className="group flex flex-col justify-between gap-6 bg-paper p-6 transition-colors hover:bg-paper-deep md:p-8"
            >
              <div>
                <p className="label-mono mb-3 text-ink-faint group-hover:text-accent-ink">
                  →
                </p>
                <h3 className="font-display text-2xl text-ink md:text-3xl">{r.label}</h3>
                <p className="mt-3 font-serif text-[0.975rem] leading-relaxed text-ink-muted">
                  {r.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <header className="mb-6 flex items-baseline justify-between border-b border-rule pb-3">
          <h2 className="font-display text-2xl text-ink md:text-3xl">Recent entries</h2>
          <Link to="/timeline" className="label-mono hover:text-ink">
            Full timeline →
          </Link>
        </header>
        <ArtifactList artifacts={recent} />
      </section>

      <section className="mt-20">
        <header className="mb-6 flex items-baseline justify-between border-b border-rule pb-3">
          <h2 className="font-display text-2xl text-ink md:text-3xl">From the notes</h2>
          <div className="flex items-baseline gap-5">
            <a href="/rss.xml" className="label-mono hover:text-ink">
              RSS
            </a>
            <Link to="/notes" className="label-mono hover:text-ink">
              All notes →
            </Link>
          </div>
        </header>
        <ul className="divide-y divide-rule border-y border-rule">
          {latestNotes.map((n) => (
            <li key={n.slug}>
              <Link
                to="/notes/$slug"
                params={{ slug: n.slug }}
                className="grid grid-cols-12 gap-4 py-7 transition-colors hover:bg-paper-deep/40 md:gap-8"
              >
                <div className="col-span-12 md:col-span-2">
                  <div className="label-mono">{n.number}</div>
                  <div className="label-mono mt-1 text-ink-faint">
                    {formatDate(n.date, "short")}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-10">
                  <h3 className="font-display text-2xl text-ink md:text-3xl">{n.title}</h3>
                  <p className="mt-3 max-w-3xl font-serif text-[1.0625rem] leading-relaxed text-ink-muted">
                    {n.summary}
                  </p>
                  <p className="label-mono mt-3 text-ink-faint">
                    {n.readingMinutes} min read
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SiteShell>
  );
}
