# 03 - Collections

**Scenario Coverage:** Tracing a Domain
**Platform:** Responsive web
**Page Type:** Full page
**Viewport:** Mobile-first, desktop-enhanced
**Visibility:** Public

---

## Overview

**Page Purpose:** Present the four identity-based archive routes without making them fixed identities.

**User Situation:** A visitor wants to browse by domain: Engineer, Entrepreneur, Investor, or Artist.

**Success Criteria:** The visitor understands each collection as an access route and opens one relevant collection.

**Entry Points:**

- Home / Portal.
- Header navigation.
- Artifact collection links.

**Exit Points:**

- Collection Detail.
- Artifact Detail.

---

## Page Sections

### Section: Collection Index Header

**OBJECT ID:** `collections-header`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Title | `collections-title` | H1 | "Collections" |
| Description | `collections-description` | Body text | "Browse artifacts by domain. One artifact can belong to several collections." |

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
| Empty collection | Collection has no artifacts | Route remains with "No artifacts yet." | Browse other collections |

---

## Technical Notes

- Suggested route: `/collections`.
- Counts should derive from artifact metadata.
- Do not present collections as a fixed self-description.

---

## Checklist

- [x] Page purpose clear
- [x] Object IDs assigned
- [x] States documented
- [x] Design tokens referenced
