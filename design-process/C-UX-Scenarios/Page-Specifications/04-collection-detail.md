# 04 - Collection Detail

**Scenario Coverage:** Tracing a Domain
**Platform:** Responsive web
**Page Type:** Full page
**Viewport:** Mobile-first, desktop-enhanced
**Visibility:** Public

---

## Overview

**Page Purpose:** Show artifacts within one collection while preserving cross-domain relationships.

**User Situation:** A visitor chooses a domain route and wants relevant artifacts with enough metadata to inspect further.

**Success Criteria:** The visitor finds a representative artifact and understands that artifacts can cross collection boundaries.

**Entry Points:**

- Collections.
- Artifact collection links.
- Direct route.

**Exit Points:**

- Artifact Detail.
- Other Collection Detail pages.
- Timeline.

---

## Page Sections

### Section: Collection Header

**OBJECT ID:** `collection-header`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Title | `collection-title` | H1 | Collection name |
| Description | `collection-description` | Body text | Domain-specific explanation |
| Count | `collection-count` | Metadata | Number of artifacts |

### Section: Artifact List

**OBJECT ID:** `collection-artifact-list`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Filter row | `collection-filter-row` | Filter controls | Optional tag/type filters |
| Artifact rows | `collection-artifact-rows` | Artifact list | Date, title, type, summary, tags |

### Section: Cross-Collection Links

**OBJECT ID:** `collection-cross-links`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Related collections | `collection-related-collections` | Link list | Other collections with overlap |

---

## Layout Structure

```text
+----------------------------+
| Collection title + count    |
+----------------------------+
| Filter row                  |
+----------------------------+
| Artifact list               |
+----------------------------+
| Related collections         |
+----------------------------+
```

---

## Spacing & Typography

| Element | Token |
|---------|-------|
| Page padding | `space-md` mobile / `space-xl` desktop |
| List row gap | `space-md` |
| Header gap | `space-sm` |
| Title | `text-3xl` |
| Artifact title | `text-lg` |
| Metadata | `text-sm` |

---

## Page States

| State | When | Appearance | Actions |
|-------|------|------------|---------|
| Default | Artifacts exist | List with metadata | Open artifact |
| Empty | No artifacts | "No artifacts here yet." | Return to Collections |
| Filtered empty | Filter has no matches | Plain empty message | Clear filter |

---

## Technical Notes

- Suggested route: `/collections/[collection]`.
- Filters are optional for MVP if content volume is small.
- Collection membership derives from artifact metadata.

---

## Checklist

- [x] Page purpose clear
- [x] Object IDs assigned
- [x] States documented
- [x] Design tokens referenced
