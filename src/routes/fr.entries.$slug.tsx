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
  entries,
  formatLocalizedDate,
  getLocalizedEntry,
  localizedLensLabel,
  localizedLenses,
  localizedStatusLabel,
  sortedLocalizedEntries,
} from "@/content/localized";
import { type Entry, type Lens } from "@/content/data";
import { EntryMosaic } from "@/components/entry-mosaic";

const entrySearchSchema = z.object({
  from: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/fr/entries/$slug")({
  validateSearch: zodValidator(entrySearchSchema),
  loader: ({ params }) => {
    const entry = getLocalizedEntry(params.slug, "fr");
    if (!entry) throw notFound();
    const related = (entry.related ?? [])
      .map((slug) => entries("fr").find((item) => item.slug === slug))
      .filter((item): item is Entry => Boolean(item));
    const all = sortedLocalizedEntries("fr");
    const idx = all.findIndex((item) => item.slug === entry.slug);
    const prev = idx < all.length - 1 ? all[idx + 1] : null;
    const next = idx > 0 ? all[idx - 1] : null;
    return { entry, related, prev, next };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Entrée · Nathan Mike Sidi Bakari" }] };
    const entry = loaderData.entry;
    const title = `${entry.title} · Nathan Mike Sidi Bakari`;
    return {
      meta: [
        { title },
        { name: "description", content: entry.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: entry.summary },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: entry.date },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteShell locale="fr">
      <Container>
        <div className="text-xs text-ink-faint mb-3">404 · entrée introuvable</div>
        <h1 className="text-xl font-medium">aucune trace à cette adresse.</h1>
        <Link to="/fr/timeline" className="mt-6 inline-block text-sm underline">
          ← chronologie
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
  | { kind: "lens"; slug: Lens; label: string };

function resolveBack(from: string): BackLink {
  if (from === "chefs-doeuvre") return { kind: "chefs" };
  if (from === "lenses") return { kind: "lenses" };
  if (from.startsWith("lenses/")) {
    const slug = from.slice("lenses/".length) as Lens;
    const meta = localizedLenses("fr").find((lens) => lens.slug === slug);
    if (meta) return { kind: "lens", slug, label: meta.label };
  }
  return { kind: "timeline" };
}

function BackLinkRender({ from }: { from: string }) {
  const back = resolveBack(from);
  const cls = "text-ink-soft hover:text-ink underline underline-offset-4";
  if (back.kind === "chefs") {
    return (
      <Link to="/fr/chefs-doeuvre" className={cls}>
        ← chefs-d’œuvre
      </Link>
    );
  }
  if (back.kind === "lenses") {
    return (
      <Link to="/fr/lenses" className={cls}>
        ← regards
      </Link>
    );
  }
  if (back.kind === "lens") {
    return (
      <Link to="/fr/lenses/$slug" params={{ slug: back.slug }} className={cls}>
        ← {back.label}
      </Link>
    );
  }
  return (
    <Link to="/fr/timeline" className={cls}>
      ← chronologie
    </Link>
  );
}

function EntryDetail() {
  const { entry, related, prev, next } = Route.useLoaderData();
  const { from } = Route.useSearch();

  return (
    <SiteShell locale="fr">
      <NarrowContainer>
        <div className="mb-6 text-xs">
          <BackLinkRender from={from} />
        </div>

        <header className="mb-8">
          <div className="text-xs text-ink-faint mb-3 tabular-nums">
            {formatLocalizedDate(entry.date, "fr", { long: true })}
            {entry.chefDoeuvre && (
              <span className="ml-3 text-accent tracking-wide text-[10px]">◆ chef-d’œuvre</span>
            )}
          </div>
          <h1 className="text-2xl sm:text-[1.7rem] font-medium tracking-tight text-ink leading-tight">
            {entry.title}
          </h1>
          <p className="mt-3 text-sm text-ink-soft leading-relaxed">{entry.summary}</p>
        </header>

        <dl className="space-y-1.5 mb-10 border-y border-rule py-4">
          <MetaRow label="type">{entry.type}</MetaRow>
          <MetaRow label="statut">{localizedStatusLabel(entry.status, "fr")}</MetaRow>
          <MetaRow label="date">{formatLocalizedDate(entry.date, "fr")}</MetaRow>
          <MetaRow label="regards">
            <span className="flex flex-wrap gap-x-3">
              {entry.lenses.map((lens: Lens) => (
                <Link
                  key={lens}
                  to="/fr/lenses/$slug"
                  params={{ slug: lens }}
                  className="hover:underline underline-offset-4"
                >
                  {localizedLensLabel(lens, "fr")}
                </Link>
              ))}
            </span>
          </MetaRow>
          {entry.role && <MetaRow label="rôle">{entry.role}</MetaRow>}
          {entry.outcome && <MetaRow label="résultat">{entry.outcome}</MetaRow>}
          <MetaRow label="tags">
            <span className="flex flex-wrap gap-x-3 gap-y-1">
              {entry.tags.map((tag: string) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </span>
          </MetaRow>
        </dl>

        <Prose text={entry.body} />

        <EntryMosaic seed={entry.slug} />

        {related.length > 0 && (
          <section className="mt-12 pt-6 border-t border-rule">
            <h2 className="text-xs tracking-[0.08em] text-ink-faint mb-3">lié</h2>
            <ul className="space-y-2">
              {related.map((item) => (
                <li key={item.slug} className="text-sm">
                  <Link
                    to="/fr/entries/$slug"
                    params={{ slug: item.slug }}
                    search={{ from }}
                    className="hover:underline underline-offset-4"
                  >
                    <span className="text-ink-faint tabular-nums mr-3 text-xs">
                      {formatLocalizedDate(item.date, "fr")}
                    </span>
                    {item.title}
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
                to="/fr/entries/$slug"
                params={{ slug: prev.slug }}
                search={{ from }}
                className="block hover:bg-secondary/40 -m-2 p-2 transition-colors"
              >
                <div className="text-ink-faint mb-1">← précédent</div>
                <div className="text-ink">{prev.title}</div>
                <div className="text-ink-faint tabular-nums mt-0.5 text-[11px]">
                  {formatLocalizedDate(prev.date, "fr")}
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                to="/fr/entries/$slug"
                params={{ slug: next.slug }}
                search={{ from }}
                className="block sm:text-right hover:bg-secondary/40 -m-2 p-2 transition-colors"
              >
                <div className="text-ink-faint mb-1">suivant →</div>
                <div className="text-ink">{next.title}</div>
                <div className="text-ink-faint tabular-nums mt-0.5 text-[11px]">
                  {formatLocalizedDate(next.date, "fr")}
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
