# Story 3.1: Validate Entry Content Model

Status: ready-for-dev

## Story

As the site owner,
I want entries to have a reliable content model,
so that timeline, lenses, search, and details all derive from the same data.

## Acceptance Criteria

1. Given the app has an `Entry` model, when entries are loaded, then required fields are present for slug, title, date, type, status, summary, body, lenses, and tags.
2. Given entries include optional fields, when entries are loaded, then role, outcome, links, related entries, and chef-d'oeuvre are supported.
3. Given invalid lenses or duplicate slugs exist, when development or build checks run, then the issue is caught before release.
4. Given entries can belong to multiple lenses, when entries are validated, then multi-lens entries are allowed and retained.
5. Given related entries are declared, when entries are validated, then each related slug points to an existing entry and does not point to itself.

## Tasks / Subtasks

- [ ] Inspect current Entry model and data usage. (AC: 1-5)
  - [ ] Review `Entry` and `Lens` types in `src/content/data.ts`.
  - [ ] Review current `ENTRIES` data for required and optional fields.
  - [ ] Identify validation gaps that TypeScript alone does not catch.
- [ ] Add runtime/build-time entry validation. (AC: 1-5)
  - [ ] Validate required string fields are present and non-empty.
  - [ ] Validate dates use ISO `YYYY-MM-DD` shape and parse as valid dates.
  - [ ] Validate status values are in the allowed status set.
  - [ ] Validate `lenses` is non-empty and all values match known lens slugs.
  - [ ] Validate duplicate entry slugs are rejected.
  - [ ] Validate related entry slugs exist and do not self-reference.
  - [ ] Preserve support for multiple lenses per entry.
- [ ] Verify existing content passes. (AC: 1-5)
  - [ ] Run `npm run validate:shell`.
  - [ ] Run `npm run lint`.
  - [ ] Run `npm run build`.
  - [ ] Confirm no generated route file changes are left uncommitted.
- [ ] Update story and sprint tracking. (AC: 1-5)
  - [ ] Mark this story `review` after checks pass.
  - [ ] Update sprint status to `review`.
  - [ ] Record command results and warnings in Dev Agent Record.

## Dev Notes

### Story Source

- Story definition: `_bmad-output/planning-artifacts/epics.md`, Story 3.1.
- Sprint tracking: `_bmad-output/implementation-artifacts/sprint-status.yaml`.
- Prior epic retrospective: `_bmad-output/implementation-artifacts/epic-2-retro-home-discovery.md`.

### Current Implementation Notes

- Entry data lives in `src/content/data.ts`.
- The current app uses typed in-repo data rather than Markdown/frontmatter files.
- Entry data feeds Home / Portal, Chefs-d'oeuvre, Timeline, Lenses, Search, and Entry Detail.
- `Entry.lenses` already supports multi-lens entries.

### Implementation Guidance

- Prefer validation colocated with the data model in `src/content/data.ts`.
- Keep validation build-time/runtime-light: fail fast during development/build if content is invalid.
- Do not introduce new dependencies for this story.
- Do not migrate the content system to Markdown/MDX in this story.
- Do not change public copy or visual design.

### Verification Commands

```bash
npm run validate:shell
npm run lint
npm run build
```

Known non-blocking warnings:

- `npm run lint` may emit 7 `react-refresh/only-export-components` warnings.
- `npm run build` may emit a large chunk warning.

## Dev Agent Record

### Agent Model Used

TBD by implementing agent.

### Debug Log References

TBD.

### Completion Notes List

TBD.

### File List

Expected files touched:

- `src/content/data.ts`
- `_bmad-output/implementation-artifacts/3-1-validate-entry-content-model.md`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`
