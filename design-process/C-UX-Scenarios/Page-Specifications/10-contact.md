# 10 - Contact

## Page Metadata

| Property | Value |
|----------|-------|
| **Scenario Coverage** | Finding Contact |
| **Source Scenarios** | `06-finding-contact` |
| **Platform** | Responsive web |
| **Page Type** | Full page |
| **Viewport** | Mobile-first, desktop-enhanced |
| **Interaction** | Touch + mouse/keyboard |
| **Visibility** | Public |
| **URL** | `/contact` |
| **Primary Keyword** | contact Nathan Mike Sidi Bakari |
| **Meta Title** | Contact - Nathan Mike Sidi Bakari |
| **Meta Description** | Low-emphasis contact for genuine intersections of interest with Nathan Mike Sidi Bakari. |
| **Structured Data** | `ContactPage` |

---

## Overview

**Page Purpose:** Provide a low-emphasis route for genuine intersections of interest.

**User Situation:** A potential collaborator has found enough overlap to consider reaching out.

**Success Criteria:** The visitor finds a clear contact method without encountering a funnel or booking flow.

**Entry Points:**

- Header navigation.
- About.
- Artifact Detail.

**Exit Points:**

- Email or chosen contact method.
- Back to archive.

---

## Page Sections

### Section: Contact Header

**OBJECT ID:** `contact-header`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Title | `contact-title` | H1 | "Contact" |
| Description | `contact-description` | Body text | "Reach out if there is a genuine intersection of interest." |

### Section: Contact Method

**OBJECT ID:** `contact-method`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Email link | `contact-email-link` | Text link | Opens email client |
| Context note | `contact-context-note` | Helper text | Suggests including context for the overlap |

### Section: Return Routes

**OBJECT ID:** `contact-return-routes`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Back to archive | `contact-archive-link` | Text link | Opens Home / Portal |
| Selected link | `contact-selected-link` | Text link | Opens Selected |

---

## Object Registry

| Object ID | Type | Description |
|-----------|------|-------------|
| `contact-header` | Section | Contact page heading |
| `contact-title` | Heading | Contact page title |
| `contact-description` | Text | Contact framing copy |
| `contact-method` | Section | Contact method section |
| `contact-email-link` | Link | Email contact route |
| `contact-context-note` | Helper text | Outreach context guidance |
| `contact-return-routes` | Section | Return navigation |
| `contact-archive-link` | Link | Opens Home / Portal |
| `contact-selected-link` | Link | Opens Selected |

---

## Layout Structure

```text
+------------------------------+
| Contact framing               |
+------------------------------+
| Email/contact method          |
+------------------------------+
| Return routes                 |
+------------------------------+
```

---

## Spacing & Typography

| Element | Token |
|---------|-------|
| Page padding | `space-md` mobile / `space-xl` desktop |
| Section gap | `space-xl` |
| Title | `text-3xl` |
| Body | `text-md` |

---

## Page States

| State | When | Appearance | Actions |
|-------|------|------------|---------|
| Default | Contact method available | Text contact route | Open email |
| Contact unavailable | Email hidden or disabled | Plain message with archive return | Return home |

---

## Technical Notes

- Suggested route: `/contact`.
- Initial implementation can be a mail link.
- A form is deferred unless email exposure becomes a problem.
- Avoid calendar booking language.

---

## Checklist

- [x] Page purpose clear
- [x] Object IDs assigned
- [x] States documented
- [x] Design tokens referenced
