import { createFileRoute, Link } from "@tanstack/react-router";
import { PageContainer, PageHeader } from "@/components/site-shell";
import { COLLECTIONS, artifactsByCollection, type Collection } from "@/content/data";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — N. M. S. Bakari Archive" },
      {
        name: "description",
        content:
          "Four standing collections: Engineer, Entrepreneur, Investor, Artist. Each catalogues work in one register of practice.",
      },
      { property: "og:title", content: "Collections — N. M. S. Bakari Archive" },
      {
        property: "og:description",
        content:
          "Engineer, Entrepreneur, Investor, Artist — four standing collections in the archive.",
      },
    ],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  const keys = Object.keys(COLLECTIONS) as Collection[];
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Section C · Collections"
        title="Four registers of practice."
        lede="The archive is divided into four standing collections. Many artifacts belong to more than one. The collections are equal in weight; none is the canonical identity."
      />
      <section className="py-10">
        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
          {keys.map((k) => {
            const c = COLLECTIONS[k];
            const items = artifactsByCollection(k);
            return (
              <Link
                key={k}
                to="/collections/$slug"
                params={{ slug: k }}
                className="group flex flex-col gap-4 bg-background p-7 transition-colors hover:bg-muted/40 md:p-9"
              >
                <div className="flex items-baseline justify-between">
                  <span className="accession">{c.code} · {String(items.length).padStart(2, "0")} holdings</span>
                  <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                    →
                  </span>
                </div>
                <h2
                  className="font-display text-[2.2rem] leading-none tracking-tight md:text-[2.8rem]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                >
                  {c.label}
                </h2>
                <p className="max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
                  {items.slice(0, 3).map((a) => (
                    <span key={a.slug}>{a.type}</span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </PageContainer>
  );
}
