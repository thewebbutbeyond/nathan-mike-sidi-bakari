# Epic 1 Retrospective: Stabilize the Chosen Prototype Baseline

**Date:** 2026-04-21  
**Epic:** Epic 1 - Stabilize the Chosen Prototype Baseline  
**Status:** Complete  

---

## Epic Review

### What Shipped

Epic 1 established the selected notebook/log prototype as a stable implementation baseline.

Completed stories:

- Story 1.1: Captured the prototype baseline and pushed the `prototype-baseline-notebook-log` tag.
- Story 1.2: Added deterministic shell route validation through `npm run validate:shell`.
- Story 1.3: Established the repeatable verification command set: `npm ci`, `npm run validate:shell`, `npm run lint`, and `npm run build`.

### What Worked

- The Story 1.1 checkpoint created a recoverable design baseline before deeper production changes.
- The Zod adapter mismatch was caught early and corrected before it became a recurring build problem.
- The shell route validator turned a manual navigation check into a repeatable guardrail.
- Story records captured the known non-blocking warnings instead of letting them become ambiguous "maybe broken" noise.
- The WDS/Lovable/BMad source-of-truth split held: design-process and `.lovable/plan.md` remained intact while implementation work proceeded in `src/`.

### What Was Friction

- Running dependency install and verification commands concurrently caused false failures because `node_modules` was being rewritten while lint/build ran.
- Local Node is below the version requested by TanStack Start packages. The app still installs and builds locally, but this needs to be reflected in deployment setup.
- Build output includes a large chunk warning. It does not block Epic 1, but it should remain visible as production hardening continues.
- The shell validator is useful but text-based; it verifies route references and route files, not runtime click behavior in a browser.

### Lessons Learned

- Verification commands that mutate dependencies must run sequentially before lint/build.
- Baseline stories are valuable even when they do not add product UI; they prevent future work from drifting without a known-good reference.
- Lightweight validation scripts are worth adding when they encode project-specific routing assumptions.
- Non-blocking warnings should be explicitly recorded so later agents do not rediscover and reclassify them repeatedly.

### Technical Debt / Follow-Up

- Use Node `>=22.12.0` in CI/deployment unless the stack changes.
- Decide whether to address `react-refresh/only-export-components` warnings or continue treating them as acceptable shadcn/Lovable-style noise.
- Consider route/link validation at runtime with a browser or app-level test once a test framework is introduced.
- Consider bundle splitting if large chunk warnings become material during release hardening.

---

## Next Epic Preparation

### Epic 2 Focus

Epic 2 moves from baseline stability into public discovery value:

- Refine Home / Portal messaging.
- Productionize the stats/catalog block.
- Harden the chefs-d'oeuvre marked-entry path.

### Inputs To Carry Forward

- Keep the notebook/log visual baseline intact.
- Preserve the source-of-truth artifacts: `.lovable/plan.md`, `design-process/`, epics, and sprint status.
- Continue running the baseline command set before marking stories complete:

```bash
npm ci
npm run validate:shell
npm run lint
npm run build
```

### Action Items

- Owner: Developer - Create Story 2.1 from the epics document.
- Owner: Developer - Keep `validate:shell` updated if Epic 2 changes primary routes or shell-level links.
- Owner: Developer - Record whether Epic 2 copy changes affect nav vocabulary or route labels.
- Owner: Developer - Revisit Node version in deployment story if not handled earlier.

---

## Retrospective Decision

Epic 1 is complete. Proceed to Epic 2.
