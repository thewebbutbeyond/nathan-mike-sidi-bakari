// Realistic placeholder archive content for Nathan Mike Sidi Bakari.
// Accession-style IDs encode collection · year · ordinal.

export type Collection = "engineer" | "entrepreneur" | "investor" | "artist";

export const COLLECTIONS: { slug: Collection; label: string; description: string }[] = [
  {
    slug: "engineer",
    label: "Engineer",
    description:
      "Systems, infrastructure, and the practice of building software that endures. Notes on architecture, debugging, and the small disciplines.",
  },
  {
    slug: "entrepreneur",
    label: "Entrepreneur",
    description:
      "Companies started, attempted, and observed. Founding documents, post-mortems, and the long arithmetic of building.",
  },
  {
    slug: "investor",
    label: "Investor",
    description:
      "Memos, theses, and reading on capital allocation. A working file on what is worth funding and why.",
  },
  {
    slug: "artist",
    label: "Artist",
    description:
      "Drawings, photographs, sound, and writing without instrumental purpose. The other half of the practice.",
  },
];

export type Artifact = {
  id: string;            // accession number, e.g. "ENG · 2024 · 031"
  slug: string;
  title: string;
  date: string;          // ISO
  year: number;
  type: string;          // Essay, System, Memo, Drawing, Experiment, etc.
  collections: Collection[];
  tags: string[];
  summary: string;
  body: string;          // markdown-lite
  status: "active" | "archived" | "in-progress" | "historical";
  selected?: boolean;    // appears on Selected
  milestone?: boolean;
};

