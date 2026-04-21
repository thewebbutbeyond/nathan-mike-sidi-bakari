import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, PageHeader, SiteShell } from "@/components/site-shell";
import { COLLECTIONS, artifactsByCollection } from "@/content/data";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Lenses · Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content:
          "Engineering, Entrepreneurship, Investing, Art. Different ways of looking through the same archive.",
      },
      { property: "og:title", content: "Lenses · Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "The same archive, seen through different lenses.",
      },
    ],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  return (
    <SiteShell>
      <Container>
        <PageHeader
          eyebrow="lenses"
          title="The same archive, seen through different lenses."
          description="Most entries belong to more than one lens - a company is also engineering, a drawing is sometimes an investment memo. The lines are useful, not strict."
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-rule border border-rule">
          {COLLECTIONS.map((c) => {
            const items = artifactsByCollection(c.slug);
            const preview = items.slice(0, 3);
            return (
              <li key={c.slug} className="bg-background">
                <Link
                  to="/collections/$slug"
                  params={{ slug: c.slug }}
                  className="block p-5 sm:p-6 hover:bg-secondary/50 transition-colors h-full"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <h2 className="text-base font-medium text-ink">
                      {c.label.toLowerCase()}
                    </h2>
                    <span className="text-xs text-ink-faint tabular-nums">
                      {items.length.toString().padStart(2, "0")} entries
                    </span>
                  </div>
                  <p className="text-xs text-ink-soft leading-relaxed mb-4">
                    {c.description}
                  </p>
                  <ul className="space-y-1 border-t border-rule border-dotted pt-3">
                    {preview.map((a) => (
                      <li
                        key={a.slug}
                        className="text-[11px] text-ink-soft truncate"
                      >
                        <span className="text-ink-faint tabular-nums mr-2">
                          {a.date.slice(0, 7)}
                        </span>
                        {a.title}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 text-[11px] text-ink-faint">
                    open lens →
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </SiteShell>
  );
}
