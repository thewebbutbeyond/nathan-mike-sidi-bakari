import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, PageHeader, SiteShell, Tag } from "@/components/site-shell";
import {
  formatLocalizedDate,
  localizedLensLabels,
  sortedLocalizedEntries,
} from "@/content/localized";
import { formatYear } from "@/content/data";

export const Route = createFileRoute("/fr/timeline")({
  head: () => ({
    meta: [
      { title: "Chronologie · Nathan Mike Sidi Bakari" },
      { name: "description", content: "toutes les entrées en ordre chronologique." },
      { property: "og:title", content: "Chronologie · Nathan Mike Sidi Bakari" },
      { property: "og:description", content: "toutes les entrées en ordre chronologique." },
    ],
  }),
  component: TimelinePage,
});

function TimelinePage() {
  const all = sortedLocalizedEntries("fr");
  const byYear = new Map<string, typeof all>();
  for (const entry of all) {
    const year = formatYear(entry.date);
    if (!byYear.has(year)) byYear.set(year, []);
    byYear.get(year)!.push(entry);
  }

  return (
    <SiteShell locale="fr">
      <Container>
        <PageHeader
          eyebrow="chronologie"
          title="tout, par date."
          description="le plus récent en premier."
        />

        {all.length === 0 ? (
          <div className="border-t border-rule">
            <p className="px-1 py-8 text-sm text-ink-soft">
              aucune entrée pour l'instant. le carnet reste ouvert.
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {Array.from(byYear.entries()).map(([year, items]) => (
              <section key={year}>
                <div className="flex items-baseline gap-4 mb-4">
                  <h2 className="text-lg font-medium tabular-nums text-ink">{year}</h2>
                  <div className="flex-1 border-t border-rule translate-y-[-4px]" />
                  <span className="text-[11px] text-ink-faint tabular-nums">
                    {items.length} {items.length === 1 ? "entrée" : "entrées"}
                  </span>
                </div>
                <ul>
                  {items.map((entry) => (
                    <li
                      key={entry.slug}
                      className="border-b border-rule border-dotted last:border-b-0"
                    >
                      <Link
                        to="/fr/entries/$slug"
                        params={{ slug: entry.slug }}
                        search={{ from: "timeline" }}
                        className="grid grid-cols-[5rem_1fr] sm:grid-cols-[6rem_1fr] gap-x-4 py-3 px-1 hover:bg-secondary/40 transition-colors"
                      >
                        <time className="text-xs text-ink-faint tabular-nums pt-0.5">
                          {formatLocalizedDate(entry.date, "fr").slice(5)}
                        </time>
                        <div>
                          <div className="flex items-baseline gap-2 flex-wrap">
                            <span className="text-sm text-ink">{entry.title}</span>
                            {entry.chefDoeuvre && (
                              <span className="text-[10px] tracking-wide text-accent">
                                ◆ chef-d’œuvre
                              </span>
                            )}
                          </div>
                          <div className="mt-0.5 text-[11px] text-ink-faint flex items-center gap-2 flex-wrap">
                            <span>{entry.type}</span>
                            <span>·</span>
                            <span>{localizedLensLabels(entry.lenses, "fr").join(" / ")}</span>
                            {entry.tags.slice(0, 3).map((tag) => (
                              <span key={tag}>
                                · <Tag>{tag}</Tag>
                              </span>
                            ))}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </Container>
    </SiteShell>
  );
}
