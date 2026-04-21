# 02 - Entry Detail

## Page Metadata

| Property | Value |
|----------|-------|
| **Scenario Coverage** | All scenarios except Notes-only reading |
| **Source Scenarios** | `01-orienting-at-the-portal`, `02-tracing-a-domain`, `03-following-time`, `04-inspecting-an-entry`, `06-finding-contact` |
| **Platform** | Responsive web |
| **Page Type** | Full page |
| **Viewport** | Mobile-first, desktop-enhanced |
| **Interaction** | Touch + mouse/keyboard |
| **Visibility** | Public |
| **URL** | `/entries/[slug]` |
| **Primary Keyword** | personal archive entry |
| **Meta Title** | Entry title followed by "Nathan Mike Sidi Bakari" |
| **Meta Description** | Entry summary |
| **Structured Data** | `CreativeWork` |

---

## Overview

**Page Purpose:** Present one entry with enough context to support recall, exploration, and credibility.

**User Situation:** A visitor opens an entry from Selected, Timeline, Collections, related links, or a direct URL.

**Success Criteria:** The visitor understands what the entry is, when it happened, why it matters, how it connects, and where to go next.

**Entry Points:**

- Selected.
- Timeline.
- Collection Detail.
- Related entry links.
- Direct URL.

**Exit Points:**

- Related Entries.
- Collection Detail.
- Timeline.
- Contact.

---

## Layout Structure

```text
+------------------------------------------------+
| Header / Breadcrumb                             |
+------------------------------------------------+
| Entry Header: title, date, type, status      |
+------------------------------------------------+
| Summary + Context                               |
+------------------------------------------------+
| Body / Media / Links                            |
+------------------------------------------------+
| Metadata: collections, tags, role, status       |
+------------------------------------------------+
| Related Entries                               |
+------------------------------------------------+
| Footer                                          |
+------------------------------------------------+
```

---

## Page Sections

### Section: Entry Header

**OBJECT ID:** `entry-header`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Breadcrumb | `entry-breadcrumb` | Breadcrumb nav | Previous context when available |
| Title | `entry-title` | H1 | Entry title |
| Metadata row | `entry-meta-row` | Metadata group | Date, type, status |
| Summary | `entry-summary` | Lead text | One clear paragraph |

### Section: Entry Context

**OBJECT ID:** `entry-context`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Context block | `entry-context-block` | Rich text | Why it exists, constraints, process |
| Role block | `entry-role-block` | Fact list | Nathan's role or contribution |
| Outcome block | `entry-outcome-block` | Rich text | Outcome, state, or current relevance |

### Section: Entry Body

**OBJECT ID:** `entry-body`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Media area | `entry-media-area` | Media block | Optional images, screenshots, embeds |
| Content body | `entry-content-body` | Prose / structured content | Markdown or MDX content |
| External links | `entry-external-links` | Link list | Repository, demo, document, image, reference |

### Section: Classification

**OBJECT ID:** `entry-classification`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Collections | `entry-collections` | Tag list | Engineer, Entrepreneur, Investor, Artist; multiple allowed |
| Tags | `entry-tags` | Tag list | Flexible tags |
| Timeline link | `entry-timeline-link` | Text link | Opens date context in Timeline |

### Section: Related Entries

**OBJECT ID:** `entry-related`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Heading | `entry-related-heading` | H2 | "Related" |
| Related list | `entry-related-list` | Entry list | Related entries by tag, collection, or manual link |

---

## Object Registry

| Object ID | Type | Description |
|-----------|------|-------------|
| `entry-header` | Section | Entry heading and summary container |
| `entry-breadcrumb` | Navigation | Optional previous-context breadcrumb |
| `entry-title` | Heading | Entry title |
| `entry-meta-row` | Metadata group | Date, type, and status |
| `entry-summary` | Lead text | Entry summary |
| `entry-context` | Section | Context and contribution section |
| `entry-context-block` | Rich text | Why the entry exists |
| `entry-role-block` | Fact list | Nathan's role or contribution |
| `entry-outcome-block` | Rich text | Outcome or current relevance |
| `entry-body` | Section | Entry media and body content |
| `entry-media-area` | Media block | Optional media area |
| `entry-content-body` | Rich text | Main entry body |
| `entry-external-links` | Link list | External references |
| `entry-classification` | Section | Collections and tags |
| `entry-collections` | Tag list | Collection memberships |
| `entry-tags` | Tag list | Flexible tags |
| `entry-timeline-link` | Link | Opens timeline context |
| `entry-related` | Section | Related entry section |
| `entry-related-heading` | Heading | Related section heading |
| `entry-related-list` | List | Related entries |

---

## Spacing & Typography

Use [Design Tokens](../../D-Design-System/01-design-tokens.md).

| Element | Token |
|---------|-------|
| Page padding | `space-md` mobile / `space-xl` desktop |
| Header to body gap | `space-xl` |
| Metadata gap | `space-sm` |
| Body rhythm | `space-md` |
| Title | `text-3xl` |
| Lead summary | `text-lg` |
| Body | `text-md` |

---

## Page States

| State | When | Appearance | Actions |
|-------|------|------------|---------|
| Default | Entry exists | Full entry content | Browse related links |
| Missing media | Media unavailable | Body remains; media block omitted | Continue reading |
| Draft/historical | Entry incomplete or old | Status label visible | Browse context |
| Not found | Slug missing | Plain missing-entry page | Return to Timeline |

---

## Technical Notes

- Suggested route: `/entries/[slug]`.
- The entry detail page is the core reusable content renderer.
- Avoid requiring every entry to have media.
- Related entries should support both manual and computed relationships.

---

## Checklist

- [x] Page purpose clear
- [x] Object IDs assigned
- [x] States documented
- [x] Design tokens referenced
- [x] Scenario connections explicit
