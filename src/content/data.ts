export type Collection = "engineer" | "entrepreneur" | "investor" | "artist";

export const collectionLabels: Record<Collection, string> = {
  engineer: "Engineer",
  entrepreneur: "Entrepreneur",
  investor: "Investor",
  artist: "Artist",
};

export const collectionDescriptions: Record<Collection, string> = {
  engineer:
    "Systems, software, and infrastructure work. Things built to function — sometimes for years, sometimes for a single afternoon.",
  entrepreneur:
    "Companies started, products shipped, ventures wound down. The shape of trying things in public, with consequences.",
  investor:
    "Capital decisions, theses, memos. A record of where attention and conviction were placed, and what came of it.",
  artist:
    "Photographs, essays, recordings, drawings. Work that exists for its own sake, or for reasons that resist a clean justification.",
};

export type ArtifactType =
  | "project"
  | "essay"
  | "talk"
  | "memo"
  | "company"
  | "investment"
  | "photograph"
  | "recording"
  | "open-source"
  | "paper";

export type ArtifactStatus = "active" | "shipped" | "archived" | "ongoing" | "wound-down";

export interface Artifact {
  slug: string;
  accession: string;
  title: string;
  date: string; // ISO
  type: ArtifactType;
  collections: Collection[];
  tags: string[];
  status: ArtifactStatus;
  role?: string;
  summary: string;
  context?: string;
  outcome?: string;
  body?: string;
  externalLinks?: { label: string; href: string }[];
  selected?: boolean;
}

