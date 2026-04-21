# Story 3.3: Handle Missing and Sparse Entries

Status: ready-for-dev

## Story

As a visitor,
I want missing or sparse entries to fail gracefully,
so that browsing does not feel broken.

## Acceptance Criteria

1. Given I open an unknown entry slug, when the route cannot find the entry, then I see a quiet not-found state with a return path.
2. Given an entry has no media, when the entry detail page renders, then body and metadata still render correctly.
3. Given an entry has no related entries, when the entry detail page renders, then the related section is omitted or a quiet fallback is shown.
4. Given optional fields such as role, outcome, links, and related are absent, when the entry detail page renders, then no page crash occurs.

## Tasks / Subtasks

- [ ] Inspect Entry Detail missing/sparse behavior. (AC: 1-4)
  - [ ] Confirm unknown entries throw `notFound()`.
  - [ ] Confirm `notFoundComponent` is quiet and provides a return path.
  - [ ] Confirm role, outcome, links, and related sections are conditional.
  - [ ] Confirm body and metadata are not conditional on media.
- [ ] Add or run Entry Detail behavior validation. (AC: 1-4)
  - [ ] Validate not-found behavior is present.
  - [ ] Validate sparse optional sections are guarded.
  - [ ] Validate related entries are conditionally rendered.
  - [ ] Validate internal return path exists.
- [ ] Run baseline checks. (AC: 1-4)
  - [ ] Run `npm run validate:shell`.
  - [ ] Run any Entry Detail validator introduced by this story.
  - [ ] Run `npm run lint`.
  - [ ] Run `npm run build`.
- [ ] Update story and sprint tracking. (AC: 1-4)
  - [ ] Mark this story `review` after checks pass.
  - [ ] Update sprint status to `review`.
  - [ ] Record command results and warnings in Dev Agent Record.

## Dev Notes

### Story Source

- Story definition: `_bmad-output/planning-artifacts/epics.md`, Story 3.3.
- Sprint tracking: `_bmad-output/implementation-artifacts/sprint-status.yaml`.
- Prior story: `_bmad-output/implementation-artifacts/3-2-productionize-entry-detail-page.md`.

### Current Implementation Notes

- Entry detail route: `src/routes/entries.$slug.tsx`.
- Entry data validation: `src/content/data.ts`.
- Entry detail currently uses `notFound()` when no entry is found.
- Optional fields are currently rendered conditionally using `a.role`, `a.outcome`, `a.links`, and `related.length`.

### Implementation Guidance

- This story should not redesign Entry Detail.
- Prefer a lightweight validation script if no app code change is needed.
- Do not invent sparse fixture entries unless necessary.
- Preserve current notebook/log visual rhythm.

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

- `_bmad-output/implementation-artifacts/3-3-handle-missing-and-sparse-entries.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`

Likely files if implementation changes are required:

- `scripts/validate-entry-detail.mjs`
- `package.json`
- `src/routes/entries.$slug.tsx`
