import { createFileRoute } from "@tanstack/react-router";
import { NarrowContainer, Prose, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/colophon")({
  head: () => ({
    meta: [
      { title: "Colophon · Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content: "How this archive is built: stack, typography, and credits.",
      },
      { property: "og:title", content: "Colophon · Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "How this archive is built.",
      },
    ],
  }),
  component: ColophonPage,
});

const TEXT = `This site is a small, hand-tended archive. It is intentionally quiet: no tracking, no cookies, no advertising, no comment system. Pages are pre-rendered and served as plain HTML so they remain readable on slow connections and decade-old devices.

The site is built with React, TanStack Start, and Tailwind CSS. Content lives close to the code as a small typed dataset, which keeps editing fast and history honest. Images are generated or hand-picked, then compressed before publishing.

Typography uses a quiet serif for body text and a neutral sans for navigation and metadata. Colours are kept low-contrast on purpose, closer to printed paper than to a screen.

The archive is published as a static site. Source for the underlying tooling is open and credited in the footer. Mistakes, broken links, and questionable opinions are mine alone.

If you notice something broken, or want to suggest an improvement, the contact page is the right way to reach me.`;

function ColophonPage() {
  return (
    <SiteShell>
      <NarrowContainer>
        <div className="text-xs text-ink-faint mb-3 tracking-wide">colophon</div>
        <h1 className="text-2xl sm:text-[1.7rem] font-medium tracking-tight text-ink leading-tight mb-8">
          Colophon.
        </h1>
        <Prose text={TEXT} />
      </NarrowContainer>
    </SiteShell>
  );
}
