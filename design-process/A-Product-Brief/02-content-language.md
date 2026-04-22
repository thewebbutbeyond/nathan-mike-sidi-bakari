# Content & Language: Nathan Mike Sidi Bakari

> Tone of Voice & Content Guidelines

**Created:** 2026-04-21
**Author:** Nathan
**Related:** [Product Brief](./01-product-brief.md)

---

## Brand Personality

The site should feel like an organized view into a real person's output, not a personal brand campaign. The personality is human, exploratory, interdisciplinary, and precise. It should leave room for unfinished edges and evolution while maintaining enough structure for visitors to browse without friction.

### Personality Attributes

| Attribute | Description | Expression |
|-----------|-------------|------------|
| **Interdisciplinary** | Work spans engineering, entrepreneurship, investing, art, and reflective writing. | Collections and tags allow entries to appear across multiple identities. |
| **Introspective** | The archive values process and development over surface achievement. | Project entries can include context, decisions, constraints, and evolution. |
| **Authentic** | The site avoids performative signaling. | Credibility emerges from entries, not inflated claims. |
| **Exploratory** | Visitors are invited to browse rather than follow a prescribed funnel. | Navigation supports timeline, selected entries, notes, and tag-based discovery. |
| **Minimal** | The interface should not compete with the entries. | Restrained copy, clear hierarchy, and low visual noise. |

---

## Tone of Voice

### Core Tone

**Primary Tone:** Informal but precise.

The writing should sound like a thoughtful person describing what exists, why it exists, and how it connects. It should avoid both corporate polish and raw diary looseness. Notes can be more reflective and editorial; UI copy should stay direct.

### Tone Spectrum

| Dimension | Our Position | Example |
|-----------|--------------|---------|
| Formal <-> Casual | Slightly casual, still exact | "A small archive of work, notes, and traces." |
| Serious <-> Playful | Mostly serious, not heavy | "Some things are projects. Some are notes. Some are somewhere between." |
| Technical <-> Simple | Context-dependent | Technical depth appears inside relevant entries, not everywhere. |
| Reserved <-> Enthusiastic | Reserved | "Selected entry points" instead of "Featured achievements." |

### We Say / We Don't Say

**We say:**

- "Entries"
- "Notes"
- "Timeline"
- "Selected"
- "Trace"
- "Process"
- "Collections"
- "Work across domains"

**We don't say:**

- "High-achiever"
- "Elite"
- "Thought leader"
- "World-class"
- "Disruptive visionary"
- "Hire me now"
- "My journey" as a default framing

---

## Language Strategy

### Supported Languages

| Language | Priority | Coverage | Notes |
|----------|----------|----------|-------|
| English | Primary | Full site | Default medium for global access. |

### Translation Approach

Launch as an English-only site. Translation can be revisited later if the archive develops meaningful multilingual content, but multilingual support is not a Phase 1 requirement.

### Localization Notes

- **English:** Use international English where practical. Avoid local idioms that make archive content harder to understand globally.

---

## Content Types

### UI Microcopy

Buttons, labels, error messages, system feedback.

**Guidelines:**

- Keep labels literal and short.
- Prefer nouns for navigation: "Timeline", "Notes", "Selected", "Collections".
- Avoid exclamation points and celebratory feedback.
- Avoid conversion language.
- Make empty states plain.

**Examples:**

| Context | Do | Don't |
|---------|----|-------|
| Timeline link | View timeline | Explore my journey |
| Notes follow | RSS | Never miss an insight |
| Contact | Contact | Let's build the future |
| Empty collection | No entries yet. | Great things are coming soon! |

### Editorial Content

Notes / Thoughts should be curated, long-form reflections inspired by an editorial model rather than a raw log. They should be lower frequency and higher clarity.

**Guidelines:**

- Write for clarity and rereadability.
- Make claims carefully.
- Use specific examples when possible.
- Keep essays durable rather than reactive.
- Let uncertainty remain visible when useful.

### Entry Content

Project and work entries should show process and trajectory.

**Guidelines:**

- Include context, role, constraints, process, outcome, and current status when relevant.
- Allow entries to be incomplete, in-progress, or historical.
- Cross-link related entries.
- Support multiple collection memberships.

---

## SEO Strategy

SEO should support discoverability without taking over the language. This is not an audience-optimized platform, so search strategy should be modest and structural.

### Page-Keyword Map

