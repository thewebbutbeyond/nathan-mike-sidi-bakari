import { createFileRoute } from "@tanstack/react-router";
import { NarrowContainer, Prose, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy · Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content:
          "How this archive handles personal data. The short version: it doesn't collect any.",
      },
      { property: "og:title", content: "Privacy · Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "How this archive handles personal data.",
      },
    ],
  }),
  component: PrivacyPage,
});

const TEXT = `This site is a static personal archive. It does not collect, store, or sell personal data. There are no analytics scripts, no advertising trackers, and no third-party fingerprinting tools running in the background.

The site does not set cookies of its own. If your browser stores anything, it is limited to standard technical state needed to load pages (cache, etc.) and is not read or processed by anyone.

The only situation in which any personal information reaches me is if you choose to email me directly through the contact page. In this case, I receive only the information you choose to send and use it solely to reply.

External links open third-party websites (for example, GitHub, LinkedIn, or referenced articles). Those sites have their own privacy practices, which are outside my control.

If you have any question about this policy, or want any correspondence you sent to be deleted, contact me through the contact page.`;

function PrivacyPage() {
  return (
    <SiteShell>
      <NarrowContainer>
        <div className="text-xs text-ink-faint mb-3 tracking-wide">privacy</div>
        <h1 className="text-2xl sm:text-[1.7rem] font-medium tracking-tight text-ink leading-tight mb-8">
          Privacy policy.
        </h1>
        <Prose text={TEXT} />
        <div className="mt-10 text-[11px] text-ink-faint">
          Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" })}
        </div>
      </NarrowContainer>
    </SiteShell>
  );
}
