# Story 1.1: Capture Prototype Baseline

Status: ready-for-dev

## Story

As the site owner,
I want the current good prototype captured as the implementation baseline,
so that future production work can improve it without losing the design direction.

## Acceptance Criteria

1. Given the current `develop` prototype is the preferred direction, when the baseline story is complete, then the branch has a clean commit or tag documenting the chosen prototype state.
2. Given the baseline is captured, when a future developer reviews history, then the commit or tag message references the notebook/log design direction.
3. Given WDS docs and Lovable plan are the source of intent, when the baseline is captured, then `design-process/` and `.lovable/plan.md` remain in the repository.
4. Given the app scaffold is needed by Lovable and Codex, when checks run, then the app still builds successfully.
5. Given lint is part of the quality baseline, when checks run, then lint has no blocking errors and any warnings are documented.

## Tasks / Subtasks

- [ ] Confirm repository state and current branch. (AC: 1)
  - [ ] Run `git status --short --branch`.
  - [ ] Confirm current branch is `develop`.
  - [ ] Confirm `develop` is aligned with or intentionally ahead of `origin/develop`.
- [ ] Verify required source-of-truth artifacts still exist. (AC: 3)
  - [ ] Confirm `.lovable/plan.md` exists.
  - [ ] Confirm `design-process/` exists.
  - [ ] Confirm `_bmad-output/planning-artifacts/epics.md` exists.
  - [ ] Confirm `_bmad-output/implementation-artifacts/sprint-status.yaml` exists.
- [ ] Verify runnable prototype scaffold exists. (AC: 4)
  - [ ] Confirm `package.json`, `src/`, `vite.config.ts`, and `src/routes/index.tsx` exist.
  - [ ] Confirm the selected prototype pages/routes are present under `src/routes/`.
- [ ] Run baseline verification. (AC: 4, 5)
  - [ ] Run `npm run lint`.
  - [ ] Run `npm run build`.
  - [ ] Record any non-blocking warnings in this story's Dev Agent Record.
- [ ] Create a durable baseline marker. (AC: 1, 2)
  - [ ] Create a commit if verification or documentation changes are needed.
  - [ ] Create a tag such as `prototype-baseline-notebook-log`.
  - [ ] Push the tag to `origin`.
- [ ] Update sprint tracking. (AC: 1)
  - [ ] Set this story to `in-progress` when development begins.
  - [ ] Set this story to `review` after baseline marker and verification complete.

## Dev Notes

### Story Source

- Story definition: `_bmad-output/planning-artifacts/epics.md`, Story 1.1.
- Sprint tracking: `_bmad-output/implementation-artifacts/sprint-status.yaml`.
- Candidate design baseline: current `develop` prototype.

### Intent

This story is a checkpoint story. It should not redesign or refactor the app. Its job is to make the selected Lovable prototype recoverable before production hardening starts.

The chosen visual direction is the notebook/log archive:

- Minimal, precise, warm, artifact-led, and open to curious visitors.
- Archive-first and non-conversion.
- Uses routes for chefs-d'oeuvre, timeline, lenses, notes, entry detail, about, contact, legal pages, RSS, and search.

### Required Artifacts To Preserve

- `.lovable/plan.md`
- `design-process/`
- `_bmad-output/planning-artifacts/epics.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`

Do not delete or rewrite these during this story.

### Current App Surface

Key files to verify:

- `package.json` - app scripts and dependencies.
- `vite.config.ts` - Lovable TanStack/Vite configuration wrapper.
- `src/routes/index.tsx` - Home / Portal.
- `src/components/site-shell.tsx` - global shell, nav, footer.
- `src/content/data.ts` - typed entry/note/lens data.
- `src/routes/*.tsx` and `src/routes/rss[.]xml.ts` - route set.

### Verification Commands

Use the project scripts:

```bash
npm run lint
npm run build
```

Known acceptable state from prior runs:

- `npm run lint` may emit `react-refresh/only-export-components` warnings from shadcn/Lovable-style component files. These are warnings, not blocking errors, unless the project standard changes.
- `npm run build` should complete successfully.

### Tagging Guidance

Suggested tag:

```bash
git tag -a prototype-baseline-notebook-log -m "Notebook/log prototype baseline"
git push origin prototype-baseline-notebook-log
```

If a tag with that name already exists, inspect it before replacing it. Do not force-update a tag without explicit intent.

### Project Structure Notes

- Implementation artifacts live under `_bmad-output/implementation-artifacts/`.
- Planning artifacts live under `_bmad-output/planning-artifacts/`.
- WDS design artifacts live under `design-process/`.
- Product source currently lives under `src/`.

### References

- `_bmad-output/planning-artifacts/epics.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`
- `.lovable/plan.md`
- `design-process/E-Development/deliveries/DD-001-archive-platform.yaml`
- `design-process/E-Development/test-scenarios/TS-001-archive-platform.yaml`
- `src/routes/index.tsx`
- `src/components/site-shell.tsx`
- `src/content/data.ts`
- `package.json`

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

Optional:

- Documentation or tag metadata only if needed.