export const ARTIFACTS: Artifact[] = [
  {
    id: "ENG · 2025 · 004",
    slug: "on-quiet-systems",
    title: "On quiet systems",
    date: "2025-02-14",
    year: 2025,
    type: "Essay",
    collections: ["engineer"],
    tags: ["architecture", "operations", "philosophy"],
    summary:
      "A short defense of software that does not announce itself — the operational virtue of systems you stop noticing.",
    status: "active",
    selected: true,
    body: `## The discipline of disappearing

The best systems I have built are the ones I have stopped thinking about. Not because they are unimportant, but because they have settled into a kind of furniture — present, load-bearing, silent.

There is a temptation in our field to celebrate the loud system: the one with the dashboard, the conference talk, the migration story. I have written a few of those. They are easier to be proud of. But the systems I would rather be remembered for are the ones nobody describes, because nothing is happening to them.

## What quiet costs

Quiet is expensive in a way that is hard to budget for. It is the cost of writing the boring runbook, of choosing the second-most-clever solution, of saying no to the upgrade that would have been technically interesting. It is the patience to let a thing be older than it needs to be.

I keep a private list of systems I admire. They share almost nothing in common — different stacks, different problem domains, different scales. What they share is that their authors stopped writing about them years ago.`,
  },
  {
    id: "ENT · 2024 · 011",
    slug: "halflight-postmortem",
    title: "Halflight — a post-mortem at four years",
    date: "2024-11-02",
    year: 2024,
    type: "Post-mortem",
    collections: ["entrepreneur"],
    tags: ["company", "post-mortem", "team"],
    summary:
      "Notes from the closing of a four-year company. What the spreadsheets recorded and what they did not.",
    status: "archived",
    selected: true,
    milestone: true,
    body: `## What the numbers said

Halflight closed in October 2024 after four years and three months of operation. We served fourteen paying customers at peak, employed seven people including the founders, and returned 28¢ on the dollar to our investors.

These are the recoverable facts. They are also the least interesting part of the story.

## What the numbers did not say

The harder accounting is qualitative. We learned, for instance, that the customer who teaches you the most is rarely the customer who pays you the most. We learned that a small team's first language is the founder's mood. We learned that a market can want a thing intensely without wanting to pay for it.

I am writing this not to extract a lesson — there are too many — but to mark the entry. Companies are artifacts too. They deserve a record.`,
  },
  {
    id: "INV · 2024 · 007",
    slug: "memo-deep-infrastructure",
    title: "Memo — on deep infrastructure",
    date: "2024-09-18",
    year: 2024,
    type: "Memo",
    collections: ["investor"],
    tags: ["thesis", "infrastructure", "capital"],
    summary:
      "An internal memo on why I have been concentrating in unfashionable infrastructure plays — and where the thesis ends.",
    status: "active",
    body: `## The thesis, plainly

There is a class of infrastructure company that is structurally underpriced because it is structurally boring. It is hard to write a tweet about. It is hard to demo. It tends not to be founded by people the press already knows.

I have spent the past eighteen months concentrating roughly 60% of my discretionary allocation here. This memo records the reasoning before the outcome distorts it.

## Where the thesis ends

The thesis does not extend to anything that requires a behavior change from end users. It does not extend to anything where the buyer is a CMO. It is also probably wrong about timing — I expect the realization period to be five to seven years, which is longer than most of my LP horizons.`,
  },
  {
    slug: "morning-walk-iv",
    id: "ART · 2024 · 022",
    title: "Morning walk, IV",
    date: "2024-08-03",
    year: 2024,
    type: "Drawing",
    collections: ["artist"],
    tags: ["drawing", "series", "graphite"],
    summary:
      "Fourth in a series of small graphite studies made on the same route over six months.",
    status: "active",
    body: `## On the series

Six months of the same walk. Same route, different mornings. The drawings are made in a 9×13 cm Stillman & Birn sketchbook, in graphite, usually in under twenty minutes.

I am not interested in the drawings as objects. I am interested in what accumulates when you look at the same thing for long enough that you stop performing the looking.`,
  },
  {
    id: "ENG · 2024 · 031",
    slug: "ledger-rewrite",
    title: "Rewriting the ledger, slowly",
    date: "2024-06-20",
    year: 2024,
    type: "System",
    collections: ["engineer", "entrepreneur"],
    tags: ["architecture", "migration", "case-study"],
    summary:
      "A four-month migration of a financial ledger, performed with the system live. What we did, what we cut, what we would not do again.",
    status: "active",
    selected: true,
    body: `## Premises

We chose to migrate the ledger live, in place, over four months, because we did not have the appetite for a six-month freeze. This document records the trade-offs of that choice from the inside.

## The cuts

We cut three features outright before starting. We cut two more in week six when the migration cost of preserving them exceeded the value of the features themselves. I would, in retrospect, have cut a sixth.

## What I would not do again

I would not do this with a team of two. The cognitive overhead of holding both shapes of the system in your head is not linear in team size. Three would have been the right number.`,
  },
  {
    id: "NOTE · 2024 · 003",
    slug: "on-reading-slowly",
    title: "On reading slowly",
    date: "2024-05-11",
    year: 2024,
    type: "Note",
    collections: ["artist"],
    tags: ["reading", "practice"],
    summary:
      "A short note on the discipline of reading one book per month rather than twelve.",
    status: "active",
    body: `## The arithmetic of attention

I have, for the past three years, kept to the rule of one book per month. Not twelve, not twenty-four. One.

The first months felt slow in a way I had to apologize to myself for. The later months felt like the only honest reading I have done in a decade.`,
  },
  {
    id: "ENG · 2023 · 044",
    slug: "small-tools-i-keep",
    title: "Small tools I keep",
    date: "2023-12-08",
    year: 2023,
    type: "Catalog",
    collections: ["engineer"],
    tags: ["tools", "practice"],
    summary:
      "A working list of the small command-line tools I have written for myself over a decade and continue to use weekly.",
    status: "active",
    body: `## A short catalog

There are roughly eleven small programs I have written for myself over the past ten years that I still use every week. None of them are on GitHub. Most are under 200 lines. This is a catalog of what they do and why they have survived.`,
  },
  {
    id: "ENT · 2023 · 002",
    slug: "founding-doc-halflight",
    title: "Founding document — Halflight",
    date: "2023-03-04",
    year: 2023,
    type: "Document",
    collections: ["entrepreneur"],
    tags: ["founding", "historical"],
    summary:
      "The original founding memo for Halflight, preserved unedited. Worth reading alongside the post-mortem.",
    status: "historical",
    milestone: true,
    body: `## Preserved as written

This document is reproduced as it was circulated in March 2023, with no edits. It is wrong about several things. That is part of what makes it useful to keep.`,
  },
  {
    id: "INV · 2023 · 014",
    slug: "notes-on-concentration",
    title: "Notes on concentration",
    date: "2023-10-22",
    year: 2023,
    type: "Memo",
    collections: ["investor"],
    tags: ["portfolio", "thesis"],
    summary:
      "A short memo on why I run a concentrated book of 9–12 positions and the temperamental cost of doing so.",
    status: "active",
    body: `## On holding fewer things

I run a concentrated book — typically nine to twelve positions — and the question I am asked most often is whether this is a strategy or a temperament. The honest answer is that it is both, and that the temperament came first.`,
  },
  {
    id: "ART · 2023 · 008",
    slug: "field-recordings-spring",
    title: "Field recordings, spring",
    date: "2023-04-29",
    year: 2023,
    type: "Sound",
    collections: ["artist"],
    tags: ["sound", "field-recording"],
    summary:
      "Forty-one minutes of field recordings made over six weeks in early spring. Catalog and short notes per track.",
    status: "active",
    body: `## Catalog

Twelve tracks, recorded between March 14 and April 28, on a small handheld recorder. The catalog notes location, time, weather, and one sentence per track.`,
  },
  {
    id: "ENG · 2022 · 019",
    slug: "five-years-of-uptime",
    title: "Five years of uptime",
    date: "2022-11-15",
    year: 2022,
    type: "Retrospective",
    collections: ["engineer"],
    tags: ["operations", "retrospective"],
    summary:
      "A look back at five years of operating a small piece of public infrastructure with one engineer.",
    status: "historical",
    milestone: true,
    body: `## What it took

Five years, one engineer, three rewrites, and a great deal of refusing to add features. This is the operational diary, condensed.`,
  },
  {
    id: "INV · 2022 · 003",
    slug: "first-memo",
    title: "First memo",
    date: "2022-02-08",
    year: 2022,
    type: "Memo",
    collections: ["investor"],
    tags: ["historical", "first"],
    summary:
      "The first investment memo I wrote that I would still defend. Preserved for the record.",
    status: "historical",
    body: `## Preserved

I wrote roughly forty memos before this one. This is the first I would still defend. It is included here for the record, not because it is good — but because it is honest about what I did and did not understand at the time.`,
  },
];

