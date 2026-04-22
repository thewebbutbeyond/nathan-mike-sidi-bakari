import { existsSync, readFileSync } from "node:fs";

const workflowSource = readFileSync(".github/workflows/deploy-to-github-pages.yml", "utf8");
const packageJson = JSON.parse(readFileSync("package.json", "utf8"));
const viteSource = readFileSync("vite.config.ts", "utf8");
const buildScriptSource = readFileSync("scripts/build-github-pages.mjs", "utf8");
const routerSource = readFileSync("src/router.tsx", "utf8");
const rootSource = readFileSync("src/routes/__root.tsx", "utf8");
const docsSource = readFileSync("docs/deployment.md", "utf8");

const checks = [
  {
    name: "workflow can run on main pushes and manual dispatch",
    pass:
      workflowSource.includes("workflow_dispatch:") && workflowSource.includes("branches: [main]"),
  },
  {
    name: "workflow uses GitHub Pages permissions and environment",
    pass:
      workflowSource.includes("pages: write") &&
      workflowSource.includes("id-token: write") &&
      workflowSource.includes("name: github-pages"),
  },
  {
    name: "workflow installs dependencies with compatible Node",
    pass:
      workflowSource.includes("actions/setup-node@v4") &&
      workflowSource.includes('node-version: "22.12.0"') &&
      workflowSource.includes("npm ci"),
  },
  {
    name: "workflow builds and uploads dist client",
    pass:
      workflowSource.includes("npm run build:github-pages") &&
      workflowSource.includes("SITE_ORIGIN: https://thewebbutbeyond.github.io") &&
      workflowSource.includes("actions/upload-pages-artifact@v3") &&
      workflowSource.includes("path: dist/client"),
  },
  {
    name: "workflow requires deployment artifact validation",
    pass: workflowSource.includes('REQUIRE_DEPLOY_OUTPUT: "1"'),
  },
  {
    name: "workflow deploys uploaded artifact",
    pass: workflowSource.includes("actions/deploy-pages@v4"),
  },
  {
    name: "package exposes GitHub Pages build and validation scripts",
    pass:
      packageJson.scripts["build:github-pages"] === "node scripts/build-github-pages.mjs" &&
      packageJson.scripts["validate:deploy"] ===
        "node scripts/validate-github-pages-deployment.mjs",
  },
  {
    name: "pages build wrapper supplies safe default deployment env",
    pass:
      buildScriptSource.includes(
        'GITHUB_PAGES_BASE_PATH: process.env.GITHUB_PAGES_BASE_PATH ?? "/nathan-mike-sidi-bakari/"',
      ) &&
      (buildScriptSource.includes(
        'SITE_ORIGIN: process.env.SITE_ORIGIN ?? "https://thewebbutbeyond.github.io"',
      ) ||
        buildScriptSource.includes(
          'const siteOrigin = process.env.SITE_ORIGIN ?? "https://thewebbutbeyond.github.io";',
        )),
  },
  {
    name: "pages build wrapper mirrors public metadata origin",
    pass:
      buildScriptSource.includes("VITE_SITE_ORIGIN: process.env.VITE_SITE_ORIGIN ?? siteOrigin") &&
      buildScriptSource.includes('run(viteBin, ["build"])') &&
      buildScriptSource.includes('run(process.execPath, ["scripts/prepare-github-pages.mjs"])'),
  },
  {
    name: "vite config enables static SPA output and configurable base path",
    pass:
      viteSource.includes("GITHUB_PAGES_BASE_PATH") &&
      viteSource.includes("cloudflare: false") &&
      viteSource.includes("base: viteBasePath") &&
      viteSource.includes("spa:") &&
      viteSource.includes("enabled: true") &&
      viteSource.includes("autoStaticPathsDiscovery: false") &&
      viteSource.includes("crawlLinks: false"),
  },
  {
    name: "router uses configured base path",
    pass: routerSource.includes("basepath: routerBasePath"),
  },
  {
    name: "rss metadata uses base-aware path",
    pass:
      rootSource.includes('href: withBasePath("/rss.xml")') &&
      rootSource.includes('type: "application/rss+xml"'),
  },
  {
    name: "brand metadata uses base-aware favicon and public share image",
    pass:
      rootSource.includes('href: withBasePath("/brand/favicon.svg")') &&
      rootSource.includes('withPublicUrl("/brand/share-card.png")'),
  },
  {
    name: "deployment docs cover source, base path, and static limits",
    pass:
      docsSource.includes("GitHub Actions") &&
      docsSource.includes("GITHUB_PAGES_BASE_PATH") &&
      docsSource.includes("static") &&
      docsSource.includes("404.html"),
  },
];

const outputChecks = [
  "dist/client/index.html",
  "dist/client/404.html",
  "dist/client/.nojekyll",
  "dist/client/rss.xml",
  "dist/client/brand/favicon.svg",
  "dist/client/brand/share-card.png",
];

const shouldValidateOutput =
  process.env.REQUIRE_DEPLOY_OUTPUT === "1" ||
  existsSync("dist/client/.nojekyll") ||
  existsSync("dist/client/404.html");

if (shouldValidateOutput) {
  for (const file of outputChecks) {
    checks.push({
      name: `${file} exists`,
      pass: existsSync(file),
    });
  }
  const rssSource = existsSync("dist/client/rss.xml")
    ? readFileSync("dist/client/rss.xml", "utf8")
    : "";
  checks.push({
    name: "static rss output does not use local prerender origin",
    pass: !rssSource.includes("localhost") && !rssSource.includes("127.0.0.1"),
  });
}

const failures = checks.filter((check) => !check.pass);

if (failures.length > 0) {
  console.error("GitHub Pages deployment validation failed:");
  for (const failure of failures) {
    console.error(`- ${failure.name}`);
  }
  process.exit(1);
}

console.log("GitHub Pages deployment validation passed.");
console.log(`Validated ${checks.length} deployment safeguards.`);
