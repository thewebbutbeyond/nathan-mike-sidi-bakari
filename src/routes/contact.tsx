import { createFileRoute } from "@tanstack/react-router";
import { PageContainer, PageHeader } from "@/components/site-shell";
import { SITE } from "@/content/data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — N. M. S. Bakari Archive" },
      {
        name: "description",
        content:
          "Contact information for the archive. Correspondence is welcomed only at genuine intersections of interest.",
      },
      { property: "og:title", content: "Contact — N. M. S. Bakari Archive" },
      {
        property: "og:description",
        content: "Contact information for the archive.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Contact · Quietly"
        title="Correspondence is welcomed at genuine intersections of interest."
        lede="There is no contact form. The address below is read by one person and answered when an answer is warranted. If you write because you have read something here, please mention which item; that helps more than you might expect."
      />
      <section className="grid gap-px border border-border bg-border py-0 md:grid-cols-3">
        <ContactCard label="Correspondence" value={SITE.email} href={`mailto:${SITE.email}`} />
        <ContactCard label="RSS" value="/rss.xml" href="/rss.xml" />
        <ContactCard label="Reference" value={SITE.url} />
      </section>

      <section className="prose-archive mt-16 max-w-[60ch]">
        <p>
          Inquiries about specific artifacts should reference the accession number.
          Citations and quotations are welcomed and may be made without prior
          permission, with attribution.
        </p>
        <p>
          The archive does not accept solicitations for services, pitches, or
          recruitment. Replies to those are not sent and should not be expected.
        </p>
      </section>
    </PageContainer>
  );
}

function ContactCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const Inner = (
    <div className="flex flex-col gap-2 bg-background p-7">
      <span className="eyebrow">{label}</span>
      <span className="font-mono text-[0.95rem] text-foreground">{value}</span>
    </div>
  );
  if (href) {
    return (
      <a href={href} className="group transition-colors hover:bg-muted/40">
        {Inner}
      </a>
    );
  }
  return Inner;
}
