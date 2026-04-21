# 06 - Selected

**Scenario Coverage:** Orienting at the Portal
**Platform:** Responsive web
**Page Type:** Full page
**Viewport:** Mobile-first, desktop-enhanced
**Visibility:** Public

---

## Overview

**Page Purpose:** Provide a small curated set of entry points for new visitors.

**User Situation:** The visitor wants a useful starting point without committing to the full archive.

**Success Criteria:** The visitor opens a representative artifact and understands Selected as entry guidance, not a best-work trophy case.

**Entry Points:**

- Home / Portal.
- Header navigation.

**Exit Points:**

- Artifact Detail.
- Timeline.
- Collections.

---

## Page Sections

### Section: Selected Header

**OBJECT ID:** `selected-header`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Title | `selected-title` | H1 | "Selected" |
| Description | `selected-description` | Body text | "A few entry points into the archive." |

### Section: Selected Artifact List

**OBJECT ID:** `selected-artifact-list`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Artifact cards | `selected-artifact-cards` | Artifact list/card group | Representative artifacts with date, type, collections, summary |

### Section: Continue Exploring

**OBJECT ID:** `selected-continue`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Timeline link | `selected-timeline-link` | Text link | Opens Timeline |
| Collections link | `selected-collections-link` | Text link | Opens Collections |

---

## Layout Structure

```text
+------------------------------+
| Header + framing copy         |
+------------------------------+
| Selected artifact entries     |
+------------------------------+
| Continue via Timeline/Collections |
+------------------------------+
```

---

## Spacing & Typography

| Element | Token |
|---------|-------|
| Page padding | `space-md` mobile / `space-xl` desktop |
| Entry gap | `space-lg` |
| Section gap | `space-2xl` |
| Title | `text-3xl` |
| Artifact title | `text-xl` |

---

## Page States

| State | When | Appearance | Actions |
|-------|------|------------|---------|
| Default | Selected artifacts exist | Curated artifact list | Open artifact |
| Empty | No selected artifacts | "No selected entries yet." | Browse Timeline |

---

## Technical Notes

- Suggested route: `/selected`.
- Selected status can be manual metadata: `selected: true`.
- Keep the page intentionally small.

---

## Checklist

- [x] Page purpose clear
- [x] Object IDs assigned
- [x] States documented
- [x] Design tokens referenced
