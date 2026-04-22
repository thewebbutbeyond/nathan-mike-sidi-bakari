# Deployment

The release target is GitHub Pages using a custom GitHub Actions workflow.

## GitHub Pages Settings

In the repository settings, set Pages source to **GitHub Actions**. The workflow is `.github/workflows/deploy-to-github-pages.yml`.

The workflow runs on pushes to `main` and can also be run manually. This matches the branch strategy: production work happens on `develop`, then `develop` is merged into `main` when the site is ready to release.

## Build

The Pages build uses Node `22.12.0`, installs with `npm ci`, then runs:

```bash
npm run build:github-pages
```

That script runs the TanStack Start build and prepares `dist/client` for GitHub Pages.
The build disables recursive prerender crawling and emits the SPA shell plus a static `rss.xml`.
The workflow also sets `SITE_ORIGIN=https://thewebbutbeyond.github.io` so RSS links do not capture the local prerender server origin.

## Base Path

This repository deploys as a GitHub project page, so the workflow sets:

```bash
GITHUB_PAGES_BASE_PATH=/nathan-mike-sidi-bakari/
```

If the site later moves to a custom domain or a user/organization Pages root, change that value to `/`.
At the same time, update `SITE_ORIGIN` to the new origin without a trailing slash.

## Route Fallback

GitHub Pages is static hosting. The app is built in TanStack Start SPA mode and the Pages preparation step writes:

- `dist/client/index.html`
- `dist/client/404.html`
- `dist/client/.nojekyll`
- `dist/client/rss.xml`

`404.html` gives direct visits to client routes a fallback shell. Static assets continue to be served directly.

## Known Limits

- The GitHub Pages release is static. Do not add runtime-only server functions without changing the hosting target.
- Route metadata exists in the app source, but deep-link previews on static fallback routes may be less complete than a server-rendered deployment.
- RSS is linked through the configured base path. Re-run deployment validation after changing the Pages base path.
