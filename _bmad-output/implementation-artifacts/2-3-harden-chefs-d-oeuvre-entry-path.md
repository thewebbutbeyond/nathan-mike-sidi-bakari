# Story 2.3: Harden Chefs-d'oeuvre Entry Path

Status: ready-for-dev

## Story

As a curious visitor,
I want a short path into marked entries,
so that I can get a strong first impression without browsing the whole archive.

## Acceptance Criteria

1. Given entries can be marked as chefs-d'oeuvre, when I open the chefs-d'oeuvre route, then only marked entries appear.
2. Given marked entries appear, when I click any listed entry, then it links to the correct entry detail page.
3. Given I read the page copy, when I assess the framing, then marked entries are presented as entry points rather than trophies.
4. Given there are no marked entries, when the page renders, then it shows quiet empty-state copy specific to marked entries.

## Tasks / Subtasks

- [ ] Inspect current chefs-d'oeuvre path. (AC: 1-4)
  - [ ] Confirm current filtering uses the `chefDoeuvre` marker.
  - [ ] Confirm listed entries use `EntryList` and link to entry details.
  - [ ] Identify copy that may frame marked entries as trophies rather than entry points.
  - [ ] Identify whether empty state is specific enough for this route.
- [ ] Refine chefs-d'oeuvre page copy. (AC: 3)
  - [ ] Keep the route label and slug unchanged.
  - [ ] Present chefs-d'oeuvre as marked entries from the timeline.
  - [ ] Avoid trophy-case or portfolio language.
- [ ] Add route-specific empty state. (AC: 4)
  - [ ] Extend `EntryList` or page usage to support a route-specific empty message.
  - [ ] Use quiet empty-state copy for no marked entries.
  - [ ] Avoid changing default empty behavior for other entry lists unless intentional.
- [ ] Verify route behavior and baseline checks. (AC: 1-4)
  - [ ] Run `npm run validate:shell`.
  - [ ] Run `npm run lint`.
  - [ ] Run `npm run build`.
- [ ] Update story and sprint tracking. (AC: 1-4)
  - [ ] Mark this story `review` after checks pass.
  - [ ] Update sprint status to `review`.
  - [ ] Record command results and warnings in Dev Agent Record.

## Dev Notes

### Story Source

- Story definition: `_bmad-output/planning-artifacts/epics.md`, Story 2.3.
- Sprint tracking: `_bmad-output/implementation-artifacts/sprint-status.yaml`.
- Prior story: `_bmad-output/implementation-artifacts/2-2-productionize-home-stats-block.md`.

### Current Implementation Notes

- Page: `src/routes/chefs-doeuvre.tsx`.
- Shared list component: `src/components/entry-list.tsx`.
- Entries use `chefDoeuvre?: boolean` in `src/content/data.ts`.
- Current page filters with `ENTRIES.filter((a) => a.chefDoeuvre)`.

### Implementation Guidance

- This story should not rename the route or remove the `chefDoeuvre` field.
- Keep the visual layout and route structure intact.
- Copy should explain that these are marked entries and a first way into the archive.
- If extending `EntryList`, keep the API small and backwards-compatible.

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

- `src/routes/chefs-doeuvre.tsx`
- `src/components/entry-list.tsx`
- `_bmad-output/implementation-artifacts/2-3-harden-chefs-d-oeuvre-entry-path.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`
