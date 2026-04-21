# Story 4.1: Harden Timeline Browsing

Status: ready-for-dev

## Story

As Future Nathan or a returning visitor,
I want to browse entries by date,
so that trajectory and memory are visible.

## Acceptance Criteria

1. Given entries have dates, when I open Timeline, then entries are grouped or ordered by year/date with newest first.
2. Given entries are marked as chefs-d'oeuvre, when they appear on Timeline, then they receive restrained visual emphasis.
3. Given I click a timeline entry, then it links to the correct entry detail page with timeline context.
4. Given there are no entries, when Timeline renders, then it shows quiet empty-state copy and does not break layout.

## Tasks / Subtasks

- [ ] Inspect current Timeline behavior. (AC: 1-4)
  - [ ] Confirm Timeline uses `sortedEntries()`.
  - [ ] Confirm entries are grouped by year.
  - [ ] Confirm entry links use `/entries/$slug` with `from: "timeline"`.
  - [ ] Identify whether Timeline has a route-specific empty state.
- [ ] Harden Timeline empty state and validation. (AC: 1-4)
  - [ ] Add a quiet empty state if no entries exist.
  - [ ] Add or run deterministic validation for timeline grouping/link assumptions.
  - [ ] Preserve existing visual rhythm and chef-d'oeuvre emphasis.
- [ ] Run baseline checks. (AC: 1-4)
  - [ ] Run `npm run validate:shell`.
  - [ ] Run any Timeline validator introduced by this story.
  - [ ] Run `npm run lint`.
  - [ ] Run `npm run build`.
- [ ] Update story and sprint tracking. (AC: 1-4)
  - [ ] Mark this story `review` after checks pass.
  - [ ] Update sprint status to `review`.
  - [ ] Record command results and warnings in Dev Agent Record.

## Dev Notes

### Story Source

- Story definition: `_bmad-output/planning-artifacts/epics.md`, Story 4.1.
- Sprint tracking: `_bmad-output/implementation-artifacts/sprint-status.yaml`.
- Prior epic retrospective: `_bmad-output/implementation-artifacts/epic-3-retro-entry-model-detail.md`.

### Current Implementation Notes

- Timeline route: `src/routes/timeline.tsx`.
- Entry sorting helper: `sortedEntries()` in `src/content/data.ts`.
- Date/year helpers: `formatDate`, `formatYear`.
- Timeline currently groups entries by `formatYear(a.date)` and links to entry details with `search={{ from: "timeline" }}`.

### Implementation Guidance

- Do not redesign Timeline.
- Keep newest-first behavior.
- Keep chef-d'oeuvre emphasis restrained.
- Empty state should be quiet and archival, not promotional.
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

- `src/routes/timeline.tsx`
- `_bmad-output/implementation-artifacts/4-1-harden-timeline-browsing.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`

Likely files if validation is added:

- `scripts/validate-timeline.mjs`
- `package.json`
