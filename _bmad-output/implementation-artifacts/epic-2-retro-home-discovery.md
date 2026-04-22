# Epic 2 Retrospective: Home and Marked Entry Discovery

**Date:** 2026-04-22  
**Epic:** Epic 2 - Home and Marked Entry Discovery  
**Status:** Complete

---

## Epic Review

### What Shipped

Epic 2 made the first impression more faithful to the archive concept while preserving the selected notebook/log visual baseline.

Completed stories:

- Story 2.1: Refined Home / Portal premise and route card copy.
- Story 2.2: Hardened Home / Portal stats so counts and year data come from content.
- Story 2.3: Reframed chefs-d'oeuvre as marked entries from the timeline and added a route-specific empty state.

### What Worked

- Copy changes stayed small and preserved layout, which kept visual risk low.
- The Home / Portal now feels warmer and less defensive without adding a sales CTA.
- Stats no longer use a fake fallback year when content is empty.
- `EntryList` gained a small, backwards-compatible `emptyMessage` prop rather than a one-off page workaround.
- The standard baseline command set remained useful for every story.

### What Was Friction

- The route vocabulary is intentionally distinctive (`chefs-d'oeuvre`, `lenses`), so copy has to work harder to explain behavior without over-explaining.
- Some story work was subjective copy judgment, so changes had to be conservative and anchored in prior tone guidance.
- Chefs-d'oeuvre remains a slightly elevated term; the surrounding copy now reduces trophy-case risk, but this should be watched during future copy review.

### Lessons Learned

- The notebook/log direction works best when copy describes use plainly rather than defending what the site is not.
- Small shared component extension points are preferable to route-specific duplication.
- Empty-state language matters for the archive tone; generic empty states can feel technically correct but contextually thin.
- Continue separating route labels from explanatory copy: labels can be distinctive, descriptions should be clarifying.

### Technical Debt / Follow-Up

- Final vocabulary review should happen in the copy tone story before release.
- If chefs-d'oeuvre starts to feel too grand in real content, consider keeping the route but adjusting visible copy around it.
- Runtime visual checks would be useful once a browser test layer exists, especially for responsive stats and route card layout.

---

## Next Epic Preparation

### Epic 3 Focus

Epic 3 moves into the durable core of the archive:

- Validate and harden the Entry content model.
- Productionize Entry Detail.
- Handle missing and sparse entries gracefully.

### Inputs To Carry Forward

- Preserve current Home / Portal layout and copy direction.
- Preserve `EntryList.emptyMessage` as the shared mechanism for route-specific empty states.
- Keep all entry data changes compatible with Timeline, Lenses, Search, Chefs-d'oeuvre, and Entry Detail.
- Continue running:

```bash
npm ci
npm run validate:shell
npm run lint
npm run build
```

### Action Items

- Owner: Developer - Create Story 3.1 from the epics document.
- Owner: Developer - Add content-model validation without overcomplicating the current typed data approach.
- Owner: Developer - Watch for any mismatch between legacy "collections" docs and current "lenses" implementation vocabulary.

---

## Retrospective Decision

Epic 2 is complete. Proceed to Epic 3.
