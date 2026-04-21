# Story 2.1: Refine Home Portal Messaging

Status: review

## Story

As a first-time visitor,
I want the home page to explain the archive plainly,
so that I understand what this place is without feeling pitched to.

## Acceptance Criteria

1. Given I open the root route, when I read the premise section, then the copy communicates a personal archive/logbook.
2. Given I read the Home / Portal copy, when I assess tone, then it avoids cold, defensive, or self-important phrasing.
3. Given I read the Home / Portal copy, when I assess product intent, then it does not frame the site as a resume or conversion page.
4. Given the copy is refined, when the page renders, then it keeps the existing notebook/log visual rhythm from the prototype.
5. Given primary route cards are part of the first impression, when I read them, then their descriptions are warm, direct, and aligned with the archive metaphor.

## Tasks / Subtasks

- [x] Review current Home / Portal copy against source-of-truth tone guidance. (AC: 1-3)
  - [x] Inspect `src/routes/index.tsx` premise, route card descriptions, and section headings.
  - [x] Compare against `.lovable/plan.md`, content-language guidance, and Trigger Map key insights.
  - [x] Identify any copy that sounds too defensive, self-important, cold, or portfolio-like.
- [x] Refine Home / Portal premise copy. (AC: 1-4)
  - [x] Preserve the current notebook/log layout and visual structure.
  - [x] Keep the opening concise and plain.
  - [x] Make the copy warmer and more inviting without adding a sales CTA.
- [x] Refine primary route card descriptions. (AC: 3, 5)
  - [x] Keep route labels unchanged unless a clear inconsistency exists.
  - [x] Make descriptions more useful for first-time visitors.
  - [x] Preserve the current route order and visual rhythm.
- [x] Verify no route or layout regressions. (AC: 4)
  - [x] Run `npm run validate:shell`.
  - [x] Run `npm run lint`.
  - [x] Run `npm run build`.
- [x] Update story and sprint tracking. (AC: 1-5)
  - [x] Mark this story `review` after checks pass.
  - [x] Update sprint status to `review`.
  - [x] Record command results and warnings in Dev Agent Record.

## Dev Notes

### Story Source

- Story definition: `_bmad-output/planning-artifacts/epics.md`, Story 2.1.
- Sprint tracking: `_bmad-output/implementation-artifacts/sprint-status.yaml`.

### Tone Guidance

Use this tone target:

- Warm, precise, unforced.
- Personal logbook/archive, not portfolio pitch.
- Open to curious people.
- No conversion-first CTA.
- Avoid defensive "not X" phrasing unless it serves a concrete purpose.
- Avoid language that feels pompous, exclusive, or dismissive.

### Relevant Source Context

- `.lovable/plan.md`: archive-first, no hero pitch, no CTA buttons, metadata/logbook feel.
- `design-process/A-Product-Brief/02-content-language.md`: informal but precise, non-corporate, avoid inflated claims.
- `design-process/B-Trigger-Map/07-key-insights.md`: Home / Portal must explain the archive through structure, not a long manifesto.
- Current implementation: `src/routes/index.tsx`.

### Implementation Guidance

- This story should only touch Home / Portal copy unless verification exposes a tiny formatting issue.
- Do not redesign layout.
- Do not change route slugs.
- Do not rename `chefs-d’œuvre`, `timeline`, `lenses`, or `notes` in this story unless there is a direct copy consistency bug.
- Keep changes small enough to judge visually.

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

- `npm run validate:shell` passed.
- `npm run lint` passed with 7 non-blocking `react-refresh/only-export-components` warnings.
- `npm run build` passed with the existing Vite large chunk warning.

### Completion Notes List

- Refined the Home / Portal premise from "archive" wording into a warmer "personal logbook" framing.
- Rewrote the Home / Portal paragraph to explain that the site records what was made, what was being thought through, and where threads cross.
- Updated route card descriptions to be more useful and less terse while preserving route labels, order, and layout.
- Preserved the notebook/log visual rhythm and made no route or layout changes.

### File List

Expected files touched:

- `src/routes/index.tsx`
- `_bmad-output/implementation-artifacts/2-1-refine-home-portal-messaging.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`

### Change Log

- 2026-04-22: Refined Home / Portal premise and route descriptions, verified shell/lint/build, and moved story to review.
