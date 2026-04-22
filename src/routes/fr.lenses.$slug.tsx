import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Container, PageHeader, SiteShell } from "@/components/site-shell";
import { EntryList } from "@/components/entry-list";
import { entriesByLocalizedLens, localizedLenses } from "@/content/localized";
import type { Lens } from "@/content/data";

export const Route = createFileRoute("/fr/lenses/$slug")({
  loader: ({ params }) => {
    const slug = params.slug as Lens;
    const meta = localizedLenses("fr").find((lens) => lens.slug === slug);
    if (!meta) throw notFound();
    return { slug, meta, items: entriesByLocalizedLens(slug, "fr") };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Regard · Nathan Mike Sidi Bakari" }] };
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
    <SiteShell locale="fr">
      <Container>
        <PageHeader title="Regard introuvable." />
        <Link to="/fr/lenses" className="text-sm underline underline-offset-4">
          ← tous les regards
        </Link>
      </Container>
    </SiteShell>
  ),
  component: LensDetail,
});

function LensDetail() {
  const { meta, items } = Route.useLoaderData();
  return (
    <SiteShell locale="fr">
      <Container>
        <div className="mb-6 text-xs">
          <Link
            to="/fr/lenses"
            className="text-ink-soft hover:text-ink underline underline-offset-4"
          >
            ← regards
          </Link>
        </div>
        <PageHeader
          eyebrow={`regard · ${items.length} entrées`}
          title={meta.label + "."}
          description={meta.description}
        />
        <EntryList
          locale="fr"
          entries={items}
          from={`lenses/${meta.slug}`}
          emptyMessage="Aucune entrée à travers ce regard pour l'instant."
        />
      </Container>
    </SiteShell>
  );
}
