# Story 4.2: Harden Lens Browsing

Status: ready-for-dev

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

- [ ] Inspect current lens browsing behavior. (AC: 1-4)
  - [ ] Confirm `LENSES` defines Engineering, Entrepreneurship, Investing, and Art.
  - [ ] Confirm Lenses index maps all lenses and shows counts/previews.
  - [ ] Confirm lens detail uses `entriesByLens`.
  - [ ] Confirm invalid lens slugs throw `notFound()` and render a return path.
- [ ] Harden lens empty state and validation. (AC: 1-4)
  - [ ] Add route-specific empty-state copy for a lens with no matching entries.
  - [ ] Add or run deterministic validation for lens browsing assumptions.
  - [ ] Preserve multi-lens behavior.
- [ ] Run baseline checks. (AC: 1-4)
  - [ ] Run `npm run validate:shell`.
  - [ ] Run any lens validator introduced by this story.
  - [ ] Run `npm run lint`.
  - [ ] Run `npm run build`.
- [ ] Update story and sprint tracking. (AC: 1-4)
  - [ ] Mark this story `review` after checks pass.
  - [ ] Update sprint status to `review`.
  - [ ] Record command results and warnings in Dev Agent Record.

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

TBD by implementing agent.

### Debug Log References

TBD.

### Completion Notes List

TBD.

### File List

Expected files touched:

- `src/routes/lenses.index.tsx`
- `src/routes/lenses.$slug.tsx`
- `_bmad-output/implementation-artifacts/4-2-harden-lens-browsing.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`

Likely files if validation is added:

- `scripts/validate-lenses.mjs`
- `package.json`
