import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Container, PageHeader, SiteShell } from "@/components/site-shell";
import { EntryList } from "@/components/entry-list";
import {
  LENSES,
  type Lens,
  entriesByLens,
} from "@/content/data";

export const Route = createFileRoute("/lenses/$slug")({
  loader: ({ params }) => {
    const slug = params.slug as Lens;
    const meta = LENSES.find((c) => c.slug === slug);
    if (!meta) throw notFound();
    return { slug, meta, items: entriesByLens(slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Lens · Nathan Mike Sidi Bakari" }] };
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
        <PageHeader title="Lens not found." />
        <Link to="/lenses" className="text-sm underline underline-offset-4">
          ← all lenses
        </Link>
      </Container>
    </SiteShell>
  ),
  component: LensDetail,
});

function LensDetail() {
  const { meta, items } = Route.useLoaderData();
  return (
    <SiteShell>
      <Container>
        <div className="mb-6 text-xs">
          <Link
            to="/lenses"
            className="text-ink-soft hover:text-ink underline underline-offset-4"
          >
            ← lenses
          </Link>
        </div>
        <PageHeader
          eyebrow={`lens · ${items.length} entries`}
          title={meta.label.toLowerCase() + "."}
          description={meta.description}
        />
        <EntryList entries={items} from={`lenses/${meta.slug}`} />
      </Container>
    </SiteShell>
  );
}
