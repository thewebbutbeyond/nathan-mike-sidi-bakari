import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site-shell";
import { ArtifactList } from "@/components/artifact-list";
import {
  collectionDescriptions,
  collectionLabels,
  getArtifactsByCollection,
  type Collection,
} from "@/content/data";

const valid: Collection[] = ["engineer", "entrepreneur", "investor", "artist"];

export const Route = createFileRoute("/collections/$slug")({
  loader: ({ params }) => {
    if (!valid.includes(params.slug as Collection)) throw notFound();
    const slug = params.slug as Collection;
    return {
      slug,
      label: collectionLabels[slug],
      description: collectionDescriptions[slug],
      artifacts: getArtifactsByCollection(slug),
    };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.label} — Collections — Nathan Mike Sidi Bakari` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: `${loaderData.label} — Collection` },
          { property: "og:description", content: loaderData.description },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <SiteShell>
      <PageHeader title="Collection not found" />
      <Link to="/collections" className="label-mono text-ink hover:text-accent-ink">
        ← Back to collections
      </Link>
    </SiteShell>
  ),
  component: CollectionDetail,
});

function CollectionDetail() {
  const { label, description, artifacts, slug } = Route.useLoaderData();

  return (
    <SiteShell>
      <nav className="label-mono mb-8">
        <Link to="/collections" className="hover:text-ink">
          ← Collections
        </Link>
      </nav>
      <PageHeader
        eyebrow={`Collection · ${slug.toUpperCase()}`}
        title={label}
        lede={description}
        meta={
          <p className="label-mono">
            {artifacts.length} entries · sorted newest first
          </p>
        }
      />
      <ArtifactList artifacts={artifacts} />
    </SiteShell>
  );
}
