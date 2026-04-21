# 02 - Artifact Detail

## Page Metadata

| Property | Value |
|----------|-------|
| **Scenario Coverage** | All scenarios except Notes-only reading |
| **Source Scenarios** | `01-orienting-at-the-portal`, `02-tracing-a-domain`, `03-following-time`, `04-inspecting-an-artifact`, `06-finding-contact` |
| **Platform** | Responsive web |
| **Page Type** | Full page |
| **Viewport** | Mobile-first, desktop-enhanced |
| **Interaction** | Touch + mouse/keyboard |
| **Visibility** | Public |
| **URL** | `/artifacts/[slug]` |
| **Primary Keyword** | personal archive artifact |
| **Meta Title** | Artifact title followed by "Nathan Mike Sidi Bakari" |
| **Meta Description** | Artifact summary |
| **Structured Data** | `CreativeWork` |

---

## Overview

**Page Purpose:** Present one artifact with enough context to support recall, exploration, and credibility.

**User Situation:** A visitor opens an artifact from Selected, Timeline, Collections, related links, or a direct URL.

**Success Criteria:** The visitor understands what the artifact is, when it happened, why it matters, how it connects, and where to go next.

**Entry Points:**

- Selected.
- Timeline.
- Collection Detail.
- Related artifact links.
- Direct URL.

**Exit Points:**

- Related Artifacts.
- Collection Detail.
- Timeline.
- Contact.

---

## Layout Structure

```text
+------------------------------------------------+
| Header / Breadcrumb                             |
+------------------------------------------------+
| Artifact Header: title, date, type, status      |
+------------------------------------------------+
| Summary + Context                               |
+------------------------------------------------+
| Body / Media / Links                            |
+------------------------------------------------+
| Metadata: collections, tags, role, status       |
+------------------------------------------------+
| Related Artifacts                               |
+------------------------------------------------+
| Footer                                          |
+------------------------------------------------+
```

---

## Page Sections

### Section: Artifact Header

**OBJECT ID:** `artifact-header`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Breadcrumb | `artifact-breadcrumb` | Breadcrumb nav | Previous context when available |
| Title | `artifact-title` | H1 | Artifact title |
| Metadata row | `artifact-meta-row` | Metadata group | Date, type, status |
| Summary | `artifact-summary` | Lead text | One clear paragraph |

### Section: Artifact Context

**OBJECT ID:** `artifact-context`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Context block | `artifact-context-block` | Rich text | Why it exists, constraints, process |
| Role block | `artifact-role-block` | Fact list | Nathan's role or contribution |
| Outcome block | `artifact-outcome-block` | Rich text | Outcome, state, or current relevance |

### Section: Artifact Body

**OBJECT ID:** `artifact-body`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Media area | `artifact-media-area` | Media block | Optional images, screenshots, embeds |
| Content body | `artifact-content-body` | Prose / structured content | Markdown or MDX content |
| External links | `artifact-external-links` | Link list | Repository, demo, document, image, reference |

### Section: Classification

**OBJECT ID:** `artifact-classification`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Collections | `artifact-collections` | Tag list | Engineer, Entrepreneur, Investor, Artist; multiple allowed |
| Tags | `artifact-tags` | Tag list | Flexible tags |
| Timeline link | `artifact-timeline-link` | Text link | Opens date context in Timeline |

### Section: Related Artifacts

**OBJECT ID:** `artifact-related`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Heading | `artifact-related-heading` | H2 | "Related" |
| Related list | `artifact-related-list` | Artifact list | Related artifacts by tag, collection, or manual link |

---

## Object Registry

| Object ID | Type | Description |
|-----------|------|-------------|
| `artifact-header` | Section | Artifact heading and summary container |
| `artifact-breadcrumb` | Navigation | Optional previous-context breadcrumb |
| `artifact-title` | Heading | Artifact title |
| `artifact-meta-row` | Metadata group | Date, type, and status |
| `artifact-summary` | Lead text | Artifact summary |
| `artifact-context` | Section | Context and contribution section |
| `artifact-context-block` | Rich text | Why the artifact exists |
| `artifact-role-block` | Fact list | Nathan's role or contribution |
| `artifact-outcome-block` | Rich text | Outcome or current relevance |
| `artifact-body` | Section | Artifact media and body content |
| `artifact-media-area` | Media block | Optional media area |
| `artifact-content-body` | Rich text | Main artifact body |
| `artifact-external-links` | Link list | External references |
| `artifact-classification` | Section | Collections and tags |
| `artifact-collections` | Tag list | Collection memberships |
| `artifact-tags` | Tag list | Flexible tags |
| `artifact-timeline-link` | Link | Opens timeline context |
| `artifact-related` | Section | Related artifact section |
| `artifact-related-heading` | Heading | Related section heading |
| `artifact-related-list` | List | Related artifacts |

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
| Default | Artifact exists | Full artifact content | Browse related links |
| Missing media | Media unavailable | Body remains; media block omitted | Continue reading |
| Draft/historical | Artifact incomplete or old | Status label visible | Browse context |
| Not found | Slug missing | Plain missing-artifact page | Return to Timeline |

---

## Technical Notes

- Suggested route: `/artifacts/[slug]`.
- The artifact detail page is the core reusable content renderer.
- Avoid requiring every artifact to have media.
- Related artifacts should support both manual and computed relationships.

---

## Checklist

- [x] Page purpose clear
- [x] Object IDs assigned
- [x] States documented
- [x] Design tokens referenced
- [x] Scenario connections explicit
