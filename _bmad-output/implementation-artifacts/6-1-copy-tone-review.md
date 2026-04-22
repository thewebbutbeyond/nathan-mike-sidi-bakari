# Story 6.1: Copy Tone Review

Status: done

## Story

As the site owner,
I want copy that is warm, precise, and unforced,
so that the archive feels open rather than pompous or cold.

## Acceptance Criteria

1. Given all public route copy is available, when copy review is complete, then contact, about, notes, chefs-d'oeuvre, lenses, and homepage copy avoid defensive "not X" framing unless useful.
2. Given I read Contact copy, then it welcomes genuine overlap without sounding unavailable.
3. Given I read the site copy, then the archive still avoids conversion-oriented language.
4. Given final vocabulary decisions are present, then nav, routes, metadata, and page copy use them consistently.

## Tasks / Subtasks

- [x] Inspect public route copy. (AC: 1-4)
  - [x] Review Home, Notes, Contact, About, Chefs-d'oeuvre, and Lenses.
  - [x] Identify defensive, cold, unavailable, or self-important copy.
  - [x] Identify conversion-oriented language if any.
- [x] Apply conservative copy tone refinements. (AC: 1-4)
  - [x] Preserve the notebook/log visual direction.
  - [x] Avoid broad rewrites and keep the current information architecture.
  - [x] Make contact and notes copy warmer where needed.
  - [x] Keep final vocabulary consistent: chefs-d'oeuvre, timeline, lenses, notes, entries.
- [x] Add or run copy tone validation. (AC: 1-4)
  - [x] Add a lightweight validator for known banned/undesired phrases.
  - [x] Confirm the validator scans public route copy.
- [x] Run baseline checks. (AC: 1-4)
  - [x] Run copy validator if added.
  - [x] Run existing validators.
  - [x] Run `npm run lint`.
  - [x] Run `npm run build`.
- [x] Update story and sprint tracking. (AC: 1-4)
  - [x] Mark this story `review` after checks pass.
  - [x] Update sprint status to `review`.
  - [x] Record command results and warnings in Dev Agent Record.

## Dev Notes

### Story Source

- Story definition: `_bmad-output/planning-artifacts/epics.md`, Story 6.1.
- Sprint tracking: `_bmad-output/implementation-artifacts/sprint-status.yaml`.
- Prior epic retrospective: `_bmad-output/implementation-artifacts/epic-5-retro-notes-rss.md`.

### Tone Guidance

- Warm, precise, unforced.
- Open to curious people.
- Archive/logbook, not portfolio pitch.
- Avoid defensive "not X" framing unless it serves a concrete purpose.
- Avoid language that sounds unavailable, dismissive, or self-important.
- Avoid conversion language.

### Candidate Copy Areas

- `src/routes/notes.index.tsx`
- `src/routes/contact.tsx`
- `src/routes/about.tsx`
- `src/routes/lenses.index.tsx`
- `src/routes/chefs-doeuvre.tsx`
- `src/routes/index.tsx`

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

- Added `scripts/validate-copy-tone.mjs` and `npm run validate:copy`.
- `npm run validate:copy` passed.
- Existing validators passed.
- `npm run lint` passed with 7 non-blocking `react-refresh/only-export-components` warnings.
- `npm run build` passed with the existing Vite large chunk warning.

### Completion Notes List

- Replaced Notes heading "(Not so) random thoughts." with "Notes from the logbook."
- Replaced Notes description with "Slower reflections, loosely structured."
- Warmed Contact metadata and body copy.
- Removed the exclamation mark from About closing copy.
- Clarified Lenses description as "Four ways of looking through the same archive."
- Added copy-tone validation for known undesired phrases.

### File List

- Public route files with copy changes
- `_bmad-output/implementation-artifacts/6-1-copy-tone-review.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`
- `scripts/validate-copy-tone.mjs`
- `package.json`

### Change Log

- 2026-04-22: Refined public route copy tone, added copy-tone validation, verified all validators/lint/build, and moved story to review.
- 2026-04-22: Code review completed with no blocking findings; story moved to done.
