# Story 6.2: SEO and Social Metadata Pass

Status: done

## Story

As a visitor arriving from search or shared links,
I want pages to have accurate metadata,
so that previews and search snippets match the site.

## Acceptance Criteria

1. Given public routes are implemented, when metadata review is complete, then root, chefs-d'oeuvre, timeline, lenses, lens detail, entry detail, notes, note detail, about, contact, colophon, privacy, and terms have appropriate titles and descriptions.
2. Given entry and note pages render, then metadata derives from content data.
3. Given RSS exists, then RSS alternate links are present where appropriate.
4. Given metadata is reviewed, then it does not overstate the site's purpose.

## Tasks / Subtasks

- [x] Inspect current metadata coverage. (AC: 1-4)
  - [x] Review root metadata.
  - [x] Review static public route metadata.
  - [x] Review dynamic entry, note, and lens metadata.
  - [x] Review RSS alternate links.
- [x] Patch metadata gaps. (AC: 1-4)
  - [x] Add root Open Graph metadata if missing.
  - [x] Keep metadata aligned with archive/logbook positioning.
  - [x] Avoid inflated or conversion-oriented descriptions.
- [x] Add or run SEO validation. (AC: 1-4)
  - [x] Validate static route titles/descriptions.
  - [x] Validate dynamic route metadata is content-derived.
  - [x] Validate RSS alternate links.
  - [x] Validate no known overstatement phrases appear in route metadata.
- [x] Run baseline checks. (AC: 1-4)
  - [x] Run SEO validator if added.
  - [x] Run existing validators.
  - [x] Run `npm run lint`.
  - [x] Run `npm run build`.
- [x] Update story and sprint tracking. (AC: 1-4)
  - [x] Mark this story `review` after checks pass.
  - [x] Update sprint status to `review`.
  - [x] Record command results and warnings in Dev Agent Record.

## Dev Notes

### Story Source

- Story definition: `_bmad-output/planning-artifacts/epics.md`, Story 6.2.
- Sprint tracking: `_bmad-output/implementation-artifacts/sprint-status.yaml`.
- Prior story: `_bmad-output/implementation-artifacts/6-1-copy-tone-review.md`.

### Relevant Routes

- `src/routes/__root.tsx`
- `src/routes/chefs-doeuvre.tsx`
- `src/routes/timeline.tsx`
- `src/routes/lenses.index.tsx`
- `src/routes/lenses.$slug.tsx`
- `src/routes/entries.$slug.tsx`
- `src/routes/notes.index.tsx`
- `src/routes/notes.$slug.tsx`
- `src/routes/about.tsx`
- `src/routes/contact.tsx`
- `src/routes/colophon.tsx`
- `src/routes/privacy.tsx`
- `src/routes/terms.tsx`

### Implementation Guidance

- Do not rewrite page content for SEO.
- Metadata should describe the page plainly.
- Avoid personal-brand exaggeration.
- Keep RSS alternate links.
- Static validation is acceptable for this story.

## Dev Agent Record

### Agent Model Used

GPT-5.4

### Debug Log References

- Added `scripts/validate-seo.mjs` and `npm run validate:seo`.
- `npm run validate:seo` passed: validated 13 public route metadata files.
- Existing validators passed.
- `npm run lint` passed with 7 non-blocking `react-refresh/only-export-components` warnings.
- `npm run build` passed with the existing Vite large chunk warning.

### Completion Notes List

- Added root Open Graph title, description, and type metadata.
- Added deterministic SEO validation across static routes, dynamic entry/note/lens metadata, RSS alternate links, and known overstatement phrases.
- Confirmed entry and note metadata derive from content data.
- Confirmed metadata remains archive/logbook aligned rather than conversion-oriented.

### File List

- `src/routes/__root.tsx`
- `_bmad-output/implementation-artifacts/6-2-seo-and-social-metadata-pass.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`
- `scripts/validate-seo.mjs`
- `package.json`

### Change Log

- 2026-04-22: Added root Open Graph metadata and SEO validation, verified full validation/lint/build, and moved story to review.
- 2026-04-22: Code review completed with no blocking findings; story moved to done.
