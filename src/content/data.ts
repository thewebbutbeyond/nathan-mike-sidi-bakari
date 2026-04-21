export type Collection = "engineer" | "entrepreneur" | "investor" | "artist";

export const COLLECTIONS: Record<
  Collection,
  { label: string; code: string; description: string }
> = {
  engineer: {
    label: "Engineer",
    code: "ENG",
    description:
      "Systems, infrastructure, and software written or led — from low-level tooling to applied platforms.",
  },
  entrepreneur: {
    label: "Entrepreneur",
    code: "ETR",
    description:
      "Companies started, operated, or wound down. Memos, decisions, and institutional artifacts.",
  },
  investor: {
    label: "Investor",
    code: "INV",
    description:
      "Theses, allocations, and post-mortems. A long view of conviction and its corrections.",
  },
  artist: {
    label: "Artist",
    code: "ART",
    description:
      "Drawings, prints, sound, and durational work. Exhibitions, sketches, and process material.",
  },
};

export interface Artifact {
  slug: string;
  accession: string; // e.g. ENG-2021-014
  title: string;
  date: string; // ISO YYYY-MM-DD
  collections: Collection[];
  type: string; // e.g. "Software", "Memo", "Print", "Recording"
  medium?: string; // e.g. "Rust, WASM" or "Pencil on cotton paper, 30×42cm"
  summary: string;
  description: string; // longer body, may include \n\n paragraphs
  tags: string[];
  selected?: boolean; // appears in Selected
  status?: "Active" | "Archived" | "Withdrawn";
  collaborators?: string[];
  related?: string[]; // slugs
}

export interface Note {
  slug: string;
  number: string; // N-014
  title: string;
  date: string;
  reading: string; // "12 min"
  summary: string;
  body: string;
  tags: string[];
  collections?: Collection[];
}