export type Note = {
  id: string;
  slug: string;
  title: string;
  date: string;
  year: number;
  dek: string;       // editorial subtitle
  readingMinutes: number;
  body: string;
};

export const NOTES: Note[] = [
  {
    id: "I",
    slug: "the-room-and-the-corridor",
    title: "The room and the corridor",
    dek: "On the difference between a place to think and a place to pass through.",
    date: "2025-03-01",
    year: 2025,
    readingMinutes: 8,
    body: `Most of what we now call workspaces are corridors. They are designed for movement — for the quick exchange, the fifteen-minute review, the slack of going from one place to another without quite arriving anywhere.

A room, by contrast, is designed for staying. It assumes you have come to do one thing and that the thing will take longer than you wanted. It is built around the body's preferences for warmth, indirect light, and a low ceiling of attention.

## The architecture of staying

You can tell a room from a corridor by what it makes easy. A room makes it easy to lose track of time. A corridor makes it easy to leave.

I have begun, in the past two years, to design my working life around rooms. Not literally — though the literal version helps — but in the structural sense. I try to enter one or two of them per day, and to make the corridors between them as short and uneventful as possible.

## What rooms cost

Rooms are expensive in the way all good things are expensive: they require that you know what you are coming to do. They punish the casual visit. They reward the practiced one.

I do not think this scales. I do not think it is meant to.`,
  },
  {
    id: "II",
    slug: "the-archive-as-a-form-of-attention",
    title: "The archive as a form of attention",
    dek: "Why I stopped writing for an audience and started writing for the record.",
    date: "2025-01-12",
    year: 2025,
    readingMinutes: 11,
    body: `For a long time I wrote in public the way one performs in public — with the audience as the gravitational center of every sentence. This is the default mode of writing online, and there is nothing wrong with it. It is simply not the only mode.

Some years ago I began to write a different way. The change was technical at first: I moved my notes out of platforms that pressured me to publish them, and into a long, dated, indexed file I kept for myself.

## What the archive does

What I noticed, slowly, was that the archive changed what I wrote. The audience was no longer the gravitational center; the record was. And the record had different demands. It wanted accuracy more than emphasis. It wanted dates. It wanted me to admit when I had been wrong, because the wrongness was part of the trace.

## What it does not do

The archive does not, despite the temptation, replace the audience. It is a different relationship. The audience asks you to be interesting; the record asks you to be honest. Both are demanding in their own way. I have come to think that you cannot do both well at the same time, and that most of us — myself included — have spent too much of our writing life on the first.`,
  },
  {
    id: "III",
    slug: "long-arithmetic",
    title: "Long arithmetic",
    dek: "On compound effects in work that does not advertise them.",
    date: "2024-10-04",
    year: 2024,
    readingMinutes: 6,
    body: `Compound effects are advertised most loudly in the places they are weakest — the diet, the morning routine, the productivity stack. They operate most strongly in the places that do not advertise them: a body of writing, a circle of correspondents, a thesis held quietly for a decade.

The advertised compounds are easier to start because they are louder. They are also easier to stop, for the same reason. The unadvertised ones are harder to begin and almost impossible to abandon, because by the time they are visible they have grown into the shape of your life.`,
  },
  {
    id: "IV",
    slug: "what-survives",
    title: "What survives",
    dek: "An attempt to name the things I would not be willing to lose.",
    date: "2024-07-19",
    year: 2024,
    readingMinutes: 9,
    body: `I have begun keeping, in a small file, a list of the things I would not be willing to lose from my working life. Not the achievements — the practices. The list is shorter than I expected. It is mostly habits of attention. A few correspondences. The discipline of one book per month. The morning walk. A particular way of writing memos that I learned from someone who is no longer alive.

The list is not complete and probably never will be. But the act of keeping it — of asking, every few months, whether anything has joined or fallen away — has been one of the most clarifying things I do.`,
  },
];

