import { Link, Outlet } from "@tanstack/react-router";
import { SITE } from "@/content/data";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SiteShell() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-6 py-5">
          <Link to="/" className="group flex items-baseline gap-3">
            <span
              className="font-display text-[1.35rem] leading-none tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Nathan Mike Sidi Bakari
            </span>
            <span className="hidden text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground sm:inline">
              Archive
            </span>
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            <NavLink to="/selected">Selected</NavLink>
            <NavLink to="/timeline">Timeline</NavLink>
            <NavLink to="/collections">Collections</NavLink>
            <NavLink to="/notes">Notes</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact" subdued>
              Contact
            </NavLink>
          </nav>
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Index
            </summary>
            <div className="absolute right-0 top-7 z-50 w-44 border border-border bg-background shadow-sm">
              <MobileLink to="/selected">Selected</MobileLink>
              <MobileLink to="/timeline">Timeline</MobileLink>
              <MobileLink to="/collections">Collections</MobileLink>
              <MobileLink to="/notes">Notes</MobileLink>
              <MobileLink to="/about">About</MobileLink>
              <MobileLink to="/contact">Contact</MobileLink>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  to,
  children,
  subdued,
}: {
  to: string;
  children: ReactNode;
  subdued?: boolean;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "text-[0.78rem] uppercase tracking-[0.16em] transition-colors hover:text-foreground",
        subdued ? "text-muted-foreground" : "text-foreground/80",
      )}
      activeProps={{ className: "text-foreground border-b border-[var(--ochre)] pb-0.5" }}
      activeOptions={{ exact: false }}
    >
      {children}
    </Link>
  );
}

function MobileLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="block border-b border-border px-4 py-3 text-sm last:border-b-0 hover:bg-muted"
    >
      {children}
    </Link>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto max-w-[1240px] px-5 py-10 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <FooterCol title="Archive">
            <FootLink to="/selected">Selected</FootLink>
            <FootLink to="/timeline">Timeline</FootLink>
            <FootLink to="/collections">Collections</FootLink>
            <FootLink to="/notes">Notes</FootLink>
          </FooterCol>
          <FooterCol title="Information">
            <FootLink to="/about">About</FootLink>
            <FootLink to="/contact">Contact</FootLink>
            <a
              href="/rss.xml"
              className="block text-[0.78rem] tracking-wide text-muted-foreground hover:text-foreground"
            >
              RSS
            </a>
          </FooterCol>
          <FooterCol title="Citation">
            <p className="text-[0.78rem] text-muted-foreground">
              Cite as:{" "}
              <span className="font-mono">
                Bakari, N. M. S. — Personal Archive ({new Date().getFullYear()}).
              </span>
            </p>
          </FooterCol>
          <FooterCol title="Colophon">
            <p className="text-[0.78rem] text-muted-foreground">
              Set in Cormorant Garamond, Inter, and JetBrains Mono. Maintained as a
              standing record.
            </p>
          </FooterCol>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:items-center">
          <span>{SITE.name}</span>
          <span className="font-mono normal-case tracking-normal">
            Last revision · {new Date().toISOString().slice(0, 10)}
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="eyebrow mb-3">{title}</h4>
      <div className="flex flex-col gap-1.5">{children}</div>
    </div>
  );
}

function FootLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="block text-[0.78rem] tracking-wide text-muted-foreground hover:text-foreground"
    >
      {children}
    </Link>
  );
}

/* ---------- Page primitives ---------- */

export function PageContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lede,
  meta,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  meta?: ReactNode;
}) {
  return (
    <header className="border-b border-border pb-10 pt-14 md:pt-20">
      <div className="eyebrow">{eyebrow}</div>
      <h1
        className="mt-4 max-w-3xl font-display text-[2.4rem] leading-[1.05] tracking-tight md:text-[3.2rem]"
        style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
      >
        {title}
      </h1>
      {lede && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
          {lede}
        </p>
      )}
      {meta && <div className="mt-6">{meta}</div>}
    </header>
  );
}

export function MetaRow({
  items,
}: {
  items: { label: string; value: ReactNode }[];
}) {
  return (
    <dl className="grid grid-cols-1 gap-x-8 gap-y-3 border-y border-border py-4 text-sm sm:grid-cols-2 md:grid-cols-4">
      {items.map((it) => (
        <div key={it.label} className="flex flex-col gap-0.5">
          <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {it.label}
          </dt>
          <dd className="font-mono text-[0.82rem] text-foreground">{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Prose({ text }: { text: string }) {
  // Minimal markdown-ish renderer: ## headings, > blockquotes, blank lines.
  const blocks = text.split(/\n\n+/);
  return (
    <div className="prose-archive max-w-[68ch]">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return <h2 key={i}>{block.replace(/^##\s+/, "")}</h2>;
        }
        if (block.startsWith("### ")) {
          return <h3 key={i}>{block.replace(/^###\s+/, "")}</h3>;
        }
        if (block.startsWith("> ")) {
          return (
            <blockquote key={i}>
              {block.replace(/^>\s?/gm, "").trim()}
            </blockquote>
          );
        }
        return <p key={i}>{block}</p>;
      })}
    </div>
  );
}

/* Quiet hairline divider with optional label */
export function Rule({ label }: { label?: string }) {
  if (!label) return <hr className="border-border" />;
  return (
    <div className="flex items-center gap-3">
      <span className="eyebrow whitespace-nowrap">{label}</span>
      <hr className="flex-1 border-border" />
    </div>
  );
}
