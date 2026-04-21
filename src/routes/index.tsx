import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PageContainer,
  Rule,
} from "@/components/site-shell";
import { ArtifactRow } from "@/components/artifact-list";
import {
  COLLECTIONS,
  SITE,
  allArtifactsSorted,
  notesSorted,
  selectedArtifacts,
  formatDate,
} from "@/content/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nathan Mike Sidi Bakari — Archive" },
      {
        name: "description",
        content:
          "A personal archive of work, notes, and traces across engineering, entrepreneurship, investing, and art.",
      },
      { property: "og:title", content: "Nathan Mike Sidi Bakari — Archive" },
      {
        property: "og:description",
        content:
          "A personal archive of work, notes, and traces across engineering, entrepreneurship, investing, and art.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const recent = allArtifactsSorted().slice(0, 6);
  const notes = notesSorted().slice(0, 3);
  const selected = selectedArtifacts().slice(0, 3);
  const totalArtifacts = allArtifactsSorted().length;
  const yearsSpan = (() => {
    const dates = allArtifactsSorted().map((a) => a.date);
    return `${dates[dates.length - 1].slice(0, 4)} – ${dates[0].slice(0, 4)}`;
  })();

  return (
    <PageContainer>
      {/* Portal masthead */}
      <section className="border-b border-border pb-12 pt-14 md:pt-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="eyebrow">Personal Archive · est. 2017</div>
            <h1
              className="mt-5 font-display text-[2.6rem] leading-[1.02] tracking-tight md:text-[4.2rem]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              A working record of one person, kept in public.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-[1.08rem]">
              {SITE.description} The catalog is organised by collection and by date.
              Each artifact carries an accession number and is preserved without
              retouching. Failures and withdrawn work are kept alongside the rest.
            </p>
          </div>
          <aside className="md:col-span-4 md:border-l md:border-border md:pl-8">
            <dl className="grid grid-cols-2 gap-y-4 text-sm md:grid-cols-1">
              <Stat label="Holdings" value={String(totalArtifacts)} />
              <Stat label="Span" value={yearsSpan} />
              <Stat label="Collections" value="04" />
              <Stat label="Notes" value={String(notesSorted().length)} />
            </dl>
          </aside>
        </div>
      </section>

      {/* Primary routes — index of indexes */}
      <section className="py-12">
        <Rule label="Index of indexes" />
        <div className="mt-8 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          <PortalCard
            to="/selected"
            code="A"
            title="Selected"
            blurb="A small set of entry points into the archive."
          />
          <PortalCard
            to="/timeline"
            code="B"
            title="Timeline"
            blurb="The complete chronology, year by year."
          />
          <PortalCard
            to="/collections"
            code="C"
            title="Collections"
            blurb="Engineer · Entrepreneur · Investor · Artist."
          />
          <PortalCard
            to="/notes"
            code="D"
            title="Notes"
            blurb="Long-form writing, low frequency, fully edited."
          />
        </div>
      </section>

      {/* Selected entry points */}
      <section className="py-12">
        <SectionHeader
          eyebrow="Selected entry points"
          right={
            <Link
              to="/selected"
              className="text-[0.78rem] uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"
            >
              View all selected →
            </Link>
          }
        />
        <div className="mt-8 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {selected.map((a) => (
            <Link
              key={a.slug}
              to="/artifacts/$slug"
              params={{ slug: a.slug }}
              className="group flex flex-col bg-background p-7 transition-colors hover:bg-muted/40"
            >
              <span className="accession">{a.accession}</span>
              <h3
                className="mt-4 font-display text-[1.6rem] leading-[1.1] tracking-tight"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                {a.title}
              </h3>
              <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-muted-foreground">
                {a.summary}
              </p>
              <div className="mt-5 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
                <span>
                  {a.collections.map((c) => COLLECTIONS[c].label).join(" · ")}
                </span>
                <span className="font-mono normal-case tracking-normal">
                  {formatDate(a.date)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent accessions */}
      <section className="py-12">
        <SectionHeader
          eyebrow="Recent accessions"
          right={
            <Link
              to="/timeline"
              className="text-[0.78rem] uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"
            >
              Full timeline →
            </Link>
          }
        />
        <div className="mt-6 border-t border-border">
          {recent.map((a) => (
            <ArtifactRow key={a.slug} artifact={a} />
          ))}
        </div>
      </section>

      {/* Notes preview */}
      <section className="py-12">
        <SectionHeader
          eyebrow="From the notes"
          right={
            <Link
              to="/notes"
              className="text-[0.78rem] uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"
            >
              All notes →
            </Link>
          }
        />
        <div className="mt-6 grid gap-px border border-border bg-border md:grid-cols-3">
          {notes.map((n) => (
            <Link
              key={n.slug}
              to="/notes/$slug"
              params={{ slug: n.slug }}
              className="group flex flex-col bg-background p-7 transition-colors hover:bg-muted/40"
            >
              <div className="flex items-center justify-between">
                <span className="accession">{n.number}</span>
                <span className="font-mono text-[0.7rem] text-muted-foreground">
                  {n.reading}
                </span>
              </div>
              <h3
                className="mt-4 font-display text-[1.4rem] leading-[1.15] tracking-tight"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                {n.title}
              </h3>
              <p className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-muted-foreground">
                {n.summary}
              </p>
              <div className="mt-5 font-mono text-[0.7rem] text-muted-foreground">
                {formatDate(n.date)}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </dt>
      <dd
        className="font-display text-[1.6rem] leading-none tracking-tight"
        style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
      >
        {value}
      </dd>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  right,
}: {
  eyebrow: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-end justify-between gap-4 border-b border-border pb-3">
      <span className="eyebrow">{eyebrow}</span>
      {right}
    </div>
  );
}

function PortalCard({
  to,
  code,
  title,
  blurb,
}: {
  to: string;
  code: string;
  title: string;
  blurb: string;
}) {
  return (
    <Link
      to={to}
      className="group flex flex-col gap-3 bg-background p-7 transition-colors hover:bg-muted/40"
    >
      <div className="flex items-baseline justify-between">
        <span className="accession">Section · {code}</span>
        <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
          →
        </span>
      </div>
      <h3
        className="font-display text-[1.7rem] leading-none tracking-tight"
        style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
      >
        {title}
      </h3>
      <p className="text-[0.88rem] leading-relaxed text-muted-foreground">{blurb}</p>
    </Link>
  );
}
