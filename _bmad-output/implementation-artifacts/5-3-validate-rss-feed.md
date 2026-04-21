# Story 5.3: Validate RSS Feed

Status: ready-for-dev

## Story

As a reader who uses RSS,
I want a valid notes feed,
so that I can follow updates without a platform feed.

## Acceptance Criteria

1. Given notes exist, when I open `/rss.xml`, then the response is valid RSS XML with note title, link, guid, pubDate, and description.
2. Given RSS items are generated, then item links point to valid note routes.
3. Given note data includes special characters, then XML escaping handles special characters.
4. Given the site renders root metadata and Notes pages, then RSS is linked from root metadata and notes pages.

## Tasks / Subtasks

- [ ] Inspect current RSS route and feed discovery links. (AC: 1-4)
  - [ ] Confirm `/rss.xml` route exists.
  - [ ] Confirm RSS item title, link, guid, pubDate, and description are generated.
  - [ ] Confirm XML escaping is present.
  - [ ] Confirm root metadata and Notes pages link to RSS.
- [ ] Extend RSS validation. (AC: 1-4)
  - [ ] Validate RSS route structure and response headers.
  - [ ] Validate note item link pattern points to `/notes/${slug}`.
  - [ ] Validate XML escaping handles core special characters.
  - [ ] Validate root and notes surfaces expose RSS links.
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

- Story definition: `_bmad-output/planning-artifacts/epics.md`, Story 5.3.
- Sprint tracking: `_bmad-output/implementation-artifacts/sprint-status.yaml`.
- Prior story: `_bmad-output/implementation-artifacts/5-2-productionize-note-detail.md`.

### Current Implementation Notes

- RSS route: `src/routes/rss[.]xml.ts`.
- Root feed discovery: `src/routes/__root.tsx`.
- Notes feed link: `src/routes/notes.index.tsx` and `src/routes/notes.$slug.tsx`.
- Notes data: `sortedNotes()` in `src/content/data.ts`.

### Implementation Guidance

- Keep RSS simple and notes-only.
- Do not add analytics, mailing-list, or platform-follow behavior.
- Keep RSS visible but low-emphasis.
- If validation can stay static and deterministic, prefer that over adding a dependency.

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
- `_bmad-output/implementation-artifacts/5-3-validate-rss-feed.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`
