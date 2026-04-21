import { createFileRoute } from "@tanstack/react-router";
import { MetaRow, NarrowContainer, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content:
          "Quiet contact information. For genuine intersections of interest, not introductions.",
      },
      { property: "og:title", content: "Contact — Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "Quiet contact information. For genuine intersections of interest.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <NarrowContainer>
        <div className="text-xs text-ink-faint mb-3 tracking-wide">contact</div>
        <h1 className="text-2xl sm:text-[1.7rem] font-medium tracking-tight text-ink leading-tight mb-6">
          For genuine intersections of interest.
        </h1>
        <p className="text-sm text-ink-soft leading-relaxed max-w-prose mb-10">
          I read everything. I respond to roughly half. The reliable predictor of a
          reply is whether the message could only have been written to me — not a
          template, not a pitch, not a request to "jump on a quick call." A
          paragraph or two of context is plenty.
        </p>

        <dl className="space-y-2 border-y border-rule py-5">
          <MetaRow label="email">
            <a
              href="mailto:nathan@sidi.bakari"
              className="underline underline-offset-4 hover:text-ink"
            >
              nathan@sidi.bakari
            </a>
          </MetaRow>
          <MetaRow label="signal">on request, after first email</MetaRow>
          <MetaRow label="post">PO Box · address on request</MetaRow>
          <MetaRow label="response">usually within a week, sometimes longer</MetaRow>
        </dl>

        <div className="mt-10 text-xs text-ink-faint leading-relaxed max-w-prose">
          I am not currently open to new investments, fractional engagements, or
          speaking. I am always open to a thoughtful note about the work.
        </div>
      </NarrowContainer>
    </SiteShell>
  );
}
