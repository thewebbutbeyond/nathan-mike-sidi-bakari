import { createFileRoute } from "@tanstack/react-router";
import { PageContainer, PageHeader } from "@/components/site-shell";
import { ArtifactCard } from "@/components/artifact-list";
import { selectedArtifacts } from "@/content/data";

export const Route = createFileRoute("/selected")({
  head: () => ({
    meta: [
      { title: "Selected — N. M. S. Bakari Archive" },
      {
        name: "description",
        content:
          "A small, deliberately short set of entry points into the archive — chosen for what they reveal, not for prestige.",
      },
      { property: "og:title", content: "Selected — N. M. S. Bakari Archive" },
      {
        property: "og:description",
        content:
          "A small, deliberately short set of entry points into the archive.",
      },
    ],
  }),
  component: SelectedPage,
});

function SelectedPage() {
  const items = selectedArtifacts();
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Section A · Selected"
        title="A short index of entry points."
        lede="Selected is intentionally small. The aim is not to display the best work but to provide useful starting points for someone arriving without context. Everything else is in Timeline and Collections."
      />
      <section className="py-10">
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
          {items.map((a, i) => (
            <ArtifactCard key={a.slug} artifact={a} feature={i === 0} />
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