// Helpers
export function getArtifact(slug: string) {
  return ARTIFACTS.find((a) => a.slug === slug);
}
export function getNote(slug: string) {
  return NOTES.find((n) => n.slug === slug);
}
export function getCollection(slug: string) {
  return COLLECTIONS.find((c) => c.slug === slug);
}
export function artifactsByCollection(slug: Collection) {
  return ARTIFACTS.filter((a) => a.collections.includes(slug));
}
export function selectedArtifacts() {
  return ARTIFACTS.filter((a) => a.selected);
}
export function artifactsByYear() {
  const years = Array.from(new Set(ARTIFACTS.map((a) => a.year))).sort((a, b) => b - a);
  return years.map((year) => ({
    year,
    items: ARTIFACTS.filter((a) => a.year === year).sort((a, b) =>
      a.date < b.date ? 1 : -1
    ),
  }));
}
export function relatedArtifacts(artifact: Artifact, n = 3) {
  return ARTIFACTS.filter(
    (a) =>
      a.slug !== artifact.slug &&
      (a.collections.some((c) => artifact.collections.includes(c)) ||
        a.tags.some((t) => artifact.tags.includes(t)))
  ).slice(0, n);
}

export const SITE = {
  name: "Nathan Mike Sidi Bakari",
  short: "N. M. S. Bakari",
  tagline: "A personal archive of work, notes, and traces.",
  description:
    "A personal archive of work, notes, and traces across engineering, entrepreneurship, investing, and art.",
  url: "https://nmsbakari.example",
  email: "correspondence@nmsbakari.example",
};
