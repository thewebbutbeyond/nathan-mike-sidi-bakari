# UX Scenarios: Nathan Mike Sidi Bakari

> Scenario index and coverage matrix for the archive-first portfolio.

**Created:** 2026-04-21
**Phase:** 3 - UX Scenarios
**Agents:** Saga (Scenario Outline), Freya (Page Specifications)
**Source:** [Trigger Map Key Insights](../B-Trigger-Map/07-key-insights.md)

---

## Scenario Strategy

The site is non-linear, but the design process needs linear sunshine paths so each page can be specified and tested. These scenarios model the primary ways the archive should be entered, browsed, inspected, followed, and contacted without turning the portfolio into a funnel.

Core principle:

> Every entry is accessible through identity and time, with selected entry points reducing friction for new visitors.

---

## Scenarios

| # | Scenario | Primary Visitor Mode | Core Journey | Status |
|---|----------|----------------------|--------------|--------|
| 01 | [Orienting at the Portal](./01-orienting-at-the-portal/01-orienting-at-the-portal.md) | Curious Observer | Home / Portal to Selected to entry | Complete |
| 02 | [Tracing a Domain](./02-tracing-a-domain/02-tracing-a-domain.md) | Professional Observer | Collection to entry to related work | Complete |
| 03 | [Following Time](./03-following-time/03-following-time.md) | Future Nathan | Timeline to milestone to related entry | Complete |
| 04 | [Inspecting an Entry](./04-inspecting-an-entry/04-inspecting-an-entry.md) | Potential Collaborator | Entry detail to context and overlap | Complete |
| 05 | [Reading Notes](./05-reading-notes/05-reading-notes.md) | Curious Observer | Notes index to note to RSS | Complete |
| 06 | [Finding Contact](./06-finding-contact/06-finding-contact.md) | Potential Collaborator | Relevant entry to About to Contact | Complete |

---

## Page Coverage Matrix

| Page / View | 01 Portal | 02 Domain | 03 Time | 04 Entry | 05 Notes | 06 Contact |
|-------------|-----------|-----------|---------|-------------|----------|------------|
| Home / Portal | Primary | - | - | - | - | - |
| Selected | Primary | - | - | - | - | - |
| Collections | - | Primary | - | - | - | - |
| Collection Detail | - | Primary | - | - | - | - |
| Timeline | - | - | Primary | - | - | - |
| Entry Detail | Primary | Primary | Primary | Primary | - | Primary |
| Related Entries | - | Primary | Primary | Primary | - | Primary |
| Notes Index | - | - | - | - | Primary | - |
| Note Detail | - | - | - | - | Primary | - |
| RSS | - | - | - | - | Primary | - |
| About | - | - | - | - | - | Primary |
| Contact | - | - | - | - | - | Primary |

---

## Shared Page Requirements

### Home / Portal

- Make the archive model visible immediately.
- Expose Selected, Timeline, Collections, and Notes without a resume-style hero.
- Keep copy short and structural.

### Entry Detail

- Show title, date, type, summary, collection memberships, tags, status, role, process/context, links, and related entries.
- Support unfinished, historical, and polished entries without forcing one presentation mode.

### Collections

- Support Engineer, Entrepreneur, Investor, and Artist.
- Allow entries to appear in multiple collections.
- Show representative entries without implying fixed identity boxes.

### Timeline

- Aggregate all entry types chronologically.
- Support milestone emphasis.
- Make trajectory visible without forcing a narrative.

### Notes

- Treat Notes as curated editorial pieces.
- Provide RSS support.
- Preserve long-form readability.

### Contact

- Stay low-emphasis.
- Use language around genuine intersections of interest.
- Avoid booking, sales, or conversion framing.

---

## Phase 4 Design Order

Recommended page-spec order:

1. [Home / Portal](./Page-Specifications/01-home-portal.md)
2. [Entry Detail](./Page-Specifications/02-entry-detail.md)
3. [Collections](./Page-Specifications/03-collections.md) and [Collection Detail](./Page-Specifications/04-collection-detail.md)
4. [Timeline](./Page-Specifications/05-timeline.md)
5. [Selected](./Page-Specifications/06-selected.md)
6. [Notes Index](./Page-Specifications/07-notes-index.md) and [Note Detail](./Page-Specifications/08-note-detail.md)
7. [About](./Page-Specifications/09-about.md)
8. [Contact](./Page-Specifications/10-contact.md)

This order starts with the structural pages that govern the rest of the archive.

See [Page Specification Index](./Page-Specifications/00-page-specification-index.md) for the full Phase 4 spec set.

---

## Quality Review

All six scenarios:

- Use a specific visitor mode from the Trigger Map.
- Include entry point, mental state, success goals, shortest path, and Trigger Map connections.
- Keep paths linear with no branches.
- Preserve the archive-first, non-instrumental posture.

Page specifications:

- Cover the full page matrix.
- Include page purpose, object IDs, layout structure, states, and technical notes.
- Reference shared design tokens.

---

## Next Steps

- [ ] Use Phase 4 UX Design to specify the pages in the recommended order.
- [ ] Use these scenarios as acceptance context for visual and implementation decisions.
- [ ] Keep scenario paths narrow; document edge cases later.

---

_Created using Whiteport Design Studio (WDS) methodology_
