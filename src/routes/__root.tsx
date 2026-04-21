import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { SiteShell } from "@/components/site-shell";

function NotFoundComponent() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-40">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-lamp">
          404 · Out of catalog
        </div>
        <h1 className="mt-5 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
          The page you opened is not in this archive.
        </h1>
        <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-ink-soft">
          It may have been re-filed, retired, or never accessioned. Return to the index to
          continue.
        </p>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
          <Link to="/" className="hover:text-ink">→ Portal</Link>
          <Link to="/timeline" className="hover:text-ink">→ Timeline</Link>
          <Link to="/collections" className="hover:text-ink">→ Collections</Link>
          <Link to="/notes" className="hover:text-ink">→ Notes</Link>
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
      { title: "Nathan Mike Sidi Bakari — Personal archive" },
      {
        name: "description",
        content:
          "A personal archive of work, notes, and traces across engineering, entrepreneurship, investing, and art.",
      },
      { property: "og:title", content: "Nathan Mike Sidi Bakari — Personal archive" },
      {
        property: "og:description",
        content:
          "A personal archive of work, notes, and traces across engineering, entrepreneurship, investing, and art.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
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
  return (
    <SiteShell>
      <Outlet />
    </SiteShell>
  );
}
