# 08 - Note Detail

**Scenario Coverage:** Reading Notes
**Platform:** Responsive web
**Page Type:** Full page
**Viewport:** Mobile-first, desktop-readable
**Visibility:** Public

---

## Overview

**Page Purpose:** Provide a comfortable long-form reading experience for one editorial note.

**User Situation:** A visitor opens a note because they want reflective context or worldview evidence.

**Success Criteria:** The visitor reads the note, can navigate related artifacts or notes, and can optionally follow RSS.

**Entry Points:**

- Notes Index.
- Direct note URL.
- Related artifact links.

**Exit Points:**

- Notes Index.
- Related Artifacts.
- RSS.

---

## Page Sections

### Section: Note Header

**OBJECT ID:** `note-header`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Title | `note-title` | H1 | Note title |
| Metadata | `note-metadata` | Metadata row | Date, reading context, tags |
| Summary | `note-summary` | Lead text | Optional short summary |

### Section: Note Body

**OBJECT ID:** `note-body`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Prose content | `note-prose` | Rich text | Markdown/MDX editorial content |

### Section: Note Connections

**OBJECT ID:** `note-connections`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Related links | `note-related-links` | Link list | Related artifacts or notes |
| RSS link | `note-rss-link` | Quiet link | Opens RSS feed |

---

## Layout Structure

```text
+------------------------------+
| Header + note metadata        |
+------------------------------+
| Long-form note body           |
+------------------------------+
| Related links + RSS           |
+------------------------------+
```

---

## Spacing & Typography

| Element | Token |
|---------|-------|
| Reading width | Design-system content measure |
| Page padding | `space-md` mobile / `space-xl` desktop |
| Paragraph rhythm | `space-md` |
| Title | `text-3xl` |
| Body | `text-md` |

---

## Page States

| State | When | Appearance | Actions |
|-------|------|------------|---------|
| Default | Note exists | Full editorial note | Read and follow links |
| Not found | Slug missing | Plain missing-note page | Return to Notes |

---

## Technical Notes

- Suggested route: `/notes/[slug]`.
- Generate Article structured data.
- Do not add social-share clutter by default.

---

## Checklist

- [x] Page purpose clear
- [x] Object IDs assigned
- [x] States documented
- [x] Design tokens referenced
