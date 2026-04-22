import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader, SiteShell } from "@/components/site-shell";
import { EntryList } from "@/components/entry-list";
import { entries } from "@/content/localized";

export const Route = createFileRoute("/fr/chefs-doeuvre")({
  head: () => ({
    meta: [
      { title: "Chefs-d’œuvre · Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content: "Entrées marquées depuis la chronologie. Une première porte d'entrée compacte.",
      },
      { property: "og:title", content: "Chefs-d’œuvre · Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "Entrées marquées depuis la chronologie. Une première porte d'entrée compacte.",
      },
    ],
  }),
  component: ChefsDoeuvrePage,
});

function ChefsDoeuvrePage() {
  const items = entries("fr")
    .filter((entry) => entry.chefDoeuvre)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <SiteShell locale="fr">
      <Container>
        <PageHeader
          eyebrow="chefs-d’œuvre"
          title="Entrées marquées depuis la chronologie."
          description="Une première manière d'entrer dans l'archive : des pièces qui montrent une coupe utile des travaux, notes et traces gardés ici."
        />
        <EntryList
          locale="fr"
          entries={items}
          from="chefs-doeuvre"
          emptyMessage="Aucune entrée marquée pour l'instant. La chronologie complète reste ouverte."
        />
      </Container>
    </SiteShell>
  );
}
