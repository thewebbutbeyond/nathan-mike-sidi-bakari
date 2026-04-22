# Epic 4 Retrospective: Timeline, Lenses, and Search Discovery

**Date:** 2026-04-22  
**Epic:** Epic 4 - Timeline, Lenses, and Search Discovery  
**Status:** Complete

---

## Epic Review

### What Shipped

Epic 4 hardened the main discovery routes across time, perspective, and quick lookup.

Completed stories:

- Story 4.1: Added Timeline empty-state handling and timeline route validation.
- Story 4.2: Added lens detail empty-state handling and lens browsing validation.
- Story 4.3: Expanded search matching and added keyboard result navigation.

### What Worked

- Discovery routes now have deterministic validators that capture route-specific assumptions.
- Empty states are now contextual instead of generic.
- Search now matches entries and notes across richer fields, including summaries, tags, and lens labels.
- Keyboard support in search improved without changing the compact visual design.
- Multi-lens behavior stayed central: validation checks that `entriesByLens` preserves overlap rather than acting like strict categories.

### What Was Friction

- Static validators are useful but still inspect source text rather than exercising the app in a browser.
- Search keyboard behavior required care to avoid accidental result selection while interacting with filters.
- The validation suite is growing; command naming remains clear, but future stories should avoid duplicating validators unnecessarily.

### Lessons Learned

- Discovery behavior is easier to protect when each route has a tiny validator for its assumptions.
- Source-based validators are a pragmatic bridge until browser tests exist.
- Empty state copy should be route-specific when the route has a strong conceptual role.
- Keyboard interactions need explicit guards around controls, not just around text inputs.

### Technical Debt / Follow-Up

- Introduce browser-level route interaction tests when the project adopts an E2E tool.
- Consider consolidating validation scripts if they become repetitive.
- Continue monitoring bundle size; search and discovery routes now have more logic but remain within current build tolerance.

---

## Next Epic Preparation

### Epic 5 Focus

Epic 5 moves into the editorial Notes surface:

- Harden Notes Index.
- Productionize Note Detail.
- Validate RSS feed.

### Inputs To Carry Forward

- Use the same quiet, route-specific empty-state approach.
- Keep notes editorial and curated, not feed-like.
- Extend validation only where it protects a real route or content assumption.
- Continue running:

```bash
npm ci
npm run validate:search
npm run validate:lenses
npm run validate:timeline
npm run validate:entry-detail
npm run validate:shell
npm run lint
npm run build
```

### Action Items

- Owner: Developer - Create Story 5.1 from the epics document.
- Owner: Developer - Consider a `validate:notes` script if Notes Index/Detail/RSS checks need shared coverage.
- Owner: Developer - Keep RSS optional in presentation but valid in implementation.

---

## Retrospective Decision

Epic 4 is complete. Proceed to Epic 5.
