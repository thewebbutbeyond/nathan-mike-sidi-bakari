import { createFileRoute } from "@tanstack/react-router";
import { MetaRow, NarrowContainer, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/fr/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content: "une manière simple de joindre Nathan Mike Sidi Bakari.",
      },
      { property: "og:title", content: "Contact · Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "une manière simple de joindre Nathan Mike Sidi Bakari.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell locale="fr">
      <NarrowContainer>
        <div className="text-xs text-ink-faint mb-3 tracking-wide">contact</div>
        <h1 className="text-2xl sm:text-[1.7rem] font-medium tracking-tight text-ink leading-tight mb-6">
          si tu veux me joindre.
        </h1>
        <p className="text-sm text-ink-soft leading-relaxed max-w-prose mb-10">
          les messages sont bienvenus, surtout quand quelque chose ici croise quelque chose qui te
          tient à cœur.
        </p>

        <dl className="space-y-2 border-t border-rule pt-5">
          <MetaRow label="email">
            <a
              href="mailto:nathan.sidibakari@icloud.com"
              className="underline underline-offset-4 hover:text-ink"
            >
              nathan.sidibakari@icloud.com
            </a>
          </MetaRow>
        </dl>

        <blockquote className="mt-10 max-w-xl text-xs text-ink-soft">
          <p className="italic leading-relaxed">
            « Celui qui demande trop peut être agaçant, mais il ne mourra pas ignorant. »
          </p>
          <footer className="mt-1.5 text-ink-faint not-italic">Amadou Hampâté Bâ</footer>
        </blockquote>
      </NarrowContainer>
    </SiteShell>
  );
}
