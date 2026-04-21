# Story 5.1: Harden Notes Index

Status: ready-for-dev

## Story

As a reader,
I want to browse notes by date and summary,
so that I can choose what to read without a noisy feed.

## Acceptance Criteria

1. Given notes exist, when I open Notes, then notes are listed by date with title, summary, reading time, and tags.
2. Given I open Notes, then the RSS link is visible but not pushy.
3. Given I view Notes on mobile or desktop, then the layout remains readable.
4. Given no notes exist, then the empty state uses quiet copy.

## Tasks / Subtasks

- [ ] Inspect current Notes Index. (AC: 1-4)
  - [ ] Confirm date, title, summary, reading time, and tags render for each note.
  - [ ] Confirm RSS link is visible and low-emphasis.
  - [ ] Identify whether empty state exists.
- [ ] Harden Notes Index empty state and validation. (AC: 1-4)
  - [ ] Add quiet empty-state copy if no notes exist.
  - [ ] Add or run deterministic validation for Notes Index assumptions.
  - [ ] Preserve current editorial layout and visual rhythm.
- [ ] Run baseline checks. (AC: 1-4)
  - [ ] Run notes validator if added.
  - [ ] Run existing validators.
  - [ ] Run `npm run lint`.
  - [ ] Run `npm run build`.
- [ ] Update story and sprint tracking. (AC: 1-4)
  - [ ] Mark this story `review` after checks pass.
  - [ ] Update sprint status to `review`.
  - [ ] Record command results and warnings in Dev Agent Record.

## Dev Notes

### Story Source

- Story definition: `_bmad-output/planning-artifacts/epics.md`, Story 5.1.
- Sprint tracking: `_bmad-output/implementation-artifacts/sprint-status.yaml`.
- Prior epic retrospective: `_bmad-output/implementation-artifacts/epic-4-retro-discovery-routes.md`.

### Current Implementation Notes

- Notes Index route: `src/routes/notes.index.tsx`.
- Notes data: `NOTES` and `sortedNotes()` in `src/content/data.ts`.
- RSS route: `src/routes/rss[.]xml.ts`.

### Implementation Guidance

- Do not make Notes feel like an engagement feed.
- Keep RSS visible and quiet.
- Do not redesign Notes Index.
- Empty state should be plain and calm.

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

- `src/routes/notes.index.tsx`
- `_bmad-output/implementation-artifacts/5-1-harden-notes-index.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`

Likely files if validation is added:

- `scripts/validate-notes.mjs`
- `package.json`
