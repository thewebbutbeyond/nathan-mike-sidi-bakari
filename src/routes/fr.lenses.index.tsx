import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, PageHeader, SiteShell } from "@/components/site-shell";
import { entriesByLocalizedLens, localizedLenses } from "@/content/localized";

export const Route = createFileRoute("/fr/lenses/")({
  head: () => ({
    meta: [
      { title: "Regards · Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content:
          "ingénierie, entrepreneuriat, investissement, art. différentes manières de traverser la même archive.",
      },
      { property: "og:title", content: "Regards · Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "la même archive, vue à travers différents regards.",
      },
    ],
  }),
  component: LensesPage,
});

function LensesPage() {
  return (
    <SiteShell locale="fr">
      <Container>
        <PageHeader
          eyebrow="regards"
          title="la même archive, vue autrement."
          description="quatre manières de traverser la même archive."
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-rule border border-rule">
          {localizedLenses("fr").map((lens) => {
            const items = entriesByLocalizedLens(lens.slug, "fr");
            const preview = items.slice(0, 3);
            return (
              <li key={lens.slug} className="bg-background">
                <Link
                  to="/fr/lenses/$slug"
                  params={{ slug: lens.slug }}
                  className="block p-5 sm:p-6 hover:bg-secondary/50 transition-colors h-full"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <h2 className="text-base font-medium text-ink">{lens.label}</h2>
                    <span className="text-xs text-ink-faint tabular-nums">
                      {items.length.toString().padStart(2, "0")} entrées
                    </span>
                  </div>
                  <p className="text-xs text-ink-soft leading-relaxed mb-4">{lens.description}</p>
                  <ul className="space-y-1 border-t border-rule border-dotted pt-3">
                    {preview.map((entry) => (
                      <li key={entry.slug} className="text-[11px] text-ink-soft truncate">
                        <span className="text-ink-faint tabular-nums mr-2">
                          {entry.date.slice(0, 7)}
                        </span>
                        {entry.title}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 text-[11px] text-ink-faint">ouvrir le regard →</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </SiteShell>
  );
}
