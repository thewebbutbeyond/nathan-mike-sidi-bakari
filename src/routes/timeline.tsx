import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site-shell";
import { ArtifactList } from "@/components/artifact-list";
import { artifacts } from "@/content/data";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Timeline — Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content: "Every artifact filed in the archive, in the order it happened.",
      },
      { property: "og:title", content: "Timeline — Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "Every artifact filed in the archive, in chronological order.",
      },
    ],
  }),
  component: TimelinePage,
});

function TimelinePage() {
  const sorted = [...artifacts].sort((a, b) => b.date.localeCompare(a.date));
  const byYear = sorted.reduce<Record<string, typeof artifacts>>((acc, a) => {
    const y = new Date(a.date).getUTCFullYear().toString();
    (acc[y] ||= []).push(a);
    return acc;
  }, {});
  const years = Object.keys(byYear).sort((a, b) => b.localeCompare(a));

  return (
    <SiteShell>
      <PageHeader
        eyebrow="Section · II"
        title="Timeline"
        lede="Everything filed, in the order it happened. The full chronological index of the archive."
      />

      <div className="space-y-20">
        {years.map((y) => (
          <section key={y} className="grid grid-cols-12 gap-x-6 md:gap-x-10">
            <div className="col-span-12 mb-4 md:col-span-2 md:mb-0">
              <h2 className="font-display text-5xl text-ink md:sticky md:top-8 md:text-6xl">
                {y}
              </h2>
              <p className="label-mono mt-2">{byYear[y].length} entries</p>
            </div>
            <div className="col-span-12 md:col-span-10">
              <ArtifactList artifacts={byYear[y]} />
            </div>
          </section>
        ))}
      </div>
    </SiteShell>
  );
}
