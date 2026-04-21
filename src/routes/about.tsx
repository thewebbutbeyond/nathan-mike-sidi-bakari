import { createFileRoute } from "@tanstack/react-router";
import { NarrowContainer, Prose, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content:
          "About the archive and the person keeping it. Engineer, operator, investor, and quiet artist.",
      },
      { property: "og:title", content: "About · Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content:
          "About the archive and the person keeping it.",
      },
    ],
  }),
  component: AboutPage,
});

const ABOUT_TEXT = `I am Nathan. Also known as Mike. This site is a logbook/archive originally kept for myself, but later shared openly with anyone curious.

I started keeping an archive because I wanted a place where the work could simply exist: a half-finished song, an old drawing, or a current engineering project, all sitting side by side, with honesty and creativity as the only criteria for inclusion.

Here, you will find a bit of everything: larger pieces, smaller ones, completed work, abandoned attempts. This is less a portfolio than a record of what I explored, built, or cared about at different points in time.

Thank you for reading!`;

function AboutPage() {
  return (
    <SiteShell>
      <NarrowContainer>
        <div className="text-xs text-ink-faint mb-3 tracking-wide">about</div>
        <h1 className="text-2xl sm:text-[1.7rem] font-medium tracking-tight text-ink leading-tight mb-8">
          On this archive and the person keeping it.
        </h1>

        <Prose text={ABOUT_TEXT} />

        <blockquote className="mt-10 max-w-xl text-xs text-ink-soft">
          <p className="italic leading-relaxed">
            “He who has a why to live can bear almost any how.”
          </p>
          <footer className="mt-1.5 text-ink-faint not-italic">
            Friedrich Nietzsche
          </footer>
        </blockquote>
      </NarrowContainer>
    </SiteShell>
  );
}
