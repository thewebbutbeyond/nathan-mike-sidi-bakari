import { createFileRoute } from "@tanstack/react-router";
import { NarrowContainer, Prose, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/fr/about")({
  head: () => ({
    meta: [
      { title: "À propos · Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content:
          "à propos de l'archive et de la personne qui la tient. ingénieur, opérateur, investisseur, artiste discret.",
      },
      { property: "og:title", content: "À propos · Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "à propos de l'archive et de la personne qui la tient.",
      },
    ],
  }),
  component: AboutPage,
});

const ABOUT_TEXT = `Je m'appelle Nathan. Aussi Mike. Ce site est un carnet/archive d'abord gardé pour moi-même, que j'ai décidé de partager ouvertement avec les personnes curieuses.

J'ai commencé à garder une archive parce que je voulais un endroit où le travail pouvait simplement exister : une chanson à moitié finie, un vieux dessin, ou un projet d'ingénierie en cours, côte à côte, avec l'honnêteté et la créativité comme seuls critères d'inclusion.

Ici, il y a un peu de tout : grandes pièces, petites pièces, travaux terminés, tentatives abandonnées. C'est moins un portfolio qu'une trace de ce que j'ai exploré, construit ou aimé à différents moments.

Merci de lire.`;

function AboutPage() {
  return (
    <SiteShell locale="fr">
      <NarrowContainer>
        <div className="text-xs text-ink-faint mb-3 tracking-wide">à propos</div>
        <h1 className="text-2xl sm:text-[1.7rem] font-medium tracking-tight text-ink leading-tight mb-8">
          sur cette archive et la personne qui la tient.
        </h1>

        <Prose text={ABOUT_TEXT} />

        <blockquote className="mt-10 max-w-xl text-xs text-ink-soft">
          <p className="italic leading-relaxed">
            “He who has a why to live can bear almost any how.”
          </p>
          <footer className="mt-1.5 text-ink-faint not-italic">Friedrich Nietzsche</footer>
        </blockquote>
      </NarrowContainer>
    </SiteShell>
  );
}
