import { createFileRoute } from "@tanstack/react-router";
import { MetaRow, NarrowContainer, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact , Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content:
          "Quiet contact information. For genuine intersections of interest, not introductions.",
      },
      { property: "og:title", content: "Contact , Nathan Mike Sidi Bakari" },
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
          If something here overlaps with something you care about.
        </h1>
        <p className="text-sm text-ink-soft leading-relaxed max-w-prose mb-10">
          Messages are more than welcome. A short paragraph about what you’re working
          on or thinking about , and where it touches the archive , is the easiest way
          to start a real conversation. I read everything and reply when I have something
          useful to say.
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
          <MetaRow label="signal">happy to share after a first email</MetaRow>
          <MetaRow label="post">PO Box · address on request</MetaRow>
          <MetaRow label="reply">usually within a week</MetaRow>
        </dl>

        <div className="mt-10 text-xs text-ink-faint leading-relaxed max-w-prose">
          A short note about overlapping work, a question, or a quiet hello are all good
          reasons to write.
        </div>
      </NarrowContainer>
    </SiteShell>
  );
}
