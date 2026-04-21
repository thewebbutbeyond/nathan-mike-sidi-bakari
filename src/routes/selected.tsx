import { createFileRoute } from "@tanstack/react-router";
import { PageFrame, PageHeader } from "@/components/site-shell";
import { ArtifactList } from "@/components/artifact-list";
import { selectedArtifacts } from "@/content/data";

export const Route = createFileRoute("/selected")({
  head: () => ({
    meta: [
      { title: "Selected — Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content:
          "A small set of entry points into the archive — chosen as starting places, not as a trophy case.",
      },
      { property: "og:title", content: "Selected — Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "A small set of entry points into the archive.",
      },
    ],
  }),
  component: SelectedPage,
});

function SelectedPage() {
  const items = selectedArtifacts();
  return (
    <PageFrame>
      <PageHeader
        eyebrow="Selected · entry points"
        title="A few things to begin with."
        description="Not the most impressive entries, nor the most recent. A short list of artifacts that, if you read only a few, give a fair picture of the working life recorded here."
      />
      <div className="mt-10">
        <ArtifactList artifacts={items} />
      </div>
    </PageFrame>
  );
}
