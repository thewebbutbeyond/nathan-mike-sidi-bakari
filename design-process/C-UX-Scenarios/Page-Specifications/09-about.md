# 09 - About

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
| **URL** | `/about` |
| **Primary Keyword** | about Nathan Mike Sidi Bakari |
| **Meta Title** | About - Nathan Mike Sidi Bakari |
| **Meta Description** | Minimal context for Nathan Mike Sidi Bakari and the archive's domains. |
| **Structured Data** | `Person`, `AboutPage` |

---

## Overview

**Page Purpose:** Provide a minimal identity statement and context for the archive.

**User Situation:** A visitor has seen relevant work and wants to understand who is behind it before contact or further browsing.

**Success Criteria:** The visitor gets enough context without the page becoming a personal-brand narrative.

**Entry Points:**

- Header navigation.
- Artifact Detail.
- Contact path.

**Exit Points:**

- Contact.
- Collections.
- Timeline.

---

## Page Sections

### Section: Identity Statement

**OBJECT ID:** `about-identity`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Title | `about-title` | H1 | "About" |
| Statement | `about-statement` | Body text | Minimal statement of archive purpose and domains |

### Section: Domain Context

**OBJECT ID:** `about-domains`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Domain list | `about-domain-list` | Link list | Engineer, Entrepreneur, Investor, Artist |

### Section: Continue

**OBJECT ID:** `about-continue`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Contact link | `about-contact-link` | Quiet text link | Opens Contact |
| Timeline link | `about-timeline-link` | Text link | Opens Timeline |

---

## Object Registry

| Object ID | Type | Description |
|-----------|------|-------------|
| `about-identity` | Section | Minimal identity statement |
| `about-title` | Heading | About page title |
| `about-statement` | Text | Identity and archive purpose |
| `about-domains` | Section | Domain context links |
| `about-domain-list` | Link list | Domain collection links |
| `about-continue` | Section | Continue links |
| `about-contact-link` | Link | Opens Contact |
| `about-timeline-link` | Link | Opens Timeline |

---

## Layout Structure

```text
+------------------------------+
| Minimal identity statement    |
+------------------------------+
| Domain links                  |
+------------------------------+
| Contact / timeline links      |
+------------------------------+
```

---

## Spacing & Typography

| Element | Token |
|---------|-------|
| Page padding | `space-md` mobile / `space-xl` desktop |
| Section gap | `space-2xl` |
| Title | `text-3xl` |
| Body | `text-md` |

---

## Page States

| State | When | Appearance | Actions |
|-------|------|------------|---------|
| Default | Content exists | Minimal identity page | Continue to contact or archive |

---

## Technical Notes

- Suggested route: `/about`.
- Include Person structured data where useful.
- Keep this page brief.

---

## Checklist

- [x] Page purpose clear
- [x] Object IDs assigned
- [x] States documented
- [x] Design tokens referenced
