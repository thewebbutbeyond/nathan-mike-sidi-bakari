# Learnings: Personal Archive System

## 1. System Built

A bilingual, static personal archive.

Not a portfolio, blog, or landing page. The system organizes personal output so it can be revisited through:

- **time:** chronological trajectory
- **lenses:** engineering, entrepreneurship, investing, art
- **selection:** marked entries as entry points
- **editorial writing:** notes and RSS
- **search:** fast lookup across entries and notes

The product is the archive model, not the individual pages.

## 2. Core Architecture

### Content

- Typed in-repo data in TypeScript.
- Entries carry `slug`, `date`, `type`, `status`, `summary`, `body`, `lenses`, `tags`, optional `role`, `outcome`, `links`, `related`, `chefDoeuvre`.
- Notes carry editorial metadata, reading time, body, tags, and optional cover image.
- French content is a localized overlay on stable slugs.

**Learning:** start with the content model when navigation depends on content relationships.

### Routing

- English routes live at root.
- French routes live under `/fr`.
- Detail slugs stay stable across languages.
- Static RSS exists for both `/rss.xml` and `/fr/rss.xml`.

**Trade-off:** stable slugs reduce complexity but keep some English semantics in French URLs.

### Shell

- Shared header/footer own global navigation, search, RSS, social links, legal links, and language switching.
- `SiteShell` accepts `locale`.
- Search and language selector reuse lightweight popover patterns.

**Learning:** keep global behaviors in one shell before multiplying routes.

### Deployment

- TanStack Start app deployed as static GitHub Pages output.
- SPA fallback via `404.html`.
- Recursive prerender crawling disabled.
- RSS prerendered explicitly.
- Base path and public origin are controlled by build-time environment.

**Learning:** deployment constraints are product behavior. Treat them as architecture, not DevOps afterthought.

## 3. Key Design Decisions

### Archive Over Portfolio

The site avoids:

- conversion CTAs
- resume language
- inflated claims
- audience-optimized self-positioning

Credibility comes from accumulated artifacts, not from claims about the author.

### Dual Indexing

Entries appear through both:

- chronological order
- overlapping lenses

This preserves multidimensional identity without forcing strict categories.

### Notebook/Log Visual Direction

The winning prototype used:

- warm paper background
- monospace typography
- hairline dividers
- dense but readable lists
- restrained metadata rows

**Learning:** a strong visual metaphor can discipline implementation choices.

### Validators Instead Of Heavy Test Framework

The project uses small, source-based validators for:

- shell routes
- SEO metadata
- copy tone
- entry detail behavior
- notes/RSS
- search
- timeline/lenses
- GitHub Pages artifact
- French localization

**Trade-off:** fast and project-specific, but not equivalent to browser-level tests.

## 4. Workflow And Methodology

### Planning Stack

- ChatGPT: discovery and strategy thinking.
- BMad/WDS: product brief, trigger map, scenarios, UX specs, epics, stories.
- Lovable: visual prototypes.
- Codex/OMX: implementation, review, validation, release work.

### Execution Loop

Each story followed:

```text
create story -> implement -> validate -> review -> fix -> mark done
```

Each epic ended with a retrospective.

### Why It Worked

- Planning artifacts defined intent before code.
- Prototype branches separated visual exploration from production architecture.
- Story size stayed small enough to verify.
- Commit history and retrospectives preserved reasoning.
- Validators turned product assumptions into executable checks.

## 5. What Worked Well

### Clear Product Posture

"Self-addressed archive with public access" resolved many decisions:

- contact stays quiet
- no analytics pressure
- notes are editorial, not a feed
- entries carry credibility
- navigation supports browsing, not conversion

### Baseline Before Production

The chosen Lovable prototype was tagged before hardening. This made production work safer because the desired feel had a recoverable reference.

### Structured Content First

The entry model enabled:

- timeline grouping
- lens pages
- related entries
- search
- metadata generation
- bilingual overlays

### Validation As Memory

Validators captured decisions that would otherwise be easy to forget:

- no placeholder links
- no broken internal routes
- no conversion language
- RSS must remain valid
- French titles must be capitalized
- deployment artifacts must include fallback and RSS files

## 6. Limitations

### Static Validation Is Partial

Source validators are brittle. They catch known regressions but not:

- real click behavior
- visual regressions
- screen-reader behavior
- runtime route traversal

### Static Hosting Has Preview Limits

GitHub Pages is simple and free, but deep-link metadata is weaker than server-rendered pages.

### Content Is Coupled To Code

Typed data is excellent for v1. It may become awkward if the archive grows into hundreds of entries or requires richer editorial tooling.

### Localization Is Manual

French support is complete enough for v1, but still requires human editorial review. The system supports bilingual behavior; it does not solve translation governance.

### Scaffold Is Wider Than Needed

The Lovable scaffold includes unused UI dependencies and components. This is acceptable for v1 but creates install weight and lint noise.

## 7. What A Student Would Learn

By reproducing this project, a student would learn how to:

- convert vague intent into product artifacts
- separate product posture from visual design
- use prototypes without letting them dictate architecture
- model content for multiple retrieval paths
- build a static-first React/TanStack app
- deploy TanStack Start to GitHub Pages
- use story/epic loops for solo software work
- write validators that protect product intent
- add bilingual routing without overbuilding i18n
- treat commit history as decision history

## 8. Reusable Principles

### 1. Posture Before Interface

Define what the product refuses to be. This project refused to be a conversion portfolio, which clarified copy, layout, and navigation.

### 2. Navigation Is A Model

Routes are not just URLs. They express how users retrieve meaning.

### 3. Prototype For Taste, Code For Truth

Lovable explored direction. The codebase decided architecture.

### 4. Validate Assumptions, Not Just Functions

Good project validators encode local truths:

```text
no broken routes
no placeholder links
RSS exists
French titles are capitalized
deployment artifact has fallback files
```

### 5. Keep v1 Static Until Dynamics Are Proven

Static hosting was enough because the system is read-oriented. Server complexity can wait until behavior demands it.

### 6. Localize Behavior, Not Only Strings

French required:

- locale-aware shell
- localized routes
- localized search
- language-aware logo
- French RSS
- capitalization validation

Translation is system behavior.

## 9. Durable Takeaway

The project worked because intent, structure, and execution stayed aligned:

- **Intent:** preserve a personal archive.
- **Structure:** typed content indexed by time and lenses.
- **Execution:** story-driven implementation with validators and retrospectives.

The stack matters less than that alignment.
