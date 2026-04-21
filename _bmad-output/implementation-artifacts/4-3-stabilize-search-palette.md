# Story 4.3: Stabilize Search Palette

Status: ready-for-dev

## Story

As a visitor,
I want quick search access,
so that I can find entries or notes without navigating every route.

## Acceptance Criteria

1. Given entries and notes exist, when I open the search palette, then I can find entries and notes by title, summary, tags, or lens where supported.
2. Given I select a result, then it navigates to the correct entry or note route.
3. Given I use the keyboard, then opening, moving through results, selecting, and closing work.
4. Given no results match, then empty search results are communicated with plain copy.

## Tasks / Subtasks

- [ ] Inspect current search palette behavior. (AC: 1-4)
  - [ ] Confirm current open/close shortcuts.
  - [ ] Confirm current entry and note matching fields.
  - [ ] Confirm result navigation targets.
  - [ ] Identify keyboard result navigation gaps.
- [ ] Improve query matching. (AC: 1)
  - [ ] Match entries by title, summary, type, status, tags, and lens labels.
  - [ ] Match notes by title, summary, and tags.
  - [ ] Preserve existing type/status/tag filters.
- [ ] Add keyboard result navigation. (AC: 2-3)
  - [ ] Support ArrowDown and ArrowUp movement through results.
  - [ ] Support Enter to select the active result.
  - [ ] Support Escape to close.
  - [ ] Preserve `/` and Cmd/Ctrl+K opening behavior.
- [ ] Add or run search validation. (AC: 1-4)
  - [ ] Validate searchable fields and keyboard handling are represented in source.
  - [ ] Validate entry and note navigation targets.
  - [ ] Validate empty state copy remains plain.
- [ ] Run baseline checks. (AC: 1-4)
  - [ ] Run search validator if added.
  - [ ] Run existing validators.
  - [ ] Run `npm run lint`.
  - [ ] Run `npm run build`.
- [ ] Update story and sprint tracking. (AC: 1-4)
  - [ ] Mark this story `review` after checks pass.
  - [ ] Update sprint status to `review`.
  - [ ] Record command results and warnings in Dev Agent Record.

## Dev Notes

### Story Source

- Story definition: `_bmad-output/planning-artifacts/epics.md`, Story 4.3.
- Sprint tracking: `_bmad-output/implementation-artifacts/sprint-status.yaml`.
- Prior story: `_bmad-output/implementation-artifacts/4-2-harden-lens-browsing.md`.

### Current Implementation Notes

- Search component: `src/components/search-palette.tsx`.
- Search trigger is rendered from `src/components/site-shell.tsx`.
- Current search already opens via `/` and Cmd/Ctrl+K.
- Current search filters entries by title and filters, and notes by title and tags.
- Current result rows are buttons, so basic Tab navigation exists, but Arrow/Enter result navigation is not explicit.

### Implementation Guidance

- Keep search visually compact and consistent with the notebook/log style.
- Do not add a new search dependency.
- Preserve existing filters.
- Avoid changing route slugs.
- Keep keyboard behavior predictable and simple.

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

- `src/components/search-palette.tsx`
- `_bmad-output/implementation-artifacts/4-3-stabilize-search-palette.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`

Likely files if validation is added:

- `scripts/validate-search-palette.mjs`
- `package.json`
