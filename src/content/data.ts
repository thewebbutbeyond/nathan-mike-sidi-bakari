export type Collection = "engineer" | "entrepreneur" | "investor" | "artist";

export interface Entry {
  slug: string;
  title: string;
  date: string; // ISO
  type: string;
  status: "active" | "archived" | "in-progress" | "historical" | "draft";
  summary: string;
  body: string; // markdown-ish (we render as paragraphs)
  collections: Collection[];
  tags: string[];
  role?: string;
  outcome?: string;
  selected?: boolean;
  links?: { label: string; href: string }[];
  related?: string[];
}

export interface Note {
  slug: string;
  title: string;
  date: string;
  summary: string;
  body: string;
  tags: string[];
  readingMinutes: number;
  cover?: string;
  coverAlt?: string;
}

export const COLLECTIONS: { slug: Collection; label: string; description: string }[] = [
  {
    slug: "engineer",
    label: "Engineering",
    description: "Systems, infrastructure, code. Things that compile and run.",
  },
  {
    slug: "entrepreneur",
    label: "Entrepreneurship",
    description: "Companies started, products shipped, operating notes.",
  },
  {
    slug: "investor",
    label: "Investing",
    description: "Theses, memos, positions held, and what they taught.",
  },
  {
    slug: "artist",
    label: "Art",
    description: "Drawings, prints, generative pieces, and quiet experiments.",
  },
];

