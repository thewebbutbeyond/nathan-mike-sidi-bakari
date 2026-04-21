# Story 1.2: Verify App Shell and Primary Navigation

Status: ready-for-dev

## Story

As a visitor,
I want a consistent shell across the archive,
so that I can move between major sections without losing context.

## Acceptance Criteria

1. Given I visit any public route, when I use the header or footer, then I can navigate to chefs-d'oeuvre, timeline, lenses, notes, about, and contact.
2. Given I use the search trigger, when the shell renders at mobile and desktop sizes, then the search trigger remains accessible without obscuring primary navigation.
3. Given I am on a primary route, when the header renders, then active navigation styling is visible where supported.
4. Given all primary shell links are visible, when route validation runs, then no primary nav, footer, legal, social, RSS, or search-result link points to a missing internal route.

## Tasks / Subtasks

- [ ] Verify shell route inventory and current route files. (AC: 1, 4)
  - [ ] Confirm `src/routes` contains routes for `/`, `/chefs-doeuvre`, `/timeline`, `/lenses`, `/lenses/$slug`, `/notes`, `/notes/$slug`, `/about`, `/contact`, `/privacy`, `/terms`, `/colophon`, `/rss.xml`, and `/entries/$slug`.
  - [ ] Confirm `SiteShell` header links map only to existing routes.
  - [ ] Confirm footer links map only to existing internal routes or intentional external URLs.
- [ ] Add or run route/link validation for shell-level routes. (AC: 1, 4)
  - [ ] Check header, footer, RSS, legal, and search-result internal links against the route inventory.
  - [ ] Include dynamic route patterns used by `EntryList`, search results, entry detail, lens pages, and notes pages.
  - [ ] Document any non-blocking external links separately from internal route validation.
- [ ] Verify search trigger accessibility and placement. (AC: 2)
  - [ ] Confirm the search trigger is keyboard reachable.
  - [ ] Confirm it has an accessible label.
  - [ ] Confirm it remains usable in the shell without blocking nav links.
  - [ ] Confirm keyboard shortcuts do not trigger while typing in inputs or textareas.
- [ ] Verify active navigation behavior. (AC: 3)
  - [ ] Confirm header primary route links use active styling where supported.
  - [ ] Confirm active styling works for `/chefs-doeuvre`, `/timeline`, `/lenses`, `/notes`, `/about`, and `/contact`.
- [ ] Run full baseline verification. (AC: 1-4)
  - [ ] Run `npm run lint`.
  - [ ] Run `npm run build`.
  - [ ] Record warnings or build notes in Dev Agent Record.

## Dev Notes

### Story Source

- Story definition: `_bmad-output/planning-artifacts/epics.md`, Story 1.2.
- Sprint tracking: `_bmad-output/implementation-artifacts/sprint-status.yaml`.
- Prior story: `_bmad-output/implementation-artifacts/1-1-capture-prototype-baseline.md`.

### Prior Story Learnings

- Baseline commit/tag exists: `prototype-baseline-notebook-log`.
- `zod` must remain on the adapter-compatible 3.x line while `@tanstack/zod-adapter@1.166.9` is used.
- `npm run lint` may emit 7 non-blocking `react-refresh/only-export-components` warnings from shadcn/Lovable-style files.
- `npm run build` passed on the baseline after dependency alignment.

### Current Shell and Route Surface

Primary files:

- `src/components/site-shell.tsx` - header, footer, search trigger placement, shared primitives.
- `src/components/search-palette.tsx` - search trigger and search result navigation.
- `src/router.tsx` - router setup and error fallback.
- `src/routes/__root.tsx` - root route, metadata, not-found component.
- `src/routes/index.tsx` - Home / Portal.
- `src/routes/*.tsx` and `src/routes/rss[.]xml.ts` - public route set.

Current important routes:

- `/`
- `/chefs-doeuvre`
- `/timeline`
- `/lenses`
- `/lenses/$slug`
- `/notes`
- `/notes/$slug`
- `/entries/$slug`
- `/about`
- `/contact`
- `/privacy`
- `/terms`
- `/colophon`
- `/rss.xml`

### Implementation Guidance

- Prefer small validation helpers or focused tests/check scripts if needed; avoid redesigning the shell.
- Do not change the visual direction unless required for accessibility or route correctness.
- If adding route validation, keep it deterministic and lightweight.
- External links such as LinkedIn and GitHub are intentional and should not be treated as missing internal routes.
- Dynamic route link validation should verify route patterns and sample data slugs, not every possible URL.

### Verification Commands

```bash
npm run lint
npm run build
```

### References

- `src/components/site-shell.tsx`
- `src/components/search-palette.tsx`
- `src/routes/__root.tsx`
- `src/router.tsx`
- `src/content/data.ts`
- `_bmad-output/planning-artifacts/epics.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`
- `_bmad-output/implementation-artifacts/1-1-capture-prototype-baseline.md`

## Dev Agent Record

### Agent Model Used

TBD by implementing agent.

### Debug Log References

TBD.

### Completion Notes List

TBD.

### File List

Expected files touched:

- `_bmad-output/implementation-artifacts/sprint-status.yaml`
- This story file

Likely files if implementation changes are required:

- `src/components/site-shell.tsx`
- `src/components/search-palette.tsx`
- Route validation script/test files if added
