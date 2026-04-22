# Story 6.2: SEO and Social Metadata Pass

Status: ready-for-dev

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

- [ ] Inspect current metadata coverage. (AC: 1-4)
  - [ ] Review root metadata.
  - [ ] Review static public route metadata.
  - [ ] Review dynamic entry, note, and lens metadata.
  - [ ] Review RSS alternate links.
- [ ] Patch metadata gaps. (AC: 1-4)
  - [ ] Add root Open Graph metadata if missing.
  - [ ] Keep metadata aligned with archive/logbook positioning.
  - [ ] Avoid inflated or conversion-oriented descriptions.
- [ ] Add or run SEO validation. (AC: 1-4)
  - [ ] Validate static route titles/descriptions.
  - [ ] Validate dynamic route metadata is content-derived.
  - [ ] Validate RSS alternate links.
  - [ ] Validate no known overstatement phrases appear in route metadata.
- [ ] Run baseline checks. (AC: 1-4)
  - [ ] Run SEO validator if added.
  - [ ] Run existing validators.
  - [ ] Run `npm run lint`.
  - [ ] Run `npm run build`.
- [ ] Update story and sprint tracking. (AC: 1-4)
  - [ ] Mark this story `review` after checks pass.
  - [ ] Update sprint status to `review`.
  - [ ] Record command results and warnings in Dev Agent Record.

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

TBD by implementing agent.

### Debug Log References

TBD.

### Completion Notes List

TBD.

### File List

Expected files touched:

- `src/routes/__root.tsx`
- `_bmad-output/implementation-artifacts/6-2-seo-and-social-metadata-pass.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`

Likely files if validation is added:

- `scripts/validate-seo.mjs`
- `package.json`