export const artifacts: Artifact[] = [
  {
    slug: "ledger-os",
    accession: "ENG·2024·031",
    title: "Ledger OS — a deterministic event store",
    date: "2024-09-12",
    type: "open-source",
    collections: ["engineer"],
    tags: ["distributed-systems", "rust", "event-sourcing"],
    status: "active",
    role: "Author and maintainer",
    summary:
      "An append-only event store with deterministic replay, designed for small teams who need auditability without the operational weight of Kafka.",
    context:
      "Built after three consecutive projects where I watched event-sourced systems collapse under their own infrastructure. The premise was modest: a single binary, embedded by default, that gets the durability and ordering guarantees right and leaves everything else to the application.",
    outcome:
      "Used in production by four companies I know of. The design notes have outlived the code in usefulness — most readers come for the writing on idempotency, not the implementation.",
    body: "The first version was 800 lines of Rust and a 40-page README. The README turned out to be the more durable artifact.\n\nWhat I learned writing it: most teams do not need exactly-once. They need *understandable* once, which is a much smaller and more honest target.",
    externalLinks: [
      { label: "Repository", href: "#" },
      { label: "Design notes", href: "#" },
    ],
    selected: true,
  },
  {
    slug: "northbound",
    accession: "ENT·2021·004",
    title: "Northbound — logistics for cold-chain pharmaceuticals",
    date: "2021-03-04",
    type: "company",
    collections: ["entrepreneur"],
    tags: ["logistics", "healthcare", "founder"],
    status: "wound-down",
    role: "Co-founder, CEO",
    summary:
      "A venture-backed cold-chain logistics company serving rural clinics. Operated for 31 months. Wound down deliberately when the unit economics refused to improve.",
    context:
      "We started Northbound because two friends working in rural health kept losing insulin shipments to broken cold chains. The technology problem was small. The coordination problem — between distributors, regulators, and clinics — was the real work.",
    outcome:
      "Returned roughly 40% of capital. The shutdown notes are more useful than the launch deck. I keep both filed together for reference.",
    externalLinks: [{ label: "Closing letter to investors", href: "#" }],
    selected: true,
  },
  {
    slug: "patient-capital-thesis",
    accession: "INV·2023·011",
    title: "On patient capital in unfashionable industries",
    date: "2023-06-18",
    type: "memo",
    collections: ["investor"],
    tags: ["thesis", "industrials", "long-horizon"],
    status: "ongoing",
    role: "Author",
    summary:
      "A working thesis on deploying long-duration capital into mid-market industrial businesses that the venture model systematically ignores.",
    context:
      "Drafted over six months and revised twice since. Shared with the small group of LPs and operators I work with. Not a fund deck — a thinking document.",
    outcome:
      "Three investments made under this thesis to date. One write-off, one steady, one early but promising. Revisited annually.",
    selected: true,
  },
  {
    slug: "rooms-without-people",
    accession: "ART·2022·007",
    title: "Rooms Without People",
    date: "2022-11-02",
    type: "photograph",
    collections: ["artist"],
    tags: ["photography", "series", "interiors"],
    status: "shipped",
    role: "Photographer",
    summary:
      "A series of 24 large-format photographs of interior spaces shortly after they were vacated. Exhibited in a small gallery in Lisbon, November 2022.",
    context:
      "Shot over two years, mostly on weekends, in apartments and offices between tenants. The constraint was rigid: no people, no staging, ambient light only, within 48 hours of vacancy.",
    outcome:
      "Twelve prints sold. The remaining work lives in a flat file. A short essay accompanies the series and reads better than the images do alone.",
    externalLinks: [{ label: "Series essay", href: "#" }],
    selected: true,
  },
  {
    slug: "sourdough-and-state-machines",
    accession: "ENG·2023·022",
    title: "Sourdough and state machines",
    date: "2023-04-09",
    type: "essay",
    collections: ["engineer", "artist"],
    tags: ["essay", "process", "craft"],
    status: "shipped",
    summary:
      "An essay on the surprising structural similarities between maintaining a sourdough starter and operating a long-lived distributed system.",
  },
  {
    slug: "talk-on-quiet-software",
    accession: "ENG·2022·018",
    title: "Quiet software — a talk on tools that do not call attention to themselves",
    date: "2022-05-21",
    type: "talk",
    collections: ["engineer"],
    tags: ["talk", "design", "tools"],
    status: "shipped",
    summary:
      "Conference talk on the design ethics of software that recedes — the inverse of engagement-maximizing product design.",
    externalLinks: [{ label: "Recording", href: "#" }],
  },
  {
    slug: "field-notes-vol-1",
    accession: "ART·2024·014",
    title: "Field Notes, Volume I",
    date: "2024-01-30",
    type: "paper",
    collections: ["artist"],
    tags: ["zine", "writing", "self-published"],
    status: "shipped",
    summary:
      "A 64-page hand-bound zine of fragments, marginalia, and short essays from 2022–2023. Print run of 200.",
  },
  {
    slug: "ironclad-investment",
    accession: "INV·2022·009",
    title: "Investment — Ironclad Foundry, Series Seed",
    date: "2022-08-15",
    type: "investment",
    collections: ["investor"],
    tags: ["industrials", "manufacturing", "seed"],
    status: "active",
    role: "Lead investor",
    summary:
      "Seed-stage investment in a precision foundry serving aerospace and medical manufacturing. Memo and follow-up notes filed.",
  },
  {
    slug: "kestrel",
    accession: "ENT·2018·002",
    title: "Kestrel — early-stage developer tooling",
    date: "2018-02-12",
    type: "company",
    collections: ["entrepreneur", "engineer"],
    tags: ["developer-tools", "founder", "acquired"],
    status: "shipped",
    role: "Founder, CTO",
    summary:
      "A small developer-tools company building static analysis for embedded systems. Acquired by a larger toolchain vendor in 2020.",
  },
  {
    slug: "on-being-wrong-in-public",
    accession: "ESS·2024·028",
    title: "On being wrong in public",
    date: "2024-07-04",
    type: "essay",
    collections: ["entrepreneur", "investor"],
    tags: ["essay", "reflection"],
    status: "shipped",
    summary:
      "A short essay on the quiet utility of publishing your wrong predictions alongside your right ones.",
  },
  {
    slug: "winter-light-recordings",
    accession: "ART·2023·013",
    title: "Winter Light — ambient recordings",
    date: "2023-12-21",
    type: "recording",
    collections: ["artist"],
    tags: ["sound", "ambient", "field-recording"],
    status: "shipped",
    summary:
      "A 48-minute ambient piece assembled from field recordings made over a single week of winter solstice.",
  },
  {
    slug: "infrastructure-for-trust",
    accession: "ENG·2020·012",
    title: "Infrastructure for trust — a paper",
    date: "2020-10-08",
    type: "paper",
    collections: ["engineer"],
    tags: ["paper", "cryptography", "co-authored"],
    status: "archived",
    summary:
      "Co-authored paper on practical attestation in resource-constrained devices. Presented at a small workshop.",
  },
  {
    slug: "small-press-investment",
    accession: "INV·2024·017",
    title: "Investment — Marlin & Co., a small literary press",
    date: "2024-02-22",
    type: "investment",
    collections: ["investor", "artist"],
    tags: ["press", "small-cap"],
    status: "active",
    summary:
      "A modest investment in a small press publishing translated literature. Made for reasons that include but exceed financial return.",
  },
  {
    slug: "the-quiet-margin",
    accession: "ENT·2023·024",
    title: "The Quiet Margin — newsletter",
    date: "2023-09-04",
    type: "essay",
    collections: ["entrepreneur", "investor"],
    tags: ["newsletter", "ongoing"],
    status: "ongoing",
    summary:
      "A monthly newsletter on patient capital, slow companies, and the unfashionable middle of the market. Roughly 1,800 subscribers.",
  },
  {
    slug: "drawings-2021",
    accession: "ART·2021·005",
    title: "Drawings, 2021",
    date: "2021-12-10",
    type: "photograph",
    collections: ["artist"],
    tags: ["drawing", "ink", "portfolio"],
    status: "archived",
    summary:
      "A folio of 38 ink drawings completed during a year of mostly being indoors. Never exhibited; sometimes shared.",
  },
];

