# Page Specifications Bundle
**Project:** Nathan Mike Sidi Bakari  
**Purpose:** Single-file upload bundle combining all page specification markdown files.  
**Source folder:** `design-process/C-UX-Scenarios/Page-Specifications`  
**Files included:** 11

---
## Included Files
- `00-page-specification-index.md`
- `01-home-portal.md`
- `02-artifact-detail.md`
- `03-collections.md`
- `04-collection-detail.md`
- `05-timeline.md`
- `06-selected.md`
- `07-notes-index.md`
- `08-note-detail.md`
- `09-about.md`
- `10-contact.md`

---

# Source File: `00-page-specification-index.md`

# Page Specification Index

**Project:** Nathan Mike Sidi Bakari
**Created:** 2026-04-21
**Phase:** 4 - UX Design
**Source:** [UX Scenario Index](../00-ux-scenarios.md)

---

## Specification Set

These shared page specifications cover the structural pages used across the six Phase 3 scenarios. Shared specs prevent duplicate definitions of common pages such as Home / Portal, Artifact Detail, Timeline, and Contact.

These are **shared page specifications**, not per-scenario step specifications. The scenario files define the linear journeys; this folder defines the reusable public pages those journeys pass through.

| # | Page | Spec | Primary Scenarios |
|---|------|------|-------------------|
| 01 | Home / Portal | [01-home-portal.md](./01-home-portal.md) | 01, 03 |
| 02 | Artifact Detail | [02-artifact-detail.md](./02-artifact-detail.md) | 01, 02, 03, 04, 06 |
| 03 | Collections | [03-collections.md](./03-collections.md) | 02 |
| 04 | Collection Detail | [04-collection-detail.md](./04-collection-detail.md) | 02 |
| 05 | Timeline | [05-timeline.md](./05-timeline.md) | 03 |
| 06 | Selected | [06-selected.md](./06-selected.md) | 01 |
| 07 | Notes Index | [07-notes-index.md](./07-notes-index.md) | 05 |
| 08 | Note Detail | [08-note-detail.md](./08-note-detail.md) | 05 |
| 09 | About | [09-about.md](./09-about.md) | 06 |
| 10 | Contact | [10-contact.md](./10-contact.md) | 06 |

---

## Shared Design Principles

- Archive-first, not conversion-first.
- Structural copy over self-promotional copy.
- Every artifact must be reachable through time and identity.
- Tags and collections support multi-membership.
- Selected is an entry layer, not a trophy case.
- Contact exists for genuine intersections, not funnel completion.

---

## Shared Content Model

All artifact-like entries should support:

| Field | Purpose |
|-------|---------|
| `title` | Human-readable artifact title |
| `slug` | Stable URL path |
| `date` | Timeline ordering |
| `type` | Project, note, artwork, investment note, experiment, etc. |
| `summary` | Short browsing summary |
| `collections` | Engineer, Entrepreneur, Investor, Artist; multiple allowed |
| `tags` | Flexible cross-domain indexing |
| `status` | Draft, active, archived, historical, in-progress |
| `milestone` | Optional timeline emphasis |
| `links` | External repo, demo, image, document, reference |
| `related` | Related artifact slugs |

---

## Validation Notes

Before development handoff:

- Confirm real initial artifacts and notes.
- Confirm final contact method.
- Add sketches or wireframes if visual handoff requires them.
- Run `wds-4-ux-design validate` against this folder.

---

# Source File: `01-home-portal.md`

# 01 - Home / Portal

## Page Metadata

| Property | Value |
|----------|-------|
| **Scenario Coverage** | Orienting at the Portal, Following Time |
| **Source Scenarios** | `01-orienting-at-the-portal`, `03-following-time` |
| **Platform** | Responsive web |
| **Page Type** | Full page |
| **Viewport** | Mobile-first, desktop-enhanced |
| **Interaction** | Touch + mouse/keyboard |
| **Visibility** | Public |
| **URL** | `/` |
| **Primary Keyword** | Nathan Mike Sidi Bakari |
| **Meta Title** | Nathan Mike Sidi Bakari |
| **Meta Description** | A personal archive of work, notes, and traces across engineering, entrepreneurship, investing, art, and reflection. |
| **Structured Data** | `Person`, `WebSite` |

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

