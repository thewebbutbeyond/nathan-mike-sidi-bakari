# Platform Requirements: Nathan Mike Sidi Bakari

> Technical Boundaries & Platform Decisions

**Created:** 2026-04-21
**Author:** Nathan
**Related:** [Product Brief](./01-product-brief.md)

---

## Technology Stack

### Core Platform

**CMS/Framework:** React / Next.js
**Approach:** Static or mostly static content-driven website.

Use structured local content as the initial source of truth. The archive model benefits from file-based entries and metadata that can generate collection pages, timeline views, RSS, and detail pages.

### Key Technologies

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Frontend** | Next.js / React | Strong fit for static generation, routing, metadata, and long-term maintainability. |
| **Styling** | Tailwind CSS | Matches the minimalist direction and avoids premature component-library weight. |
| **CMS/Backend** | File-based Markdown/MDX or structured content files | Keeps the archive portable and versionable at launch. |
| **Database** | None at launch | Content volume and interactions do not require a database initially. |
| **Hosting** | TBD, likely Vercel or static-friendly host | Should support Next.js, fast global delivery, and preview deployments. |

---

## Plugin/Package Stack

To be determined during development. Likely package needs:

| Package Area | Purpose | Status |
|--------------|---------|--------|
| MDX / Markdown | Notes and entry content | Candidate |
| RSS generation | Notes feed | Required or near-required |
| Content indexing | Collections and timeline | Required |
| SEO metadata | Page titles, descriptions, structured data | Required |
| Search | Local content search | Deferred until content volume justifies it |

No new dependency should be added until an implementation task proves the need.

---

## Integrations

### Required Integrations

- **RSS:** Optional following for Notes / Thoughts.
- **Contact route:** Low-emphasis contact mechanism, likely mail link or simple form.

### Future Integrations

- **Search:** Local site search when the archive becomes large enough. *(Later)*
- **CMS:** Lightweight content management if file-based editing becomes a bottleneck. *(Later)*
- **Analytics:** Privacy-respecting analytics only if useful, not required. *(Optional)*

---

## Contact Strategy

### Primary Contact Method

Low-emphasis contact. The site should permit genuine intersections of interest without turning contact into the main objective.

### Contact Channels

| Channel | Priority | Implementation |
|---------|----------|----------------|
| Email | Primary | Mail link or simple protected address. |
| Social / professional profiles | Optional | Link only if they support context. |
| Contact form | Deferred | Use only if email exposure or routing becomes a problem. |

### Future: AI Integration

No AI integration is required. If added later, it should help retrieve or summarize archive content for Nathan, not act as a public gimmick.

---

## UX Constraints

These constraints inform Phase 4 UX Design.

### Platform Limitations

- The content model must support entries belonging to multiple collections.
- Timeline and collections should derive from the same metadata.
- Notes must support long-form readability and RSS output.
- The site should remain useful before there is a large amount of content.
- Contact must remain available but non-dominant.
- The navigation model should not depend on user accounts.

### Performance Targets

| Metric | Target | Rationale |
|--------|--------|-----------|
| **Mobile First** | Responsive, mobile-readable | Visitors may browse and read from any device. |
| **Page Load** | Under 3 seconds on 4G | Static content should be fast. |
| **Offline Support** | Not required | Public archive access is web-first. |

---

## Multilingual Requirements

Single language site: English.

Future multilingual support is optional and should be driven by actual content needs.

---

## SEO Requirements

### Technical SEO

- Clean semantic HTML.
- Per-page titles and descriptions.
- Canonical URLs.
- Open Graph and social preview metadata.
- XML sitemap.
- RSS feed for Notes.
- Structured data for Person, Article, CreativeWork, and CollectionPage where appropriate.
- Accessible headings and link text.

### Structured Data

| Page Type | Schema Type | Key Properties |
|-----------|-------------|----------------|
| Home / About | `Person` | name, url, sameAs |
| Notes Index | `Blog` or `CollectionPage` | name, url, itemListElement |
| Note Detail | `Article` | headline, author, datePublished |
| Entry Detail | `CreativeWork` | name, creator, dateCreated, keywords |
| Timeline / Selected | `CollectionPage` | name, itemListElement |

### Local SEO

Not a local business.

### Performance & Infrastructure

| Metric | Target |
|--------|--------|
| **Largest Contentful Paint (LCP)** | < 2.5 seconds |
| **Interaction to Next Paint (INP)** | < 200ms |
| **Cumulative Layout Shift (CLS)** | < 0.1 |
| **Page Load (4G)** | < 3 seconds |
| **Total Page Weight** | < 3MB |
| **Individual Image Size** | < 200KB where practical |
| **Mobile-Friendly** | Yes |
| **Favicon** | Standard browser and mobile sizes |

### Security Headers

| Header | Purpose |
|--------|---------|
| **Strict-Transport-Security (HSTS)** | Force HTTPS |
| **Content-Security-Policy (CSP)** | Reduce XSS risk |
| **X-Content-Type-Options** | Prevent MIME sniffing |
| **X-Frame-Options** | Prevent clickjacking |
| **Referrer-Policy** | Control referrer info |
| **Permissions-Policy** | Restrict browser features |

### SEO Plugin/Tools

Use framework-native metadata and generated sitemap/RSS where possible. Avoid heavy SEO tooling unless the implementation needs it.

---

## Maintenance & Ownership

| Aspect | Owner | Notes |
|--------|-------|-------|
| **Content Updates** | Nathan | Add entries, notes, metadata, and selected entries. |
| **Technical Maintenance** | Nathan / Codex | Keep dependencies current and verify builds. |
| **Package Updates** | Nathan / Codex | Review before updating; avoid unnecessary package growth. |

---

## Development Handoff Notes

### Environment Setup

Expected development stack:

- Node.js
- Next.js
- Tailwind CSS
- File-based content directory for entries and notes
- Git for versioned content and implementation changes

### Deployment Process

Deployment target is not selected yet. Prefer a host with preview deployments, fast global CDN, and simple Next.js support.

### Key Considerations

- Model content before designing pages in detail.
- Keep entry metadata stable and explicit.
- Generate timeline and collection views from the same data source.
- Add RSS early enough that Notes structure does not need to be reworked.
- Avoid adding analytics, CMS, or search until there is a clear need.
- Preserve the non-instrumental, archive-first intent in implementation choices.

---

## Next Steps

- [ ] **Phase 2: Trigger Mapping** - Define visitor modes and driving forces.
- [ ] **Phase 3: Scenarios** - Translate the archive structure into browsing journeys.
- [ ] **Phase 4: UX Design** - Specify pages within these constraints.

---

_Generated by Whiteport Design Studio_
