

# Nathan Mike Sidi Bakari — Personal Archive

A non-conversion, archive-first personal site. Dual access: browse by **identity** (collections, tags) and **time** (timeline). Notes function as curated editorial pieces, not a feed.

## Visual direction — "Quiet terminal"

- Warm paper background (off-white, slight cream), near-black ink, faint hairline rules
- Monospaced typography throughout (JetBrains Mono / IBM Plex Mono) for a notebook/log feel
- Dense but readable: generous line-height, narrow measure for prose
- Metadata rendered as `key: value` rows; tags as `#tag` tokens
- No hero pitch, no CTA buttons, no gradients, no marketing imagery
- Subtle dotted dividers, ASCII-style accents used sparingly

## Routes

- `/` — Home / Portal: archive premise paragraph, four route cards (Selected, Timeline, Collections, Notes), recent/milestone artifacts, latest notes preview, quiet RSS link
- `/selected` — Small set of curated entry points across domains
- `/timeline` — Chronological list of all artifacts grouped by year, milestones emphasized
- `/collections` — Engineer, Entrepreneur, Investor, Artist with counts and representative entries
- `/collections/$slug` — Filtered artifact list for one collection
- `/artifacts/$slug` — Title, date, type, status, summary, body, role, outcome, links, collections, tags, related artifacts
- `/notes` — Editorial notes index (chronological, no infinite scroll, no engagement signals)
- `/notes/$slug` — Long-form reading view, prev/next, RSS link
- `/about` — Plain prose, no résumé puffery
- `/contact` — Low-emphasis: email and minimal direct ways to reach
- `/rss.xml` — Notes feed

Shared header: name (home link), nav (Selected · Timeline · Collections · Notes), quiet Contact. Footer: name, year, RSS, About.

## Content model (Markdown with frontmatter)

Each artifact and note is a `.md` file under `src/content/artifacts/` and `src/content/notes/`, parsed at build via Vite glob import + gray-matter + a markdown renderer.

Artifact frontmatter: `title, slug, date, type, summary, collections[], tags[], status, milestone?, role?, links[], related[]`

## Seed content

~12–15 realistic placeholder artifacts spread across Engineer, Entrepreneur, Investor, Artist (some multi-collection), spanning several years with a couple flagged as milestones. 3–4 sample editorial notes of varying length. Real-feeling titles, summaries, and tags so the layouts read truthfully.

## Responsive behavior

- Mobile: single column, nav collapses to a quiet inline row, metadata stacks under titles
- Desktop: ~720px reading column for prose; artifact lists use a two-column `date | title+meta` grid; collections page uses a 2×2 grid on wider screens

## States covered

Default, empty (per spec wording: "No artifacts yet."), loading skeletons, 404, error.

## SEO

Per-route `head()` with distinct title/description/og tags. Root has none beyond defaults so leaf pages own their previews. Artifact and note routes derive metadata from frontmatter.

## Out of scope for this prototype

Search, admin/CMS, comments, analytics, auth.

