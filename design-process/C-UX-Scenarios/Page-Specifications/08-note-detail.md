# 08 - Note Detail

## Page Metadata

| Property | Value |
|----------|-------|
| **Scenario Coverage** | Reading Notes |
| **Source Scenarios** | `05-reading-notes` |
| **Platform** | Responsive web |
| **Page Type** | Full page |
| **Viewport** | Mobile-first, desktop-readable |
| **Interaction** | Touch + mouse/keyboard |
| **Visibility** | Public |
| **URL** | `/notes/[slug]` |
| **Primary Keyword** | Note title |
| **Meta Title** | Note title followed by "Nathan Mike Sidi Bakari" |
| **Meta Description** | Note summary |
| **Structured Data** | `Article` |

---

## Overview

**Page Purpose:** Provide a comfortable long-form reading experience for one editorial note.

**User Situation:** A visitor opens a note because they want reflective context or worldview evidence.

**Success Criteria:** The visitor reads the note, can navigate related entries or notes, and can optionally follow RSS.

**Entry Points:**

- Notes Index.
- Direct note URL.
- Related entry links.

**Exit Points:**

- Notes Index.
- Related Entries.
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
| Related links | `note-related-links` | Link list | Related entries or notes |
| RSS link | `note-rss-link` | Quiet link | Opens RSS feed |

---

## Object Registry

| Object ID | Type | Description |
|-----------|------|-------------|
| `note-header` | Section | Note heading and metadata |
| `note-title` | Heading | Note title |
| `note-metadata` | Metadata row | Date, reading context, and tags |
| `note-summary` | Lead text | Optional note summary |
| `note-body` | Section | Main note body |
| `note-prose` | Rich text | Long-form note content |
| `note-connections` | Section | Related links and RSS |
| `note-related-links` | Link list | Related entries or notes |
| `note-rss-link` | Link | RSS feed link |

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
