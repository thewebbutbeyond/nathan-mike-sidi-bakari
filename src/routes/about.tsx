import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader, Prose } from "@/components/site-shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content:
          "About this archive — what it is, what it is for, and what it deliberately is not.",
      },
      { property: "og:title", content: "About — Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "About this archive and the person keeping it.",
      },
    ],
  }),
  component: AboutPage,
});

const body = `Nathan Mike Sidi Bakari is an engineer, occasional founder, patient-capital investor, and amateur photographer. This site is the public-facing surface of a private working archive he has kept, in one form or another, since 2018.

## What this is

A self-addressed archive of artifacts, notes, and traces. The first reader is its author, in five years, trying to remember what he thought. The second reader is you. The structure — collections, timeline, selected, notes — exists to make the relations between things legible over time.

## What this is not

It is not a portfolio. It does not ask you to hire him, fund him, follow him, or subscribe to anything. It contains no testimonials, no logos of past employers, no calls to action of any consequence.

## Working principles

- Credibility comes from artifacts, metadata, process, chronology, and writing — not from claims.
- The wound-down company is filed alongside the shipped one.
- A note is published when there is something worth saying, not on a schedule.
- Contact is reserved for genuine intersections of interest. The form is intentionally inconvenient.

## How to use it

If you have time, start at *Selected*. If you want the full record, *Timeline*. If you want to read at length, *Notes*. If you want a particular vantage point, *Collections*.`;

function AboutPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Colophon"
        title="About"
        lede="Notes on what this archive is, what it is for, and what it deliberately is not."
      />
      <div className="mx-auto max-w-[42rem]">
        <Prose text={body} dropcap />
      </div>
    </SiteShell>
  );
}
