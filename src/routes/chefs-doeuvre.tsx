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
        content: "A handful of marked entries. The shortest way into the archive.",
      },
      { property: "og:title", content: "Chefs-d’œuvre · Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "A handful of marked entries. The shortest way into the archive.",
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
          title="A handful of marked entries."
          description="A small set of pieces I’d hand someone if they only had ten minutes."
        />
        <EntryList entries={items} from="chefs-doeuvre" />
      </Container>
    </SiteShell>
  );
}
