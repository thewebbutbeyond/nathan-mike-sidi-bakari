# Design Tokens

**Project:** Nathan Mike Sidi Bakari
**Created:** 2026-04-21
**Status:** Initial baseline for Phase 4 specifications

---

## Purpose

These initial tokens give page specifications stable names for spacing, typography, and neutral visual structure. Values can be refined during visual design; page specs should continue referencing token names.

---

## Spacing Scale

| Token | Starting Value | Use |
|-------|----------------|-----|
| `space-3xs` | 2px | Hairline optical adjustments |
| `space-2xs` | 4px | Tight inline gaps |
| `space-xs` | 8px | Compact groups |
| `space-sm` | 12px | Small related gaps |
| `space-md` | 16px | Default element spacing |
| `space-lg` | 24px | Card/list spacing |
| `space-xl` | 32px | Section padding |
| `space-2xl` | 48px | Major section gaps |
| `space-3xl` | 64px | Page-level breathing room |

---

## Type Scale

| Token | Starting Value | Use |
|-------|----------------|-----|
| `text-3xs` | 11px | Fine print |
| `text-2xs` | 12px | Dense metadata |
| `text-xs` | 13px | Captions |
| `text-sm` | 14px | Metadata and helper text |
| `text-md` | 16px | Body text |
| `text-lg` | 18px | Lead text |
| `text-xl` | 22px | Section headings |
| `text-2xl` | 28px | Large page sections |
| `text-3xl` | 36px | Page titles |

---

## Color Roles

| Token | Role |
|-------|------|
| `color-bg` | Primary page background |
| `color-surface` | Subtle panels and route cards |
| `color-text` | Primary text |
| `color-muted` | Metadata and secondary copy |
| `color-border` | Dividers and separators |
| `color-accent` | Links, active filters, subtle emphasis |

---

## Component Principles

- Cards and route blocks should stay structurally quiet.
- Metadata should be visible but not visually dominant.
- Accent usage should clarify interaction or active state.
- Do not create domain-specific color identities until real content proves the need.
