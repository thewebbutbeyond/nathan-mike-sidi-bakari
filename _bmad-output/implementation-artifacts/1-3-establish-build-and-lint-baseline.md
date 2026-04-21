# Story 1.3: Establish Build and Lint Baseline

Status: ready-for-dev

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

- [ ] Confirm standard verification commands. (AC: 1, 2, 5)
  - [ ] Confirm `package.json` includes scripts for `lint`, `build`, and `validate:shell`.
  - [ ] Confirm `validate:shell` points to `scripts/validate-shell-routes.mjs`.
  - [ ] Confirm the commands run from a clean `develop` checkout.
- [ ] Verify dependency install baseline. (AC: 1)
  - [ ] Run `npm ci`.
  - [ ] Record any Node engine warnings or install warnings.
  - [ ] Confirm install exits successfully.
- [ ] Run verification command set. (AC: 1, 2, 5)
  - [ ] Run `npm run validate:shell`.
  - [ ] Run `npm run lint`.
  - [ ] Run `npm run build`.
- [ ] Document non-blocking warnings. (AC: 3)
  - [ ] Record the known `react-refresh/only-export-components` warnings if still present.
  - [ ] Record any build warnings such as large chunks if still present.
  - [ ] Confirm no warning is being treated as a hidden failure for this story.
- [ ] Verify generated route file determinism. (AC: 4)
  - [ ] Check whether `src/routeTree.gen.ts` changes after build.
  - [ ] If it changes, inspect and commit the generated change.
  - [ ] If it does not change, record that the route tree is stable.
- [ ] Update story and sprint tracking. (AC: 1-5)
  - [ ] Mark this story `review` after all checks pass.
  - [ ] Update sprint status to `review`.
  - [ ] Record command results in Dev Agent Record.

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

TBD by implementing agent.

### Debug Log References

TBD.

### Completion Notes List

TBD.

### File List

Expected files touched:

- `_bmad-output/implementation-artifacts/sprint-status.yaml`
- This story file

Possible files if generated output changes:

- `src/routeTree.gen.ts`
- package/config docs if baseline command documentation is added
