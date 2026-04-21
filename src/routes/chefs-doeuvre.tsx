import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader, SiteShell } from "@/components/site-shell";
import { EntryList } from "@/components/entry-list";
import { ENTRIES } from "@/content/data";

export const Route = createFileRoute("/chefs-doeuvre")({
  head: () => ({
    meta: [
      { title: "Chefs-d’œuvre · Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content: "Marked entries from the timeline. A compact first way into the archive.",
      },
      { property: "og:title", content: "Chefs-d’œuvre · Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "Marked entries from the timeline. A compact first way into the archive.",
      },
    ],
  }),
  component: ChefsDoeuvrePage,
});

function ChefsDoeuvrePage() {
  const items = ENTRIES.filter((a) => a.chefDoeuvre).sort((a, b) => b.date.localeCompare(a.date));

  return (
    <SiteShell>
      <Container>
        <PageHeader
          eyebrow="chefs-d’œuvre"
          title="Marked entries from the timeline."
          description="A compact first way into the archive: pieces that show a useful cross-section of the work, notes, and traces kept here."
        />
        <EntryList
          entries={items}
          from="chefs-doeuvre"
          emptyMessage="No marked entries yet. The full timeline is still open."
        />
      </Container>
    </SiteShell>
  );
}
