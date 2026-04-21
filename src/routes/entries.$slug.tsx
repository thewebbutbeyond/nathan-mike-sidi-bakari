import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import {
  Container,
  MetaRow,
  NarrowContainer,
  Prose,
  SiteShell,
  Tag,
} from "@/components/site-shell";
import {
  COLLECTIONS,
  ENTRIES,
  type Entry,
  type Collection,
  formatDate,
  getEntry,
  lensLabel,
  sortedEntries,
} from "@/content/data";
import { EntryMosaic } from "@/components/entry-mosaic";

const entrySearchSchema = z.object({
  from: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/entries/$slug")({
  validateSearch: zodValidator(entrySearchSchema),
  loader: ({ params }) => {
    const a = getEntry(params.slug);
    if (!a) throw notFound();
    const related = (a.related ?? [])
      .map((s) => ENTRIES.find((x) => x.slug === s))
      .filter((x): x is NonNullable<typeof x> => Boolean(x));
    const all = sortedEntries();
    const idx = all.findIndex((e) => e.slug === a.slug);
    const prev = idx < all.length - 1 ? all[idx + 1] : null;
    const next = idx > 0 ? all[idx - 1] : null;
    return { entry: a, related, prev, next };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Entry · Nathan Mike Sidi Bakari" }] };
    const a = loaderData.entry;
    const title = `${a.title} · Nathan Mike Sidi Bakari`;
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
        <div className="text-xs text-ink-faint mb-3">404 · entry not found</div>
        <h1 className="text-xl font-medium">No record at this slug.</h1>
        <Link to="/timeline" className="mt-6 inline-block text-sm underline">
          ← timeline
        </Link>
      </Container>
    </SiteShell>
  ),
  component: EntryDetail,
});

type BackLink =
  | { kind: "timeline" }
  | { kind: "chefs" }
  | { kind: "lenses" }
  | { kind: "lens"; slug: Collection; label: string };

function resolveBack(from: string): BackLink {
  if (from === "chefs-doeuvre") return { kind: "chefs" };
  if (from === "lenses") return { kind: "lenses" };
  if (from.startsWith("lenses/")) {
    const slug = from.slice("lenses/".length) as Collection;
    const meta = COLLECTIONS.find((c) => c.slug === slug);
    if (meta) return { kind: "lens", slug, label: meta.label };
  }
  return { kind: "timeline" };
}

function BackLinkRender({ from }: { from: string }) {
  const back = resolveBack(from);
  const cls = "text-ink-soft hover:text-ink underline underline-offset-4";
  if (back.kind === "chefs") {
    return (
      <Link to="/chefs-doeuvre" className={cls}>
        ← chefs-d’œuvre
      </Link>
    );
  }
  if (back.kind === "lenses") {
    return (
      <Link to="/lenses" className={cls}>
        ← lenses
      </Link>
    );
  }
  if (back.kind === "lens") {
    return (
      <Link to="/lenses/$slug" params={{ slug: back.slug }} className={cls}>
        ← {back.label.toLowerCase()}
      </Link>
    );
  }
  return (
    <Link to="/timeline" className={cls}>
      ← timeline
    </Link>
  );
}

function EntryDetail() {
  const { entry: a, related, prev, next } = Route.useLoaderData();
  const { from } = Route.useSearch();

  return (
    <SiteShell>
      <NarrowContainer>
        <div className="mb-6 text-xs">
          <BackLinkRender from={from} />
        </div>

        <header className="mb-8">
          <div className="text-xs text-ink-faint mb-3 tabular-nums">
            {formatDate(a.date, { long: true })}
            {a.selected && (
              <span className="ml-3 text-accent tracking-wide text-[10px]">
                ◆ chef-d’œuvre
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
          <MetaRow label="lenses">
            <span className="flex flex-wrap gap-x-3">
              {a.collections.map((c: Collection) => (
                <Link
                  key={c}
                  to="/lenses/$slug"
                  params={{ slug: c }}
                  className="hover:underline underline-offset-4"
                >
                  {lensLabel(c)}
                </Link>
              ))}
            </span>
          </MetaRow>
          {a.role && <MetaRow label="role">{a.role}</MetaRow>}
          {a.outcome && <MetaRow label="outcome">{a.outcome}</MetaRow>}
          <MetaRow label="tags">
            <span className="flex flex-wrap gap-x-3 gap-y-1">
              {a.tags.map((t: string) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </span>
          </MetaRow>
          {a.links && a.links.length > 0 && (
            <MetaRow label="links">
              <span className="flex flex-wrap gap-x-3">
                {a.links.map((l: { label: string; href: string }) => (
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

        <EntryMosaic seed={a.slug} />

        {related.length > 0 && (
          <section className="mt-12 pt-6 border-t border-rule">
            <h2 className="text-xs tracking-[0.08em] text-ink-faint mb-3">
              related
            </h2>
            <ul className="space-y-2">
              {related.map((r: Entry) => (
                <li key={r.slug} className="text-sm">
                  <Link
                    to="/entries/$slug"
                    params={{ slug: r.slug }}
                    search={{ from }}
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

        {(prev || next) && (
          <nav className="mt-12 pt-6 border-t border-rule grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {prev ? (
              <Link
                to="/entries/$slug"
                params={{ slug: prev.slug }}
                search={{ from }}
                className="block hover:bg-secondary/40 -m-2 p-2 transition-colors"
              >
                <div className="text-ink-faint mb-1">← previous</div>
                <div className="text-ink">{prev.title}</div>
                <div className="text-ink-faint tabular-nums mt-0.5 text-[11px]">
                  {formatDate(prev.date)}
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                to="/entries/$slug"
                params={{ slug: next.slug }}
                search={{ from }}
                className="block sm:text-right hover:bg-secondary/40 -m-2 p-2 transition-colors"
              >
                <div className="text-ink-faint mb-1">next →</div>
                <div className="text-ink">{next.title}</div>
                <div className="text-ink-faint tabular-nums mt-0.5 text-[11px]">
                  {formatDate(next.date)}
                </div>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        )}
      </NarrowContainer>
    </SiteShell>
  );
}
