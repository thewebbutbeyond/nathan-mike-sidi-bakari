# Story 2.2: Productionize Home Stats Block

Status: ready-for-dev

## Story

As a visitor,
I want to see a compact summary of the archive,
so that the site feels tangible and browsable.

## Acceptance Criteria

1. Given entries and notes exist in content data, when I open the Home / Portal, then the stats block displays entry count, note count, and year span from actual data.
2. Given content data changes, when entries or notes are added or removed, then counts update from data rather than hardcoded values.
3. Given the Home / Portal renders on mobile and desktop, when I view the stats block, then it remains readable and does not break the notebook/log rhythm.
4. Given there are no entries or notes, when the Home / Portal renders, then the stats block and premise do not show misleading fallback years or break layout.

## Tasks / Subtasks

- [ ] Inspect current Home / Portal stats implementation. (AC: 1-2)
  - [ ] Identify how entry count, note count, and year span are derived.
  - [ ] Identify any hardcoded or misleading fallback values.
  - [ ] Confirm current stats block layout should remain visually intact.
- [ ] Extract or harden stats derivation. (AC: 1-4)
  - [ ] Derive stats from `ENTRIES` and `NOTES`.
  - [ ] Avoid mutating source date arrays while calculating earliest year.
  - [ ] Handle empty content without showing a fake start year.
  - [ ] Preserve current stats block markup and visual rhythm.
- [ ] Verify stats behavior and route stability. (AC: 1-4)
  - [ ] Run `npm run validate:shell`.
  - [ ] Run `npm run lint`.
  - [ ] Run `npm run build`.
  - [ ] Confirm `src/routeTree.gen.ts` remains deterministic or commit generated changes.
- [ ] Update story and sprint tracking. (AC: 1-4)
  - [ ] Mark this story `review` after checks pass.
  - [ ] Update sprint status to `review`.
  - [ ] Record command results and warnings in Dev Agent Record.

## Dev Notes

### Story Source

- Story definition: `_bmad-output/planning-artifacts/epics.md`, Story 2.2.
- Sprint tracking: `_bmad-output/implementation-artifacts/sprint-status.yaml`.
- Prior story: `_bmad-output/implementation-artifacts/2-1-refine-home-portal-messaging.md`.

### Current Implementation Notes

Current Home / Portal stats are in `src/routes/index.tsx`.

Known risk in current code:

- `allDates.sort()[0]?.slice(0, 4) ?? "2017"` mutates the local date array and falls back to a fake year if there is no content.
- Empty content should not show "since 2017" unless that year is actually derived from content data.

### Implementation Guidance

- Keep the current three-stat structure: entries, notes, years.
- Do not redesign the stats block.
- Prefer a small local helper inside `src/routes/index.tsx` unless the logic becomes reused elsewhere.
- Treat valid ISO-like date prefixes as source for year calculations.
- If no content dates exist, use a quiet non-misleading sublabel such as "not yet" or no sublabel.

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

- `src/routes/index.tsx`
- `_bmad-output/implementation-artifacts/2-2-productionize-home-stats-block.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`
