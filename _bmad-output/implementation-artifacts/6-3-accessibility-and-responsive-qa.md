# Story 6.3: Accessibility and Responsive QA

Status: ready-for-dev

## Story

As a visitor on any device,
I want the site to be readable and navigable,
so that the archive is usable without special conditions.

## Acceptance Criteria

1. Given the main route set is implemented, when QA is complete, then primary routes are keyboard accessible.
2. Given interactive elements receive keyboard focus, then visible focus states exist.
3. Given public pages render, then heading order is logical.
4. Given mobile layouts render, then readability and navigation are preserved.
5. Given images are meaningful, then they have useful alt text.

## Tasks / Subtasks

- [ ] Inspect accessibility and responsive structure. (AC: 1-5)
  - [ ] Review global shell landmarks and nav labels.
  - [ ] Review focus-visible behavior.
  - [ ] Review image alt handling.
  - [ ] Review responsive class usage on shell and main content layouts.
- [ ] Add targeted accessibility safeguards. (AC: 1-5)
  - [ ] Add visible focus style if missing.
  - [ ] Add missing nav labels if needed.
  - [ ] Preserve existing visual direction.
- [ ] Add or run accessibility/responsive validation. (AC: 1-5)
  - [ ] Validate shell landmarks.
  - [ ] Validate focus-visible styling.
  - [ ] Validate search/social/media labels.
  - [ ] Validate responsive class usage on major layout primitives.
- [ ] Run baseline checks. (AC: 1-5)
  - [ ] Run accessibility validator if added.
  - [ ] Run existing validators.
  - [ ] Run `npm run lint`.
  - [ ] Run `npm run build`.
- [ ] Update story and sprint tracking. (AC: 1-5)
  - [ ] Mark this story `review` after checks pass.
  - [ ] Update sprint status to `review`.
  - [ ] Record command results and warnings in Dev Agent Record.

## Dev Notes

### Story Source

- Story definition: `_bmad-output/planning-artifacts/epics.md`, Story 6.3.
- Sprint tracking: `_bmad-output/implementation-artifacts/sprint-status.yaml`.
- Prior story: `_bmad-output/implementation-artifacts/6-2-seo-and-social-metadata-pass.md`.

### Implementation Guidance

- Prefer global focus-visible styling over ad hoc per-link styles.
- Do not redesign layouts.
- Keep image alt behavior intentional: decorative mosaic imagery can stay `alt=""`, but meaningful note covers need useful alt text.
- Static validation is acceptable here; browser-level testing remains a follow-up until an E2E framework is introduced.

### Verification Commands

```bash
npm run validate:copy
npm run validate:seo
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

- `src/styles.css`
- `src/components/site-shell.tsx`
- `_bmad-output/implementation-artifacts/6-3-accessibility-and-responsive-qa.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`

Likely files if validation is added:

- `scripts/validate-a11y-responsive.mjs`
- `package.json`
