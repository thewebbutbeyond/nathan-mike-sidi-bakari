# Story 5.1: Harden Notes Index

Status: done

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

- [x] Inspect current Notes Index. (AC: 1-4)
  - [x] Confirm date, title, summary, reading time, and tags render for each note.
  - [x] Confirm RSS link is visible and low-emphasis.
  - [x] Identify whether empty state exists.
- [x] Harden Notes Index empty state and validation. (AC: 1-4)
  - [x] Add quiet empty-state copy if no notes exist.
  - [x] Add or run deterministic validation for Notes Index assumptions.
  - [x] Preserve current editorial layout and visual rhythm.
- [x] Run baseline checks. (AC: 1-4)
  - [x] Run notes validator if added.
  - [x] Run existing validators.
  - [x] Run `npm run lint`.
  - [x] Run `npm run build`.
- [x] Update story and sprint tracking. (AC: 1-4)
  - [x] Mark this story `review` after checks pass.
  - [x] Update sprint status to `review`.
  - [x] Record command results and warnings in Dev Agent Record.

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

GPT-5.4

### Debug Log References

- Added `scripts/validate-notes.mjs` and `npm run validate:notes`.
- `npm run validate:notes` passed: validated 7 notes index safeguards.
- Existing validators passed.
- `npm run lint` passed with 7 non-blocking `react-refresh/only-export-components` warnings.
- `npm run build` passed with the existing Vite large chunk warning.

### Completion Notes List

- Added quiet Notes Index empty state: "No notes yet. The slower pieces will live here when they are ready."
- Added deterministic validation for note dates, titles, summaries, reading time, tags, note-detail links, RSS visibility, and empty state.
- Preserved the current editorial list layout and low-emphasis RSS link.

### File List

- `src/routes/notes.index.tsx`
- `_bmad-output/implementation-artifacts/5-1-harden-notes-index.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`
- `scripts/validate-notes.mjs`
- `package.json`

### Change Log

- 2026-04-22: Added Notes Index empty state and validation, verified notes/search/lenses/timeline/entry/shell/lint/build, and moved story to review.
- 2026-04-22: Code review completed with no blocking findings; story moved to done.
