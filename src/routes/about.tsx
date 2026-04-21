import { createFileRoute } from "@tanstack/react-router";
import { PageContainer, PageHeader, Prose } from "@/components/site-shell";

const ABOUT = `## What this is

This site is a personal archive maintained by Nathan Mike Sidi Bakari. It is a public-facing index of work across four registers — engineering, entrepreneurship, investing, and art — organised by collection and by date.

It is not a portfolio in the conventional sense. It does not optimise for hire, for clients, or for a particular audience. It is a working record kept in public because the discipline of writing for the record changes how the work is held.

## What is included

Software shipped or specified, companies started or wound down, investment theses and reviews, drawings and prints, recordings, and a small body of long-form notes. Failures and withdrawn work are preserved alongside the rest. The catalog includes citations and accession numbers so any item can be referred to precisely.

## What is excluded

Private correspondence, work under non-disclosure, and material whose publication would be careless or unkind. The exclusions are intentional and are not catalogued.

## How it is maintained

The archive is updated when there is something to add. There is no posting cadence. Notes appear when they are finished. Artifacts are added when they are complete enough to stand on their own. The most recent revision date is recorded in the footer.

## Who maintains it

One person. Engineer by training, entrepreneur by practice, investor by patience, artist by daily attention. The collections are equal in weight; none is the canonical identity.`;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — N. M. S. Bakari Archive" },
      {
        name: "description",
        content:
          "About the archive: what it is, what it includes, what is excluded, and how it is maintained.",
      },
      { property: "og:title", content: "About — N. M. S. Bakari Archive" },
      {
        property: "og:description",
        content: "About the archive and the person who maintains it.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="About · The archive"
        title="An institutional record kept by one person."
        lede="A short statement on what this archive is, what it contains, what it does not contain, and the principles by which it is maintained."
      />
      <article className="py-12">
        <Prose text={ABOUT} />
      </article>
    </PageContainer>
  );
}
