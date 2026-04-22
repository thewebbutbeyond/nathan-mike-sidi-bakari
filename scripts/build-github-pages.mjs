import { spawnSync } from "node:child_process";

const env = {
  ...process.env,
  GITHUB_PAGES_BASE_PATH: process.env.GITHUB_PAGES_BASE_PATH ?? "/nathan-mike-sidi-bakari/",
  SITE_ORIGIN: process.env.SITE_ORIGIN ?? "https://thewebbutbeyond.github.io",
};

const viteBin =
  process.platform === "win32" ? "node_modules\\.bin\\vite.cmd" : "node_modules/.bin/vite";

function run(command, args) {
  const result = spawnSync(command, args, {
    env,
    shell: process.platform === "win32",
    stdio: "inherit",
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

run(viteBin, ["build"]);
run(process.execPath, ["scripts/prepare-github-pages.mjs"]);
