# Story 1.1: Capture Prototype Baseline

Status: done

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

- [x] Confirm repository state and current branch. (AC: 1)
  - [x] Run `git status --short --branch`.
  - [x] Confirm current branch is `develop`.
  - [x] Confirm `develop` is aligned with or intentionally ahead of `origin/develop`.
- [x] Verify required source-of-truth artifacts still exist. (AC: 3)
  - [x] Confirm `.lovable/plan.md` exists.
  - [x] Confirm `design-process/` exists.
  - [x] Confirm `_bmad-output/planning-artifacts/epics.md` exists.
  - [x] Confirm `_bmad-output/implementation-artifacts/sprint-status.yaml` exists.
- [x] Verify runnable prototype scaffold exists. (AC: 4)
  - [x] Confirm `package.json`, `src/`, `vite.config.ts`, and `src/routes/index.tsx` exist.
  - [x] Confirm the selected prototype pages/routes are present under `src/routes/`.
- [x] Run baseline verification. (AC: 4, 5)
  - [x] Run `npm run lint`.
  - [x] Run `npm run build`.
  - [x] Record any non-blocking warnings in this story's Dev Agent Record.
- [x] Create a durable baseline marker. (AC: 1, 2)
  - [x] Create a commit if verification or documentation changes are needed.
  - [x] Create a tag such as `prototype-baseline-notebook-log`.
  - [x] Push the tag to `origin`.
- [x] Update sprint tracking. (AC: 1)
  - [x] Set this story to `in-progress` when development begins.
  - [x] Set this story to `review` after baseline marker and verification complete.

### Review Findings

- [x] [Review][Patch] Completion note says baseline marker was only planned, but the tag exists locally and remotely. Updated the note to say `prototype-baseline-notebook-log` was created and pushed. [_bmad-output/implementation-artifacts/1-1-capture-prototype-baseline.md:148]

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

GPT-5.4

### Debug Log References

- `npm install` initially failed because `@tanstack/zod-adapter@1.166.9` expects Zod 3 while `package.json` had Zod 4. Aligned `zod` to `^3.24.2`.
- `npm run lint` initially failed on Prettier formatting. Applied Prettier to app source/config files.
- `npm run lint` then passed with 7 non-blocking `react-refresh/only-export-components` warnings from shadcn/Lovable-style exports.
- `npm run build` passed after dependency alignment.

### Completion Notes List

- Confirmed current branch is `develop`.
- Confirmed source-of-truth artifacts remain present: `.lovable/plan.md`, `design-process/`, epics, and sprint status.
- Confirmed runnable scaffold remains present: `package.json`, `src/`, `vite.config.ts`, and route files.
- Fixed baseline dependency compatibility by downgrading `zod` to the adapter-compatible 3.x line.
- Applied Prettier formatting to app source and config files so lint has no blocking errors.
- Verified baseline with `npm run lint` and `npm run build`.
- Baseline marker `prototype-baseline-notebook-log` was created and pushed for the completed story commit.

### File List

- `_bmad-output/implementation-artifacts/sprint-status.yaml`
- `_bmad-output/implementation-artifacts/1-1-capture-prototype-baseline.md`
- `package.json`
- `package-lock.json`
- `src/components/entry-list.tsx`
- `src/components/entry-mosaic.tsx`
- `src/components/search-palette.tsx`
- `src/components/site-shell.tsx`
- `src/content/data.ts`
- `src/routeTree.gen.ts`
- `src/routes/__root.tsx`
- `src/routes/about.tsx`
- `src/routes/chefs-doeuvre.tsx`
- `src/routes/contact.tsx`
- `src/routes/entries.$slug.tsx`
- `src/routes/index.tsx`
- `src/routes/lenses.$slug.tsx`
- `src/routes/lenses.index.tsx`
- `src/routes/notes.$slug.tsx`
- `src/routes/notes.index.tsx`
- `src/routes/timeline.tsx`

### Change Log

- 2026-04-21: Captured notebook/log prototype baseline, fixed dependency compatibility, formatted app source, verified lint/build, and moved story to review.
- 2026-04-21: Addressed code review finding by correcting the baseline marker completion note; story moved to done.
