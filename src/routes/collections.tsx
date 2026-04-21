import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site-shell";
import {
  artifacts,
  collectionDescriptions,
  collectionLabels,
  type Collection,
} from "@/content/data";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content: "Browse the archive by identity: engineer, entrepreneur, investor, artist.",
      },
      { property: "og:title", content: "Collections — Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "Browse the archive by identity.",
      },
    ],
  }),
  component: CollectionsPage,
});

const order: Collection[] = ["engineer", "entrepreneur", "investor", "artist"];

function CollectionsPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Section · III"
        title="Collections"
        lede="The archive is organised across four overlapping identities. An artifact may belong to more than one. The collections are not categories so much as vantage points."
      />

      <div className="grid grid-cols-1 gap-px border border-rule bg-rule md:grid-cols-2">
        {order.map((c, i) => {
          const count = artifacts.filter((a) => a.collections.includes(c)).length;
          return (
            <Link
              key={c}
              to="/collections/$slug"
              params={{ slug: c }}
              className="group flex flex-col gap-6 bg-paper p-8 transition-colors hover:bg-paper-deep md:p-12"
            >
              <div className="flex items-baseline justify-between">
                <p className="label-mono">
                  {String(i + 1).padStart(2, "0")} · Collection
                </p>
                <p className="label-mono text-ink-faint">{count} entries</p>
              </div>
              <h2 className="font-display text-4xl text-ink transition-colors group-hover:text-accent-ink md:text-5xl">
                {collectionLabels[c]}
              </h2>
              <p className="font-serif text-[1.0625rem] leading-relaxed text-ink-muted">
                {collectionDescriptions[c]}
              </p>
              <p className="label-mono mt-2 text-ink group-hover:text-accent-ink">
                Open collection →
              </p>
            </Link>
          );
        })}
      </div>
    </SiteShell>
  );
}