## Object Registry

| Object ID | Type | Description |
|-----------|------|-------------|
| `home-site-header` | Section | Site header container |
| `home-name-link` | Link | Name link returning home |
| `home-primary-nav` | Navigation | Primary site navigation |
| `home-contact-link` | Link | Low-emphasis contact route |
| `home-archive-premise` | Section | Archive framing section |
| `home-title` | Heading | Main archive statement |
| `home-summary` | Text | One-paragraph archive summary |
| `home-route-hint` | Helper text | Explains browsing routes |
| `home-primary-routes` | Section | Primary navigation routes |
| `home-route-selected` | Route card | Opens Selected |
| `home-route-timeline` | Route card | Opens Timeline |
| `home-route-collections` | Route card | Opens Collections |
| `home-route-notes` | Route card | Opens Notes |
| `home-artifact-preview` | Section | Recent or milestone artifact preview |
| `home-artifact-preview-heading` | Heading | Preview section heading |
| `home-artifact-preview-list` | List | Artifact teaser list |
| `home-notes-preview` | Section | Notes teaser section |
| `home-notes-heading` | Heading | Notes section heading |
| `home-notes-list` | List | Latest note teasers |
| `home-rss-link` | Link | RSS feed link |

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

---

# Source File: `02-artifact-detail.md`

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

---

# Source File: `03-collections.md`

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
| **Meta Description** | Browse archive artifacts by engineering, entrepreneurship, investing, and art. |
| **Structured Data** | `CollectionPage` |

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

---

# Source File: `04-collection-detail.md`

# 04 - Collection Detail

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
| **URL** | `/collections/[collection]` |
| **Primary Keyword** | Collection name plus projects |
| **Meta Title** | Collection name followed by "Nathan Mike Sidi Bakari" |
| **Meta Description** | Browse the collection's artifacts with dates, summaries, tags, and related work. |
| **Structured Data** | `CollectionPage` |

---

## Overview

**Page Purpose:** Show artifacts within one collection while preserving cross-domain relationships.

**User Situation:** A visitor chooses a domain route and wants relevant artifacts with enough metadata to inspect further.

**Success Criteria:** The visitor finds a representative artifact and understands that artifacts can cross collection boundaries.

**Entry Points:**

- Collections.
- Artifact collection links.
- Direct route.

**Exit Points:**

- Artifact Detail.
- Other Collection Detail pages.
- Timeline.

---

## Page Sections

### Section: Collection Header

**OBJECT ID:** `collection-header`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Title | `collection-title` | H1 | Collection name |
| Description | `collection-description` | Body text | Domain-specific explanation |
| Count | `collection-count` | Metadata | Number of artifacts |

### Section: Artifact List

**OBJECT ID:** `collection-artifact-list`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Filter row | `collection-filter-row` | Filter controls | Optional tag/type filters |
| Artifact rows | `collection-artifact-rows` | Artifact list | Date, title, type, summary, tags |

### Section: Cross-Collection Links

**OBJECT ID:** `collection-cross-links`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Related collections | `collection-related-collections` | Link list | Other collections with overlap |

---

## Object Registry

| Object ID | Type | Description |
|-----------|------|-------------|
| `collection-header` | Section | Collection detail heading |
| `collection-title` | Heading | Active collection name |
| `collection-description` | Text | Domain-specific collection explanation |
| `collection-count` | Metadata | Artifact count |
| `collection-artifact-list` | Section | Artifact list section |
| `collection-filter-row` | Controls | Optional tag/type filters |
| `collection-artifact-rows` | List | Artifact rows |
| `collection-cross-links` | Section | Cross-collection navigation |
| `collection-related-collections` | Link list | Related collections |

---

## Layout Structure

```text
+----------------------------+
| Collection title + count    |
+----------------------------+
| Filter row                  |
+----------------------------+
| Artifact list               |
+----------------------------+
| Related collections         |
+----------------------------+
```

---

## Spacing & Typography

