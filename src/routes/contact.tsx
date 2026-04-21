import { createFileRoute } from "@tanstack/react-router";
import { MetaRow, NarrowContainer, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content:
          "Quiet contact information. For genuine intersections of interest, not introductions.",
      },
      { property: "og:title", content: "Contact · Nathan Mike Sidi Bakari" },
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
          Messages are more than welcome.
        </p>

        <dl className="space-y-2 border-y border-rule py-5">
          <MetaRow label="email">
            <a
              href="mailto:nathan.sidibakari@icloud.com"
              className="underline underline-offset-4 hover:text-ink"
            >
              nathan.sidibakari@icloud.com
            </a>
          </MetaRow>
        </dl>

        <div className="mt-10 text-xs text-ink-faint leading-relaxed max-w-prose">
          A short note about overlapping work, a question, or a quiet hello are all good
          reasons to write.
        </div>
      </NarrowContainer>
    </SiteShell>
  );
}
