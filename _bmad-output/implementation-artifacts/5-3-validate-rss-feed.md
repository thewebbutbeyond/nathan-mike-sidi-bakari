# Story 5.3: Validate RSS Feed

Status: done

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

- [x] Inspect current RSS route and feed discovery links. (AC: 1-4)
  - [x] Confirm `/rss.xml` route exists.
  - [x] Confirm RSS item title, link, guid, pubDate, and description are generated.
  - [x] Confirm XML escaping is present.
  - [x] Confirm root metadata and Notes pages link to RSS.
- [x] Extend RSS validation. (AC: 1-4)
  - [x] Validate RSS route structure and response headers.
  - [x] Validate note item link pattern points to `/notes/${slug}`.
  - [x] Validate XML escaping handles core special characters.
  - [x] Validate root and notes surfaces expose RSS links.
- [x] Run baseline checks. (AC: 1-4)
  - [x] Run `npm run validate:notes`.
  - [x] Run existing validators.
  - [x] Run `npm run lint`.
  - [x] Run `npm run build`.
- [x] Update story and sprint tracking. (AC: 1-4)
  - [x] Mark this story `review` after checks pass.
  - [x] Update sprint status to `review`.
  - [x] Record command results and warnings in Dev Agent Record.

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

GPT-5.4

### Debug Log References

- Extended `scripts/validate-notes.mjs` to cover RSS route structure and feed discovery links.
- `npm run validate:notes` passed: validated 21 notes index/detail/RSS safeguards.
- Existing validators passed.
- `npm run lint` passed with 7 non-blocking `react-refresh/only-export-components` warnings.
- `npm run build` passed with the existing Vite large chunk warning.

### Completion Notes List

- Confirmed `/rss.xml` route exists.
- Confirmed RSS route generates title, link, guid, pubDate, and description for note items.
- Confirmed RSS item links point to `/notes/${slug}`.
- Confirmed RSS escaping covers `&`, `<`, `>`, and `"` characters.
- Confirmed RSS alternate link exists in root metadata and visible RSS links exist on Notes surfaces.

### File List

- `scripts/validate-notes.mjs`
- `_bmad-output/implementation-artifacts/5-3-validate-rss-feed.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`

### Change Log

- 2026-04-22: Extended notes validation to cover RSS structure, escaping, item links, response headers, and feed discovery; verified full validation/lint/build; moved story to review.
- 2026-04-22: Code review completed with no blocking findings; story moved to done.
