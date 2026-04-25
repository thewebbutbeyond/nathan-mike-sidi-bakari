import argusBenchSetup from "@/assets/entries/argus/bench-setup.jpg";
import argusDemoPoster from "@/assets/entries/argus/demo-poster.jpg";
import argusLiveDashboard from "@/assets/entries/argus/live-dashboard.jpg";
import argusLiveDemo from "@/assets/entries/argus/live-demo.mp4";
import mobileRobotReportPdf from "@/assets/entries/mobile-robot-controller/eng5009-mobile-robot-controller-report.pdf?url";
import mobileRobotEnvironment from "@/assets/entries/mobile-robot-controller/environment.png";
import mobileRobotFinalStates from "@/assets/entries/mobile-robot-controller/final-states.png";
import mobileRobotFinalTrajectory from "@/assets/entries/mobile-robot-controller/final-trajectory.png";
import mobileRobotWallFollow from "@/assets/entries/mobile-robot-controller/wall-follow-segments.png";
import robocup2dDemoPoster from "@/assets/entries/robocup-soccer-teams/robocup-2d-demo-preview.gif";
import robocup2dDemo from "@/assets/entries/robocup-soccer-teams/robocup-2d-demo.mp4";
import robocup3dDemoPoster from "@/assets/entries/robocup-soccer-teams/robocup-3d-demo-preview.gif";
import robocup3dDemo from "@/assets/entries/robocup-soccer-teams/robocup-3d-demo.mp4";
import robocupFinalReportPdf from "@/assets/entries/robocup-soccer-teams/eng5325-robocup-final-report-team-14.pdf?url";
import robocupProjectPlan from "@/assets/entries/robocup-soccer-teams/project-plan.png";
import robocupStrategyGoalDifference from "@/assets/entries/robocup-soccer-teams/strategy-goal-difference.png";

export type Lens = "engineer" | "entrepreneur" | "investor" | "artist";

export type EntryMedia =
  | {
      kind: "image";
      src: string;
      alt: string;
      caption?: string;
    }
  | {
      kind: "video";
      src: string;
      title: string;
      poster?: string;
      caption?: string;
    };

export interface Entry {
  slug: string;
  title: string;
  date: string; // ISO
  type: string;
  status: "active" | "archived" | "in-progress" | "historical" | "draft";
  summary: string;
  body: string; // markdown-ish (we render as paragraphs)
  lenses: Lens[];
  tags: string[];
  role?: string;
  outcome?: string;
  chefDoeuvre?: boolean;
  links?: { label: string; href: string }[];
  media?: EntryMedia[];
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
  coverCredit?: string;
}

export const LENSES: { slug: Lens; label: string; description: string }[] = [
  {
    slug: "engineer",
    label: "Engineering",
    description: "Things that I designed and built.",
  },
  {
    slug: "entrepreneur",
    label: "Entrepreneurship",
    description: "Ventures started, products shipped, failures and operating notes.",
  },
  {
    slug: "investor",
    label: "Investing",
    description: "Gains, losses and what they taught me.",
  },
  {
    slug: "artist",
    label: "Art",
    description: "Music, drawings, paintings, poems and more.",
  },
];

