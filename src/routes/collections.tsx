import { createFileRoute, Link } from "@tanstack/react-router";
import { PageFrame, PageHeader } from "@/components/site-shell";
import { COLLECTIONS, artifactsByCollection } from "@/content/data";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content:
          "Browse the archive by domain: Engineer, Entrepreneur, Investor, Artist. Multi-membership permitted.",
      },
      { property: "og:title", content: "Collections — Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "Engineer, Entrepreneur, Investor, Artist.",
      },
    ],
  }),
  component: CollectionsIndex,
});

function CollectionsIndex() {
  return (
    <PageFrame>
      <PageHeader
        eyebrow="Collections · by identity"
        title="Four rooms, one practice."
        description="The archive is filed across four working identities. Most entries belong to more than one. The categories are conveniences, not boundaries."
      />
      <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-14">
        {COLLECTIONS.map((c) => {
          const items = artifactsByCollection(c.slug);
          return (
            <Link
              key={c.slug}
              to="/collections/$slug"
              params={{ slug: c.slug }}
              className="group block border-t border-rule pt-7"
            >
              <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
                <span>Collection · {c.slug}</span>
                <span>{items.length} entries</span>
              </div>
              <h2 className="mt-4 font-display text-4xl leading-tight text-ink transition-colors group-hover:text-lamp md:text-5xl">
                {c.label}
              </h2>
              <p className="mt-4 max-w-md font-serif text-base leading-relaxed text-ink-soft">
                {c.description}
              </p>
              <span className="mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft group-hover:text-ink">
                Open →
              </span>
            </Link>
          );
        })}
      </div>
    </PageFrame>
  );
}