| Element | Token |
|---------|-------|
| Page padding | `space-md` mobile / `space-xl` desktop |
| List row gap | `space-md` |
| Header gap | `space-sm` |
| Title | `text-3xl` |
| Artifact title | `text-lg` |
| Metadata | `text-sm` |

---

## Page States

| State | When | Appearance | Actions |
|-------|------|------------|---------|
| Default | Artifacts exist | List with metadata | Open artifact |
| Empty | No artifacts | "No artifacts here yet." | Return to Collections |
| Filtered empty | Filter has no matches | Plain empty message | Clear filter |

---

## Technical Notes

- Suggested route: `/collections/[collection]`.
- Filters are optional for MVP if content volume is small.
- Collection membership derives from artifact metadata.

---

## Checklist

- [x] Page purpose clear
- [x] Object IDs assigned
- [x] States documented
- [x] Design tokens referenced

---

# Source File: `05-timeline.md`

# 05 - Timeline

## Page Metadata

| Property | Value |
|----------|-------|
| **Scenario Coverage** | Following Time |
| **Source Scenarios** | `03-following-time` |
| **Platform** | Responsive web |
| **Page Type** | Full page |
| **Viewport** | Desktop-first for deep browsing, mobile-readable |
| **Interaction** | Touch + mouse/keyboard |
| **Visibility** | Public |
| **URL** | `/timeline` |
| **Primary Keyword** | personal archive timeline |
| **Meta Title** | Timeline - Nathan Mike Sidi Bakari |
| **Meta Description** | Browse a chronological archive of artifacts, notes, milestones, and cross-domain work. |
| **Structured Data** | `CollectionPage` |

---

## Overview

**Page Purpose:** Aggregate artifacts chronologically so trajectory, recall, and milestones are visible.

**User Situation:** Future Nathan or an external observer wants to browse by time instead of category.

**Success Criteria:** The visitor finds a period or artifact and opens it with enough context to reconstruct the thread.

**Entry Points:**

- Home / Portal.
- Header navigation.
- Artifact date links.

**Exit Points:**

- Artifact Detail.
- Collection Detail.
- Selected.

---

## Page Sections

### Section: Timeline Header

**OBJECT ID:** `timeline-header`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Title | `timeline-title` | H1 | "Timeline" |
| Description | `timeline-description` | Body text | Chronological aggregation across all artifacts |

### Section: Timeline Controls

**OBJECT ID:** `timeline-controls`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Collection filter | `timeline-collection-filter` | Segmented/filter control | Optional by collection |
| Type filter | `timeline-type-filter` | Filter control | Optional by artifact type |

### Section: Chronological List

**OBJECT ID:** `timeline-list`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Year group | `timeline-year-group` | Group heading | Groups artifacts by year |
| Timeline item | `timeline-item` | Artifact row | Date, milestone marker, title, type, tags, summary |

---

## Object Registry

| Object ID | Type | Description |
|-----------|------|-------------|
| `timeline-header` | Section | Timeline heading |
| `timeline-title` | Heading | Timeline page title |
| `timeline-description` | Text | Timeline explanation |
| `timeline-controls` | Section | Optional filter controls |
| `timeline-collection-filter` | Control | Collection filter |
| `timeline-type-filter` | Control | Artifact type filter |
| `timeline-list` | Section | Chronological list |
| `timeline-year-group` | Group | Year-based grouping |
| `timeline-item` | Artifact row | Individual timeline item |

---

## Layout Structure

```text
+------------------------------+
| Timeline title + description  |
+------------------------------+
| Optional filters              |
+------------------------------+
| Year group                    |
|   Artifact rows               |
| Year group                    |
|   Artifact rows               |
+------------------------------+
```

---

## Spacing & Typography

| Element | Token |
|---------|-------|
| Page padding | `space-md` mobile / `space-xl` desktop |
| Year group gap | `space-2xl` |
| Item gap | `space-md` |
| Title | `text-3xl` |
| Year heading | `text-xl` |
| Item title | `text-lg` |

---

## Page States

| State | When | Appearance | Actions |
|-------|------|------------|---------|
| Default | Artifacts exist | Grouped chronological list | Open artifact |
| Empty | No artifacts | "No timeline entries yet." | Return home |
| Filtered empty | No matches | "No artifacts match this filter." | Clear filters |

