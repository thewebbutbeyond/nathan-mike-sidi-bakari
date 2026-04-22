import { createFileRoute } from "@tanstack/react-router";
import { NarrowContainer, Prose, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/fr/colophon")({
  head: () => ({
    meta: [
      { title: "Colophon · Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content: "comment cette archive est construite : stack, typographie et crédits.",
      },
      { property: "og:title", content: "Colophon · Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "comment cette archive est construite.",
      },
    ],
  }),
  component: ColophonPage,
});

const TEXT = `Ce site est une petite archive tenue à la main. Il est volontairement calme : pas de tracking, pas de cookies, pas de publicité, pas de commentaires. Les pages sont pré-rendues et servies comme HTML simple pour rester lisibles sur des connexions lentes et des appareils anciens.

Le site est construit avec React, TanStack Start et Tailwind CSS. Le contenu reste proche du code dans un petit dataset typé, ce qui garde l'édition rapide et l'historique honnête. Les images sont générées ou choisies à la main, puis compressées avant publication.

La typographie utilise une base monospace discrète pour la navigation, les métadonnées et le texte. Les couleurs sont volontairement peu contrastées, plus proches du papier imprimé que d'un écran brillant.

L'archive est publiée comme site statique. Le code de l'outillage est ouvert et crédité dans le footer. Les erreurs, liens cassés et opinions discutables sont à moi.

Si tu remarques quelque chose de cassé, ou veux proposer une amélioration, la page contact est le bon endroit.`;

function ColophonPage() {
  return (
    <SiteShell locale="fr">
      <NarrowContainer>
        <div className="text-xs text-ink-faint mb-3 tracking-wide">colophon</div>
        <h1 className="text-2xl sm:text-[1.7rem] font-medium tracking-tight text-ink leading-tight mb-8">
          colophon.
        </h1>
        <Prose text={TEXT} />
      </NarrowContainer>
    </SiteShell>
  );
}
