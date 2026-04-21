import { createFileRoute } from "@tanstack/react-router";
import { PageContainer, PageHeader } from "@/components/site-shell";
import { ArtifactRow } from "@/components/artifact-list";
import { allArtifactsSorted } from "@/content/data";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Timeline — N. M. S. Bakari Archive" },
      {
        name: "description",
        content:
          "The complete chronology of the archive, year by year, with every accession in date order.",
      },
      { property: "og:title", content: "Timeline — N. M. S. Bakari Archive" },
      {
        property: "og:description",
        content: "Every artifact in the archive, in chronological order.",
      },
    ],
  }),
  component: TimelinePage,
});

function TimelinePage() {
  const items = allArtifactsSorted();
  const grouped = items.reduce<Record<string, typeof items>>((acc, a) => {
    const y = a.date.slice(0, 4);
    (acc[y] ||= []).push(a);
    return acc;
  }, {});
  const years = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

  return (
    <PageContainer>
      <PageHeader
        eyebrow="Section B · Timeline"
        title="The chronology, in full."
        lede="Every artifact in date order. Years run downward; within each year, most recent first. The accession numbers carry the collection prefix and the year of acquisition."
      />
      <section className="pt-8">
        {years.map((year) => (
          <div key={year} className="grid gap-x-10 gap-y-4 py-8 md:grid-cols-[8rem_1fr]">
            <div className="md:sticky md:top-6 md:self-start">
              <div
                className="font-display text-[3rem] leading-none tracking-tight md:text-[4rem]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                {year}
              </div>
              <div className="mt-2 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                {grouped[year].length} entries
              </div>
            </div>
            <div className="border-t border-border">
              {grouped[year].map((a) => (
                <ArtifactRow key={a.slug} artifact={a} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </PageContainer>
  );
}
