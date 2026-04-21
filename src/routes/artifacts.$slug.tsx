import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Container,
  MetaRow,
  NarrowContainer,
  Prose,
  SiteShell,
  Tag,
} from "@/components/site-shell";
import { ARTIFACTS, formatDate, getArtifact } from "@/content/data";

export const Route = createFileRoute("/artifacts/$slug")({
  loader: ({ params }) => {
    const a = getArtifact(params.slug);
    if (!a) throw notFound();
    const related = (a.related ?? [])
      .map((s) => ARTIFACTS.find((x) => x.slug === s))
      .filter((x): x is NonNullable<typeof x> => Boolean(x));
    return { artifact: a, related };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Artifact — Nathan Mike Sidi Bakari" }] };
    const a = loaderData.artifact;
    const title = `${a.title} — Nathan Mike Sidi Bakari`;
    return {
      meta: [
        { title },
        { name: "description", content: a.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: a.summary },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: a.date },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteShell>
      <Container>
        <div className="text-xs text-ink-faint mb-3">404 · artifact not found</div>
        <h1 className="text-xl font-medium">No record at this slug.</h1>
        <Link to="/timeline" className="mt-6 inline-block text-sm underline">
          ← timeline
        </Link>
      </Container>
    </SiteShell>
  ),
  component: ArtifactDetail,
});

function ArtifactDetail() {
  const { artifact: a, related } = Route.useLoaderData();

  return (
    <SiteShell>
      <NarrowContainer>
        <div className="mb-6 text-xs">
          <Link
            to="/timeline"
            className="text-ink-soft hover:text-ink underline underline-offset-4"
          >
            ← timeline
          </Link>
        </div>

        <header className="mb-8">
          <div className="text-xs text-ink-faint mb-3 tabular-nums">
            {formatDate(a.date, { long: true })}
            {a.milestone && (
              <span className="ml-3 text-accent uppercase tracking-wider text-[10px]">
                ◆ milestone
              </span>
            )}
          </div>
          <h1 className="text-2xl sm:text-[1.7rem] font-medium tracking-tight text-ink leading-tight">
            {a.title}
          </h1>
          <p className="mt-3 text-sm text-ink-soft leading-relaxed">{a.summary}</p>
        </header>

        <dl className="space-y-1.5 mb-10 border-y border-rule py-4">
          <MetaRow label="type">{a.type}</MetaRow>
          <MetaRow label="status">{a.status}</MetaRow>
          <MetaRow label="date">{formatDate(a.date)}</MetaRow>
          <MetaRow label="collections">
            <span className="flex flex-wrap gap-x-3">
              {a.collections.map((c) => (
                <Link
                  key={c}
                  to="/collections/$slug"
                  params={{ slug: c }}
                  className="hover:underline underline-offset-4"
                >
                  {c}
                </Link>
              ))}
            </span>
          </MetaRow>
          {a.role && <MetaRow label="role">{a.role}</MetaRow>}
          {a.outcome && <MetaRow label="outcome">{a.outcome}</MetaRow>}
          <MetaRow label="tags">
            <span className="flex flex-wrap gap-x-3 gap-y-1">
              {a.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </span>
          </MetaRow>
          {a.links && a.links.length > 0 && (
            <MetaRow label="links">
              <span className="flex flex-wrap gap-x-3">
                {a.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="underline underline-offset-4 hover:text-ink"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </span>
            </MetaRow>
          )}
        </dl>

        <Prose text={a.body} />

        {related.length > 0 && (
          <section className="mt-12 pt-6 border-t border-rule">
            <h2 className="text-xs uppercase tracking-[0.14em] text-ink-faint mb-3">
              related
            </h2>
            <ul className="space-y-2">
              {related.map((r) => (
                <li key={r.slug} className="text-sm">
                  <Link
                    to="/artifacts/$slug"
                    params={{ slug: r.slug }}
                    className="hover:underline underline-offset-4"
                  >
                    <span className="text-ink-faint tabular-nums mr-3 text-xs">
                      {formatDate(r.date)}
                    </span>
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </NarrowContainer>
    </SiteShell>
  );
}