export const ENTRIES: Entry[] = [
  {
    slug: "ebbinghaus",
    title: "Ebbinghaus",
    date: "2026-04-25",
    type: "edtech product",
    status: "active",
    summary:
      "A private-alpha study system that turns course material into source-grounded flashcards, LaTeX study sheets, and spaced-repetition review sessions.",
    body: `Ebbinghaus started from a simple frustration: students already have the material, but turning that material into something you can actually revise from is slow, repetitive, and usually abandoned halfway through. The obvious product temptation would have been to build "an AI flashcard app." The more useful version was to build a complete study loop around real course files.

The current MVP lets a student create a course, upload lectures, notes, code, past papers, and marking schemes, extract readable text, generate source-grounded flashcards, generate LaTeX study materials, and run a review session with Again, Hard, Good, and Easy scheduling. Formula sheets and exam walkthroughs are treated as editable LaTeX sources that compile into PDFs rather than as fake rich-text documents. That decision keeps the mathematical formatting honest and makes the workflow more useful for engineering-heavy material.

Technically, the interesting part is that the generation path is not just a single prompt glued to a button. The app has a small agentic runtime shape: resumable uploads, source extraction, chunking, OpenAI JSON-schema generation, verification/correction paths, local app-state sync per alpha user, and LaTeX compilation on the host machine. It is still one repo and one runtime, but it behaves more like a real product system than a demo wrapper.

It is not production-ready yet, and that matters. The current alpha is still laptop-hosted: file storage is local, OpenAI calls happen from the host machine, and TeX compilation runs on the same box. That is acceptable for a trusted private alpha and not acceptable for a public deployment. The next step is a VPS-backed deployment with stronger storage and sandbox boundaries.

I am adding it here now because the point of this archive is not to wait until everything looks finished. The working MVP already says something useful about how I think: start from the real user loop, keep the differentiator grounded in product friction, and make the system inspectable enough that trust can survive the first bad generation.`,
    lenses: ["engineer", "entrepreneur"],
    tags: [
      "edtech",
      "llm",
      "spaced-repetition",
      "latex",
      "tanstack-start",
      "product",
      "private-alpha",
    ],
    role: "Product design, runtime architecture, implementation, and alpha operations.",
    outcome:
      "Built a working private alpha that ingests course sources, generates flashcards and LaTeX study materials, and runs real review sessions. The next milestone is VPS deployment and stronger isolation around storage and TeX compilation.",
    links: [{ label: "repo", href: "https://github.com/thewebbutbeyond/ebbinghaus-app" }],
    related: ["thesis-vertical-llms", "close-the-books"],
  },
  {
    slug: "cyberphysical-robocup-soccer-teams",
    title: "Cyberphysical RoboCup soccer teams",
    date: "2026-04-24",
    type: "robotics simulation",
    status: "archived",
    summary:
      "A simulation-based RoboCup benchmarking system I built across 2D and 3D soccer environments, with strategy comparisons, OFAT parameter sweeps, role-aware analysis, Doxygen documentation, and project-management evidence.",
    body: `This project treated RoboCup soccer as an engineering benchmark rather than a visual demo. The team built around existing 2D and 3D RoboCup stacks, then used repeated matches to compare bundled strategies and isolate the parameters behind the behaviour changes.

The technical centre of the work was the benchmarking pipeline. Strategy-level runs compared BASIC, NOISE, DEFLOCK, HIPRESS, DIRECT, and AGGRO behaviours. Parameter-level sweeps then varied shoot range, press threshold, and formation around the baseline so that striker, defender, and goalkeeper outcomes could be interpreted by mechanism rather than by strategy label alone.

The useful result was not just that AGGRO performed best among the tested bundles. The stronger result was explanatory: higher shoot range improved striker output, stronger pressure increased recoveries and interceptions while reducing defensive stability, and formation changed the shot exposure faced by the goalkeeper. The 2D simulator separated strategies more clearly; the 3D simulator compressed outcomes because embodied dynamics made scoring rarer and noisier.

My role was both technical and organisational. I built the 2D benchmarking pipeline, then built an independent 3D benchmarking path when the project needed faster progress, and extended both environments with the parametric experiment layer. I also proposed the initial strategy-comparison approach and translated the design-review feedback into the OFAT parameter-isolation method that became the stronger technical argument.

On top of that implementation work, I led coordination, integrated the final evidence narrative, framed the Stage 1 boundary honestly, and prepared the public software surface with README documentation, benchmark notes, Doxygen API documentation, and a GitHub Actions deployment path.`,
    lenses: ["engineer"],
    tags: [
      "robotics",
      "robocup",
      "simulation",
      "benchmarking",
      "multi-agent-systems",
      "doxygen",
      "project-management",
    ],
    role: "Technical lead and team lead: built the 2D benchmarking pipeline, built the independent 3D benchmark path, added the OFAT parameter layer across both environments, shaped the strategy-to-parameter methodology, coordinated the team, integrated the report narrative, and prepared the public repository/Doxygen surface.",
    outcome:
      "Delivered a Stage 1 simulation and analysis package: working 2D/3D RoboCup workflows, strategy and OFAT parameter benchmarking, role-level interpretation, project-management evidence, and published API documentation.",
    chefDoeuvre: true,
    links: [
      {
        label: "repo",
        href: "https://github.com/ENG5325-Robotics-TDP-M-Team-14/Cyberphysical-RoboCup-Soccer-Teams",
      },
      {
        label: "doxygen",
        href: "https://eng5325-robotics-tdp-m-team-14.github.io/Cyberphysical-RoboCup-Soccer-Teams/",
      },
      { label: "report", href: robocupFinalReportPdf },
    ],
    media: [
      {
        kind: "video",
        src: robocup2dDemo,
        poster: robocup2dDemoPoster,
        title: "RoboCup 2D simulation demo",
        caption:
          "Sped-up 2D soccer simulation showing the faster benchmark environment used for repeated strategy and parameter runs.",
      },
      {
        kind: "video",
        src: robocup3dDemo,
        poster: robocup3dDemoPoster,
        title: "RoboCup 3D humanoid simulation demo",
        caption:
          "Sped-up 3D RoboViz/SimSpark demo showing the embodied humanoid workflow used for richer validation.",
      },
      {
        kind: "image",
        src: robocupStrategyGoalDifference,
        alt: "Bar chart comparing 2D and 3D goal difference for RoboCup strategy variants.",
        caption:
          "Strategy-level goal-difference comparison: 2D separated behaviours more clearly than 3D, with AGGRO strongest in both.",
      },
      {
        kind: "image",
        src: robocupProjectPlan,
        alt: "Planned high-level work breakdown Gantt chart for the RoboCup simulation project.",
        caption:
          "Project-management view of the work packages, from requirements and simulator setup through benchmarking and reporting.",
      },
    ],
    related: ["argus-real-time-safety-supervisor", "mobile-robot-hybrid-controller"],
  },
  {
    slug: "argus-real-time-safety-supervisor",
    title: "A.R.G.U.S.",
    date: "2026-04-22",
    type: "embedded systems",
    status: "active",
    summary:
      "A bench-validated real-time safety supervisor for a robotic arm: camera input, guardian state-machine logic, interlock gating, and servo control on Raspberry Pi 5.",
    body: `A.R.G.U.S. started as a real-time embedded systems brief and became a complete hardware/software safety path for a small robotic arm. The system watches a live camera feed, classifies unsafe colour-layer exposure, and routes every motion command through guardian and interlock logic before it reaches the arm.

The important design choice was to make stopping explicit. Unsafe frames move through a GuardianStateMachine and RobotInterlock before MotionController drives the MeArm through a PCA9685 servo board. On the bench, the validated flow was: detect unsafe, stop the routine, retract to a safer pose, freeze, then require an operator acknowledgement before resuming.

My ownership sat on the motion and orchestration side: AppController, MotionController, the PCA9685 output path, run modes, CLI controls, and hardware wiring. The work forced the software boundary to match the physical system: camera timing, servo latency, operator input, and a state-machine contract all had to agree under live conditions.

The final bench setup ran on Raspberry Pi 5 with a Pi camera, PCA9685, four-servo MeArm, and a physical GPIO acknowledge button. Project-reported runtime metrics included sub-millisecond frame processing, 4 ms unsafe detection, 458 ms freeze issue time, and a controlled stop path within the project target.`,
    lenses: ["engineer"],
    tags: ["c++", "raspberry-pi", "opencv", "embedded", "robotics", "safety", "real-time"],
    role: "Owned AppController and MotionController work: PCA9685 servo output path, run modes, CLI controls, hardware wiring, and integration of motion commands with the guardian/interlock flow.",
    outcome:
      "Validated a live Raspberry Pi 5 bench demo where unsafe camera input triggers routine stop, retract-safe behavior, freeze hold, and operator-gated resume.",
    chefDoeuvre: true,
    links: [
      { label: "repo", href: "https://github.com/ENG5220-RTEP-Team-ARGUS/ARGUS" },
      { label: "website", href: "https://thewebbutbeyond.github.io/argus/" },
      { label: "doxygen", href: "https://eng5220-rtep-team-argus.github.io/ARGUS/doxygen/html/" },
      { label: "wiki", href: "https://github.com/ENG5220-RTEP-Team-ARGUS/ARGUS/wiki" },
    ],
    media: [
      {
        kind: "video",
        src: argusLiveDemo,
        poster: argusDemoPoster,
        title: "ARGUS live safety demonstration",
        caption: "Live safety demo showing the ARGUS bench setup and control flow.",
      },
      {
        kind: "image",
        src: argusBenchSetup,
        alt: "ARGUS MeArm bench setup beside the labelled safety enclosure and test surface.",
        caption: "Bench setup with MeArm, safety enclosure, and test surface.",
      },
      {
        kind: "image",
        src: argusLiveDashboard,
        alt: "ARGUS live dashboard with camera feed, guardian status, and timing metrics visible on a monitor.",
        caption: "Live dashboard showing camera input, guardian state, and timing metrics.",
      },
    ],
    related: ["tiny-pcb-clock", "close-the-books"],
  },
  {
    slug: "mobile-robot-hybrid-controller",
    title: "Mobile robot hybrid controller",
    date: "2026-04-23",
    type: "control systems report",
    status: "archived",
    summary:
      "A MATLAB mobile-robot navigation controller combining waypoint tracking, ANN obstacle avoidance, and wall-follow recovery, archived with its current qualitative report and clear quantitative analysis future work.",
    body: `This mobile robot controller work came out of the ENG5009 Advanced Control assignment. The supplied MATLAB simulator provided the robot model, wall generation, sensor model, and plotting loop. My work was to build and tune the control logic that could first drive to a target point, then move through a sequence of checkpoints while avoiding obstacles.

The final controller is deliberately small. A rotate-then-drive waypoint tracker gives the goal direction, a threshold ANN layer reacts to asymmetric obstacle readings, and a Bug-style wall-follow recovery mode takes over when the ANN stalls near frontal walls or local symmetry. Arbitration is explicit: stop first, then wall-follow, then ANN avoidance, then waypoint tracking.

The report is the artifact I want to keep. It is close to publication-grade in structure, literature positioning, figures, and design rationale, but it is honest about being mostly qualitative. Parameters were chosen by simulation observation rather than formal optimisation, and the final path is feasible rather than optimal.

That makes the future work clear: add stronger formal derivations for the controller and turn the qualitative comparison into quantitative analysis. Useful metrics would include waypoint completion time, path length, collision margin, recovery count, heading error, and sensitivity across map or threshold variants.`,
    lenses: ["engineer"],
    tags: [
      "matlab",
      "control",
      "robotics",
      "mobile-robots",
      "obstacle-avoidance",
      "simulation",
      "report",
    ],
    role: "Designed, implemented, and tuned the MATLAB controller; compared waypoint, ANN avoidance, fixed recovery, and wall-follow variants; wrote the report.",
    outcome:
      "Produced a near-publication report and simulator evidence showing that the hybrid controller preserved progress through the supplied obstacle field. Future work is stronger formal derivation and quantitative analysis.",
    chefDoeuvre: true,
    links: [{ label: "report", href: mobileRobotReportPdf }],
    media: [
      {
        kind: "image",
        src: mobileRobotEnvironment,
        alt: "Mobile robot simulator environment with start point, numbered checkpoints, and internal wall obstacles.",
        caption: "The 10 m by 10 m simulator environment used for controller testing.",
      },
      {
        kind: "image",
        src: mobileRobotFinalTrajectory,
        alt: "Final simulated mobile robot trajectory through numbered checkpoints and obstacle walls.",
        caption:
          "Final trajectory through the supplied obstacle field. Deviations from straight segments correspond to avoidance and recovery actions.",
      },
      {
        kind: "image",
        src: mobileRobotWallFollow,
        alt: "Highlighted wall-follow segments showing the robot tracking obstacle boundaries before returning to waypoint progress.",
        caption:
          "Representative wall-follow recovery segments, used when the ANN layer stalled near frontal walls.",
      },
      {
        kind: "image",
        src: mobileRobotFinalStates,
        alt: "Final controller forward speed and heading plots over the 120 second simulation.",
        caption:
          "Forward speed and heading response across waypoint tracking, avoidance, and recovery phases.",
      },
    ],
    related: ["argus-real-time-safety-supervisor", "tiny-pcb-clock", "close-the-books"],
  },
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
    lenses: ["engineer", "entrepreneur"],
    tags: ["rust", "postgres", "accounting", "event-sourcing"],
    role: "Designed the reducer model, wrote the core, supervised migration.",
    outcome: "Cut month-end close from 4 days to 6 hours. Zero rollbacks since launch.",
    chefDoeuvre: true,
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
    lenses: ["entrepreneur"],
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
    lenses: ["investor"],
    tags: ["llm", "thesis", "saas", "vertical"],
    chefDoeuvre: true,
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
    lenses: ["engineer", "entrepreneur"],
    tags: ["practice", "writing", "process"],
    chefDoeuvre: true,
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
    lenses: ["artist"],
    tags: ["drawing", "graphite", "practice", "hands"],
    chefDoeuvre: true,
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
    lenses: ["entrepreneur"],
    tags: ["postmortem", "first-company", "lessons"],
    chefDoeuvre: true,
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
    lenses: ["investor"],
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
    lenses: ["engineer", "artist"],
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
    lenses: ["artist", "engineer"],
    tags: ["generative", "riso", "rust", "print"],
    chefDoeuvre: true,
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
    lenses: ["engineer", "entrepreneur"],
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
    lenses: ["artist", "investor"],
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
    lenses: ["entrepreneur"],
    tags: ["hiring", "writing", "handbook"],
  },
];

