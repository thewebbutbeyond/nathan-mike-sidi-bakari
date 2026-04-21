import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  MetaRow,
  PageContainer,
  PageHeader,
  Prose,
} from "@/components/site-shell";
import { ArtifactRow } from "@/components/artifact-list";
import {
  ARTIFACTS,
  COLLECTIONS,
  artifactBySlug,
  formatDate,
  type Artifact,
} from "@/content/data";

export const Route = createFileRoute("/artifacts/$slug")({
  loader: ({ params }) => {
    const a = artifactBySlug(params.slug);
    if (!a) throw notFound();
    return null;
  },
  head: ({ params }) => {
    const a = artifactBySlug(params.slug);
    if (!a) return { meta: [{ title: "Artifact — Archive" }] };
    return {
      meta: [
        { title: `${a.title} — ${a.accession}` },
        { name: "description", content: a.summary },
        { property: "og:title", content: `${a.title} — ${a.accession}` },
        { property: "og:description", content: a.summary },
      ],
    };
  },
  notFoundComponent: () => (
    <PageContainer>
      <div className="py-24">
        <div className="eyebrow">404</div>
        <h1 className="mt-3 font-display text-4xl">No such artifact.</h1>
        <Link to="/timeline" className="mt-4 inline-block underline">
          Browse the timeline
        </Link>
      </div>
    </PageContainer>
  ),
  component: ArtifactDetail,
});

function ArtifactDetail() {
  const { slug } = Route.useParams();
  const a = artifactBySlug(slug);
  if (!a) return null;
  const related: Artifact[] = (a.related ?? [])
    .map((s: string) => ARTIFACTS.find((x) => x.slug === s))
    .filter((x): x is Artifact => Boolean(x));

  return (
    <PageContainer>
      <PageHeader
        eyebrow={`Accession · ${a.accession}`}
        title={a.title}
        lede={a.summary}
        meta={
          <MetaRow
            items={[
              { label: "Date", value: formatDate(a.date) },
              { label: "Type", value: a.type },
              {
                label: "Collections",
                value: a.collections.map((c) => COLLECTIONS[c].label).join(" · "),
              },
              { label: "Status", value: a.status ?? "Active" },
            ]}
          />
        }
      />

      <article className="grid gap-12 py-12 md:grid-cols-[1fr_18rem]">
        <div>
          <Prose text={a.description} />
        </div>
        <aside className="space-y-8 border-t border-border pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          <DetailGroup label="Medium / Format">
            <p className="text-sm leading-relaxed">{a.medium ?? "—"}</p>
          </DetailGroup>
          {a.collaborators && (
            <DetailGroup label="Collaborators">
              <ul className="space-y-1 text-sm">
                {a.collaborators.map((c: string) => (
                  <li key={c} className="font-mono text-[0.82rem]">
                    {c}
                  </li>
                ))}
              </ul>
            </DetailGroup>
          )}
          <DetailGroup label="Tags">
            <div className="flex flex-wrap gap-1.5">
              {a.tags.map((t: string) => (
                <span
                  key={t}
                  className="border border-border px-2 py-0.5 font-mono text-[0.7rem] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </DetailGroup>
          <DetailGroup label="Filed under">
            <ul className="space-y-1.5">
              {a.collections.map((c) => (
                <li key={c}>
                  <Link
                    to="/collections/$slug"
                    params={{ slug: c }}
                    className="text-sm underline decoration-[var(--ochre)] underline-offset-4 hover:text-foreground"
                  >
                    {COLLECTIONS[c].label}
                  </Link>
                </li>
              ))}
            </ul>
          </DetailGroup>
          <DetailGroup label="Citation">
            <p className="font-mono text-[0.78rem] leading-relaxed text-muted-foreground">
              Bakari, N. M. S. <em>{a.title}</em>. {a.accession}, {formatDate(a.date)}.
            </p>
          </DetailGroup>
        </aside>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border py-10">
          <div className="eyebrow">Related accessions</div>
          <div className="mt-4 border-t border-border">
            {related.map((r) => (
              <ArtifactRow key={r.slug} artifact={r} />
            ))}
          </div>
        </section>
      )}
    </PageContainer>
  );
}

function DetailGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="eyebrow mb-2">{label}</div>
      {children}
    </div>
  );
}
