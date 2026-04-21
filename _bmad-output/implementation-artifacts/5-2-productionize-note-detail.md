# Story 5.2: Productionize Note Detail

Status: ready-for-dev

## Story

As a reader,
I want a comfortable long-form note page,
so that I can read without distraction.

## Acceptance Criteria

1. Given a note exists, when I open `/notes/$slug`, then the page renders title, date, reading time, summary, body, tags, optional cover image, and previous/next note links.
2. Given a note detail page renders, then SEO metadata is derived from the note.
3. Given I read a note on desktop or mobile, then the reading column is comfortable and focused.
4. Given I open an unknown note slug, then the route shows a quiet not-found state with a return path.

## Tasks / Subtasks

- [ ] Inspect current Note Detail. (AC: 1-4)
  - [ ] Confirm title, date, reading time, summary, body, tags, optional cover image, previous/next links, and RSS link render.
  - [ ] Confirm SEO metadata derives from note title and summary.
  - [ ] Confirm unknown note slugs throw `notFound()` and render a return path.
- [ ] Harden Note Detail validation. (AC: 1-4)
  - [ ] Extend notes validation to cover Note Detail assumptions.
  - [ ] Preserve current long-form reading layout.
  - [ ] Preserve optional cover behavior.
- [ ] Run baseline checks. (AC: 1-4)
  - [ ] Run `npm run validate:notes`.
  - [ ] Run existing validators.
  - [ ] Run `npm run lint`.
  - [ ] Run `npm run build`.
- [ ] Update story and sprint tracking. (AC: 1-4)
  - [ ] Mark this story `review` after checks pass.
  - [ ] Update sprint status to `review`.
  - [ ] Record command results and warnings in Dev Agent Record.

## Dev Notes

### Story Source

- Story definition: `_bmad-output/planning-artifacts/epics.md`, Story 5.2.
- Sprint tracking: `_bmad-output/implementation-artifacts/sprint-status.yaml`.
- Prior story: `_bmad-output/implementation-artifacts/5-1-harden-notes-index.md`.

### Current Implementation Notes

- Note Detail route: `src/routes/notes.$slug.tsx`.
- Notes data: `NOTES`, `getNote`, and `sortedNotes` in `src/content/data.ts`.
- Notes validation script: `scripts/validate-notes.mjs`.

### Implementation Guidance

- Do not redesign Note Detail.
- Keep the full-width optional cover and narrow reading column.
- Keep RSS visible but low-emphasis.
- If no code change is needed, make validation coverage explicit and preserve behavior.

### Verification Commands

```bash
npm run validate:notes
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

- `scripts/validate-notes.mjs`
- `_bmad-output/implementation-artifacts/5-2-productionize-note-detail.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`
