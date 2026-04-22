# Nathan Mike Sidi Bakari

A personal archive of work, notes, and traces across engineering, entrepreneurship, investing, art, and reflection.

The site is intentionally closer to a notebook/logbook than a conventional portfolio. It is meant to preserve continuity over time, make work browsable through multiple lenses, and stay public without turning into a conversion surface.

## Structure

- **Home**: portal into the archive, stats, recent entries, and notes.
- **Chefs-d'oeuvre**: marked entries from the timeline.
- **Timeline**: chronological view across entries.
- **Lenses**: Engineering, Entrepreneurship, Investing, and Art as overlapping perspectives.
- **Notes**: longer editorial reflections with RSS support.
- **About / Contact**: minimal context and low-emphasis contact.

Planning and implementation artifacts live in:

- `design-process/`
- `_bmad-output/`
- `.lovable/plan.md`

## Stack

- React 19
- TanStack Start / TanStack Router
- Vite
- Tailwind CSS
- TypeScript
- GitHub Pages deployment

## Local Development

Use Node `22.12.0` or newer for parity with CI.

```bash
npm ci
npm run dev
```

Build locally:

```bash
npm run build
```

Prepare the GitHub Pages artifact:

```bash
npm run build:github-pages
```

## Validation

Focused checks:

```bash
npm run validate:shell
npm run validate:seo
npm run validate:copy
npm run validate:a11y
npm run validate:notes
npm run validate:search
npm run validate:lenses
npm run validate:timeline
npm run validate:entry-detail
npm run validate:deploy
```

Full baseline before release:

```bash
npm run build:github-pages
REQUIRE_DEPLOY_OUTPUT=1 npm run validate:deploy
npm run validate:a11y
npm run validate:seo
npm run validate:copy
npm run validate:notes
npm run validate:search
npm run validate:lenses
npm run validate:timeline
npm run validate:entry-detail
npm run validate:shell
npm run lint
npm run build
```

Known non-blocking output:

- `npm run lint` currently reports React fast-refresh warnings in generated/shared UI files.
- `npm run build` currently reports a Vite large-chunk warning.

## Deployment

Deployment is handled by `.github/workflows/deploy-to-github-pages.yml`.

GitHub Pages must be enabled in repository settings with **Source: GitHub Actions**. The deployment build publishes `dist/client` and uses a static SPA fallback (`404.html`) for direct route visits.

More detail: [docs/deployment.md](docs/deployment.md).
