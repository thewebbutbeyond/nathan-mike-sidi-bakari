import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { SiteShell, PageHeader, MetaRow, Prose } from "@/components/site-shell";
import {
  collectionLabels,
  formatDate,
  getArtifactBySlug,
  getRelatedArtifacts,
  type Artifact,
} from "@/content/data";
import { typeLabels } from "@/components/artifact-list";

type LoaderData = { artifact: Artifact; related: Artifact[] };

export const Route = createFileRoute("/artifacts/$slug")({
  loader: ({ params }): LoaderData => {
    const a = getArtifactBySlug(params.slug);
    if (!a) throw notFound();
    return { artifact: a, related: getRelatedArtifacts(params.slug) };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          {
            title: `${loaderData.artifact.title} — Nathan Mike Sidi Bakari`,
          },
          { name: "description", content: loaderData.artifact.summary },
          {
            property: "og:title",
            content: `${loaderData.artifact.title} — Nathan Mike Sidi Bakari`,
          },
          { property: "og:description", content: loaderData.artifact.summary },
          { property: "og:type", content: "article" },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <SiteShell>
      <PageHeader title="Artifact not found" />
      <Link to="/timeline" className="label-mono text-ink hover:text-accent-ink">
        ← Return to timeline
      </Link>
    </SiteShell>
  ),
  component: ArtifactDetail,
});

function ArtifactDetail() {
  const { artifact, related } = Route.useLoaderData() as LoaderData;

  return (
    <SiteShell>
      <article>
        <nav className="label-mono mb-8 flex flex-wrap items-baseline gap-x-3">
          <Link to="/timeline" className="hover:text-ink">
            Timeline
          </Link>
          <span className="text-ink-faint">/</span>
          {artifact.collections.map((c, i) => (
            <span key={c} className="flex items-baseline gap-3">
              <Link to="/collections/$slug" params={{ slug: c }} className="hover:text-ink">
                {collectionLabels[c]}
              </Link>
              {i < artifact.collections.length - 1 && (
                <span className="text-ink-faint">·</span>
              )}
            </span>
          ))}
        </nav>

        <header className="mb-12">
          <p className="label-mono mb-5">
            {artifact.accession} · {typeLabels[artifact.type]}
          </p>
          <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink md:text-6xl">
            {artifact.title}
          </h1>
          <p className="mt-7 max-w-3xl font-serif text-xl leading-relaxed text-ink-muted">
            {artifact.summary}
          </p>
          <div className="rule-double mt-10" />
          <div className="mt-8">
            <MetaRow
              items={[
                { label: "Date", value: formatDate(artifact.date) },
                { label: "Type", value: typeLabels[artifact.type] },
                {
                  label: "Status",
                  value: <span className="capitalize">{artifact.status}</span>,
                },
                {
                  label: "Role",
                  value: artifact.role ?? "—",
                },
              ]}
            />
          </div>
        </header>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12 md:gap-x-12">
          <div className="col-span-12 md:col-span-8">
            {artifact.context && (
              <section className="mb-10">
                <h2 className="font-display text-2xl text-ink mb-4">Context</h2>
                <Prose text={artifact.context} />
              </section>
            )}
            {artifact.body && (
              <section className="mb-10">
                <h2 className="font-display text-2xl text-ink mb-4">Notes</h2>
                <Prose text={artifact.body} />
              </section>
            )}
            {artifact.outcome && (
              <section className="mb-10">
                <h2 className="font-display text-2xl text-ink mb-4">Outcome</h2>
                <Prose text={artifact.outcome} />
              </section>
            )}
          </div>

          <aside className="col-span-12 md:col-span-4">
            <div className="border-t border-rule pt-6 md:sticky md:top-8">
              <p className="label-mono mb-4">Classification</p>
              <dl className="space-y-5">
                <div>
                  <dt className="label-mono mb-2 text-ink-faint">Collections</dt>
                  <dd className="flex flex-wrap gap-2">
                    {artifact.collections.map((c) => (
                      <Link
                        key={c}
                        to="/collections/$slug"
                        params={{ slug: c }}
                        className="label-mono border border-rule bg-paper-raised px-2.5 py-1 text-ink hover:border-accent-ink hover:text-accent-ink"
                      >
                        {collectionLabels[c]}
                      </Link>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="label-mono mb-2 text-ink-faint">Tags</dt>
                  <dd className="flex flex-wrap gap-x-3 gap-y-1">
                    {artifact.tags.map((t) => (
                      <span key={t} className="label-mono text-ink">
                        #{t}
                      </span>
                    ))}
                  </dd>
                </div>
                {artifact.externalLinks && artifact.externalLinks.length > 0 && (
                  <div>
                    <dt className="label-mono mb-2 text-ink-faint">References</dt>
                    <dd className="space-y-1.5">
                      {artifact.externalLinks.map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          className="block font-serif text-[0.95rem] text-ink underline decoration-rule-strong underline-offset-4 hover:text-accent-ink hover:decoration-accent-ink"
                        >
                          {l.label} ↗
                        </a>
                      ))}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <section className="mt-20 border-t border-rule pt-10">
            <h2 className="font-display text-2xl text-ink mb-6 md:text-3xl">Related entries</h2>
            <ul className="grid grid-cols-1 gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-2">
              {related.map((r) => (
                <li key={r.slug} className="bg-paper">
                  <Link
                    to="/artifacts/$slug"
                    params={{ slug: r.slug }}
                    className="block p-6 transition-colors hover:bg-paper-deep"
                  >
                    <p className="label-mono mb-2">
                      {formatDate(r.date, "short")} · {r.accession}
                    </p>
                    <h3 className="font-display text-xl text-ink hover:text-accent-ink">
                      {r.title}
                    </h3>
                    <p className="mt-2 font-serif text-[0.95rem] leading-relaxed text-ink-muted">
                      {r.summary}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </SiteShell>
  );
}