export interface Note {
  slug: string;
  number: string;
  title: string;
  date: string;
  readingMinutes: number;
  summary: string;
  body: string;
  tags: string[];
}

export const notes: Note[] = [
  {
    slug: "the-archive-as-a-practice",
    number: "№ 014",
    title: "The archive as a practice",
    date: "2024-11-08",
    readingMinutes: 9,
    tags: ["archive", "method", "writing"],
    summary:
      "On keeping a record of one's work not for posterity, not for marketing, but as a private discipline that occasionally permits visitors.",
    body: "There is a particular kind of relief in admitting, finally, that the record is the work.\n\nFor years I kept things in folders organized by year and project, and the folders multiplied, and eventually I lost the thread of which folder contained what. The website you are reading is, in the most honest framing, a reorganization of my own filing system that I have made the mistake of leaving the door to.\n\n## What an archive is not\n\nIt is not a portfolio. A portfolio is shaped to persuade — selected, polished, arranged for someone who has not yet decided to trust you. An archive is shaped to remember. It includes the failed experiment, the company that did not work, the essay you wrote in one sitting and would not write the same way today.\n\nIt is also not a blog. A blog is a stream — a sequence of moments. An archive is a structure — moments placed in relation to each other, indexed so that the relations become legible over time.\n\n## What an archive is for\n\nThe first reader is yourself, in five years, trying to remember what you thought. The second reader is a stranger who, by some uncertain route, has arrived here and is curious. The third reader is the version of you that will write the next thing, and who needs to know what was already attempted.\n\nIn that order. The order matters.\n\n## A few small commitments\n\nI will not write to be ranked. I will not write to be shared. I will write to be filed, and I will let the filing be public.",
  },
  {
    slug: "patient-capital-revisited",
    number: "№ 013",
    title: "Patient capital, revisited",
    date: "2024-09-22",
    readingMinutes: 12,
    tags: ["investing", "thesis"],
    summary:
      "A second look at the patient capital memo eighteen months on, with the benefit of one write-off and two surprises.",
    body: "Eighteen months ago I wrote a memo on deploying long-duration capital into industrial businesses. The memo was confident in places it should not have been, and tentative where it should have been firm.\n\n## What I had right\n\nThat the venture model is structurally incapable of serving a category of mid-market industrial business that, despite producing real cash, does not produce the multiples a fund needs to return capital. This remains true and is, if anything, more true now than when I wrote it.\n\n## What I had wrong\n\nI underestimated how lonely the work would be. I had imagined a small, quiet network of similarly-minded investors. The network exists, but it is smaller and quieter than I expected, and most of its members do not write.\n\n## What surprised me\n\nThe two best decisions made under this thesis were both made against the framework. In one case, the company was earlier-stage than the thesis allows. In the other, the team was much smaller than I usually require. The framework, I am learning, is for filtering what to look at — not for making the final call.",
  },
  {
    slug: "what-i-keep-in-folders",
    number: "№ 012",
    title: "What I keep in folders",
    date: "2024-07-15",
    readingMinutes: 6,
    tags: ["process", "method"],
    summary:
      "A short tour of a personal filing system that has survived three computers, two countries, and one nearly-catastrophic sync failure.",
    body: "Every January I open the previous year's archive folder and look at it for half an hour without doing anything else. This is the most useful thing I do all year.\n\n## The structure\n\nYear / project / artifact. That is the whole structure. I have tried more elaborate schemes — tags, knowledge graphs, the wiki of personal note-taking software — and none of them survived contact with my actual habits.\n\n## What goes in\n\nDrafts, finished work, contracts, photographs, voice memos, screenshots that meant something at the time, the occasional letter. If I am unsure whether to file something, I file it. The cost of a kept-thing-not-needed is much lower than the cost of a needed-thing-not-kept.\n\n## What stays out\n\nReceipts. Calendar events. Anything generated automatically. The archive is for things I touched.",
  },
  {
    slug: "on-quiet-software",
    number: "№ 011",
    title: "On quiet software",
    date: "2024-05-30",
    readingMinutes: 11,
    tags: ["software", "design", "ethics"],
    summary:
      "Notes from an unfinished talk on tools that do their work without asking for your attention — and why this is harder than it sounds.",
    body: "There is a class of software I find myself increasingly drawn to and increasingly unable to find. Software that does its work and gets out of the way. Software that does not have a quarterly engagement target.\n\n## A short list\n\n- A text editor that has not been redesigned in five years.\n- An email client that does not try to write the email for me.\n- A photograph viewer that opens a photograph.\n\nThese are not difficult engineering problems. They are difficult business problems. A piece of software that does its work and gets out of the way does not have a growth loop, and a piece of software without a growth loop is, in the current arrangement, slowly starved.\n\n## Why this matters\n\nIt matters because attention is the only durable resource a working life depends on, and software that demands attention as its business model is, in aggregate, eroding the substrate on which all other work happens.\n\n## What to do\n\nPay for it. Pay too much for it. Recommend it to one other person. The market for quiet software is not large but it is not zero, and it survives almost entirely on patronage.",
  },
  {
    slug: "wound-down",
    number: "№ 010",
    title: "Wound down",
    date: "2024-02-04",
    readingMinutes: 8,
    tags: ["entrepreneurship", "reflection"],
    summary:
      "On the difference between failure and a deliberate ending, and why the second is harder to write about honestly.",
    body: "Northbound did not fail. We wound it down. The distinction matters to me, and I want to try to say why.\n\n## A failure\n\nA failure is when you run out of the resources required to continue, and the decision is made for you. There is a clarity to it that, in retrospect, I have come to almost envy.\n\n## A wind-down\n\nA wind-down is when you have the resources to continue, and you choose not to. You sit with your co-founder over coffee and you say the thing neither of you has said yet — that the unit economics are not going to improve, that the next round would extend the runway but not the conviction, that the most respectful thing you can do for the people who trusted you with capital is to give back what you can while you can still give back something.\n\n## Why it is harder to write about\n\nBecause the story does not have a villain. There is no market that turned, no competitor that out-executed, no technical mistake to point at. There is only a quiet accumulation of evidence that the thing you set out to build is not going to become what you needed it to become, and a decision, made over weeks, to stop.",
  },
  {
    slug: "field-notes-from-lisbon",
    number: "№ 009",
    title: "Field notes from Lisbon",
    date: "2023-11-19",
    readingMinutes: 5,
    tags: ["travel", "art", "fragments"],
    summary:
      "Brief notes from three weeks of installing the Rooms Without People exhibition and the conversations around it.",
    body: "The gallery had a soft northern light I had not anticipated, and the prints, which I had selected for harder light, looked different on the walls than they had in the studio. This was, I think, the most useful surprise of the trip.\n\n## On showing work in a small room\n\nA small room forgives nothing. Each print has a neighbor and that neighbor changes it. Two prints I had thought of as quiet became loud next to each other, and I moved them apart on the second day.\n\n## On talking about photographs\n\nMost of the questions I was asked were about the spaces. Almost none were about the photographs. This was the right ratio.",
  },
];

export function getArtifactBySlug(slug: string) {
  return artifacts.find((a) => a.slug === slug);
}

export function getNoteBySlug(slug: string) {
  return notes.find((n) => n.slug === slug);
}

export function getArtifactsByCollection(c: Collection) {
  return artifacts
    .filter((a) => a.collections.includes(c))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getRelatedArtifacts(slug: string, limit = 4) {
  const a = getArtifactBySlug(slug);
  if (!a) return [];
  return artifacts
    .filter((x) => x.slug !== slug)
    .map((x) => ({
      a: x,
      score:
        x.collections.filter((c) => a.collections.includes(c)).length * 2 +
        x.tags.filter((t) => a.tags.includes(t)).length,
    }))
    .filter((r) => r.score > 0)
    .sort((r1, r2) => r2.score - r1.score)
    .slice(0, limit)
    .map((r) => r.a);
}

export function formatDate(iso: string, mode: "long" | "short" | "year" = "long") {
  const d = new Date(iso);
  if (mode === "year") return String(d.getUTCFullYear());
  if (mode === "short")
    return d.toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" });
  return d.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
