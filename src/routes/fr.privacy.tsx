import { createFileRoute } from "@tanstack/react-router";
import { NarrowContainer, Prose, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/fr/privacy")({
  head: () => ({
    meta: [
      { title: "Confidentialité · Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content:
          "comment cette archive traite les données personnelles. version courte : elle n'en collecte pas.",
      },
      { property: "og:title", content: "Confidentialité · Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "Comment cette archive traite les données personnelles.",
      },
    ],
  }),
  component: PrivacyPage,
});

const TEXT = `Ce site est une archive personnelle statique. Il ne collecte, ne stocke et ne vend pas de données personnelles. Il n'y a pas de scripts d'analytics, pas de trackers publicitaires et pas d'outils de fingerprinting en arrière-plan.

Le site ne pose pas de cookies lui-même. Si ton navigateur garde quelque chose, cela se limite à l'état technique standard nécessaire au chargement des pages (cache, etc.) et n'est ni lu ni traité.

La seule situation où une information personnelle me parvient est si tu choisis de m'écrire directement via la page contact. Dans ce cas, je reçois uniquement ce que tu choisis d'envoyer et je l'utilise seulement pour répondre.

Les liens externes ouvrent des sites tiers (par exemple GitHub, LinkedIn ou des articles référencés). Ces sites ont leurs propres pratiques de confidentialité, hors de mon contrôle.

Si tu as une question sur cette politique, ou si tu veux supprimer une correspondance envoyée, contacte-moi via la page contact.`;

function PrivacyPage() {
  return (
    <SiteShell locale="fr">
      <NarrowContainer>
        <div className="text-xs text-ink-faint mb-3 tracking-wide">confidentialité</div>
        <h1 className="text-2xl sm:text-[1.7rem] font-medium tracking-tight text-ink leading-tight mb-8">
          politique de confidentialité.
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