export const ENTRIES: Entry[] = [
  {
    slug: "ledger-engine-v2",
    title: "Ledger Engine v2",
    date: "2025-09-14",
    type: "system",
    status: "active",
    summary:
      "Double-entry accounting core rewritten around an append-only event log with deterministic reducers.",
    body: `The first version drifted under load. Reconciliation queries grew linearly with account count, and any historical correction required hand-edited migrations. v2 treats every posting as an immutable event and computes balances as a fold over a stable, ordered stream.

The win is not performance, though that improved. The win is that auditing becomes trivial: every state at every point in time is a pure function of the log up to that moment. Corrections are new events, never edits. The system became something I trust enough to leave alone.

Built in Rust, with a Postgres LISTEN/NOTIFY layer for downstream consumers. About 14k lines, ~91% line coverage. Ran in shadow mode for six weeks before cutover.`,
    collections: ["engineer", "entrepreneur"],
    tags: ["rust", "postgres", "accounting", "event-sourcing"],
    role: "Designed the reducer model, wrote the core, supervised migration.",
    outcome: "Cut month-end close from 4 days to 6 hours. Zero rollbacks since launch.",
    selected: true,
    links: [{ label: "Internal RFC", href: "#" }],
    related: ["close-the-books", "operator-letter-q3-2024"],
  },
  {
    slug: "operator-letter-q3-2024",
    title: "Operator Letter, Q3 2024",
    date: "2024-10-08",
    type: "letter",
    status: "archived",
    summary:
      "Quarterly letter to the team covering revenue mix, the decision to sunset the consumer tier, and how we hire under constraint.",
    body: `Three things this quarter. First, revenue concentration crossed a line I am no longer comfortable with: top three customers, 61%. We are not shifting strategy because of this; we are shifting cadence. Outbound reopens in November.

Second, the consumer tier. It served its purpose as a discovery channel and we learned what we needed to learn. It will not earn its keep against the focus it costs. We sunset it in stages over Q4 and reissue refunds where appropriate.

Third, hiring. We are still pacing slower than the market expects of a company at our stage. That is a choice. Every hire makes the team easier or harder to coordinate, and I will take a slower year over a louder one.`,
    collections: ["entrepreneur"],
    tags: ["operations", "writing", "letters"],
    role: "Author.",
  },
  {
    slug: "thesis-vertical-llms",
    title: "Investment thesis: vertical LLM tooling",
    date: "2024-06-22",
    type: "memo",
    status: "active",
    summary:
      "A position paper on why the next wave of useful LLM products will be narrow, opinionated, and indistinguishable from internal tools at first.",
    body: `Horizontal copilots are now table stakes and unprofitable. The interesting surface is narrow workflows (claims adjustment, contract redlining, freight reconciliation) where the model is one component of a system that already has data, users, and a billing relationship.

Three patterns I am underwriting: (a) workflow-shaped products that look like internal tools at launch and graduate into platforms; (b) inference-cost arbitrage as a temporary moat that the team must convert into proprietary data within 18 months; (c) regulated verticals where the integration debt is the moat, not the model.

I am not underwriting: foundation model wrappers without a data flywheel, and "AI for X" decks that read identically to a 2014 SaaS deck with the noun changed.`,
    collections: ["investor"],
    tags: ["llm", "thesis", "saas", "vertical"],
    selected: true,
  },
  {
    slug: "close-the-books",
    title: "Close the Books",
    date: "2025-02-03",
    type: "essay",
    status: "active",
    summary:
      "On the discipline of finishing, and why I treat the end of a project as a separate, deliberate piece of work.",
    body: `Most of what I have abandoned was not abandoned at the start. It was abandoned somewhere between 80% and 95%, in the part of the work that has no momentum and no audience. The work of closing.

Closing is its own skill. It looks like writing the README that makes the thing inheritable, deleting the three branches you will never merge, paying off the small debts you privately know about, and saying out loud (to yourself, in writing) what the thing did and did not do. It is the single most underrated act in a working life.

I now schedule closing the same way I schedule starting. A finished thing, even a small one, compounds. An almost-finished thing decays.`,
    collections: ["engineer", "entrepreneur"],
    tags: ["practice", "writing", "process"],
    selected: true,
  },
  {
    slug: "graphite-studies",
    title: "Graphite Studies, 2023–2024",
    date: "2024-12-01",
    type: "drawing series",
    status: "archived",
    summary:
      "Forty small graphite drawings made over fourteen months. Mostly hands, mostly evenings.",
    body: `A private practice that became a series almost by accident. I started drawing hands in the evening because I wanted a daily activity that did not produce a deliverable. After a year I had forty.

They are not technically ambitious. The point was the rhythm. I scanned them at the end of 2024 and a small selection is here.`,
    collections: ["artist"],
    tags: ["drawing", "graphite", "practice", "hands"],
    selected: true,
  },
  {
    slug: "first-company-postmortem",
    title: "Postmortem: first company, 2017–2020",
    date: "2021-03-15",
    type: "postmortem",
    status: "historical",
    summary:
      "What I got right, what I got wrong, and what I no longer believe about building a first company.",
    body: `We sold in 2020 for less than the last round and more than the founders had any reason to expect. Both can be true. Three years later, this is what I think happened.

Right: hiring slowly in year one, choosing a hard market, refusing to raise a Series A on growth I did not believe was durable. Wrong: assuming the product would carry the founder, building too much before charging, and confusing customer love with willingness to pay. No longer believe: that founder grit is a meaningful predictor of outcomes. Distribution is.`,
    collections: ["entrepreneur"],
    tags: ["postmortem", "first-company", "lessons"],
    selected: true,
  },
  {
    slug: "memo-fintech-infra-2023",
    title: "Memo: fintech infra, late 2023",
    date: "2023-11-04",
    type: "memo",
    status: "archived",
    summary:
      "A position taken on payments orchestration at a moment when the category looked crowded and was not.",
    body: `The pitch I kept hearing in 2023 was that orchestration is a feature, not a category. The pitch was wrong, and the bias underneath it (that infra companies should be "thin") kept good investors out of a wave they should have caught.

I wrote a small check into one team in this space in November 2023. The thesis was simple: every additional payment method a merchant adopts converts a one-time integration into a recurring operations cost, and someone is going to absorb that cost professionally.`,
    collections: ["investor"],
    tags: ["fintech", "payments", "memo"],
  },
  {
    slug: "tiny-pcb-clock",
    title: "Tiny PCB clock",
    date: "2022-07-19",
    type: "hardware",
    status: "archived",
    summary:
      "A 35×35mm desk clock built around an ATtiny and a 4-digit 7-segment display. A weekend project that lasted four months.",
    body: `Started as a weekend project, ended as a study in scope creep. The first version worked in two days. The next sixteen weekends were spent on enclosure, low-power firmware, and a small batch of ten that I sent to friends.

I do not recommend designing your own PCB to save money. I do recommend doing it once.`,
    collections: ["engineer", "artist"],
    tags: ["hardware", "pcb", "side-project"],
  },
  {
    slug: "generative-prints-001",
    title: "Generative prints, series 001",
    date: "2024-04-10",
    type: "print series",
    status: "archived",
    summary:
      "Twelve risograph prints generated from a small Rust program and printed in a two-color run.",
    body: `The program is twenty pages of Rust and produces deterministic outputs from a seed. I generated about three hundred candidates, selected twelve, and printed them on a borrowed RISO in two colors.

The interesting part was the selection: sitting with the outputs over two weekends and noticing which ones I came back to. Generative work makes the curatorial step legible in a way that drawing does not.`,
    collections: ["artist", "engineer"],
    tags: ["generative", "riso", "rust", "print"],
    selected: true,
  },
  {
    slug: "infra-bill-audit-2024",
    title: "Infra bill audit, mid-2024",
    date: "2024-07-30",
    type: "operating note",
    status: "archived",
    summary:
      "A line-by-line audit of our cloud bill that recovered 38% without architectural change.",
    body: `Most of the saving came from three places: idle non-prod environments, an over-provisioned managed Postgres tier we sized for a peak that never returned, and egress to a vendor we had since migrated away from.

Worth doing yearly. Cheaper than any rearchitecture and educational about how the system actually behaves.`,
    collections: ["engineer", "entrepreneur"],
    tags: ["operations", "cloud", "cost"],
  },
  {
    slug: "reading-list-2024",
    title: "Reading list, 2024",
    date: "2025-01-04",
    type: "list",
    status: "archived",
    summary: "Forty-one books finished in 2024, with the seven I would actually recommend.",
    body: `The seven: *Seeing Like a State* (Scott), *The Idea of the Brain* (Cobb), *A Pattern Language* (Alexander et al.), *The Power Broker* (Caro, finally), *Working in Public* (Eghbal), *The Goal* (Goldratt), *Piranesi* (Clarke).

Skipped or abandoned: many. Time spent abandoning a book is time spent honoring time.`,
    collections: ["artist", "investor"],
    tags: ["reading", "list", "annual"],
  },
  {
    slug: "early-employee-handbook",
    title: "Early-employee handbook (working draft)",
    date: "2023-09-12",
    type: "handbook",
    status: "in-progress",
    summary:
      "A short guide for the first ten people at a company, written for the people, not the founder.",
    body: `Most "first ten" advice is written for founders. This is for the people they hire: what to ask in the offer conversation, how to read equity terms without spending money on a lawyer, how to know when to leave.

Currently about 9,000 words. I add to it every few months when something I see makes me wish someone had written it down.`,
    collections: ["entrepreneur"],
    tags: ["hiring", "writing", "handbook"],
  },
];

