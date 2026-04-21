import { createFileRoute, Link } from "@tanstack/react-router";
import { NarrowContainer, Prose, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content:
          "About the archive and the person keeping it. Engineer, operator, investor, and quiet artist.",
      },
      { property: "og:title", content: "About — Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content:
          "About the archive and the person keeping it.",
      },
    ],
  }),
  component: AboutPage,
});

const ABOUT_TEXT = `I am Nathan. I write code, run small companies, underwrite a few investments a year, and draw most evenings. This site is a record of that work, kept for myself first and made public as a courtesy.

I started keeping an archive instead of a portfolio in 2024. The reasons are explained in the notes. The short version is that I wanted a place where the work could be the work — where a half-finished thing or an old letter could sit next to a current project without apology, and where the criterion for inclusion was honesty rather than impressiveness.

I do not maintain a résumé page here. If you need one, write to me.

Most of what I do is small. The companies I have worked on were not famous. The investments I am proudest of were unfashionable. The drawings are mostly hands. The throughline, if there is one, is a preference for things that compound quietly over things that announce themselves.

If you found this archive through a specific artifact, that is probably the best place to start. If you wandered in from somewhere else and want a single entry point, *Selected* is the shortest version of who I am. *Notes* is the closest I come to thinking out loud.

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
          <Link to="/selected" className="hover:text-ink underline underline-offset-4">
            selected →
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
