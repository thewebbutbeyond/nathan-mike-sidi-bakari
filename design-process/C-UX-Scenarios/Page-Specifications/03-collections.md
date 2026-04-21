# 03 - Collections

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
| **URL** | `/collections` |
| **Primary Keyword** | Nathan Mike Sidi Bakari work |
| **Meta Title** | Collections - Nathan Mike Sidi Bakari |
| **Meta Description** | Browse archive entries by engineering, entrepreneurship, investing, and art. |
| **Structured Data** | `CollectionPage` |

---

## Overview

**Page Purpose:** Present the four identity-based archive routes without making them fixed identities.

**User Situation:** A visitor wants to browse by domain: Engineer, Entrepreneur, Investor, or Artist.

**Success Criteria:** The visitor understands each collection as an access route and opens one relevant collection.

**Entry Points:**

- Home / Portal.
- Header navigation.
- Entry collection links.

**Exit Points:**

- Collection Detail.
- Entry Detail.

---

## Page Sections

### Section: Collection Index Header

**OBJECT ID:** `collections-header`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Title | `collections-title` | H1 | "Collections" |
| Description | `collections-description` | Body text | "Browse entries by domain. One entry can belong to several collections." |

### Section: Collection Routes

**OBJECT ID:** `collections-routes`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Engineer | `collections-engineer` | Collection route | Opens Engineer collection |
| Entrepreneur | `collections-entrepreneur` | Collection route | Opens Entrepreneur collection |
| Investor | `collections-investor` | Collection route | Opens Investor collection |
| Artist | `collections-artist` | Collection route | Opens Artist collection |

### Section: Cross-Domain Note

**OBJECT ID:** `collections-cross-domain-note`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Note | `collections-note` | Small text block | Explains multi-membership and overlap |

---

## Object Registry

| Object ID | Type | Description |
|-----------|------|-------------|
| `collections-header` | Section | Collection index heading |
| `collections-title` | Heading | Collections page title |
| `collections-description` | Text | Collection model explanation |
| `collections-routes` | Section | Domain route group |
| `collections-engineer` | Route | Engineer collection route |
| `collections-entrepreneur` | Route | Entrepreneur collection route |
| `collections-investor` | Route | Investor collection route |
| `collections-artist` | Route | Artist collection route |
| `collections-cross-domain-note` | Section | Multi-membership explanation section |
| `collections-note` | Text | Cross-domain note |

---

## Layout Structure

```text
+------------------------------+
| Header                       |
+------------------------------+
| Title + multi-membership note |
+------------------------------+
| 4 collection routes           |
+------------------------------+
| Cross-domain explanation      |
+------------------------------+
```

---

## Spacing & Typography

| Element | Token |
|---------|-------|
| Page padding | `space-md` mobile / `space-xl` desktop |
| Route gap | `space-md` |
| Section gap | `space-2xl` |
| Title | `text-3xl` |
| Route titles | `text-xl` |

---

## Page States

| State | When | Appearance | Actions |
|-------|------|------------|---------|
| Default | Collections exist | Four routes with counts | Open collection |
| Empty collection | Collection has no entries | Route remains with "No entries yet." | Browse other collections |

---

## Technical Notes

- Suggested route: `/collections`.
- Counts should derive from entry metadata.
- Do not present collections as a fixed self-description.

---

## Checklist

- [x] Page purpose clear
- [x] Object IDs assigned
- [x] States documented
- [x] Design tokens referenced
