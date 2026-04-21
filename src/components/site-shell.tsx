import * as React from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { SITE } from "@/content/data";

const NAV = [
  { to: "/selected", label: "Selected" },
  { to: "/timeline", label: "Timeline" },
  { to: "/collections", label: "Collections" },
  { to: "/notes", label: "Notes" },
  { to: "/about", label: "About" },
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-paper text-ink">
      <div className="relative z-10 flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}

function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="border-b border-rule">
      <div className="mx-auto flex max-w-6xl items-baseline justify-between gap-6 px-6 py-6 md:px-10 md:py-8">
        <Link to="/" className="group flex flex-col">
          <span className="font-display text-lg leading-none tracking-tight md:text-xl">
            {SITE.name}
          </span>
          <span className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
            Personal archive · est. 2018
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-baseline gap-7 md:flex">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} label={item.label} />
          ))}
        </nav>

        {/* mobile toggle */}
        <button
          type="button"
          aria-label="Open index"
          onClick={() => setOpen((v) => !v)}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft hover:text-ink md:hidden"
        >
          {open ? "Close" : "Index"}
        </button>
      </div>

      {open && (
        <div className="border-t border-rule md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="font-display text-2xl leading-tight text-ink hover:text-lamp"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint hover:text-ink"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-ink"
      activeProps={{ className: "font-mono text-[11px] uppercase tracking-[0.2em] text-ink" }}
      activeOptions={{ exact: false }}
    >
      {label}
    </Link>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-rule">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3 md:px-10 md:py-12">
        <div>
          <div className="font-display text-base">{SITE.name}</div>
          <p className="mt-2 max-w-xs text-sm text-ink-soft">{SITE.tagline}</p>
        </div>
        <div className="flex flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
          <Link to="/selected" className="hover:text-ink">Selected</Link>
          <Link to="/timeline" className="hover:text-ink">Timeline</Link>
          <Link to="/collections" className="hover:text-ink">Collections</Link>
          <Link to="/notes" className="hover:text-ink">Notes</Link>
        </div>
        <div className="flex flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
          <Link to="/about" className="hover:text-ink">About</Link>
          <Link to="/contact" className="hover:text-ink">Contact</Link>
          <a href="/rss.xml" className="hover:text-ink">RSS</a>
        </div>
      </div>
      <div className="border-t border-rule">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint md:flex-row md:items-center md:px-10">
          <span>© {new Date().getFullYear()} · {SITE.short}</span>
          <span>Last updated · {new Date().toISOString().slice(0, 10)}</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page primitives ---------- */

export function PageFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-6xl px-6 py-12 md:px-10 md:py-20", className)}>
      {children}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="border-b border-rule pb-10 md:pb-14">
      <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-lamp">
        {eyebrow}
      </div>
      <h1 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="mt-6 max-w-2xl font-serif text-base leading-relaxed text-ink-soft md:text-lg">
          {description}
        </p>
      )}
    </header>
  );
}

export function MetaRow({
  items,
  className,
}: {
  items: { label: string; value: React.ReactNode }[];
  className?: string;
}) {
  return (
    <dl
      className={cn(
        "grid grid-cols-1 gap-x-8 gap-y-3 border-y border-rule py-5 sm:grid-cols-2 md:grid-cols-4",
        className
      )}
    >
      {items.map((item) => (
        <div key={item.label} className="flex flex-col gap-1">
          <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
            {item.label}
          </dt>
          <dd className="font-serif text-sm text-ink">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Rule({ className }: { className?: string }) {
  return <hr className={cn("my-10 border-t border-rule", className)} />;
}

/* ---------- Tiny markdown-lite renderer ---------- */

export function Prose({ markdown, dropcap = false }: { markdown: string; dropcap?: boolean }) {
  const blocks = React.useMemo(() => parseMarkdown(markdown), [markdown]);
  return (
    <article className={cn("prose-room", dropcap && "[&>p:first-of-type]:dropcap")}>
      {blocks.map((b, i) => {
        if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
        if (b.type === "h3") return <h3 key={i}>{b.text}</h3>;
        if (b.type === "quote") return <blockquote key={i}>{b.text}</blockquote>;
        if (b.type === "hr") return <hr key={i} />;
        if (b.type === "ul")
          return (
            <ul key={i}>
              {b.items.map((it, j) => (
                <li key={j}>{it}</li>
              ))}
            </ul>
          );
        return <p key={i}>{b.text}</p>;
      })}
    </article>
  );
}

type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string }
  | { type: "hr" }
  | { type: "ul"; items: string[] };

function parseMarkdown(src: string): Block[] {
  const lines = src.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let buf: string[] = [];
  let listBuf: string[] = [];

  const flushPara = () => {
    if (buf.length) {
      blocks.push({ type: "p", text: buf.join(" ") });
      buf = [];
    }
  };
  const flushList = () => {
    if (listBuf.length) {
      blocks.push({ type: "ul", items: listBuf });
      listBuf = [];
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushPara();
      flushList();
      continue;
    }
    if (line.startsWith("## ")) {
      flushPara();
      flushList();
      blocks.push({ type: "h2", text: line.slice(3) });
      continue;
    }
    if (line.startsWith("### ")) {
      flushPara();
      flushList();
      blocks.push({ type: "h3", text: line.slice(4) });
      continue;
    }
    if (line.startsWith("> ")) {
      flushPara();
      flushList();
      blocks.push({ type: "quote", text: line.slice(2) });
      continue;
    }
    if (line === "---") {
      flushPara();
      flushList();
      blocks.push({ type: "hr" });
      continue;
    }
    if (line.startsWith("- ")) {
      flushPara();
      listBuf.push(line.slice(2));
      continue;
    }
    flushList();
    buf.push(line);
  }
  flushPara();
  flushList();
  return blocks;
}

export function fmtDate(iso: string) {
  const d = new Date(iso + "T12:00:00Z");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function fmtDateShort(iso: string) {
  const d = new Date(iso + "T12:00:00Z");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    timeZone: "UTC",
  });
}
