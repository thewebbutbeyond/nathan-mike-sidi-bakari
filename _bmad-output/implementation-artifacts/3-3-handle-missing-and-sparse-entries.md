# Story 3.3: Handle Missing and Sparse Entries

Status: review

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

- [x] Inspect Entry Detail missing/sparse behavior. (AC: 1-4)
  - [x] Confirm unknown entries throw `notFound()`.
  - [x] Confirm `notFoundComponent` is quiet and provides a return path.
  - [x] Confirm role, outcome, links, and related sections are conditional.
  - [x] Confirm body and metadata are not conditional on media.
- [x] Add or run Entry Detail behavior validation. (AC: 1-4)
  - [x] Validate not-found behavior is present.
  - [x] Validate sparse optional sections are guarded.
  - [x] Validate related entries are conditionally rendered.
  - [x] Validate internal return path exists.
- [x] Run baseline checks. (AC: 1-4)
  - [x] Run `npm run validate:shell`.
  - [x] Run any Entry Detail validator introduced by this story.
  - [x] Run `npm run lint`.
  - [x] Run `npm run build`.
- [x] Update story and sprint tracking. (AC: 1-4)
  - [x] Mark this story `review` after checks pass.
  - [x] Update sprint status to `review`.
  - [x] Record command results and warnings in Dev Agent Record.

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

GPT-5.4

### Debug Log References

- Added `scripts/validate-entry-detail.mjs` and `npm run validate:entry-detail`.
- `npm run validate:entry-detail` passed: validated 10 missing/sparse entry safeguards.
- `npm run validate:shell` passed.
- `npm run lint` passed with 7 non-blocking `react-refresh/only-export-components` warnings.
- `npm run build` passed with the existing Vite large chunk warning.

### Completion Notes List

- Added deterministic Entry Detail validation for not-found behavior, quiet return path, required metadata, body rendering, optional role/outcome/links, optional related entries, and related entry detail routes.
- Confirmed `Entry Detail` already guards sparse optional sections and omits related entries when none exist.
- Preserved the existing Entry Detail UI and visual rhythm.

### File List

- `_bmad-output/implementation-artifacts/3-3-handle-missing-and-sparse-entries.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`
- `scripts/validate-entry-detail.mjs`
- `package.json`

### Change Log

- 2026-04-22: Added Entry Detail behavior validation, verified missing/sparse safeguards, ran validation/lint/build, and moved story to review.
