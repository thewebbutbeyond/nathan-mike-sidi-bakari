# 06 - Selected

## Page Metadata

| Property | Value |
|----------|-------|
| **Scenario Coverage** | Orienting at the Portal |
| **Source Scenarios** | `01-orienting-at-the-portal` |
| **Platform** | Responsive web |
| **Page Type** | Full page |
| **Viewport** | Mobile-first, desktop-enhanced |
| **Interaction** | Touch + mouse/keyboard |
| **Visibility** | Public |
| **URL** | `/selected` |
| **Primary Keyword** | selected work |
| **Meta Title** | Selected - Nathan Mike Sidi Bakari |
| **Meta Description** | A small set of selected entry points into Nathan's archive of work, notes, and traces. |
| **Structured Data** | `CollectionPage` |

---

## Overview

**Page Purpose:** Provide a small curated set of entry points for new visitors.

**User Situation:** The visitor wants a useful starting point without committing to the full archive.

**Success Criteria:** The visitor opens a representative entry and understands Selected as entry guidance, not a best-work trophy case.

**Entry Points:**

- Home / Portal.
- Header navigation.

**Exit Points:**

- Entry Detail.
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

### Section: Selected Entry List

**OBJECT ID:** `selected-entry-list`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Entry cards | `selected-entry-cards` | Entry list/card group | Representative entries with date, type, collections, summary |

### Section: Continue Exploring

**OBJECT ID:** `selected-continue`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Timeline link | `selected-timeline-link` | Text link | Opens Timeline |
| Collections link | `selected-collections-link` | Text link | Opens Collections |

---

## Object Registry

| Object ID | Type | Description |
|-----------|------|-------------|
| `selected-header` | Section | Selected page heading |
| `selected-title` | Heading | Selected page title |
| `selected-description` | Text | Selected framing copy |
| `selected-entry-list` | Section | Curated entry list |
| `selected-entry-cards` | Entry list | Selected entry entries |
| `selected-continue` | Section | Continuation links |
| `selected-timeline-link` | Link | Opens Timeline |
| `selected-collections-link` | Link | Opens Collections |

---

## Layout Structure

```text
+------------------------------+
| Header + framing copy         |
+------------------------------+
| Selected entry entries     |
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
| Entry title | `text-xl` |

---

## Page States

| State | When | Appearance | Actions |
|-------|------|------------|---------|
| Default | Selected entries exist | Curated entry list | Open entry |
| Empty | No selected entries | "No selected entries yet." | Browse Timeline |

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
