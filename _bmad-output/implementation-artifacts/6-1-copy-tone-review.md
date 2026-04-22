# Story 6.1: Copy Tone Review

Status: ready-for-dev

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

- [ ] Inspect public route copy. (AC: 1-4)
  - [ ] Review Home, Notes, Contact, About, Chefs-d'oeuvre, and Lenses.
  - [ ] Identify defensive, cold, unavailable, or self-important copy.
  - [ ] Identify conversion-oriented language if any.
- [ ] Apply conservative copy tone refinements. (AC: 1-4)
  - [ ] Preserve the notebook/log visual direction.
  - [ ] Avoid broad rewrites and keep the current information architecture.
  - [ ] Make contact and notes copy warmer where needed.
  - [ ] Keep final vocabulary consistent: chefs-d'oeuvre, timeline, lenses, notes, entries.
- [ ] Add or run copy tone validation. (AC: 1-4)
  - [ ] Add a lightweight validator for known banned/undesired phrases.
  - [ ] Confirm the validator scans public route copy.
- [ ] Run baseline checks. (AC: 1-4)
  - [ ] Run copy validator if added.
  - [ ] Run existing validators.
  - [ ] Run `npm run lint`.
  - [ ] Run `npm run build`.
- [ ] Update story and sprint tracking. (AC: 1-4)
  - [ ] Mark this story `review` after checks pass.
  - [ ] Update sprint status to `review`.
  - [ ] Record command results and warnings in Dev Agent Record.

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

TBD by implementing agent.

### Debug Log References

TBD.

### Completion Notes List

TBD.

### File List

Expected files touched:

- Public route files with copy changes
- `_bmad-output/implementation-artifacts/6-1-copy-tone-review.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`

Likely files if validation is added:

- `scripts/validate-copy-tone.mjs`
- `package.json`
