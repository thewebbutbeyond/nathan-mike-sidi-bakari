import { createFileRoute } from "@tanstack/react-router";
import { PageFrame, PageHeader } from "@/components/site-shell";
import { SITE } from "@/content/data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${SITE.name}` },
      {
        name: "description",
        content:
          "How to write — quietly, and only on a genuine intersection of interest.",
      },
      { property: "og:title", content: `Contact — ${SITE.name}` },
      {
        property: "og:description",
        content: "How to write to the archive's keeper.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageFrame className="max-w-3xl">
      <PageHeader
        eyebrow="Contact · low correspondence"
        title="A small door, kept open."
        description="Correspondence is welcome on a genuine intersection of interest. There is no contact form, no expected response time, and no public inbox volume to compete with."
      />

      <section className="mt-14 border-t border-rule pt-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-lamp">
          Address
        </div>
        <a
          href={`mailto:${SITE.email}`}
          className="mt-4 inline-block font-display text-2xl text-ink decoration-lamp underline-offset-4 hover:underline md:text-3xl"
        >
          {SITE.email}
        </a>
        <p className="mt-6 max-w-xl font-serif text-base leading-relaxed text-ink-soft">
          Letters are read in batches, usually on Sundays. A reply, if any, will arrive
          slowly. The absence of a reply should not be read as discourtesy — only as the
          ordinary consequence of an inbox kept narrow.
        </p>
      </section>

      <section className="mt-14 border-t border-rule pt-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-lamp">
          Worth writing about
        </div>
        <ul className="mt-5 space-y-2 font-serif text-base text-ink-soft">
          <li>· An artifact in the archive that you have read closely and want to discuss.</li>
          <li>· A genuinely uncommon project where the overlap of interest is concrete.</li>
          <li>· Corrections to anything published here. Always welcome.</li>
        </ul>
      </section>

      <section className="mt-14 border-t border-rule pt-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-faint">
          Not the right address for
        </div>
        <ul className="mt-5 space-y-2 font-serif text-base italic text-ink-faint">
          <li>· Sales inquiries, partnership pitches, or growth proposals.</li>
          <li>· Requests for unpaid advice on generic topics.</li>
          <li>· Press, podcast, and speaking inquiries on short timelines.</li>
        </ul>
      </section>
    </PageFrame>
  );
}
