# 05 - Timeline

**Scenario Coverage:** Following Time
**Platform:** Responsive web
**Page Type:** Full page
**Viewport:** Desktop-first for deep browsing, mobile-readable
**Visibility:** Public

---

## Overview

**Page Purpose:** Aggregate artifacts chronologically so trajectory, recall, and milestones are visible.

**User Situation:** Future Nathan or an external observer wants to browse by time instead of category.

**Success Criteria:** The visitor finds a period or artifact and opens it with enough context to reconstruct the thread.

**Entry Points:**

- Home / Portal.
- Header navigation.
- Artifact date links.

**Exit Points:**

- Artifact Detail.
- Collection Detail.
- Selected.

---

## Page Sections

### Section: Timeline Header

**OBJECT ID:** `timeline-header`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Title | `timeline-title` | H1 | "Timeline" |
| Description | `timeline-description` | Body text | Chronological aggregation across all artifacts |

### Section: Timeline Controls

**OBJECT ID:** `timeline-controls`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Collection filter | `timeline-collection-filter` | Segmented/filter control | Optional by collection |
| Type filter | `timeline-type-filter` | Filter control | Optional by artifact type |

### Section: Chronological List

**OBJECT ID:** `timeline-list`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Year group | `timeline-year-group` | Group heading | Groups artifacts by year |
| Timeline item | `timeline-item` | Artifact row | Date, milestone marker, title, type, tags, summary |

---

## Layout Structure

```text
+------------------------------+
| Timeline title + description  |
+------------------------------+
| Optional filters              |
+------------------------------+
| Year group                    |
|   Artifact rows               |
| Year group                    |
|   Artifact rows               |
+------------------------------+
```

---

## Spacing & Typography

| Element | Token |
|---------|-------|
| Page padding | `space-md` mobile / `space-xl` desktop |
| Year group gap | `space-2xl` |
| Item gap | `space-md` |
| Title | `text-3xl` |
| Year heading | `text-xl` |
| Item title | `text-lg` |

---

## Page States

| State | When | Appearance | Actions |
|-------|------|------------|---------|
| Default | Artifacts exist | Grouped chronological list | Open artifact |
| Empty | No artifacts | "No timeline entries yet." | Return home |
| Filtered empty | No matches | "No artifacts match this filter." | Clear filters |

---

## Technical Notes

- Suggested route: `/timeline`.
- Timeline should derive from artifact `date` and `milestone`.
- Milestone emphasis must remain restrained.

---

## Checklist

- [x] Page purpose clear
- [x] Object IDs assigned
- [x] States documented
- [x] Design tokens referenced
