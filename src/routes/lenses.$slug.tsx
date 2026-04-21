import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Container, PageHeader, SiteShell } from "@/components/site-shell";
import { ArtifactList } from "@/components/artifact-list";
import {
  COLLECTIONS,
  type Collection,
  artifactsByCollection,
} from "@/content/data";

export const Route = createFileRoute("/lenses/$slug")({
  loader: ({ params }) => {
    const slug = params.slug as Collection;
    const meta = COLLECTIONS.find((c) => c.slug === slug);
    if (!meta) throw notFound();
    return { slug, meta, items: artifactsByCollection(slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Collection · Nathan Mike Sidi Bakari" }] };
    const title = `${loaderData.meta.label} · Nathan Mike Sidi Bakari`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.meta.description },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.meta.description },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteShell>
      <Container>
        <PageHeader title="Collection not found." />
        <Link to="/collections" className="text-sm underline underline-offset-4">
          ← all collections
        </Link>
      </Container>
    </SiteShell>
  ),
  component: CollectionDetail,
});

function CollectionDetail() {
  const { meta, items } = Route.useLoaderData();
  return (
    <SiteShell>
      <Container>
        <div className="mb-6 text-xs">
          <Link
            to="/collections"
            className="text-ink-soft hover:text-ink underline underline-offset-4"
          >
            ← collections
          </Link>
        </div>
        <PageHeader
          eyebrow={`collection · ${items.length} entries`}
          title={meta.label.toLowerCase() + "."}
          description={meta.description}
        />
        <ArtifactList artifacts={items} />
      </Container>
    </SiteShell>
  );
}
