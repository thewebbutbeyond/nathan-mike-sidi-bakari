import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site-shell";
import { artifacts, formatDate, collectionLabels } from "@/content/data";

export const Route = createFileRoute("/selected")({
  head: () => ({
    meta: [
      { title: "Selected — Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content:
          "A small set of entry points into the archive — the work most worth opening first.",
      },
      { property: "og:title", content: "Selected — Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "A small set of entry points into the archive.",
      },
    ],
  }),
  component: SelectedPage,
});

function SelectedPage() {
  const items = artifacts
    .filter((a) => a.selected)
    .sort((a, b) => b.date.localeCompare(a.date));
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Section · I"
        title="Selected"
        lede="A small set of entry points. Not a trophy case — the work most worth opening first if this is your first visit."
      />

      <div className="space-y-16 md:space-y-20">
        {items.map((a, idx) => (
          <article
            key={a.slug}
            className="grid grid-cols-12 gap-x-6 gap-y-6 border-b border-rule pb-16 last:border-b-0 md:gap-x-10"
          >
            <div className="col-span-12 md:col-span-3">
              <p className="font-display text-5xl text-ink-faint">
                {String(idx + 1).padStart(2, "0")}
              </p>
              <p className="label-mono mt-4">{a.accession}</p>
              <p className="label-mono mt-1 text-ink-faint">{formatDate(a.date)}</p>
              <p className="label-mono mt-4 text-ink">
                {a.collections.map((c) => collectionLabels[c]).join(" · ")}
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-display text-3xl leading-tight text-ink md:text-[2.5rem]">
                <Link
                  to="/artifacts/$slug"
                  params={{ slug: a.slug }}
                  className="hover:text-accent-ink"
                >
                  {a.title}
                </Link>
              </h2>
              <p className="mt-5 font-serif text-lg leading-relaxed text-ink-muted">
                {a.summary}
              </p>
              {a.context && (
                <p className="mt-4 font-serif text-[1.0625rem] leading-relaxed text-ink-muted">
                  {a.context}
                </p>
              )}
              <Link
                to="/artifacts/$slug"
                params={{ slug: a.slug }}
                className="label-mono mt-6 inline-block text-ink hover:text-accent-ink"
              >
                Read entry →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
