# 01 - Home / Portal

**Scenario Coverage:** Orienting at the Portal, Following Time
**Platform:** Responsive web
**Page Type:** Full page
**Viewport:** Mobile-first, desktop-enhanced
**Visibility:** Public

---

## Overview

**Page Purpose:** Establish the site as a personal archive and expose the primary routes into content.

**User Situation:** A visitor arrives with curiosity but no guaranteed context. Future Nathan may also arrive to choose a retrieval path.

**Success Criteria:** The visitor understands the archive model and can choose Selected, Timeline, Collections, or Notes without reading a long explanation.

**Entry Points:**

- Root URL.
- Search result for Nathan's name.
- Profile or shared link.

**Exit Points:**

- Selected.
- Timeline.
- Collections.
- Notes.
- Artifact Detail via featured entries.

---

## Layout Structure

```text
+------------------------------------------------+
| Site Header: name, nav, quiet contact           |
+------------------------------------------------+
| Archive Premise: short structural statement     |
+------------------------------------------------+
| Primary Routes: Selected / Timeline / Collections / Notes |
+------------------------------------------------+
| Recent or Milestone Artifacts                   |
+------------------------------------------------+
| Notes Preview + RSS affordance                  |
+------------------------------------------------+
| Footer                                          |
+------------------------------------------------+
```

---

## Page Sections

### Section: Site Header

**OBJECT ID:** `home-site-header`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Name link | `home-name-link` | Text link | "Nathan Mike Sidi Bakari"; returns home |
| Primary nav | `home-primary-nav` | Navigation list | Selected, Timeline, Collections, Notes |
| Contact link | `home-contact-link` | Quiet text link | "Contact"; low emphasis |

### Section: Archive Premise

**OBJECT ID:** `home-archive-premise`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| H1 | `home-title` | Heading | "A personal archive of work, notes, and traces." |
| Summary | `home-summary` | Body text | "A minimally curated record of output across engineering, entrepreneurship, investing, art, and reflection." |
| Route hint | `home-route-hint` | Helper text | "Browse by identity, by time, or through selected entry points." |

### Section: Primary Routes

**OBJECT ID:** `home-primary-routes`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Selected route | `home-route-selected` | Route card | Opens Selected |
| Timeline route | `home-route-timeline` | Route card | Opens Timeline |
| Collections route | `home-route-collections` | Route card | Opens Collections |
| Notes route | `home-route-notes` | Route card | Opens Notes |

### Section: Recent or Milestone Artifacts

**OBJECT ID:** `home-artifact-preview`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Section heading | `home-artifact-preview-heading` | H2 | "Recent and milestone artifacts" |
| Artifact list | `home-artifact-preview-list` | Artifact list | Shows date, type, collections, summary |

### Section: Notes Preview

**OBJECT ID:** `home-notes-preview`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Section heading | `home-notes-heading` | H2 | "Notes" |
| Note list | `home-notes-list` | Note teaser list | Shows latest curated notes |
| RSS link | `home-rss-link` | Quiet link | "RSS"; opens feed |

---

## Spacing & Typography

Use [Design Tokens](../../D-Design-System/01-design-tokens.md).

| Element | Token |
|---------|-------|
| Page horizontal padding | `space-md` mobile / `space-xl` desktop |
| Major section gap | `space-2xl` |
| Route card gap | `space-md` |
| H1 | `text-3xl` |
| Section headings | `text-xl` |
| Metadata | `text-sm` |

---

## Page States

| State | When | Appearance | Actions |
|-------|------|------------|---------|
| Default | Content exists | Full route and preview layout | Navigate to route |
| Empty archive | No artifacts yet | Routes remain; preview says "No artifacts yet." | Navigate to Notes or About |
| Loading | Static build or data hydration | Minimal skeleton rows | None |
| Error | Content index fails | Plain message: "Archive index is unavailable." | Retry or navigate |

---

## Technical Notes

- Root route: `/`.
- Keep route cards semantic links.
- Do not use a marketing hero or CTA button as the primary structure.
- Home previews should derive from the same artifact index as Timeline and Collections.

---

## Checklist

- [x] Page purpose clear
- [x] Object IDs assigned
- [x] States documented
- [x] Design tokens referenced
- [x] Scenario connections explicit