export const ARTIFACTS: Artifact[] = [
  {
    slug: "lattice-mesh-runtime",
    accession: "ENG-2024-031",
    title: "Lattice — a deterministic mesh runtime",
    date: "2024-09-12",
    collections: ["engineer"],
    type: "Software",
    medium: "Rust, WebAssembly, gRPC",
    summary:
      "A deterministic execution mesh for low-latency multi-agent systems. Built around a content-addressed log and pluggable schedulers.",
    description:
      "Lattice grew out of a frustration with non-reproducible distributed traces. The runtime treats every effect as a typed message into a content-addressed log, so any session can be replayed bit-for-bit on a single machine.\n\nIt has been used in two production systems for trade reconciliation and one internal simulation harness. The design notes and a reference scheduler are in the public repository; the proprietary schedulers are not.",
    tags: ["distributed-systems", "rust", "determinism", "tooling"],
    selected: true,
    status: "Active",
    related: ["replay-debugger", "trace-format-spec"],
  },
  {
    slug: "replay-debugger",
    accession: "ENG-2023-018",
    title: "Replay debugger for production traces",
    date: "2023-05-04",
    collections: ["engineer"],
    type: "Software",
    medium: "TypeScript, WebGL",
    summary:
      "A browser-based timeline scrubber that consumes Lattice trace bundles and reconstructs system state visually.",
    description:
      "The replay debugger reads a Lattice trace and renders a scrubbable timeline of every effect, with collapsible actor swimlanes and a per-frame state inspector. It made post-incident review a 30-minute exercise instead of a half-day.",
    tags: ["devtools", "visualization", "webgl"],
    status: "Active",
    related: ["lattice-mesh-runtime"],
  },
  {
    slug: "trace-format-spec",
    accession: "ENG-2022-007",
    title: "Trace format specification, v0.4",
    date: "2022-11-22",
    collections: ["engineer"],
    type: "Specification",
    medium: "Markdown, Protobuf",
    summary:
      "A small wire format for content-addressed effect logs. Stable across four downstream consumers.",
    description:
      "The spec defines envelope, framing, and a minimum reproducibility contract. v0.4 added optional causal vector clocks and remains backwards-compatible with v0.3 readers.",
    tags: ["specification", "protobuf"],
    status: "Active",
  },
  {
    slug: "halden-capital-thesis",
    accession: "INV-2023-004",
    title: "Halden Capital — initial thesis memo",
    date: "2023-02-18",
    collections: ["investor"],
    type: "Memo",
    medium: "PDF, 14 pages",
    summary:
      "Founding memo for a small concentrated fund focused on infrastructure businesses with durable physical moats.",
    description:
      "The memo lays out the four-criteria filter, the long-duration horizon, and the explicit no-go list. It is published in unredacted form because the discipline of writing for the public record changes how the thesis is held.",
    tags: ["thesis", "infrastructure", "concentrated"],
    selected: true,
    status: "Active",
  },
  {
    slug: "post-mortem-thalo",
    accession: "ETR-2022-011",
    title: "Thalo Systems — wind-down post-mortem",
    date: "2022-08-30",
    collections: ["entrepreneur"],
    type: "Post-mortem",
    medium: "Essay, ~6,500 words",
    summary:
      "A frank account of a five-year company that did not survive its second pivot. Includes the financial closeout and what was returned to investors.",
    description:
      "Thalo built developer tooling for embedded ML. The post-mortem covers the founding bet, the two pivots, the eighteen months between revenue plateaus, and the decision sequence that led to a managed wind-down rather than a forced sale.",
    tags: ["post-mortem", "wind-down", "developer-tools"],
    selected: true,
    status: "Archived",
    collaborators: ["E. Reyer", "M. Onuoha"],
  },
  {
    slug: "thalo-founding-memo",
    accession: "ETR-2017-001",
    title: "Thalo Systems — founding memo",
    date: "2017-03-04",
    collections: ["entrepreneur"],
    type: "Memo",
    summary:
      "The original case for Thalo, written before incorporation. Preserved without edits.",
    description:
      "Kept here as a primary source. Several of the predictions were wrong; a few were right for reasons the memo did not anticipate.",
    tags: ["founding", "primary-source"],
    status: "Archived",
    related: ["post-mortem-thalo"],
  },
  {
    slug: "study-for-a-room-iv",
    accession: "ART-2024-009",
    title: "Study for a Room, IV",
    date: "2024-04-21",
    collections: ["artist"],
    type: "Drawing",
    medium: "Graphite and ink on cotton paper, 42 × 59 cm",
    summary:
      "Fourth in a series of interior studies. Shown at the Halden Annex group show, May 2024.",
    description:
      "Part of an ongoing series investigating how a single light source organizes a room over the course of a working day. The fourth study fixes the source and varies the furniture.",
    tags: ["drawing", "series", "interior"],
    selected: true,
    status: "Active",
  },
  {
    slug: "field-recording-nordmarka",
    accession: "ART-2023-014",
    title: "Field recording — Nordmarka, predawn",
    date: "2023-09-02",
    collections: ["artist"],
    type: "Recording",
    medium: "Stereo audio, 47 minutes",
    summary:
      "Unedited predawn field recording. Released alongside a short note on listening as a daily practice.",
    description:
      "Recorded with a single pair of omnidirectional microphones. The recording is presented unedited; the only intervention is the start and end of the file.",
    tags: ["sound", "field-recording"],
    status: "Active",
  },
  {
    slug: "monograph-on-attention",
    accession: "ART-2022-002",
    title: "A small monograph on attention",
    date: "2022-01-15",
    collections: ["artist"],
    type: "Publication",
    medium: "Risograph booklet, 32 pages, edition of 120",
    summary:
      "A short bound publication pairing drawings with marginalia on the practice of looking.",
    description:
      "The booklet was printed in two passes on a two-color riso. Most of the edition was given away; a small number remain.",
    tags: ["publication", "drawing"],
    status: "Active",
  },
  {
    slug: "infra-allocation-2024",
    accession: "INV-2024-002",
    title: "Infrastructure allocation, 2024 review",
    date: "2024-12-29",
    collections: ["investor"],
    type: "Review",
    summary:
      "Annual review of the infrastructure book. Two new positions, one exit, one held through drawdown.",
    description:
      "The review walks through each position with the original thesis, the year's developments, and a marked-to-market verdict. The held-through-drawdown entry is the most instructive.",
    tags: ["annual-review", "infrastructure"],
    status: "Active",
  },
  {
    slug: "open-source-contribution-policy",
    accession: "ENG-2021-022",
    title: "A personal open-source contribution policy",
    date: "2021-06-11",
    collections: ["engineer"],
    type: "Policy",
    summary:
      "A short written policy on what gets open-sourced, what does not, and the licensing defaults.",
    description:
      "Written once, applied since. The policy has been quietly useful for keeping decisions consistent across years.",
    tags: ["policy", "open-source"],
    status: "Active",
  },
  {
    slug: "compounders-talk-2023",
    accession: "INV-2023-019",
    title: "Talk — On compounders that look boring",
    date: "2023-10-17",
    collections: ["investor"],
    type: "Talk",
    medium: "Lecture, 38 minutes",
    summary:
      "A talk given at a closed investor seminar. Transcript available; recording was not made.",
    description:
      "The talk argues against the optical premium paid for narrative-rich businesses and walks through three boring compounders held for more than seven years.",
    tags: ["talk", "compounders"],
    status: "Active",
  },
  {
    slug: "second-company-incorporation",
    accession: "ETR-2024-005",
    title: "Second company — incorporation note",
    date: "2024-02-09",
    collections: ["entrepreneur", "engineer"],
    type: "Note",
    summary:
      "Brief incorporation note for the successor company. Kept terse on purpose.",
    description:
      "The note records the date, jurisdiction, founding ownership, and the one-line purpose. Detail will accumulate in subsequent artifacts.",
    tags: ["incorporation", "primary-source"],
    status: "Active",
  },
  {
    slug: "letterpress-broadsides",
    accession: "ART-2021-011",
    title: "Letterpress broadsides, set of seven",
    date: "2021-11-03",
    collections: ["artist"],
    type: "Print",
    medium: "Letterpress on Zerkall paper, 28 × 42 cm, edition of 30",
    summary:
      "A set of seven broadsides, each pairing a single sentence with a typographic ornament.",
    description:
      "Printed over two weekends on a borrowed Vandercook. The seventh sheet was reset twice.",
    tags: ["letterpress", "typography"],
    status: "Active",
  },
];

