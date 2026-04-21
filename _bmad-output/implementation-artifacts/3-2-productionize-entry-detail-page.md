# Story 3.2: Productionize Entry Detail Page

Status: ready-for-dev

## Story

As a visitor,
I want to inspect one entry with context and metadata,
so that I understand what happened and how it connects.

## Acceptance Criteria

1. Given an entry exists, when I open `/entries/$slug`, then the page displays title, date, type, status, summary, body, lenses, tags, role/outcome when present, links when present, and related entries when present.
2. Given an entry detail page renders, when page metadata is generated, then SEO metadata is derived from the entry.
3. Given related entries are listed, when I click a related entry, then it resolves to the correct entry detail route.
4. Given links are present, when they render, then they are real links and not placeholder `#` references.
5. Given I view entry detail on mobile or desktop, then the page remains readable and preserves the notebook/log visual rhythm.

## Tasks / Subtasks

- [ ] Inspect current Entry Detail implementation. (AC: 1-5)
  - [ ] Review `src/routes/entries.$slug.tsx`.
  - [ ] Confirm metadata, body, lenses, tags, role/outcome, related entries, previous/next links, and SEO metadata are present.
  - [ ] Identify any broken or placeholder link behavior.
- [ ] Harden entry links. (AC: 1, 4)
  - [ ] Remove or prevent placeholder `#` links from rendering as public entry links.
  - [ ] Keep optional link support for real links.
  - [ ] Keep content validation aligned with this behavior.
- [ ] Verify related entry behavior and readability. (AC: 3, 5)
  - [ ] Confirm related entry links use `/entries/$slug`.
  - [ ] Preserve current detail layout and visual rhythm.
- [ ] Run baseline checks. (AC: 1-5)
  - [ ] Run `npm run validate:shell`.
  - [ ] Run `npm run lint`.
  - [ ] Run `npm run build`.
- [ ] Update story and sprint tracking. (AC: 1-5)
  - [ ] Mark this story `review` after checks pass.
  - [ ] Update sprint status to `review`.
  - [ ] Record command results and warnings in Dev Agent Record.

## Dev Notes

### Story Source

- Story definition: `_bmad-output/planning-artifacts/epics.md`, Story 3.2.
- Sprint tracking: `_bmad-output/implementation-artifacts/sprint-status.yaml`.
- Prior story: `_bmad-output/implementation-artifacts/3-1-validate-entry-content-model.md`.

### Current Implementation Notes

- Entry Detail route: `src/routes/entries.$slug.tsx`.
- Entry data and validation: `src/content/data.ts`.
- Entry Detail currently renders metadata, body, generated mosaic, related entries, and previous/next navigation.
- Current prototype data includes at least one placeholder `href: "#"`, which should not be treated as a production-ready public link.

### Implementation Guidance

- Do not redesign Entry Detail.
- Do not remove support for links; only prevent placeholder links from behaving like valid public references.
- Keep related entries as internal route links.
- Keep SEO metadata derived from entry title and summary.
- If updating content validation, keep the error message specific and actionable.

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

- `src/routes/entries.$slug.tsx`
- `src/content/data.ts`
- `_bmad-output/implementation-artifacts/3-2-productionize-entry-detail-page.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`