---

## Technical Notes

- Suggested route: `/timeline`.
- Timeline should derive from artifact `date` and `milestone`.
- Milestone emphasis must remain restrained.

---

## Checklist

- [x] Page purpose clear
- [x] Object IDs assigned
- [x] States documented
- [x] Design tokens referenced

---

# Source File: `06-selected.md`

# 06 - Selected

## Page Metadata

| Property | Value |
|----------|-------|
| **Scenario Coverage** | Orienting at the Portal |
| **Source Scenarios** | `01-orienting-at-the-portal` |
| **Platform** | Responsive web |
| **Page Type** | Full page |
| **Viewport** | Mobile-first, desktop-enhanced |
| **Interaction** | Touch + mouse/keyboard |
| **Visibility** | Public |
| **URL** | `/selected` |
| **Primary Keyword** | selected work |
| **Meta Title** | Selected - Nathan Mike Sidi Bakari |
| **Meta Description** | A small set of selected entry points into Nathan's archive of work, notes, and traces. |
| **Structured Data** | `CollectionPage` |

---

## Overview

**Page Purpose:** Provide a small curated set of entry points for new visitors.

**User Situation:** The visitor wants a useful starting point without committing to the full archive.

**Success Criteria:** The visitor opens a representative artifact and understands Selected as entry guidance, not a best-work trophy case.

**Entry Points:**

- Home / Portal.
- Header navigation.

**Exit Points:**

- Artifact Detail.
- Timeline.
- Collections.

---

## Page Sections

### Section: Selected Header

**OBJECT ID:** `selected-header`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Title | `selected-title` | H1 | "Selected" |
| Description | `selected-description` | Body text | "A few entry points into the archive." |

### Section: Selected Artifact List

**OBJECT ID:** `selected-artifact-list`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Artifact cards | `selected-artifact-cards` | Artifact list/card group | Representative artifacts with date, type, collections, summary |

### Section: Continue Exploring

**OBJECT ID:** `selected-continue`

| Object | ID | Component | Content / Behavior |
|--------|----|-----------|--------------------|
| Timeline link | `selected-timeline-link` | Text link | Opens Timeline |
| Collections link | `selected-collections-link` | Text link | Opens Collections |

---

## Object Registry

| Object ID | Type | Description |
|-----------|------|-------------|
| `selected-header` | Section | Selected page heading |
| `selected-title` | Heading | Selected page title |
| `selected-description` | Text | Selected framing copy |
| `selected-artifact-list` | Section | Curated artifact list |
| `selected-artifact-cards` | Artifact list | Selected artifact entries |
| `selected-continue` | Section | Continuation links |
| `selected-timeline-link` | Link | Opens Timeline |
| `selected-collections-link` | Link | Opens Collections |

---

## Layout Structure

```text
+------------------------------+
| Header + framing copy         |
+------------------------------+
| Selected artifact entries     |
+------------------------------+
| Continue via Timeline/Collections |
+------------------------------+
```

---

## Spacing & Typography

| Element | Token |
|---------|-------|
| Page padding | `space-md` mobile / `space-xl` desktop |
| Entry gap | `space-lg` |
| Section gap | `space-2xl` |
| Title | `text-3xl` |
| Artifact title | `text-xl` |

---

## Page States

| State | When | Appearance | Actions |
|-------|------|------------|---------|
| Default | Selected artifacts exist | Curated artifact list | Open artifact |
| Empty | No selected artifacts | "No selected entries yet." | Browse Timeline |

---

## Technical Notes

- Suggested route: `/selected`.
- Selected status can be manual metadata: `selected: true`.
- Keep the page intentionally small.

---

## Checklist

- [x] Page purpose clear
- [x] Object IDs assigned
- [x] States documented
- [x] Design tokens referenced

---

# Source File: `07-notes-index.md`

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

---

# Source File: `08-note-detail.md`

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
| `note-related-links` | Link list | Related artifacts or notes |
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

---

# Source File: `09-about.md`

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

---

# Source File: `10-contact.md`

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
