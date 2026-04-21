import { createFileRoute } from "@tanstack/react-router";
import { PageFrame, PageHeader, Prose } from "@/components/site-shell";
import { SITE } from "@/content/data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${SITE.name}` },
      {
        name: "description",
        content:
          "About the archive — its premise, its contents, and the working life it records.",
      },
      { property: "og:title", content: `About — ${SITE.name}` },
      {
        property: "og:description",
        content: "About the archive — its premise and its contents.",
      },
    ],
  }),
  component: AboutPage,
});

const ABOUT_BODY = `This site is a personal archive kept by Nathan Mike Sidi Bakari. It is not a portfolio, in the conversion sense of that word. It is closer to a working file that has been opened to the public — a quiet record of the artifacts, notes, and traces produced across four overlapping working identities: engineer, entrepreneur, investor, and artist.

## The premise

The premise is that a working life accumulates more than the few items it is willing to put on a résumé. Some of those accumulations are worth recording. Most are worth recording even when they would not be worth advertising. The archive exists for the small audience — myself first, a few others second — for whom that distinction matters.

## What is here

The archive contains essays, post-mortems, investment memos, system retrospectives, drawings, and the occasional sound recording. Each entry carries an accession number and a date. Most are small. A few are long. They are organized by time on the [Timeline](/timeline), by domain in [Collections](/collections), and by editorial selection on [Selected](/selected).

## What is not here

There is no public résumé. There is no portfolio of client work. There are no testimonials. There is no contact form for sales inquiries.

## How to use it

Read the [Notes](/notes) if you want a sense of how I think. Read the [Selected](/selected) artifacts if you want a sense of what I do. Browse the [Timeline](/timeline) if you want a sense of how those things have shifted over time.

If, having read some of it, you find a genuine intersection of interest, the [Contact](/contact) page explains how to write.`;

function AboutPage() {
  return (
    <PageFrame className="max-w-4xl">
      <PageHeader
        eyebrow="About · the archive"
        title="A working file, opened."
        description="Why this archive exists, what it contains, and how it is meant to be read."
      />
      <div className="mt-12">
        <Prose markdown={ABOUT_BODY} />
      </div>
    </PageFrame>
  );
}
