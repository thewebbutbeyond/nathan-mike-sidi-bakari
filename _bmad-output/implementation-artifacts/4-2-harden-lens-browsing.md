# Story 4.2: Harden Lens Browsing

Status: review

## Story

As a visitor,
I want to browse the same archive through different lenses,
so that overlap across domains feels natural.

## Acceptance Criteria

1. Given entries have one or more lenses, when I open Lenses, then I see Engineering, Entrepreneurship, Investing, and Art with counts and preview entries.
2. Given I open a lens detail page, then it lists matching entries.
3. Given entries have multiple lenses, then those entries appear in each relevant lens.
4. Given I open an invalid lens slug, then I see a helpful not-found state with a return path.

## Tasks / Subtasks

- [x] Inspect current lens browsing behavior. (AC: 1-4)
  - [x] Confirm `LENSES` defines Engineering, Entrepreneurship, Investing, and Art.
  - [x] Confirm Lenses index maps all lenses and shows counts/previews.
  - [x] Confirm lens detail uses `entriesByLens`.
  - [x] Confirm invalid lens slugs throw `notFound()` and render a return path.
- [x] Harden lens empty state and validation. (AC: 1-4)
  - [x] Add route-specific empty-state copy for a lens with no matching entries.
  - [x] Add or run deterministic validation for lens browsing assumptions.
  - [x] Preserve multi-lens behavior.
- [x] Run baseline checks. (AC: 1-4)
  - [x] Run `npm run validate:shell`.
  - [x] Run any lens validator introduced by this story.
  - [x] Run `npm run lint`.
  - [x] Run `npm run build`.
- [x] Update story and sprint tracking. (AC: 1-4)
  - [x] Mark this story `review` after checks pass.
  - [x] Update sprint status to `review`.
  - [x] Record command results and warnings in Dev Agent Record.

## Dev Notes

### Story Source

- Story definition: `_bmad-output/planning-artifacts/epics.md`, Story 4.2.
- Sprint tracking: `_bmad-output/implementation-artifacts/sprint-status.yaml`.
- Prior story: `_bmad-output/implementation-artifacts/4-1-harden-timeline-browsing.md`.

### Current Implementation Notes

- Lens data and `entriesByLens` live in `src/content/data.ts`.
- Lens index route: `src/routes/lenses.index.tsx`.
- Lens detail route: `src/routes/lenses.$slug.tsx`.
- Entry list empty-state support exists through `EntryList.emptyMessage`.

### Implementation Guidance

- Do not rename route slugs or lens vocabulary in this story.
- Preserve the current Lenses layout.
- Keep the concept as "lenses", not strict categories.
- If adding validation, keep it deterministic and lightweight.

### Verification Commands

```bash
npm run validate:shell
npm run lint
npm run build
```

Known non-blocking warnings:

- `npm run lint` may emit 7 `react-refresh/only-export-components` warnings.
- `npm run build` may emit a large chunk warning.

## Dev Agent Record

### Agent Model Used

GPT-5.4

### Debug Log References

- Added `scripts/validate-lenses.mjs` and `npm run validate:lenses`.
- `npm run validate:lenses` passed: validated 9 lens browsing safeguards.
- `npm run validate:timeline` passed.
- `npm run validate:entry-detail` passed.
- `npm run validate:shell` passed.
- `npm run lint` passed with 7 non-blocking `react-refresh/only-export-components` warnings.
- `npm run build` passed with the existing Vite large chunk warning.

### Completion Notes List

- Added route-specific empty-state copy for lens detail pages with no matching entries.
- Added deterministic validation for expected lens slugs, `entriesByLens` multi-lens membership behavior, lens index counts/previews, lens detail lookup, invalid lens not-found behavior, and empty-state coverage.
- Preserved current Lenses layout and vocabulary.

### File List

- `src/routes/lenses.index.tsx`
- `src/routes/lenses.$slug.tsx`
- `_bmad-output/implementation-artifacts/4-2-harden-lens-browsing.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`
- `scripts/validate-lenses.mjs`
- `package.json`

### Change Log

- 2026-04-22: Added lens detail empty state and lens browsing validation, verified lenses/timeline/entry/shell/lint/build, and moved story to review.
