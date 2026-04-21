# Story 1.3: Establish Build and Lint Baseline

Status: review

## Story

As a developer,
I want repeatable app checks,
so that future stories can be verified consistently.

## Acceptance Criteria

1. Given dependencies are installed, when I run the standard verification commands, then the app builds successfully.
2. Given lint is part of the baseline, when lint runs, then it has no blocking errors.
3. Given known non-blocking warnings remain, when verification is documented, then those warnings are listed and explicitly classified as non-blocking.
4. Given generated route files are part of the app, when build or route generation updates them, then generated route file changes are committed or shown to be deterministic.
5. Given shell route validation exists, when baseline verification runs, then `npm run validate:shell` is included in the standard check set.

## Tasks / Subtasks

- [x] Confirm standard verification commands. (AC: 1, 2, 5)
  - [x] Confirm `package.json` includes scripts for `lint`, `build`, and `validate:shell`.
  - [x] Confirm `validate:shell` points to `scripts/validate-shell-routes.mjs`.
  - [x] Confirm the commands run from a clean `develop` checkout.
- [x] Verify dependency install baseline. (AC: 1)
  - [x] Run `npm ci`.
  - [x] Record any Node engine warnings or install warnings.
  - [x] Confirm install exits successfully.
- [x] Run verification command set. (AC: 1, 2, 5)
  - [x] Run `npm run validate:shell`.
  - [x] Run `npm run lint`.
  - [x] Run `npm run build`.
- [x] Document non-blocking warnings. (AC: 3)
  - [x] Record the known `react-refresh/only-export-components` warnings if still present.
  - [x] Record any build warnings such as large chunks if still present.
  - [x] Confirm no warning is being treated as a hidden failure for this story.
- [x] Verify generated route file determinism. (AC: 4)
  - [x] Check whether `src/routeTree.gen.ts` changes after build.
  - [x] If it changes, inspect and commit the generated change.
  - [x] If it does not change, record that the route tree is stable.
- [x] Update story and sprint tracking. (AC: 1-5)
  - [x] Mark this story `review` after all checks pass.
  - [x] Update sprint status to `review`.
  - [x] Record command results in Dev Agent Record.

## Dev Notes

### Story Source

- Story definition: `_bmad-output/planning-artifacts/epics.md`, Story 1.3.
- Sprint tracking: `_bmad-output/implementation-artifacts/sprint-status.yaml`.
- Prior story: `_bmad-output/implementation-artifacts/1-2-verify-app-shell-and-primary-navigation.md`.

### Prior Story Learnings

- Story 1.1 aligned `zod` to `^3.24.2` because `@tanstack/zod-adapter@1.166.9` requires Zod 3.
- Story 1.1 established the `prototype-baseline-notebook-log` tag.
- Story 1.2 added `npm run validate:shell`.
- `npm run lint` may emit 7 non-blocking `react-refresh/only-export-components` warnings from shadcn/Lovable-style files.
- `npm run build` may emit a Vite large chunk warning for generated bundles.

### Current Verification Surface

Current scripts in `package.json`:

- `npm run validate:shell`
- `npm run lint`
- `npm run build`
- `npm run build:dev`
- `npm run preview`
- `npm run format`

Story 1.3 should define the standard baseline as:

```bash
npm ci
npm run validate:shell
npm run lint
npm run build
```

### Implementation Guidance

- This story should not change product UI.
- Prefer documentation and small script/config updates only if needed to make the baseline repeatable.
- Do not remove or silence warnings unless doing so is clearly correct and low-risk.
- If Node engine warnings occur, document them. Do not change runtime/deployment versions in this story unless required for checks to pass.
- Do not overwrite WDS or BMad artifacts except this story file and sprint status.

### Files To Inspect

- `package.json`
- `package-lock.json`
- `scripts/validate-shell-routes.mjs`
- `src/routeTree.gen.ts`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`

## Dev Agent Record

### Agent Model Used

GPT-5.4

### Debug Log References

- `npm ci` passes with Node engine warnings because TanStack Start packages require Node `>=22.12.0`; current local Node is `v20.20.1`.
- `npm run validate:shell` passes.
- `npm run lint` passes with 7 non-blocking `react-refresh/only-export-components` warnings from shadcn/Lovable-style exports.
- `npm run build` passes. Vite reports an existing large chunk warning for generated bundles.
- `src/routeTree.gen.ts` did not change after the verification command set.

### Completion Notes List

- Confirmed `package.json` includes `validate:shell`, `lint`, and `build`.
- Confirmed `validate:shell` points to `scripts/validate-shell-routes.mjs`.
- Confirmed a clean `develop` checkout before command execution.
- Established the repeatable baseline command set: `npm ci`, `npm run validate:shell`, `npm run lint`, `npm run build`.
- Documented non-blocking warnings and confirmed none are hidden failures for this story.
- Confirmed route tree generation is deterministic for the current route set.

### File List

- `_bmad-output/implementation-artifacts/sprint-status.yaml`
- `_bmad-output/implementation-artifacts/1-3-establish-build-and-lint-baseline.md`

### Change Log

- 2026-04-21: Ran and documented baseline verification command set; route tree remained stable; story moved to review.
