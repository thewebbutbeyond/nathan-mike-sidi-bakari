import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader, SiteShell } from "@/components/site-shell";
import { ArtifactList } from "@/components/artifact-list";
import { ARTIFACTS } from "@/content/data";

export const Route = createFileRoute("/selected")({
  head: () => ({
    meta: [
      { title: "Selected — Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content:
          "A small set of entry points across engineering, entrepreneurship, investing, and art.",
      },
      { property: "og:title", content: "Selected — Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "A small set of entry points across the archive.",
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
          eyebrow="selected"
          title="A few entry points."
          description="Not a best-of. A handful of artifacts that, if you read or look at them, will give you the most accurate picture of how I work and what I care about. The rest is in collections and timeline."
        />
        <ArtifactList artifacts={selected} />
      </Container>
    </SiteShell>
  );
}
