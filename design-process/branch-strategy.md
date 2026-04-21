# Branch Strategy

**Created:** 2026-04-21

---

## Purpose

Use `main` as the stable planning and release coordination branch. Use short-lived visual prototype branches to explore design directions without letting Lovable's generated scaffold dictate the final production architecture.

---

## Branch Roles

| Branch | Purpose |
|--------|---------|
| `main` | Stable WDS docs, Lovable plan, delivery notes, and deploy workflow placeholder. |
| `prototype/quiet-terminal` | Lovable prototype for the quiet terminal direction. |
| `prototype/printed-paper-journal` | Lovable prototype for a printed paper journal feeling. |
| `prototype/notebook-log` | Lovable prototype for notebook/log feeling. |
| `prototype/private-reading-room` | Lovable prototype for a private reading room feeling. |
| `prototype/museum-archive-index` | Lovable prototype for a museum/archive index feeling. |
| `develop` | Chosen implementation direction after prototype comparison. |

---

## Workflow

1. Keep WDS artifacts and `.lovable/plan.md` on `main`.
2. Create one prototype branch per visual direction.
3. Let Lovable generate a complete visual prototype on that branch.
4. Compare branches for visual feel, information architecture, and maintainability.
5. Promote the favorite direction into `develop`.
6. Implement production architecture on `develop`.
7. Merge `develop` into `main` only when ready to release.
8. Replace the GitHub Pages placeholder workflow with the selected app's real build/deploy workflow.

---

## Guardrails

- Lovable explores visual direction; it does not decide production architecture by default.
- Keep the archive-first, non-conversion intent.
- Do not let a prototype branch delete or rewrite `design-process/`.
- Do not merge multiple prototype branches together; choose one direction, then implement deliberately.
- Before release, verify build, lint, routes, accessibility basics, and GitHub Pages deployment.
