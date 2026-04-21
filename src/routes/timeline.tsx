import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, PageHeader, SiteShell, Tag } from "@/components/site-shell";
import { formatDate, formatYear, lensLabels, sortedEntries } from "@/content/data";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Timeline · Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content: "All entries in chronological order.",
      },
      { property: "og:title", content: "Timeline · Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "All entries in chronological order.",
      },
    ],
  }),
  component: TimelinePage,
});

function TimelinePage() {
  const all = sortedEntries();
  const byYear = new Map<string, typeof all>();
  for (const a of all) {
    const y = formatYear(a.date);
    if (!byYear.has(y)) byYear.set(y, []);
    byYear.get(y)!.push(a);
  }

  return (
    <SiteShell>
      <Container>
        <PageHeader
          eyebrow="timeline"
          title="Everything, by date."
          description="Most recent at the top."
        />

        <div className="space-y-12">
          {Array.from(byYear.entries()).map(([year, items]) => (
            <section key={year}>
              <div className="flex items-baseline gap-4 mb-4">
                <h2 className="text-lg font-medium tabular-nums text-ink">{year}</h2>
                <div className="flex-1 border-t border-rule translate-y-[-4px]" />
                <span className="text-[11px] text-ink-faint tabular-nums">
                  {items.length} {items.length === 1 ? "entry" : "entries"}
                </span>
              </div>
              <ul>
                {items.map((a) => (
                  <li
                    key={a.slug}
                    className="border-b border-rule border-dotted last:border-b-0"
                  >
                    <Link
                      to="/entries/$slug"
                      params={{ slug: a.slug }}
                      search={{ from: "timeline" }}
                      className="grid grid-cols-[5rem_1fr] sm:grid-cols-[6rem_1fr] gap-x-4 py-3 px-1 hover:bg-secondary/40 transition-colors"
                    >
                      <time className="text-xs text-ink-faint tabular-nums pt-0.5">
                        {formatDate(a.date).slice(5)}
                      </time>
                      <div>
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <span className="text-sm text-ink">{a.title}</span>
                          {a.selected && (
                            <span className="text-[10px] tracking-wide text-accent">
                              ◆ chef-d’œuvre
                            </span>
                          )}
                        </div>
                        <div className="mt-0.5 text-[11px] text-ink-faint flex items-center gap-2 flex-wrap">
                          <span>{a.type}</span>
                          <span>·</span>
                          <span>{lensLabels(a.collections).join(" / ")}</span>
                          {a.tags.slice(0, 3).map((t) => (
                            <span key={t}>
                              · <Tag>{t}</Tag>
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
      </Container>
    </SiteShell>
  );
}