| Page | URL Slug | Primary Keyword | Notes |
|------|----------|-----------------|-------|
| Home / Portal | `/` | Nathan Mike Sidi Bakari | Identity anchor and archive entry. |
| Collections | `/collections` | Nathan Mike Sidi Bakari work | Multi-domain browsing. |
| Engineer | `/collections/engineer` | engineering projects | Collection route. |
| Entrepreneur | `/collections/entrepreneur` | entrepreneurship projects | Collection route. |
| Investor | `/collections/investor` | investing notes | Collection route. |
| Artist | `/collections/artist` | art projects | Collection route. |
| Timeline | `/timeline` | personal archive timeline | Chronological aggregation. |
| Selected | `/selected` | selected work | Curated entry points. |
| Notes | `/notes` | notes and essays | Editorial publication and RSS. |
| About | `/about` | about Nathan Mike Sidi Bakari | Minimal identity statement. |
| Contact | `/contact` | contact Nathan Mike Sidi Bakari | Low-emphasis contact route. |

### URL Structure

```text
/                         -> Home / Portal
/collections              -> Collection index
/collections/[collection] -> Collection view
/timeline                 -> Chronological archive
/selected                 -> Curated entry points
/notes                    -> Editorial notes index
/notes/[slug]             -> Individual note
/entries/[slug]         -> Individual entry
/about                    -> Minimal identity statement
/contact                  -> Low-emphasis contact
```

### Primary Keywords

**English:**

- Nathan Mike Sidi Bakari
- Nathan Sidi Bakari
- personal archive
- engineering projects
- entrepreneurship projects
- investing notes
- art projects
- notes and essays

### Local SEO

Not a local business. Skip local SEO.

### Structured Data Plan

| Page Type | Schema Type | Key Properties |
|-----------|-------------|----------------|
| Home / About | `Person` | name, url, sameAs when available |
| Notes | `Blog` or `CollectionPage` | name, url, itemListElement |
| Individual Note | `Article` | headline, datePublished, author |
| Entry | `CreativeWork` | name, dateCreated, creator, keywords |
| Selected / Timeline | `CollectionPage` | name, itemListElement |

### Keyword Usage Guidelines

Use keywords only where they describe the content naturally. Do not rewrite page titles or entry descriptions to chase search traffic.

---

## Content Structure Principles

### Structure Type

Archive-first, non-linear, dual-indexed structure.

### User's Vision

A minimally curated, multi-domain, temporally indexed archive of personal output, where identity is expressed through tagged entries rather than narrative positioning.

### Content Priorities

**Must be prominent:**

- Archive model
- Collections
- Timeline
- Selected entry points
- Notes

**Important but secondary:**

- About
- Contact
- RSS
- Technical details inside relevant entries

### Navigation Principles

- Every entry should be reachable through time and identity.
- Collections should support multi-membership.
- Timeline should aggregate across all entry types.
- Selected should reduce entry friction without becoming a trophy case.
- Notes should be clearly editorial and followable by RSS.
- Contact should be available but visually quiet.

### Not Included

- Aggressive calls to action.
- Resume-style homepage language.
- Inflated personal branding.
- Social proof blocks unless they become meaningfully tied to entries.
- High-frequency raw logging as the primary Notes model.

### Clarity Level

General to semi-technical. The site should be understandable without domain expertise while allowing deeper technical detail where the entry warrants it.

---

## Content Ownership

| Content Type | Owner | Update Frequency |
|--------------|-------|------------------|
| Entries | Nathan | As work is ready to archive |
| Timeline metadata | Nathan | Whenever entries are added |
| Selected entries | Nathan | Periodically, when entry points should change |
| Notes / Thoughts | Nathan | Low frequency, high clarity |
| About | Nathan | Rarely |
| Contact details | Nathan | As needed |

---

## Writing Checklist

Before publishing any content, verify:

- [ ] The entry has a date or date range.
- [ ] The entry has collection/tag metadata.
- [ ] The description shows process or context, not only outcome.
- [ ] The language avoids inflated claims.
- [ ] The content can stand as part of a long-term archive.
- [ ] Related entries are linked where useful.
- [ ] Notes are clear enough to be reread later.
- [ ] Contact or follow prompts remain optional.

---

## Next Steps

- [ ] **Visual Direction** - Apply the minimalist, archive-first aesthetic.
- [ ] **Phase 2: Trigger Mapping** - Convert audiences into visitor modes.
- [ ] **Phase 4: UX Design** - Apply tone to interface copy.

---

_Generated by Whiteport Design Studio_
