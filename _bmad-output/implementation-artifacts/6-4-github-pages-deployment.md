# Story 6.4: GitHub Pages Deployment

Status: review

## Story

As the site owner,
I want the site deployed from the repository,
so that the archive is publicly accessible.

## Acceptance Criteria

1. Given the app stack is confirmed for release, when deployment setup is complete, then the GitHub Pages workflow installs dependencies, builds the app, uploads the correct output directory, and deploys successfully.
2. Given the workflow runs, then it uses a Node version compatible with the app dependencies.
3. Given a visitor opens a non-root route on GitHub Pages, then route fallback behavior is configured for the selected build output.
4. Given deployment is configured, then deployment instructions or known limits are documented.

## Tasks / Subtasks

- [x] Confirm deployment shape. (AC: 1-4)
  - [x] Review current build output.
  - [x] Confirm static GitHub Pages constraints.
  - [x] Choose the least invasive TanStack Start static mode.
- [x] Configure GitHub Pages build output. (AC: 1, 3)
  - [x] Enable TanStack Start SPA/static output for Pages.
  - [x] Ensure project-page base path is configurable.
  - [x] Prepare `dist/client` with GitHub Pages fallback files.
- [x] Replace placeholder workflow. (AC: 1-3)
  - [x] Install dependencies with `npm ci`.
  - [x] Use a Node version compatible with TanStack Start dependencies.
  - [x] Build the Pages artifact.
  - [x] Upload `dist/client`.
  - [x] Deploy through GitHub Pages.
- [x] Document deployment. (AC: 4)
  - [x] Document GitHub Pages source setting.
  - [x] Document project-page base path behavior.
  - [x] Document known static-hosting limits.
- [x] Add or run deployment validation. (AC: 1-4)
  - [x] Validate workflow structure.
  - [x] Validate build output fallback files.
  - [x] Run existing validators.
  - [x] Run `npm run lint`.
  - [x] Run `npm run build`.
- [x] Update story and sprint tracking. (AC: 1-4)
  - [x] Mark this story `review` after checks pass.
  - [x] Update sprint status to `review`.
  - [x] Record command results and warnings in Dev Agent Record.

## Dev Notes

### Story Source

- Story definition: `_bmad-output/planning-artifacts/epics.md`, Story 6.4.
- Sprint tracking: `_bmad-output/implementation-artifacts/sprint-status.yaml`.
- Prior story: `_bmad-output/implementation-artifacts/6-3-accessibility-and-responsive-qa.md`.
- Branch strategy: `design-process/branch-strategy.md`.

### Implementation Guidance

- GitHub Pages is a static host; do not assume SSR runtime support.
- Prefer TanStack Start SPA/static output for the current release path.
- Use Node `>=22.12.0` in CI because TanStack Start declares that engine.
- Keep deployment on `main` plus manual dispatch, matching the branch strategy.
- Document project-page base path so a future custom domain change is straightforward.

### Verification Commands

```bash
npm run build:github-pages
npm run validate:deploy
npm run validate:a11y
npm run validate:seo
npm run validate:copy
npm run validate:notes
npm run validate:search
npm run validate:lenses
npm run validate:timeline
npm run validate:entry-detail
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

- Replaced the GitHub Pages placeholder workflow with build/upload/deploy jobs.
- Added `scripts/build-github-pages.mjs`, `scripts/prepare-github-pages.mjs`, and `npm run build:github-pages`.
- Added `scripts/validate-github-pages-deployment.mjs` and `npm run validate:deploy`.
- `npm run build:github-pages` passed and prepared `index.html`, `404.html`, `.nojekyll`, and `rss.xml`.
- `REQUIRE_DEPLOY_OUTPUT=1 npm run validate:deploy` passed: validated 17 deployment safeguards.
- Full validation suite passed.
- `npm run lint` passed with 7 non-blocking `react-refresh/only-export-components` warnings.
- `npm run build` passed with the existing Vite large chunk warning.

### Completion Notes List

- Configured TanStack Start SPA/static output with recursive prerender crawling disabled.
- Added a configurable GitHub Pages base path and wired TanStack Router to the same base path.
- Made RSS links and RSS XML base-path aware.
- Ensured static RSS output uses `SITE_ORIGIN` instead of the local prerender server origin.
- Documented GitHub Pages setup, base path, route fallback, and static-hosting limits.

### File List

- `.github/workflows/deploy-to-github-pages.yml`
- `docs/deployment.md`
- `package.json`
- `scripts/build-github-pages.mjs`
- `scripts/prepare-github-pages.mjs`
- `scripts/validate-github-pages-deployment.mjs`
- `scripts/validate-notes.mjs`
- `scripts/validate-seo.mjs`
- `src/components/site-shell.tsx`
- `vite.config.ts`
- `src/lib/public-paths.ts`
- `src/router.tsx`
- `src/routes/__root.tsx`
- `src/routes/notes.index.tsx`
- `src/routes/notes.$slug.tsx`
- `src/routes/rss[.]xml.ts`
- `_bmad-output/implementation-artifacts/6-4-github-pages-deployment.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`

### Change Log

- 2026-04-22: Added GitHub Pages static deployment workflow, build preparation, validation, documentation, and base-path-safe route/RSS handling; verified full validation/lint/build and moved story to review.
