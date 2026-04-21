import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader, SiteShell } from "@/components/site-shell";
import { ArtifactList } from "@/components/artifact-list";
import { ARTIFACTS } from "@/content/data";

export const Route = createFileRoute("/selected")({
  head: () => ({
    meta: [
      { title: "Chefs-d’œuvre · Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content:
          "A handful of marked entries , the shortest way into the archive.",
      },
      { property: "og:title", content: "Chefs-d’œuvre · Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "A handful of marked entries , the shortest way into the archive.",
      },
    ],
  }),
  component: SelectedPage,
});

function SelectedPage() {
  const selected = ARTIFACTS.filter((a) => a.selected).sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  return (
    <SiteShell>
      <Container>
        <PageHeader
          eyebrow="chefs-d’œuvre"
          title="A few marked entries."
          description="A small set of pieces I’d hand someone if they only had ten minutes , pulled from the timeline rather than curated for show. The French label is half-serious; treat it as a friendly nod, not a claim."
        />
        <ArtifactList artifacts={selected} />
      </Container>
    </SiteShell>
  );
}