import noteCoverArchives from "@/assets/notes/on-archives-not-portfolios.jpg";
import noteCoverContext from "@/assets/notes/the-cost-of-context.jpg";
import noteCoverInvesting from "@/assets/notes/what-investing-taught-me-about-product.jpg";
import noteCoverDrawing from "@/assets/notes/drawing-as-rest.jpg";

export const NOTES: Note[] = [
  {
    slug: "on-archives-not-portfolios",
    title: "On archives, not portfolios",
    date: "2025-04-02",
    summary:
      "Why I stopped maintaining a portfolio site and started keeping a record instead.",
    readingMinutes: 6,
    tags: ["meta", "writing", "archive"],
    cover: noteCoverArchives,
    coverAlt: "Two pale archive boxes resting on a softly lit shelf.",
    body: `A portfolio is a sales document. It selects, polishes, and presents, and the selection criterion is, almost always, "this will impress someone." That criterion quietly distorts everything you make. Over enough years, you start picking projects for the portfolio you will eventually write, and the work narrows.

An archive is different. The criterion for inclusion is just: did this happen, and is it worth keeping a record of? Failures stay. Half-finished work stays. Letters stay. The shape of the record is the shape of the working life, not the shape of the pitch.

I made the switch about a year ago. The first month I felt the absence of the polish: the urge to add a "featured" badge, to crop a screenshot, to write in the marketing voice. I sat with the urge until it passed. What is left is something I can stand behind in ten years, because it is not asking anything of the visitor.

The cost is real. An archive does not convert. It does not generate leads, build a personal brand, or perform well on the platforms designed for performance. It accrues, slowly, and it is legible mostly to people who already have a reason to look. That trade is the whole point.`,
  },
  {
    slug: "the-cost-of-context",
    title: "The cost of context",
    date: "2025-01-18",
    summary:
      "Notes on why holding several domains in mind at once is expensive, and worth doing anyway.",
    readingMinutes: 9,
    tags: ["practice", "engineering", "investing"],
    cover: noteCoverContext,
    coverAlt: "An open notebook layered with sheets of ochre and ivory paper.",
    body: `Working across engineering, operating, investing, and a quiet art practice is not a strategy. It is a description of how my attention behaves when left alone. I am not arguing for it. I am noting the cost.

The cost is context. Each domain has its own vocabulary, its own pace, and its own definition of what counts as a good day. Engineering days are long and uninterrupted; investing days are short and conversational; operating days are reactive; drawing days are evening-shaped and small. The taxes of switching are real and not symmetric. A good engineering session destroyed by an investor call is more expensive than the reverse.

What makes it bearable is that the domains are not separate. The engineering taste shows up in how I read a memo. The operating reflexes show up in how I sketch. The drawing practice (and I notice this most) shows up in the patience required to sit with a system before changing it. None of this is a transferable skill in the LinkedIn sense. It is a kind of sediment.

I do not recommend it. I am writing this down so that, in the years when the taxes feel highest, I have a record of having chosen it.`,
  },
  {
    slug: "what-investing-taught-me-about-product",
    title: "What investing taught me about product",
    date: "2024-09-30",
    summary:
      "Three habits I picked up from underwriting other people's companies that quietly changed how I build my own.",
    readingMinutes: 7,
    tags: ["investing", "product", "lessons"],
    cover: noteCoverInvesting,
    coverAlt: "A coffee cup beside a leather notebook and pen on warm linen.",
    body: `One. Read the cap table before the pitch. Not because the cap table predicts the outcome, but because it tells you what the founder has already decided is true about distribution of value, and that is usually load-bearing in a way decks never are. The product analogue: read the schema before the feature spec.

Two. Time-box the diligence. The thing that a fourth meeting reveals is, in my experience, almost never the thing that matters. The decision was usually available after meeting two and the rest is comfort. I now apply this to product calls, too: if I cannot articulate why I am scheduling a third review, I should be making the call instead.

Three. Underwrite to a story you would defend in five years, not five months. The investments I am proudest of were unfashionable on entry. The features I am proudest of were the same.`,
  },
  {
    slug: "drawing-as-rest",
    title: "Drawing as rest",
    date: "2024-05-21",
    summary:
      "An evening practice that is not productive, not therapeutic, and not for anyone else.",
    readingMinutes: 5,
    tags: ["practice", "drawing", "rest"],
    cover: noteCoverDrawing,
    coverAlt: "A pencil resting on cream paper under a soft evening lamp.",
    body: `I draw most evenings for somewhere between fifteen minutes and an hour. It is not productive; nothing leaves the room. It is not therapeutic; I do not feel processed afterward. It is not for anyone else, because I do not show most of it. It is closer to walking.

The thing I get from it is the absence of metrics. There is no count, no streak, no audience, and no improvement curve I am tracking. I sit with a pencil and a small piece of paper for a while, and then I stop. The next day I do it again, or I do not. Both are fine.

A friend once asked me what the practice "was for." I think the honest answer is that it is the part of my week that is for nothing. Everything else is for something. The drawings are the relief valve.`,
  },
];

export const ALL_TAGS = Array.from(
  new Set([...ENTRIES.flatMap((a) => a.tags), ...NOTES.flatMap((n) => n.tags)]),
).sort();

export function formatDate(iso: string, opts?: { long?: boolean }) {
  const d = new Date(iso + "T00:00:00Z");
  if (opts?.long) {
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  }
  return d.toISOString().slice(0, 10);
}

export function formatYear(iso: string) {
  return iso.slice(0, 4);
}

export function getArtifact(slug: string) {
  return ENTRIES.find((a) => a.slug === slug);
}

export function getNote(slug: string) {
  return NOTES.find((n) => n.slug === slug);
}

export function artifactsByCollection(slug: Collection) {
  return ENTRIES.filter((a) => a.collections.includes(slug)).sort((a, b) =>
    b.date.localeCompare(a.date),
  );
}

export function sortedArtifacts() {
  return [...ENTRIES].sort((a, b) => b.date.localeCompare(a.date));
}

export function sortedNotes() {
  return [...NOTES].sort((a, b) => b.date.localeCompare(a.date));
}
