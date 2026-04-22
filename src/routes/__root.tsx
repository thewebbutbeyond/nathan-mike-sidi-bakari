import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteShell } from "@/components/site-shell";

function NotFoundComponent() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-24">
        <div className="text-xs text-ink-faint mb-3">404 · not found</div>
        <h1 className="text-2xl font-medium tracking-tight text-ink">No record at this path.</h1>
        <p className="mt-3 text-sm text-ink-soft">
          The entry may have been moved, renamed, or never existed in the first place.
        </p>
        <div className="mt-8 text-sm">
          <Link to="/" className="underline underline-offset-4 hover:text-ink">
            return to portal
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content:
          "A personal archive of work, notes, and traces across engineering, entrepreneurship, investing, art, and reflection.",
      },
      { name: "author", content: "Nathan Mike Sidi Bakari" },
      { property: "og:title", content: "Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content:
          "A personal archive of work, notes, and traces across engineering, entrepreneurship, investing, art, and reflection.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
      { rel: "alternate", type: "application/rss+xml", href: "/rss.xml", title: "Notes" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
