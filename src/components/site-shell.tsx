import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Github, Linkedin, Rss } from "lucide-react";

const NAV = [
  { to: "/chefs-doeuvre", label: "Chefs-d’œuvre" },
  { to: "/timeline", label: "Timeline" },
  { to: "/lenses", label: "Lenses" },
  { to: "/notes", label: "Notes" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1 w-full">{children}</main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3">
        <Link to="/" className="group inline-flex items-baseline">
          <span className="text-sm font-medium tracking-tight group-hover:underline underline-offset-4">
            nathan mike sidi bakari
          </span>
        </Link>
        <nav className="flex items-center gap-x-5 gap-y-1 flex-wrap text-xs">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-ink underline underline-offset-4" }}
              inactiveProps={{ className: "text-ink-soft hover:text-ink" }}
            >
              {item.label.toLocaleLowerCase("fr")}
            </Link>
          ))}
          <span className="text-ink-faint">·</span>
          <Link
            to="/about"
            activeProps={{ className: "text-ink underline underline-offset-4" }}
            inactiveProps={{ className: "text-ink-soft hover:text-ink" }}
          >
            about
          </Link>
          <Link
            to="/contact"
            activeProps={{ className: "text-ink underline underline-offset-4" }}
            inactiveProps={{ className: "text-ink-faint hover:text-ink" }}
          >
            contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-rule mt-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-8 flex flex-col gap-6 text-xs text-ink-soft">
        <blockquote className="max-w-xl">
          <p className="text-ink-soft italic leading-relaxed">
            “He who has a why to live can bear almost any how.”
          </p>
          <footer className="mt-1.5 text-ink-faint not-italic">
            Friedrich Nietzsche
          </footer>
        </blockquote>

        {/* Two columns: site links (left) · icons + copyright (right) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-6 pt-4 border-t border-rule">
          {/* Top-left: sitemap */}
          <nav aria-label="Sitemap" className="flex flex-wrap gap-x-5 gap-y-2">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-ink-soft hover:text-ink"
              >
                {item.label.toLocaleLowerCase("fr")}
              </Link>
            ))}
          </nav>

          {/* Top-right: icons */}
          <div className="flex items-center gap-4 sm:justify-end">
            <a
              href="https://www.linkedin.com/in/nathan-sidi-bakari-686007199"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-ink-soft hover:text-ink"
            >
              <Linkedin size={14} strokeWidth={1.5} />
            </a>
            <a
              href="https://github.com/Nabakator"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-ink-soft hover:text-ink"
            >
              <Github size={14} strokeWidth={1.5} />
            </a>
            <a
              href="/rss.xml"
              aria-label="RSS feed"
              className="text-ink-soft hover:text-ink"
            >
              <Rss size={14} strokeWidth={1.5} />
            </a>
          </div>

          {/* Bottom-left: legal pages */}
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/privacy" className="text-ink-soft hover:text-ink">
              privacy
            </Link>
            <Link to="/terms" className="text-ink-soft hover:text-ink">
              terms
            </Link>
            <Link to="/colophon" className="text-ink-soft hover:text-ink">
              colophon
            </Link>
          </nav>

          {/* Bottom-right: copyright */}
          <div className="sm:text-right">
            <span className="text-ink-faint">©</span> {year} · nathan mike sidi bakari
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------- shared primitives ----------------------- */

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-10">
      {eyebrow && (
        <div className="text-xs text-ink-faint mb-3 tracking-wide">{eyebrow}</div>
      )}
      <h1 className="text-2xl sm:text-[1.75rem] font-medium tracking-tight text-ink">
        {title}
      </h1>
      {description && (
        <p className="mt-3 text-sm text-ink-soft max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </header>
  );
}

export function MetaRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-[5.5rem_1fr] sm:grid-cols-[7rem_1fr] gap-x-4 text-xs leading-relaxed">
      <dt className="text-ink-faint">{label}</dt>
      <dd className="text-ink">{children}</dd>
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="text-ink-soft hover:text-ink text-[11px] tracking-tight">
      #{children}
    </span>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-5xl px-5 sm:px-8 py-10 sm:py-14 ${className}`}>
      {children}
    </div>
  );
}

export function NarrowContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-3xl px-5 sm:px-8 py-10 sm:py-14 ${className}`}>
      {children}
    </div>
  );
}

export function Prose({ text }: { text: string }) {
  const paragraphs = text.split(/\n\n+/);
  return (
    <div className="prose-archive text-ink">
      {paragraphs.map((p, i) => (
        <p key={i}>{renderInline(p)}</p>
      ))}
    </div>
  );
}

function renderInline(text: string) {
  // bold *...* and italic _..._ minimal renderer
  const parts: ReactNode[] = [];
  const regex = /\*([^*]+)\*|_([^_]+)_/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = regex.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) parts.push(<em key={i++}>{m[1]}</em>);
    else if (m[2]) parts.push(<em key={i++}>{m[2]}</em>);
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
