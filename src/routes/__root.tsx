import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteShell } from "@/components/site-shell";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="max-w-md">
        <div className="eyebrow">Error · 404</div>
        <h1
          className="mt-3 font-display text-5xl tracking-tight"
          style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
        >
          Not in the catalog.
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          This accession number does not appear in the index.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block border-b border-[var(--ochre)] pb-0.5 text-sm uppercase tracking-[0.16em]"
        >
          Return to portal
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nathan Mike Sidi Bakari — Archive" },
      {
        name: "description",
        content:
          "A personal archive of work, notes, and traces across engineering, entrepreneurship, investing, and art.",
      },
      { property: "og:title", content: "Nathan Mike Sidi Bakari — Archive" },
      {
        property: "og:description",
        content:
          "A personal archive of work, notes, and traces across engineering, entrepreneurship, investing, and art.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
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
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "alternate", type: "application/rss+xml", title: "Notes RSS", href: "/rss.xml" },
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
  return <SiteShell />;
}
