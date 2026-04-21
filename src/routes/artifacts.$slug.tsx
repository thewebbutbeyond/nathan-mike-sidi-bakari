import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import {
  PageFrame,
  MetaRow,
  Prose,
  fmtDate,
} from "@/components/site-shell";
import {
  Artifact,
  COLLECTIONS,
  getArtifact,
  relatedArtifacts,
} from "@/content/data";
import { ArtifactCard } from "@/components/artifact-list";

const collectionLabel = (slug: string) =>
  COLLECTIONS.find((c) => c.slug === slug)?.label ?? slug;

export const Route = createFileRoute("/artifacts/$slug")({
  loader: ({ params }) => {
    const artifact = getArtifact(params.slug);
    if (!artifact) throw notFound();
    return { artifact };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.artifact;
    const title = a ? `${a.title} — Archive` : "Artifact";
    const desc = a?.summary ?? "An entry in the archive.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ArtifactDetail,
  notFoundComponent: () => (
    <PageFrame>
      <h1 className="font-display text-3xl">Artifact not on file.</h1>
      <Link
        to="/timeline"
        className="mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft hover:text-ink"
      >
        ← Return to timeline
      </Link>
    </PageFrame>
  ),
});

function ArtifactDetail() {
  const { artifact } = Route.useLoaderData() as { artifact: Artifact };
  const related = relatedArtifacts(artifact);

  return (
    <PageFrame className="max-w-4xl">
      {/* Breadcrumb */}
      <nav className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-faint">
        <Link to="/" className="hover:text-ink">Archive</Link>
        <span className="mx-2">/</span>
        <Link to="/timeline" className="hover:text-ink">Timeline</Link>
        <span className="mx-2">/</span>
        <span>{artifact.id}</span>
      </nav>

      <header className="mt-8 border-b border-rule pb-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-lamp">
          {artifact.type}
          {artifact.milestone && <span className="ml-3 text-lamp">◆ Milestone</span>}
        </div>
        <h1 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
          {artifact.title}
        </h1>
        <p className="mt-6 max-w-2xl font-serif text-lg italic leading-relaxed text-ink-soft">
          {artifact.summary}
        </p>
      </header>

      <MetaRow
        className="mt-0 border-t-0"
        items={[
          { label: "Accession", value: artifact.id },
          { label: "Date", value: fmtDate(artifact.date) },
          {
            label: "Collections",
            value: artifact.collections.map(collectionLabel).join(" · "),
          },
          { label: "Status", value: <span className="capitalize">{artifact.status}</span> },
        ]}
      />

      <div className="mt-12">
        <Prose markdown={artifact.body} dropcap />
      </div>

      <div className="mt-14 border-t border-rule pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
        Tags ·{" "}
        {artifact.tags.map((t, i) => (
          <span key={t}>
            {t}
            {i < artifact.tags.length - 1 && " · "}
          </span>
        ))}
      </div>

      {related.length > 0 && (
        <section className="mt-20 border-t border-rule pt-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-lamp">
            Adjacent in the archive
          </div>
          <div className="mt-8 grid gap-10 md:grid-cols-3 md:gap-x-10">
            {related.map((r) => (
              <ArtifactCard key={r.slug} artifact={r} />
            ))}
          </div>
        </section>
      )}
    </PageFrame>
  );
}
