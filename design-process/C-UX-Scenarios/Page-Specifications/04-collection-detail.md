# 04 - Collection Detail

## Page Metadata

| Property | Value |
|----------|-------|
| **Scenario Coverage** | Tracing a Domain |
| **Source Scenarios** | `02-tracing-a-domain` |
| **Platform** | Responsive web |
| **Page Type** | Full page |
| **Viewport** | Mobile-first, desktop-enhanced |
| **Interaction** | Touch + mouse/keyboard |
| **Visibility** | Public |
| **URL** | `/collections/[collection]` |
| **Primary Keyword** | Collection name plus projects |
| **Meta Title** | Collection name followed by "Nathan Mike Sidi Bakari" |
| **Meta Description** | Browse the collection's entries with dates, summaries, tags, and related work. |
| **Structured Data** | `CollectionPage` |

---

## Overview

**Page Purpose:** Show entries within one collection while preserving cross-domain relationships.

**User Situation:** A visitor chooses a domain route and wants relevant entries with enough metadata to inspect further.

**Success Criteria:** The visitor finds a representative entry and understands that entries can cross collection boundaries.

**Entry Points:**

- Collections.
- Entry collection links.
- Direct route.

**Exit Points:**

- Entry Detail.
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
| Count | `collection-count` | Metadata | Number of entries |

### Section: Entry List

**OBJECT ID:** `collection-entry-list`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Filter row | `collection-filter-row` | Filter controls | Optional tag/type filters |
| Entry rows | `collection-entry-rows` | Entry list | Date, title, type, summary, tags |

### Section: Cross-Collection Links

**OBJECT ID:** `collection-cross-links`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Related collections | `collection-related-collections` | Link list | Other collections with overlap |

---

## Object Registry

| Object ID | Type | Description |
|-----------|------|-------------|
| `collection-header` | Section | Collection detail heading |
| `collection-title` | Heading | Active collection name |
| `collection-description` | Text | Domain-specific collection explanation |
| `collection-count` | Metadata | Entry count |
| `collection-entry-list` | Section | Entry list section |
| `collection-filter-row` | Controls | Optional tag/type filters |
| `collection-entry-rows` | List | Entry rows |
| `collection-cross-links` | Section | Cross-collection navigation |
| `collection-related-collections` | Link list | Related collections |

---

## Layout Structure

```text
+----------------------------+
| Collection title + count    |
+----------------------------+
| Filter row                  |
+----------------------------+
| Entry list               |
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
| Entry title | `text-lg` |
| Metadata | `text-sm` |

---

## Page States

| State | When | Appearance | Actions |
|-------|------|------------|---------|
| Default | Entries exist | List with metadata | Open entry |
| Empty | No entries | "No entries here yet." | Return to Collections |
| Filtered empty | Filter has no matches | Plain empty message | Clear filter |

---

## Technical Notes

- Suggested route: `/collections/[collection]`.
- Filters are optional for MVP if content volume is small.
- Collection membership derives from entry metadata.

---

## Checklist

- [x] Page purpose clear
- [x] Object IDs assigned
- [x] States documented
- [x] Design tokens referenced
