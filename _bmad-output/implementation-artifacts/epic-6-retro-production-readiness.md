# Epic 6 Retrospective: Production Readiness, Copy Tone, SEO, and Deployment

**Date:** 2026-04-22  
**Epic:** Epic 6 - Production Readiness, Copy Tone, SEO, and Deployment  
**Status:** Complete

---

## Epic Review

### What Shipped

Epic 6 moved the selected notebook/log prototype from feature-complete to release-ready.

Completed stories:

- Story 6.1: Warmed public route copy and added copy-tone validation.
- Story 6.2: Added root Open Graph metadata and SEO validation.
- Story 6.3: Added structural accessibility/responsive safeguards and validation.
- Story 6.4: Replaced the GitHub Pages placeholder with a static Pages build, artifact preparation, deployment workflow, base-path handling, and deployment docs.

### What Worked

- The quiet archive voice survived the production-hardening pass.
- Static validators caught regressions cheaply without adding a browser test framework too early.
- The Pages deployment story surfaced the real hosting constraint: GitHub Pages can serve this release as static output, but not the TanStack Start server bundle.
- Recursive prerender crawling was caught and rejected before it became a CI problem.
- RSS moved from source-level validation to deploy-artifact validation for the static Pages path.

### What Was Friction

- TanStack Start can emit both server and static output, so the Pages path needed deliberate narrowing to SPA shell plus explicit RSS prerender.
- GitHub project pages require coordinated base-path handling across Vite assets, TanStack Router links, RSS links, and deployment docs.
- Static hosting means deep-link metadata is less complete than a server-rendered deployment.
- Local Node still differs from CI's required Node `22.12.0`, though local builds continue to pass.

### Lessons Learned

- Deployment stories should validate the produced artifact, not only source configuration.
- A self-contained deployment build script is safer than relying on workflow-only environment variables.
- For static hosts, route fallback and public URL construction should be treated as product behavior, not deployment trivia.
- Keep expensive browser/E2E infrastructure deferred until a real gap appears; current source and artifact validators are enough for this release stage.

### Technical Debt / Follow-Up

- Run and inspect the actual GitHub Pages workflow after `develop` merges into `main`.
- In repository settings, set Pages source to GitHub Actions before release if it is not already set.
- Revisit deep-link social previews if static fallback metadata becomes a problem.
- Consider bundle splitting if the large chunk warning becomes material.
- Consider a browser-level accessibility/smoke test once deployment is live.

---

## Release Readiness

### Current State

All BMad backlog stories in Epics 1-6 are complete. The implementation is ready for a release branch/merge decision outside the story loop.

### Inputs To Carry Forward

- Preserve the notebook/log design direction.
- Keep `develop` as the active implementation branch until release.
- Merge to `main` only when ready to publish.
- After merge, verify the GitHub Actions Pages run and deployed URL.

### Action Items

- Owner: Developer - Merge `develop` to `main` when release timing is approved.
- Owner: Developer - Confirm GitHub Pages source is set to GitHub Actions.
- Owner: Developer - Run the deployed site smoke check after the Pages action succeeds.

---

## Retrospective Decision

Epic 6 is complete. The BMad sprint backlog is complete.