export const NOTES: Note[] = [
  {
    slug: "on-keeping-an-archive",
    number: "N-019",
    title: "On keeping an archive of one's own work",
    date: "2025-01-08",
    reading: "9 min",
    summary:
      "Why the act of cataloging your own output, including the failures, changes the work itself.",
    body: "## Why catalog\n\nThe argument for keeping an archive is rarely about posterity. It is about the present. A working archive is a forcing function: it asks, of each thing made, whether it is shaped well enough to be looked at later. Most of what I make is not. The archive does not solve that. It only makes the question unavoidable.\n\nI started keeping this index after the second company wound down. The post-mortem was the first artifact I refused to lose. Everything after has been catalogued by the same impulse.\n\n## Against the highlight reel\n\nMost personal sites are highlight reels. They are not wrong to be — the genre is honest about what it is. But a highlight reel cannot show you what someone actually does in a year, and it cannot teach you anything about how the maker thinks under pressure.\n\nThe archive includes the wind-down, the withdrawn memo, the predictions that were wrong. Not as confession, and not as performance of humility. They are simply part of the record, and the record is the point.\n\n## How it is organized\n\nFour collections — Engineer, Entrepreneur, Investor, Artist — and a single chronological spine. Every artifact has an accession number, a date, and at least one collection. Most have more than one. The taxonomy is intentionally undecorated.\n\n> The catalog is the work, and the work is the catalog.\n\nWhat is missing here is everything I have not yet decided how to hold. That, too, is part of the record.",
    tags: ["meta", "archive", "practice"],
  },
  {
    slug: "what-i-look-for-in-infrastructure",
    number: "N-018",
    title: "What I look for in infrastructure businesses",
    date: "2024-11-14",
    reading: "14 min",
    summary:
      "Four criteria, refined over a decade, for the kind of infrastructure I am willing to underwrite.",
    body: "## Preface\n\nThe four criteria below are not original. They are a synthesis of what has worked for me and what has obviously not. I write them down again every two years and the wording changes; the substance has not, much.\n\n## One: physical moat\n\nA business whose advantage rests on a physical asset that is difficult to reproduce — a right of way, a permit, a port, a pipe. The asset must be in use and must continue to be required by a real downstream economy.\n\n## Two: regulated patience\n\nThe regulatory regime should reward patient capital and punish opportunism. This is rarer than it sounds, and harder to verify than it looks.\n\n## Three: management with a long memory\n\nI want operators who have lived through one full cycle in the asset class, and who write down their decisions in a form they will be embarrassed by in ten years. The willingness to be embarrassed is the signal.\n\n## Four: a price that does not require a story\n\nThe entry price should not require a narrative to justify. If the only way the math works is by assuming a re-rating, I have already lost.\n\n## What this excludes\n\nThis filter excludes most of what is currently fashionable. That is fine. I am not trying to be early; I am trying to still be holding it in fifteen years.",
    tags: ["investing", "thesis", "infrastructure"],
    collections: ["investor"],
  },
  {
    slug: "after-thalo",
    number: "N-014",
    title: "After Thalo — eighteen months of not founding anything",
    date: "2023-12-02",
    reading: "11 min",
    summary:
      "Notes from the long pause between one company and the next.",
    body: "## The pause\n\nFor eighteen months after Thalo wound down I founded nothing. This was deliberate, and harder than the wind-down itself. The pause was the point.\n\n## What I did instead\n\nI wrote, drew, read, and managed a small book of investments. I gave one talk and refused four. I worked for a quarter inside someone else's company and learned more than I expected to, mostly about how I had been wrong about a few specific things.\n\n## What the pause was for\n\nIt was for separating the parts of the previous company I should keep from the parts I had been mistaking for talent. There were fewer of the first than I had hoped, and more of the second than I am proud of.\n\n> The pause was not a sabbatical. It was a recalibration.\n\n## On founding again\n\nWhen I did decide to found again, the decision was quieter than the first time. The note recording that decision is the shortest artifact in the archive. It will accumulate detail over the next ten years, or it will not.",
    tags: ["entrepreneurship", "post-mortem", "personal"],
    collections: ["entrepreneur"],
  },
  {
    slug: "on-determinism",
    number: "N-011",
    title: "On determinism as a debugging discipline",
    date: "2023-04-19",
    reading: "16 min",
    summary:
      "Why I have spent five years building tools around the assumption that every effect should be replayable.",
    body: "## The problem statement\n\nMost distributed bugs are debugged twice: once in production, badly, and once in a reproduction that does not actually reproduce the bug. This is a waste, and it produces a culture in which the heroic debugger is venerated. I do not want to live in that culture.\n\n## A modest discipline\n\nThe discipline is small: every effect is a typed message; every message goes through a content-addressed log; the log is the source of truth, and any session can be replayed from it. That is all.\n\nThe consequences are not small. Once you have this, the post-incident review is mechanical. The arguments about what happened end. The arguments about what to do next can begin.\n\n## What it costs\n\nIt costs a real amount of latency at the boundary, and it costs a discipline of API design that not every team is willing to pay. For some systems it is the wrong trade. For the systems I have shipped this decade it has been worth it almost every time.\n\n## What it does not buy\n\nIt does not buy correctness. A deterministic wrong system is still wrong. It only buys a shorter argument about what the wrongness is.",
    tags: ["engineering", "tools", "practice"],
    collections: ["engineer"],
  },
  {
    slug: "on-listening",
    number: "N-009",
    title: "On listening as a daily practice",
    date: "2022-10-04",
    reading: "7 min",
    summary:
      "A short note on the discipline of paying attention to a single ordinary place over years.",
    body: "## A small practice\n\nFor the past four years I have walked the same one-kilometer loop most mornings before light, with a small recorder. I do not always record. Most days I only listen.\n\n## What changes\n\nWhat changes is not the place. The place is, by ordinary measure, unremarkable. What changes is the listener. The first six months were spent noticing how badly I had been listening before. The next two years were spent learning to hear what was actually there.\n\n> Attention is the only craft I have practiced every day for four years.\n\n## Why this is here\n\nIt is here because the archive should not pretend the artist's practice is only the things that produce objects. Most of the practice produces nothing visible. That is the practice.",
    tags: ["practice", "art", "attention"],
    collections: ["artist"],
  },
];

export const SITE = {
  name: "Nathan Mike Sidi Bakari",
  short: "N. M. S. Bakari",
  description:
    "A personal archive of work, notes, and traces across engineering, entrepreneurship, investing, and art.",
  email: "archive@nmsbakari.example",
  url: "https://nmsbakari.example",
};

export function artifactBySlug(slug: string) {
  return ARTIFACTS.find((a) => a.slug === slug);
}

export function noteBySlug(slug: string) {
  return NOTES.find((n) => n.slug === slug);
}

export function artifactsByCollection(c: Collection) {
  return ARTIFACTS.filter((a) => a.collections.includes(c)).sort((a, b) =>
    b.date.localeCompare(a.date),
  );
}

export function allArtifactsSorted() {
  return [...ARTIFACTS].sort((a, b) => b.date.localeCompare(a.date));
}

export function selectedArtifacts() {
  return ARTIFACTS.filter((a) => a.selected).sort((a, b) =>
    b.date.localeCompare(a.date),
  );
}

export function notesSorted() {
  return [...NOTES].sort((a, b) => b.date.localeCompare(a.date));
}

export function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function formatYear(iso: string) {
  return iso.slice(0, 4);
}
