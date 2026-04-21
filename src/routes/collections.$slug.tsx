import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageContainer, PageHeader } from "@/components/site-shell";
import { ArtifactRow } from "@/components/artifact-list";
import {
  COLLECTIONS,
  artifactsByCollection,
  type Collection,
} from "@/content/data";

export const Route = createFileRoute("/collections/$slug")({
  loader: ({ params }) => {
    const key = params.slug as Collection;
    if (!COLLECTIONS[key]) throw notFound();
    return { key };
  },
  head: ({ params }) => {
    const c = COLLECTIONS[params.slug as Collection];
    if (!c) return { meta: [{ title: "Collection — Archive" }] };
    return {
      meta: [
        { title: `${c.label} — N. M. S. Bakari Archive` },
        { name: "description", content: c.description },
        { property: "og:title", content: `${c.label} — N. M. S. Bakari Archive` },
        { property: "og:description", content: c.description },
      ],
    };
  },
  notFoundComponent: () => (
    <PageContainer>
      <div className="py-24">
        <div className="eyebrow">404</div>
        <h1 className="mt-3 font-display text-4xl">No such collection.</h1>
        <Link to="/collections" className="mt-4 inline-block underline">
          Return to Collections
        </Link>
      </div>
    </PageContainer>
  ),
  component: CollectionDetail,
});

function CollectionDetail() {
  const { key } = Route.useLoaderData();
  const c = COLLECTIONS[key];
  const items = artifactsByCollection(key);

  return (
    <PageContainer>
      <PageHeader
        eyebrow={`Collection · ${c.code}`}
        title={c.label}
        lede={c.description}
        meta={
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
            <span>Holdings · {items.length}</span>
            {items.length > 0 && (
              <>
                <span>
                  Range · {items[items.length - 1].date.slice(0, 4)} –{" "}
                  {items[0].date.slice(0, 4)}
                </span>
              </>
            )}
            <Link to="/collections" className="hover:text-foreground">
              ← All collections
            </Link>
          </div>
        }
      />
      <section className="pt-6">
        <div className="border-t border-border">
          {items.map((a) => (
            <ArtifactRow key={a.slug} artifact={a} />
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
