import { createFileRoute, Link } from "@tanstack/react-router";
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

        <div className="mt-12 pt-6 border-t border-rule text-xs text-ink-soft flex flex-wrap gap-x-5 gap-y-2">
          <Link to="/chefs-doeuvre" className="hover:text-ink underline underline-offset-4">
            chefs-d’œuvre →
          </Link>
          <Link to="/notes" className="hover:text-ink underline underline-offset-4">
            notes →
          </Link>
          <Link to="/contact" className="hover:text-ink underline underline-offset-4">
            contact →
          </Link>
        </div>
      </NarrowContainer>
    </SiteShell>
  );
}
