import { createFileRoute } from "@tanstack/react-router";
import { NarrowContainer, Prose, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/fr/terms")({
  head: () => ({
    meta: [
      { title: "Conditions · Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content:
          "conditions d'utilisation de cette archive personnelle : contenu, attribution et usage.",
      },
      { property: "og:title", content: "Conditions · Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "Conditions d'utilisation de cette archive personnelle.",
      },
    ],
  }),
  component: TermsPage,
});

const TEXT = `Ceci est un site personnel. Le contenu est partagé de bonne foi comme trace de travaux, idées et notes. Le lire ne crée aucun contrat, aucun conseil et aucune garantie.

Les textes, dessins, photographies et médias originaux de ce site sont © Nathan Mike Sidi Bakari sauf mention contraire. Tu peux citer de courts extraits pour un usage non commercial avec un lien clair vers la page originale. Pour un usage plus substantiel, demande d'abord via la page contact.

Les extraits de code partagés sur le site, ou dans des dépôts liés, gardent leurs licences open-source respectives. Quand aucune licence n'est indiquée, considère le code comme "tous droits réservés" et demande avant réutilisation.

Certaines entrées décrivent des projets, entreprises ou investissements passés. Elles reflètent mon souvenir au moment de l'écriture et ne doivent pas être lues comme faits actuels, conseil financier ou représentation d'une autre partie.

Les liens externes sont fournis pour le contexte. Je ne contrôle pas, n'endosse pas et ne suis pas responsable du contenu des sites tiers.

En utilisant ce site, tu acceptes de l'utiliser légalement et de ne pas tenter de le perturber, le scraper massivement ou le republier comme s'il était tien.`;

function TermsPage() {
  return (
    <SiteShell locale="fr">
      <NarrowContainer>
        <div className="text-xs text-ink-faint mb-3 tracking-wide">conditions</div>
        <h1 className="text-2xl sm:text-[1.7rem] font-medium tracking-tight text-ink leading-tight mb-8">
          conditions d'utilisation.
        </h1>
        <Prose text={TEXT} />
        <div className="mt-10 text-[11px] text-ink-faint">
          dernière mise à jour :{" "}
          {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}
        </div>
      </NarrowContainer>
    </SiteShell>
  );
}
