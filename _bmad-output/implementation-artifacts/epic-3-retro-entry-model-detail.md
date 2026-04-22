# Epic 3 Retrospective: Entry Model and Entry Detail

**Date:** 2026-04-22  
**Epic:** Epic 3 - Entry Model and Entry Detail  
**Status:** Complete

---

## Epic Review

### What Shipped

Epic 3 hardened the entry layer that powers timeline, lenses, search, chefs-d'oeuvre, and entry detail.

Completed stories:

- Story 3.1: Added build-time/runtime Entry content validation.
- Story 3.2: Productionized Entry Detail link behavior and removed placeholder public links.
- Story 3.3: Added deterministic Entry Detail validation for missing and sparse entry safeguards.

### What Worked

- Content validation now catches invalid entry fields, duplicate slugs/lenses, invalid dates, broken related slugs, and placeholder links before release.
- Entry Detail remained visually stable while behavior became safer.
- Removing the placeholder `Internal RFC` link avoided presenting private/generated prototype content as a real public reference.
- Static validators provide fast guardrails without introducing a full test framework yet.
- Optional fields stay optional; sparse entries should not crash detail rendering.

### What Was Friction

- Some checks are static source inspections rather than browser-level tests. They are useful but not a substitute for runtime interaction testing.
- The app still uses typed in-repo data while earlier planning documents mention Markdown/frontmatter. That mismatch is acceptable for now but needs an explicit architecture decision before content grows.
- Entry Detail includes a generated mosaic even when an entry has no source media. This is a visual decision inherited from the prototype and may deserve later review.

### Lessons Learned

- The content model is the archive's load-bearing structure; validation here pays off across multiple routes.
- Small validators can encode project assumptions more clearly than comments.
- Placeholder links should be treated as invalid content, not harmless prototype residue.
- "Lenses" vocabulary is now present in code; future work should avoid drifting back to "collections" unless intentionally reframed.

### Technical Debt / Follow-Up

- Decide whether content remains typed TS data or moves to Markdown/MDX before real content volume grows.
- Add runtime/browser tests for entry detail when a test framework is introduced.
- Revisit EntryMosaic as part of visual/content polish: it may not always match real artifact media.
- Consider validating note content with similar rigor in Epic 5.

---

## Next Epic Preparation

### Epic 4 Focus

Epic 4 turns the hardened entry model into stronger discovery:

- Timeline browsing.
- Lens browsing.
- Search palette stabilization.

### Inputs To Carry Forward

- Keep all discovery routes fed from validated `ENTRIES`.
- Keep `validate:shell` and Entry Detail validation updated if route patterns change.
- Preserve multi-lens overlap as a core archive behavior.
- Continue standard verification:

```bash
npm ci
npm run validate:shell
npm run lint
npm run build
```

### Action Items

- Owner: Developer - Create Story 4.1 from the epics document.
- Owner: Developer - Add route/data validation for timeline ordering if useful.
- Owner: Developer - Ensure lens/search changes preserve multi-lens entries and do not introduce strict category behavior.

---

## Retrospective Decision

Epic 3 is complete. Proceed to Epic 4.