const ENTRY_STATUSES = new Set<Entry["status"]>([
  "active",
  "archived",
  "in-progress",
  "historical",
  "draft",
]);

function isNonEmptyString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

function validateEntryContent(entries: Entry[], lenses: typeof LENSES) {
  const errors: string[] = [];
  const entrySlugs = new Set<string>();
  const lensSlugs = new Set(lenses.map((lens) => lens.slug));

  for (const entry of entries) {
    const label = entry.slug || "(missing slug)";

    for (const field of ["slug", "title", "date", "type", "status", "summary", "body"] as const) {
      if (!isNonEmptyString(entry[field])) {
        errors.push(`${label}: required field "${field}" must be a non-empty string`);
      }
    }

    if (entrySlugs.has(entry.slug)) {
      errors.push(`${label}: duplicate entry slug`);
    }
    entrySlugs.add(entry.slug);

    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(entry.date) ||
      Number.isNaN(new Date(`${entry.date}T00:00:00Z`).getTime()) ||
      new Date(`${entry.date}T00:00:00Z`).toISOString().slice(0, 10) !== entry.date
    ) {
      errors.push(`${label}: date must be a valid YYYY-MM-DD value`);
    }

    if (!ENTRY_STATUSES.has(entry.status)) {
      errors.push(`${label}: status "${entry.status}" is not supported`);
    }

    if (!Array.isArray(entry.lenses) || entry.lenses.length === 0) {
      errors.push(`${label}: lenses must include at least one lens`);
    } else {
      const seenLenses = new Set<Lens>();
      for (const lens of entry.lenses) {
        if (!lensSlugs.has(lens)) {
          errors.push(`${label}: unknown lens "${lens}"`);
        }
        if (seenLenses.has(lens)) {
          errors.push(`${label}: duplicate lens "${lens}"`);
        }
        seenLenses.add(lens);
      }
    }

    if (!Array.isArray(entry.tags)) {
      errors.push(`${label}: tags must be an array`);
    } else {
      for (const tag of entry.tags) {
        if (!isNonEmptyString(tag)) {
          errors.push(`${label}: tags must contain only non-empty strings`);
        }
      }
    }

    if (entry.role !== undefined && !isNonEmptyString(entry.role)) {
      errors.push(`${label}: role must be a non-empty string when provided`);
    }

    if (entry.outcome !== undefined && !isNonEmptyString(entry.outcome)) {
      errors.push(`${label}: outcome must be a non-empty string when provided`);
    }

    if (entry.chefDoeuvre !== undefined && typeof entry.chefDoeuvre !== "boolean") {
      errors.push(`${label}: chefDoeuvre must be boolean when provided`);
    }

    if (entry.links !== undefined) {
      if (!Array.isArray(entry.links)) {
        errors.push(`${label}: links must be an array when provided`);
      } else {
        for (const link of entry.links) {
          if (!isNonEmptyString(link.label) || !isNonEmptyString(link.href)) {
            errors.push(`${label}: links must include non-empty label and href`);
          }
          if (isNonEmptyString(link.label) && link.label !== link.label.toLowerCase()) {
            errors.push(`${label}: link label "${link.label}" must be lowercase`);
          }
          if (link.href.trim() === "#") {
            errors.push(`${label}: links must not use placeholder "#" hrefs`);
          }
        }
      }
    }

    if (entry.media !== undefined) {
      if (!Array.isArray(entry.media) || entry.media.length === 0) {
        errors.push(`${label}: media must be a non-empty array when provided`);
      } else {
        for (const media of entry.media) {
          const item = media as {
            kind?: string;
            src?: unknown;
            alt?: unknown;
            title?: unknown;
            poster?: unknown;
            caption?: unknown;
          };

          if (item.kind !== "image" && item.kind !== "video") {
            errors.push(`${label}: media kind "${item.kind}" is not supported`);
            continue;
          }

          if (!isNonEmptyString(item.src)) {
            errors.push(`${label}: media items must include a non-empty src`);
          }

          if (item.kind === "image" && !isNonEmptyString(item.alt)) {
            errors.push(`${label}: image media must include non-empty alt text`);
          }

          if (item.kind === "video") {
            if (!isNonEmptyString(item.title)) {
              errors.push(`${label}: video media must include a non-empty title`);
            }
            if (item.poster !== undefined && !isNonEmptyString(item.poster)) {
              errors.push(`${label}: video poster must be a non-empty string when provided`);
            }
          }

          if (item.caption !== undefined && !isNonEmptyString(item.caption)) {
            errors.push(`${label}: media captions must be non-empty when provided`);
          }
        }
      }
    }
  }

  for (const entry of entries) {
    if (!entry.related) continue;

    if (!Array.isArray(entry.related)) {
      errors.push(`${entry.slug}: related must be an array when provided`);
      continue;
    }

    for (const relatedSlug of entry.related) {
      if (!entrySlugs.has(relatedSlug)) {
        errors.push(`${entry.slug}: related entry "${relatedSlug}" does not exist`);
      }
      if (relatedSlug === entry.slug) {
        errors.push(`${entry.slug}: related entries cannot self-reference`);
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(`Invalid entry content:\n- ${errors.join("\n- ")}`);
  }
}

validateEntryContent(ENTRIES, LENSES);

import noteCoverArchives from "@/assets/notes/on-archives-not-portfolios.jpg";
import noteCoverContext from "@/assets/notes/the-cost-of-context.jpg";
import noteCoverInvesting from "@/assets/notes/what-investing-taught-me-about-product.jpg";
import noteCoverDrawing from "@/assets/notes/drawing-as-rest.jpg";
import noteCoverSupportGroup from "@/assets/notes/support-group-luca-ponsato.jpg";

export const NOTES: Note[] = [
  {
    slug: "communication-is-an-engineering-problem",
    title: "Communication is an engineering problem",
    date: "2026-04-24",
    summary:
      "A personal note on why human communication, delegation, trust, and ownership behave like engineering variables in group work.",
    readingMinutes: 17,
    tags: [
      "engineering",
      "teamwork",
      "leadership",
      "delegation",
      "communication",
      "trust",
      "entrepreneurship",
      "systems",
      "self-reflection",
    ],
    cover: noteCoverSupportGroup,
    coverAlt: "support group. by Luca Ponsato.",
    coverCredit: "Cover image: support group. by Luca Ponsato (@LucaPonsatoArt on X/Twitter).",
    body: `There is a pattern I have noticed this year.

I have worked on several group projects, and more than once I ended up doing far more of the work than I should have. Sometimes almost all of it. Not because I wanted to be heroic. Not because I think working alone is noble. Not because I believe other people are useless. The more honest version is that something in the system failed, and I responded by absorbing the work.

That response helped the projects survive, but I am not sure it helped me become better at collaboration.

At first, the pattern is easy to describe in the most convenient way. People did not communicate enough. Some people did not take initiative. Some people waited to be told exactly what to do. Some people cared more about the mark than the artefact. Some people were simply not aligned with the level of quality I wanted the project to reach.

Some of that may be true.

But if the same failure mode appears several times, it probably contains information about me too.

The more useful question is not only: why did I have to do so much?

The more uncomfortable question is: why did responsibility keep flowing back to me?

Somewhere between team formation, trust, communication, delegation, verification, and deadline pressure, the group stopped behaving like a group. Or maybe it never became one properly. It became a loose collection of people orbiting a project, with one person becoming the gravitational centre by default.

That can work for a university deadline. It can produce a passable report, a functioning prototype, a decent presentation, or enough evidence to submit something respectable. But I do not think it is a healthy operating model. It does not scale. It creates stress. It creates resentment. It creates a strange kind of loneliness inside what is supposed to be collective work.

It may also be a form of bad engineering.

A technical project is rarely only technical. Even when the final artefact is a robot, a simulation, a website, a report, a control system, or a business process, the artefact is produced by a human system. That system has inputs, constraints, feedback loops, failure modes, bottlenecks, and hidden assumptions. If the human system is badly designed, the technical system suffers before the technical work has properly begun.

This is one of the uncomfortable lessons group work keeps teaching me.

Engineering is not just the application of mathematics and physics to objects. It is also the coordination of human beings under uncertainty.

I say that carefully, because I am still only twenty-four. I do not want to write as if I have already understood engineering, leadership, or people. I have not. Most of the time, I am still trying to understand why something worked, why something failed, and which part of the failure belongs to me.

But that is precisely why I want to write this note.

Not because I have arrived at an answer.

Because I keep encountering the question.

University often trains engineering through exams. In an exam, the problem is already defined. The assumptions are usually given. The expected answer exists. The time limit is fixed. The boundary conditions are artificial but clear. The student's job is to recall the right method, apply it correctly, avoid mistakes, and deliver an answer in the expected format.

That is useful training. I do not dismiss it. Exams force fluency. They expose weak foundations. They build speed. They punish vagueness. They make it harder to hide behind charisma or vague intelligence. A person who cannot manipulate the basic tools of their discipline is not yet competent.

But I do not think exams are the full shape of engineering.

They are a compressed and artificial proxy for a small part of engineering competence.

Real engineering often begins with ambiguity. The requirement is incomplete. The client is imprecise. The data is noisy. The team disagrees. The model is wrong. The prototype behaves differently from the simulation. The report structure is unclear. The deadline moves. The person responsible for one subsystem disappears for three days. The toolchain breaks on someone else's machine. The person who sounded confident in the meeting has not actually understood the problem.

That is where the real work seems to begin.

The engineer is not simply the person who knows the formula. At least, I do not think that is enough. The engineer has to face an undefined situation, decompose it into smaller problems, formulate assumptions, test them, communicate uncertainty, and move the system forward without pretending that everything is already clear.

This is why group projects are so revealing.

They expose whether people can operate when the path is not already paved.

Some students are very good at examinations but become passive in projects. They wait. They ask what needs to be done, but they do not always interrogate the system. They complete tasks, but they do not always own outcomes. They avoid making decisions because a decision can be wrong, and being wrong is more visible than remaining passive.

I understand that instinct because I have had it too.

The education system rewards correctness more visibly than initiative. It is often safer to be the person who did not act than the person who acted and made a mistake. But engineering cannot be built only on that psychology. At some point, someone has to define the next step despite incomplete information.

That is where I often become impatient.

Not because I think I am above the group. I usually assume the opposite. My default assumption is that I am missing something, that I am wrong somewhere, that someone else may see a cleaner path. But when nobody moves, the project still has to move. When the problem is not decomposed, someone has to decompose it. When the standard is undefined, someone has to define it. When the work is incoherent, someone has to integrate it.

So I take over.

And often, that is where my own failure begins.

Because taking over can look like leadership from the outside, but sometimes it is just a failure to build the conditions under which other people can contribute properly.

It is faster in the short term to do the work myself. It is cleaner. It gives me control over the standard. It reduces the probability of receiving unusable output too close to the deadline. It avoids the emotional labour of asking, correcting, negotiating, explaining, and rechecking.

But if I do everything myself, I have not solved the collaboration problem. I have bypassed it.

The project may survive, but the system has not improved.

Maybe this is the part I need to sit with the most.

When communication becomes difficult, my instinct is often to reduce the communication requirement by doing the work myself. In the short term, that feels rational. If the deadline is close, if the task is unclear, if the person in front of me does not seem to understand the standard, spending hours trying to align everyone can feel more expensive than simply producing the output.

In university, this instinct is even stronger because the time horizon is compressed. The project is due next week. The report has to be submitted. The presentation has to work. There is rarely enough time to slowly build a team culture, teach the standard, debug misunderstandings, and let people fail safely before the deadline. So I default to execution.

But that only works up to a certain scale.

If I want to become a better leader, I cannot keep using my own execution as the solution to every communication failure. At some point, the work becomes larger than one person. A serious company, a serious engineering project, or a serious institution cannot run on one person doing everything. The leader is not the person who personally touches every component. The leader is the person who creates enough clarity for other competent people to contribute without destroying coherence.

That is probably one of the skills I need to train most deliberately: taking more time to communicate, even when communication is frustrating, slow, and inefficient in the moment.

Not because communication guarantees agreement. It does not.

Not because I am always right and simply need to explain myself better. I am often wrong, incomplete, or badly calibrated.

But because a disagreement should not automatically become a blockage. In a good team, disagreement should become a mechanism for refining the shared model.

There is a difference between arguing to win and arguing to improve the system.

There is a difference between "I am right and you are wrong" and "your model captures something mine does not, my model captures something yours does not, and if we compare them carefully, we may reach a better model than either of us had at the start."

I am not always good at creating that kind of conversation. Sometimes I move too quickly. Sometimes I get impatient. Sometimes I assume that because something is obvious to me, it has been communicated. That is a mistake. What is obvious inside my head is not automatically part of the shared system.

A recent disagreement about referencing made this clearer to me.

One teammate argued that sources should only be cited if they were explicitly used during the writing process. I understood the concern. Retrospective referencing can become dishonest if it is used to decorate a report with sources that did not actually shape the work. It can create the illusion of rigour after the fact.

But I also saw the problem differently. There is a difference between explicitly using a source and implicitly inheriting an idea from a field, a convention, or a body of knowledge. Many things that feel like "common knowledge" are not actually common in a universal sense. They are common only because a discipline, culture, or technical community has already normalised them.

So when I develop an idea that feels obvious, I do not think the process should stop there. I think it is worth asking: where does this obviousness come from? Has this already been formalised? Am I rediscovering a weaker version of an existing concept? Has the literature already named the thing I am trying to describe? Can checking the literature retrospectively refine the idea, clarify its limits, or prevent me from presenting inherited knowledge as if it emerged from nowhere?

That does not mean every retrospective citation is legitimate. It means the distinction is subtle. A source can be part of the intellectual environment of an idea even if it was not open on the desk at the exact moment the sentence was written.

The real issue was not only referencing.

The real issue was how two people should reason together when their models differ.

In that moment, I could feel the difficulty of communication. It is slow. It requires patience. It requires translating not only the conclusion, but the path that produced the conclusion. It requires asking whether the disagreement is about ethics, method, definitions, standards, or merely wording.

That is hard.

But if I avoid that difficulty every time, I will remain limited by what I can personally execute.

I am starting to think that the central issue is trust.

People often speak about trust as if it were mainly a moral virtue. In projects, trust also behaves like an operational variable. Trust determines how much verification is required before work can be integrated into the system.

If I trust someone's judgement, I can give them a problem and expect them to return not only output, but considered output: assumptions stated, edge cases noticed, decisions justified, uncertainty communicated. I still verify the work, but verification is lighter. I am not rebuilding the whole mental process from zero.

If I do not trust someone's work, delegation becomes expensive. I have to check the method, the assumptions, the implementation, the data, the interpretation, the formatting, and sometimes the basic understanding of the task. At that point, delegation may cost more than execution.

That is one of the ideas I keep coming back to:

Delegation starts to break down when the cost of verification becomes higher than the cost of execution.

I do not know whether that is always true. It is probably incomplete. But it feels close to what I experienced.

It does not mean I should never delegate to someone less experienced. That would be a terrible lesson to take from this. It would make me worse, not better. It means delegation has to be designed. The task has to be scoped properly. The expected output has to be clear. The review point has to happen early enough to correct course. The interface between someone's work and the rest of the project has to be defined.

In other words, delegation is not just giving work away.

Delegation is trying to create a reliable transfer of ownership.

That transfer can fail for many reasons. The person may not have the skill. They may not have the context. They may not understand the standard. They may not care enough. They may be afraid to ask questions. They may be waiting for permission. They may be optimising for the minimum viable mark while I am optimising for the artefact itself.

And often, the failure is mine.

I may not have explained the task properly. I may not have created intermediate checkpoints. I may not have separated the work into components that can be safely owned. I may not have communicated the standard explicitly because I assumed it was obvious. I may have waited too long before intervening. I may have chosen speed over teaching. I may have mistaken control for responsibility.

That distinction matters to me.

Control is not the same as responsibility.

Responsibility means trying to make sure the project succeeds. Control means keeping decisions close to oneself. Sometimes control is necessary, especially near a deadline or in a high-risk subsystem. But if control becomes the default mode, the system becomes dependent on one person. That may be useful in a crisis, but I do not think it is leadership in the deeper sense. It is a bottleneck with good intentions.

A reliable system cannot depend on one person's stress tolerance.

I have also realised that team formation is not a detail. It may be one of the first engineering decisions of a project, even if it does not look technical.

In student work, teams are often formed through friendship, convenience, proximity, or social comfort. I have done this too. I chose people because we got along, or because they were connected to someone I trusted, or because the group had to be formed quickly. Those are not meaningless criteria. Social compatibility matters. But it is not enough.

A team is not just a group of people who like each other.

Or at least, that is not enough for the kind of work I want to build.

A team needs some alignment between competencies, incentives, communication habits, standards, and willingness to take ownership under constraints.

That sounds colder than I want it to sound. I do not mean that people should be reduced to productivity units. I mean almost the opposite. Taking people seriously also means taking seriously whether the system they are entering allows them to contribute well.

Goodwill cannot replace competence.

Friendship cannot replace clarity.

Optimism cannot replace accountability.

This is where group projects connect directly to entrepreneurship.

In a company, this problem becomes recruitment.

If I build a team badly, I should not be surprised when delegation fails. If I select people on weak criteria, I will pay for it later in verification cost, communication cost, rework, delay, and emotional friction. The price of poor selection is not always paid at the moment of selection. It is often paid later, when the system is under load.

University group projects simulate this badly, but usefully. They often force collaboration without proper recruitment, without aligned incentives, without clear authority, and without strong consequences for underperformance. That makes them frustrating. But it also makes them revealing. They show what happens when a human system is assembled casually and then expected to perform seriously.

One person I worked with this year helped me understand this more clearly.

Communication between us was not perfect. There were language barriers. We did not always understand each other easily. But he was strong. More importantly, he moved. He engaged with the problem. He tried to understand the system. He cared about making progress. Because of that, I could trust him.

That taught me something important.

Communication is not merely the exchange of words.

Communication is the synchronisation of mental models.

Do we understand the same objective? Are we making the same assumptions? Do we agree on what "done" means? Do we know what is blocked? Do we know who owns what? Do we know what has changed? Do we know what the next decision is?

Two people can speak the same language and still fail to communicate. Two people can struggle linguistically and still collaborate well if their intent, standards, and direction are aligned.

The deeper problem is rarely grammar.

It is ownership.

When someone owns a problem, they do not merely wait for instructions. They create motion. They ask questions. They expose uncertainty. They return with proposals, not just fragments. They care about whether their part integrates with the whole.

That is what I hope to find in collaborators.

Not perfection. Not genius. Not someone who already knows everything. I do not need someone to be impressive in the abstract. I need someone who can enter uncertainty without becoming inert.

This is also what I need to become better at identifying early.

I should not wait until the deadline reveals the truth. By then, the cost of correction is already high. A better approach may be to test the system early. Give small tasks. Observe response time. Observe question quality. Observe whether the person thinks beyond the literal instruction. Observe whether they communicate blockers. Observe whether they improve the project or merely complete isolated fragments.

Trust should probably be built through evidence.

Not just vibes. Not just friendship. Not just optimism. Evidence.

That sounds harsh, but maybe it is actually kinder. When trust is evidence-based, expectations become clearer. People know what ownership means. Standards are explicit. Feedback arrives earlier. Failure becomes correctable before it becomes catastrophic.

The alternative is worse: vague trust, late disappointment, silent resentment, and emergency takeover.

I have lived that pattern enough times to want to study it seriously.

I do not want to become someone who uses competence as an excuse to avoid collaboration. That would be a small and brittle way to live. The fact that I can sometimes do the work myself does not mean I should. A serious builder eventually has to learn to build with others. Otherwise every project is limited by one nervous system, one calendar, one attention span, one set of blind spots.

At the same time, I do not want to romanticise teamwork. Teamwork is not automatically good. Collaboration is not automatically virtuous. A badly designed team can be worse than no team. It can slow decisions, diffuse responsibility, reduce standards, and create the illusion of shared work while hiding the fact that one or two people are carrying the structure.

So I am not sure the lesson is "work alone".

I am also not sure the lesson is simply "trust people more".

Maybe the lesson is closer to this:

Learn to engineer the collaboration.

Define ownership.
Select carefully.
Communicate standards.
Create early checkpoints.
Make uncertainty visible.
Verify without micromanaging.
Let trust be accountable to evidence.
Do not confuse being liked with being aligned.
Do not confuse activity with contribution.
Do not confuse control with leadership.

I am still bad at many parts of this.

I know how to take responsibility. I know how to push a project forward. I know how to absorb pressure and produce output. Those are useful traits. But they are also dangerous if they become my default solution to every group failure.

The harder skill may not be doing more.

The harder skill may be making the system better.

That means learning how to delegate before the deadline is burning. It means accepting imperfect intermediate work so that people can improve. It means making standards explicit instead of silently judging people for not meeting standards I never articulated. It means distinguishing between someone who lacks skill but has ownership, and someone who has skill but avoids responsibility. It means knowing when to teach, when to verify, when to intervene, and when to remove a task from someone because the risk has become unacceptable.

I fail at this often.

But I think that is acceptable, as long as I keep extracting signal from the failure.

Failure is not automatically noble. Sometimes it is just waste. Sometimes it hurts people. Sometimes it creates unnecessary stress. But failure becomes useful when it is examined honestly, without self-pity and without self-exoneration.

That is what I am trying to do here.

Not to prove that I was right.

Not to prove that others were wrong.

Just to understand the structure of what kept happening.

Because this is not only a university lesson. It is an engineering lesson. It is a founder lesson. It is a human lesson.

Many technical failures seem to begin before the technical work begins. They begin in unclear ownership, weak communication, poor selection, misaligned incentives, undefined standards, and uncalibrated trust.

I used to think the hard part of engineering was understanding the technical system. I still think that matters. It matters enormously. But this year forced me to confront something less comfortable: the technical system is often downstream of the human system.

If the human system is incoherent, the artefact will probably carry that incoherence.

So this is the note I want to keep for myself:

Group projects did not teach me that I work better alone.

They taught me that collaboration is itself something I need to learn how to design, and that communication is not a soft skill sitting outside the work. It is part of the work.

And perhaps that is part of becoming an engineer too.

Not only solving the problem.

Not only doing the work when the system fails.

Building, slowly and imperfectly, the conditions under which the problem can be understood, shared, and solved by more than one person.`,
  },
  {
    slug: "on-archives-not-portfolios",
    title: "On archives, not portfolios",
    date: "2025-04-02",
    summary: "Why I stopped maintaining a portfolio site and started keeping a record instead.",
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

export function getEntry(slug: string) {
  return ENTRIES.find((a) => a.slug === slug);
}

export function getNote(slug: string) {
  return NOTES.find((n) => n.slug === slug);
}

export function entriesByLens(slug: Lens) {
  return ENTRIES.filter((a) => a.lenses.includes(slug)).sort((a, b) =>
    b.date.localeCompare(a.date),
  );
}

export function sortedEntries() {
  return [...ENTRIES].sort((a, b) => b.date.localeCompare(a.date));
}

export function sortedNotes() {
  return [...NOTES].sort((a, b) => b.date.localeCompare(a.date));
}

export function lensLabel(slug: Lens): string {
  return LENSES.find((c) => c.slug === slug)?.label ?? slug;
}

export function lensLabels(slugs: Lens[]): string[] {
  return slugs.map(lensLabel);
}
