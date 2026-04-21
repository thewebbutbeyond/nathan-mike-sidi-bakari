import { createFileRoute } from "@tanstack/react-router";
import { NarrowContainer, Prose, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms · Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content:
          "Terms of use for this personal archive: a few simple notes on content, attribution, and use.",
      },
      { property: "og:title", content: "Terms · Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "Terms of use for this personal archive.",
      },
    ],
  }),
  component: TermsPage,
});

const TEXT = `This is a personal site. The content here is shared in good faith as a record of work, ideas, and notes. Reading it implies no contract, no advice, and no warranty of any kind.

All written content, drawings, photographs, and original media on this site are © Nathan Mike Sidi Bakari unless otherwise stated. You may quote short excerpts for non-commercial use with a clear link back to the original page. For anything more substantial, please ask first via the contact page.

Code samples shared on the site, or in linked repositories, are licensed under their respective open-source licences. Where no licence is stated, treat the code as "all rights reserved" and please ask before reuse.

Some entries describe past projects, companies, or investments. They reflect my recollection at the time of writing and should not be read as current statements of fact, financial advice, or representations on behalf of any other party.

External links are provided for context. I do not control, endorse, or take responsibility for the content of third-party sites.

By using this site you agree to use it lawfully and not to attempt to disrupt it, scrape it at scale, or republish it as your own.`;

function TermsPage() {
  return (
    <SiteShell>
      <NarrowContainer>
        <div className="text-xs text-ink-faint mb-3 tracking-wide">terms</div>
        <h1 className="text-2xl sm:text-[1.7rem] font-medium tracking-tight text-ink leading-tight mb-8">
          Terms of use.
        </h1>
        <Prose text={TEXT} />
        <div className="mt-10 text-[11px] text-ink-faint">
          Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" })}
        </div>
      </NarrowContainer>
    </SiteShell>
  );
}
