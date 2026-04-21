import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageFrame, PageHeader } from "@/components/site-shell";
import { ArtifactList } from "@/components/artifact-list";
import {
  Collection,
  artifactsByCollection,
  getCollection,
  COLLECTIONS,
} from "@/content/data";

export const Route = createFileRoute("/collections/$slug")({
  loader: ({ params }) => {
    const c = getCollection(params.slug as Collection);
    if (!c) throw notFound();
    return { collection: c };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.collection;
    const title = c ? `${c.label} — Collection · Nathan Mike Sidi Bakari` : "Collection";
    const desc = c?.description ?? "A collection from the archive.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: CollectionPage,
  notFoundComponent: () => (
    <PageFrame>
      <PageHeader eyebrow="Collection" title="Collection not found." />
      <div className="mt-8 flex flex-wrap gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft">
        {COLLECTIONS.map((c) => (
          <Link key={c.slug} to="/collections/$slug" params={{ slug: c.slug }} className="hover:text-ink">
            → {c.label}
          </Link>
        ))}
      </div>
    </PageFrame>
  ),
});

function CollectionPage() {
  const { collection } = Route.useLoaderData() as {
    collection: { slug: Collection; label: string; description: string };
  };
  const items = artifactsByCollection(collection.slug);
  return (
    <PageFrame>
      <PageHeader
        eyebrow={`Collection · ${collection.slug}`}
        title={collection.label}
        description={collection.description}
      />
      <div className="mt-10 flex flex-wrap items-baseline justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-faint">
        <span>{items.length} entries on file</span>
        <Link to="/collections" className="hover:text-ink">← All collections</Link>
      </div>
      <div className="mt-6">
        <ArtifactList artifacts={items} />
      </div>
    </PageFrame>
  );
}
