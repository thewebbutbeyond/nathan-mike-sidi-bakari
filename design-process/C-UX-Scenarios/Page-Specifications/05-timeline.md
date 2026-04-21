# 05 - Timeline

## Page Metadata

| Property | Value |
|----------|-------|
| **Scenario Coverage** | Following Time |
| **Source Scenarios** | `03-following-time` |
| **Platform** | Responsive web |
| **Page Type** | Full page |
| **Viewport** | Desktop-first for deep browsing, mobile-readable |
| **Interaction** | Touch + mouse/keyboard |
| **Visibility** | Public |
| **URL** | `/timeline` |
| **Primary Keyword** | personal archive timeline |
| **Meta Title** | Timeline - Nathan Mike Sidi Bakari |
| **Meta Description** | Browse a chronological archive of entries, notes, milestones, and cross-domain work. |
| **Structured Data** | `CollectionPage` |

---

## Overview

**Page Purpose:** Aggregate entries chronologically so trajectory, recall, and milestones are visible.

**User Situation:** Future Nathan or an external observer wants to browse by time instead of category.

**Success Criteria:** The visitor finds a period or entry and opens it with enough context to reconstruct the thread.

**Entry Points:**

- Home / Portal.
- Header navigation.
- Entry date links.

**Exit Points:**

- Entry Detail.
- Collection Detail.
- Selected.

---

## Page Sections

### Section: Timeline Header

**OBJECT ID:** `timeline-header`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Title | `timeline-title` | H1 | "Timeline" |
| Description | `timeline-description` | Body text | Chronological aggregation across all entries |

### Section: Timeline Controls

**OBJECT ID:** `timeline-controls`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Collection filter | `timeline-collection-filter` | Segmented/filter control | Optional by collection |
| Type filter | `timeline-type-filter` | Filter control | Optional by entry type |

### Section: Chronological List

**OBJECT ID:** `timeline-list`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Year group | `timeline-year-group` | Group heading | Groups entries by year |
| Timeline item | `timeline-item` | Entry row | Date, milestone marker, title, type, tags, summary |

---

## Object Registry

| Object ID | Type | Description |
|-----------|------|-------------|
| `timeline-header` | Section | Timeline heading |
| `timeline-title` | Heading | Timeline page title |
| `timeline-description` | Text | Timeline explanation |
| `timeline-controls` | Section | Optional filter controls |
| `timeline-collection-filter` | Control | Collection filter |
| `timeline-type-filter` | Control | Entry type filter |
| `timeline-list` | Section | Chronological list |
| `timeline-year-group` | Group | Year-based grouping |
| `timeline-item` | Entry row | Individual timeline item |

---

## Layout Structure

```text
+------------------------------+
| Timeline title + description  |
+------------------------------+
| Optional filters              |
+------------------------------+
| Year group                    |
|   Entry rows               |
| Year group                    |
|   Entry rows               |
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
| Default | Entries exist | Grouped chronological list | Open entry |
| Empty | No entries | "No timeline entries yet." | Return home |
| Filtered empty | No matches | "No entries match this filter." | Clear filters |

---

## Technical Notes

- Suggested route: `/timeline`.
- Timeline should derive from entry `date` and `milestone`.
- Milestone emphasis must remain restrained.

---

## Checklist

- [x] Page purpose clear
- [x] Object IDs assigned
- [x] States documented
- [x] Design tokens referenced
