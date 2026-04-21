# 07 - Notes Index

## Page Metadata

| Property | Value |
|----------|-------|
| **Scenario Coverage** | Reading Notes |
| **Source Scenarios** | `05-reading-notes` |
| **Platform** | Responsive web |
| **Page Type** | Full page |
| **Viewport** | Mobile-first, desktop-enhanced |
| **Interaction** | Touch + mouse/keyboard |
| **Visibility** | Public |
| **URL** | `/notes` |
| **Primary Keyword** | notes and essays |
| **Meta Title** | Notes - Nathan Mike Sidi Bakari |
| **Meta Description** | Curated long-form reflections and notes from Nathan Mike Sidi Bakari. |
| **Structured Data** | `Blog`, `CollectionPage` |

---

## Overview

**Page Purpose:** Present curated editorial notes with summaries, dates, and RSS support.

**User Situation:** A visitor wants to read Nathan's thinking rather than inspect a specific project.

**Success Criteria:** The visitor chooses a note and understands that RSS is available but optional.

**Entry Points:**

- Home / Portal.
- Header navigation.
- Artifact related links.

**Exit Points:**

- Note Detail.
- RSS.
- Artifact Detail when notes reference artifacts.

---

## Page Sections

### Section: Notes Header

**OBJECT ID:** `notes-header`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Title | `notes-title` | H1 | "Notes" |
| Description | `notes-description` | Body text | "Curated reflections, not a raw log." |
| RSS link | `notes-rss-link` | Quiet link | Opens RSS feed |

### Section: Note List

**OBJECT ID:** `notes-list`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Note rows | `notes-rows` | Note list | Date, title, summary, tags |

---

## Object Registry

| Object ID | Type | Description |
|-----------|------|-------------|
| `notes-header` | Section | Notes page heading |
| `notes-title` | Heading | Notes page title |
| `notes-description` | Text | Editorial notes framing |
| `notes-rss-link` | Link | RSS feed link |
| `notes-list` | Section | Note listing section |
| `notes-rows` | List | Editorial note rows |

---

## Layout Structure

```text
+------------------------------+
| Notes title + RSS             |
+------------------------------+
| Editorial note list           |
+------------------------------+
```

---

## Spacing & Typography

| Element | Token |
|---------|-------|
| Page padding | `space-md` mobile / `space-xl` desktop |
| Note row gap | `space-lg` |
| Title | `text-3xl` |
| Note title | `text-xl` |
| Metadata | `text-sm` |

---

## Page States

| State | When | Appearance | Actions |
|-------|------|------------|---------|
| Default | Notes exist | Editorial note list | Open note |
| Empty | No notes | "No notes here yet." | Return home |

---

## Technical Notes

- Suggested route: `/notes`.
- RSS route: `/notes/rss.xml` or `/rss.xml`; final route to confirm before implementation.
- Notes should be lower-frequency, durable writing.

---

## Checklist

- [x] Page purpose clear
- [x] Object IDs assigned
- [x] States documented
- [x] Design tokens referenced
