# Page Specification Index

**Project:** Nathan Mike Sidi Bakari
**Created:** 2026-04-21
**Phase:** 4 - UX Design
**Source:** [UX Scenario Index](../00-ux-scenarios.md)

---

## Specification Set

These shared page specifications cover the structural pages used across the six Phase 3 scenarios. Shared specs prevent duplicate definitions of common pages such as Home / Portal, Entry Detail, Timeline, and Contact.

These are **shared page specifications**, not per-scenario step specifications. The scenario files define the linear journeys; this folder defines the reusable public pages those journeys pass through.

| # | Page | Spec | Primary Scenarios |
|---|------|------|-------------------|
| 01 | Home / Portal | [01-home-portal.md](./01-home-portal.md) | 01, 03 |
| 02 | Entry Detail | [02-entry-detail.md](./02-entry-detail.md) | 01, 02, 03, 04, 06 |
| 03 | Collections | [03-collections.md](./03-collections.md) | 02 |
| 04 | Collection Detail | [04-collection-detail.md](./04-collection-detail.md) | 02 |
| 05 | Timeline | [05-timeline.md](./05-timeline.md) | 03 |
| 06 | Selected | [06-selected.md](./06-selected.md) | 01 |
| 07 | Notes Index | [07-notes-index.md](./07-notes-index.md) | 05 |
| 08 | Note Detail | [08-note-detail.md](./08-note-detail.md) | 05 |
| 09 | About | [09-about.md](./09-about.md) | 06 |
| 10 | Contact | [10-contact.md](./10-contact.md) | 06 |

---

## Shared Design Principles

- Archive-first, not conversion-first.
- Structural copy over self-promotional copy.
- Every entry must be reachable through time and identity.
- Tags and collections support multi-membership.
- Selected is an entry layer, not a trophy case.
- Contact exists for genuine intersections, not funnel completion.

---

## Shared Content Model

All entry-like entries should support:

| Field | Purpose |
|-------|---------|
| `title` | Human-readable entry title |
| `slug` | Stable URL path |
| `date` | Timeline ordering |
| `type` | Project, note, artwork, investment note, experiment, etc. |
| `summary` | Short browsing summary |
| `collections` | Engineer, Entrepreneur, Investor, Artist; multiple allowed |
| `tags` | Flexible cross-domain indexing |
| `status` | Draft, active, archived, historical, in-progress |
| `milestone` | Optional timeline emphasis |
| `links` | External repo, demo, image, document, reference |
| `related` | Related entry slugs |

---

## Validation Notes

Before development handoff:

- Confirm real initial entries and notes.
- Confirm final contact method.
- Add sketches or wireframes if visual handoff requires them.
- Run `wds-4-ux-design validate` against this folder.
