import { createFileRoute, Link } from "@tanstack/react-router";
import { PageFrame, PageHeader, fmtDateShort } from "@/components/site-shell";
import { artifactsByYear, COLLECTIONS } from "@/content/data";

const collectionLabel = (slug: string) =>
  COLLECTIONS.find((c) => c.slug === slug)?.label ?? slug;

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Timeline — Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content:
          "A chronological index of artifacts in the archive, grouped by year of accession.",
      },
      { property: "og:title", content: "Timeline — Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "A chronological index of artifacts in the archive.",
      },
    ],
  }),
  component: TimelinePage,
});

function TimelinePage() {
  const groups = artifactsByYear();
  return (
    <PageFrame>
      <PageHeader
        eyebrow="Timeline · chronological"
        title="Everything, in order of when."
        description="The complete archive, ordered by date. The earliest entries are at the bottom; the most recent rise to the top."
      />
      <div className="mt-12 space-y-16 md:space-y-20">
        {groups.map((g) => (
          <section key={g.year} className="md:grid md:grid-cols-[7rem_1fr] md:gap-12">
            <div className="mb-6 md:sticky md:top-8 md:mb-0 md:self-start">
              <div className="font-display text-5xl leading-none text-ink md:text-6xl">
                {g.year}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
                {g.items.length} {g.items.length === 1 ? "entry" : "entries"}
              </div>
            </div>
            <ul className="divide-y divide-rule border-t border-rule">
              {g.items.map((a) => (
                <li key={a.slug}>
                  <Link
                    to="/artifacts/$slug"
                    params={{ slug: a.slug }}
                    className="group block py-6"
                  >
                    <div className="grid gap-2 md:grid-cols-[6rem_1fr] md:items-baseline md:gap-6">
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
                        {fmtDateShort(a.date)}
                      </div>
                      <div>
                        <h3 className="font-display text-xl leading-tight text-ink transition-colors group-hover:text-lamp md:text-2xl">
                          {a.title}
                        </h3>
                        <p className="mt-1.5 font-serif text-[14px] leading-relaxed text-ink-soft">
                          {a.summary}
                        </p>
                        <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
                          {a.id} · {a.type} ·{" "}
                          {a.collections.map(collectionLabel).join(" / ")}
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageFrame>
  );
}
