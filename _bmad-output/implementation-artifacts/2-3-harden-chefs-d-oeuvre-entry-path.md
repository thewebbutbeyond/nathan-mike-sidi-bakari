# Story 2.3: Harden Chefs-d'oeuvre Entry Path

Status: review

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

- [x] Inspect current chefs-d'oeuvre path. (AC: 1-4)
  - [x] Confirm current filtering uses the `chefDoeuvre` marker.
  - [x] Confirm listed entries use `EntryList` and link to entry details.
  - [x] Identify copy that may frame marked entries as trophies rather than entry points.
  - [x] Identify whether empty state is specific enough for this route.
- [x] Refine chefs-d'oeuvre page copy. (AC: 3)
  - [x] Keep the route label and slug unchanged.
  - [x] Present chefs-d'oeuvre as marked entries from the timeline.
  - [x] Avoid trophy-case or portfolio language.
- [x] Add route-specific empty state. (AC: 4)
  - [x] Extend `EntryList` or page usage to support a route-specific empty message.
  - [x] Use quiet empty-state copy for no marked entries.
  - [x] Avoid changing default empty behavior for other entry lists unless intentional.
- [x] Verify route behavior and baseline checks. (AC: 1-4)
  - [x] Run `npm run validate:shell`.
  - [x] Run `npm run lint`.
  - [x] Run `npm run build`.
- [x] Update story and sprint tracking. (AC: 1-4)
  - [x] Mark this story `review` after checks pass.
  - [x] Update sprint status to `review`.
  - [x] Record command results and warnings in Dev Agent Record.

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

GPT-5.4

### Debug Log References

- `npm run validate:shell` passed.
- `npm run lint` passed with 7 non-blocking `react-refresh/only-export-components` warnings.
- `npm run build` passed with the existing Vite large chunk warning.

### Completion Notes List

- Confirmed the chefs-d'oeuvre page filters entries with the `chefDoeuvre` marker.
- Reframed page metadata and copy around marked entries from the timeline.
- Preserved route slug and label.
- Added optional `emptyMessage` support to `EntryList`.
- Added a chefs-d'oeuvre-specific empty state: "No marked entries yet. The full timeline is still open."
- Left default `EntryList` empty behavior unchanged for other pages.

### File List

- `src/routes/chefs-doeuvre.tsx`
- `src/components/entry-list.tsx`
- `_bmad-output/implementation-artifacts/2-3-harden-chefs-d-oeuvre-entry-path.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`

### Change Log

- 2026-04-22: Hardened chefs-d'oeuvre marked-entry copy and empty state, verified shell/lint/build, and moved story to review.
