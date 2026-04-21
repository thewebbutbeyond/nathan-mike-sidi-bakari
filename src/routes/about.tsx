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

const ABOUT_TEXT = `I am Nathan. I write code, run small companies, underwrite a few investments a year, and draw most evenings. This site is a working logbook, kept for myself first and shared openly with anyone curious.

I started keeping an archive in 2024 because I wanted a place where the work could be the work: a half-finished thing or an old letter sitting next to a current project, with honesty as the criterion for inclusion rather than impressiveness.

Most of what I do is small. The companies I’ve worked on are not famous. The investments I’m proudest of were unfashionable. The drawings are mostly hands. The throughline, if there is one, is a preference for things that compound quietly.

If you arrived through a specific entry, that’s a fine place to start. If you wandered in and want a single entry point, *Chefs-d’œuvre* is the shortest version. *Notes* is the closest I come to thinking out loud. *Lenses* lets you read the same archive through one part of my life at a time.

Thank you for reading.`;

function AboutPage() {
  return (
    <SiteShell>
      <NarrowContainer>
        <div className="text-xs text-ink-faint mb-3 tracking-wide">about</div>
        <h1 className="text-2xl sm:text-[1.7rem] font-medium tracking-tight text-ink leading-tight mb-8">
          A short note on the archive and the person keeping it.
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
