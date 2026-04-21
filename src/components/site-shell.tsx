import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/selected", label: "Selected" },
  { to: "/timeline", label: "Timeline" },
  { to: "/collections", label: "Collections" },
  { to: "/notes", label: "Notes" },
  { to: "/about", label: "About" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const path = location.pathname;

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-3 focus:py-1.5 focus:text-paper"
      >
        Skip to content
      </a>

      <header className="border-b border-rule">
        <div className="mx-auto max-w-[78rem] px-6 md:px-10">
          <div className="flex items-baseline justify-between gap-6 py-5">
            <Link to="/" className="group inline-flex items-baseline gap-3">
              <span className="font-display text-[1.55rem] leading-none tracking-tight text-ink">
                Nathan Mike Sidi Bakari
              </span>
              <span className="hidden text-[0.7rem] uppercase tracking-[0.18em] text-ink-faint sm:inline">
                — a personal archive
              </span>
            </Link>

            <nav className="hidden items-center gap-7 md:flex">
              {navItems.map((item) => {
                const active =
                  item.to === "/"
                    ? path === "/"
                    : path === item.to || path.startsWith(item.to + "/");
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      "font-serif text-[0.95rem] text-ink-muted transition-colors hover:text-ink",
                      active && "text-ink",
                    )}
                  >
                    <span
                      className={cn(
                        "border-b border-transparent pb-0.5",
                        active && "border-accent-ink text-ink",
                      )}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
              <Link
                to="/contact"
                className="label-mono text-ink-faint transition-colors hover:text-ink"
              >
                Contact
              </Link>
            </nav>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen((o) => !o)}
              className="label-mono inline-flex items-center gap-2 border border-rule px-2.5 py-1.5 text-ink-muted md:hidden"
            >
              {open ? "Close" : "Index"}
            </button>
          </div>

          {open && (
            <div className="border-t border-rule pb-5 md:hidden">
              <nav className="flex flex-col py-2">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="border-b border-rule py-3 font-serif text-lg text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="py-3 font-serif text-lg text-ink"
                >
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main id="main" className="mx-auto max-w-[78rem] px-6 py-12 md:px-10 md:py-16">
        {children}
      </main>

      <footer className="mt-24 border-t border-rule">
        <div className="mx-auto max-w-[78rem] px-6 py-10 md:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-display text-xl text-ink">Nathan Mike Sidi Bakari</p>
              <p className="mt-1 label-mono">A personal archive · Est. 2018</p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 label-mono">
              <Link to="/timeline" className="hover:text-ink">
                Timeline
              </Link>
              <Link to="/collections" className="hover:text-ink">
                Collections
              </Link>
              <Link to="/notes" className="hover:text-ink">
                Notes
              </Link>
              <a href="/rss.xml" className="hover:text-ink">
                RSS
              </a>
              <Link to="/contact" className="hover:text-ink">
                Contact
              </Link>
            </div>
          </div>
          <p className="mt-8 label-mono text-ink-faint">
            © {new Date().getFullYear()} Nathan Mike Sidi Bakari · Set in Cormorant Garamond &
            Source Serif
          </p>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lede,
  meta,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  meta?: ReactNode;
}) {
  return (
    <header className="mb-12 md:mb-16">
      {eyebrow && <p className="label-mono mb-4">{eyebrow}</p>}
      <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink md:text-6xl">
        {title}
      </h1>
      {lede && (
        <p className="mt-6 max-w-2xl font-serif text-lg leading-relaxed text-ink-muted md:text-xl">
          {lede}
        </p>
      )}
      {meta && <div className="mt-8">{meta}</div>}
      <div className="rule-double mt-10" />
    </header>
  );
}

export function MetaRow({
  items,
}: {
  items: { label: string; value: ReactNode }[];
}) {
  return (
    <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 md:grid-cols-4">
      {items.map((it, i) => (
        <div key={i}>
          <dt className="label-mono mb-1.5">{it.label}</dt>
          <dd className="font-serif text-[0.95rem] text-ink">{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Prose({
  text,
  dropcap,
  className,
}: {
  text: string;
  dropcap?: boolean;
  className?: string;
}) {
  // Lightweight markdown-ish renderer (paragraphs, h2/h3, --- divider)
  const blocks = text.split(/\n\n+/);
  return (
    <div className={cn("prose-journal", dropcap && "has-dropcap", className)}>
      {blocks.map((b, i) => {
        const trimmed = b.trim();
        if (trimmed.startsWith("## ")) return <h2 key={i}>{trimmed.slice(3)}</h2>;
        if (trimmed.startsWith("### ")) return <h3 key={i}>{trimmed.slice(4)}</h3>;
        if (trimmed === "---") return <hr key={i} />;
        if (trimmed.startsWith("- ")) {
          const items = trimmed.split("\n").map((l) => l.replace(/^-\s*/, ""));
          return (
            <ul key={i}>
              {items.map((it, j) => (
                <li key={j}>{it}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{trimmed}</p>;
      })}
    </div>
  );
}
