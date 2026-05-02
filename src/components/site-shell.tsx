import { Link, useLocation } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Check, Github, Globe2, Linkedin, Rss } from "lucide-react";

import { SearchTrigger } from "@/components/search-palette";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { type Locale, localizedPath } from "@/content/localized";
import { withBasePath } from "@/lib/public-paths";

const NAV = {
  en: [
    { to: "/chefs-doeuvre", label: "chefs-d’œuvre" },
    { to: "/timeline", label: "timeline" },
    { to: "/lenses", label: "lenses" },
    { to: "/notes", label: "notes" },
  ],
  fr: [
    { to: "/fr/chefs-doeuvre", label: "chefs-d’œuvre" },
    { to: "/fr/timeline", label: "chronologie" },
    { to: "/fr/lenses", label: "regards" },
    { to: "/fr/notes", label: "notes" },
  ],
} as const;

const ABOUT_CONTACT = {
  en: [
    { to: "/about", label: "about" },
    { to: "/contact", label: "contact" },
  ],
  fr: [
    { to: "/fr/about", label: "à propos" },
    { to: "/fr/contact", label: "contact" },
  ],
} as const;

const LEGAL_NAV = {
  en: [
    { to: "/privacy", label: "privacy" },
    { to: "/terms", label: "terms" },
    { to: "/colophon", label: "colophon" },
  ],
  fr: [
    { to: "/fr/privacy", label: "confidentialité" },
    { to: "/fr/terms", label: "conditions" },
    { to: "/fr/colophon", label: "colophon" },
  ],
} as const;

export function SiteShell({ children, locale = "en" }: { children: ReactNode; locale?: Locale }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader locale={locale} />
      <main className="flex-1 w-full">{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}

function SiteHeader({ locale }: { locale: Locale }) {
  return (
    <header className="border-b border-rule">
      <div className="relative mx-auto max-w-5xl min-w-0 px-5 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3">
        <Link
          to={locale === "fr" ? "/fr" : "/"}
          className="group inline-flex items-baseline pr-8 sm:pr-0"
        >
          <span className="text-sm font-medium tracking-tight group-hover:underline underline-offset-4">
            nathan mike sidi bakari
          </span>
        </Link>
        <nav
          aria-label="Primary"
          className="flex min-w-0 items-center gap-x-4 gap-y-1 flex-wrap text-xs pr-8 sm:gap-x-5 sm:pr-8"
        >
          {NAV[locale].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-ink underline underline-offset-4" }}
              inactiveProps={{ className: "text-ink-soft hover:text-ink" }}
            >
              {item.label}
            </Link>
          ))}
          <span className="text-ink-faint">·</span>
          {ABOUT_CONTACT[locale].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-ink underline underline-offset-4" }}
              inactiveProps={{ className: "text-ink-soft hover:text-ink" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Search lives outside the nav, anchored top-right so the close ✕
            appears exactly where the magnifying glass was. */}
        <div className="absolute right-5 sm:right-8 top-5">
          <SearchTrigger locale={locale} />
        </div>
      </div>
    </header>
  );
}

function SiteFooter({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-rule mt-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-8 text-xs text-ink-soft">
        {/* Two columns: site links (left) · icons + copyright (right) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-6">
          {/* Top-left: sitemap */}
          <nav aria-label="Sitemap" className="flex flex-wrap gap-x-5 gap-y-2">
            {NAV[locale].map((item) => (
              <Link key={item.to} to={item.to} className="text-ink-soft hover:text-ink">
                {item.label}
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
              href={withBasePath("/rss.xml")}
              aria-label="RSS feed"
              className="text-ink-soft hover:text-ink"
            >
              <Rss size={14} strokeWidth={1.5} />
            </a>
            <LanguageSelector locale={locale} />
          </div>

          {/* Bottom-left: legal pages */}
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
            {LEGAL_NAV[locale].map((item) => (
              <Link key={item.to} to={item.to} className="text-ink-soft hover:text-ink">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Bottom-right: copyright */}
          <div className="sm:text-right">
            <span className="text-ink-faint">©</span> {year} · nathan mike sidi bakari ·{" "}
            <a
              href="https://www.thewebbutbeyond.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              powered by web+
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LanguageSelector({ locale }: { locale: Locale }) {
  const location = useLocation();
  const languages: Array<{ locale: Locale; flag: string; label: string }> = [
    { locale: "en", flag: "🇬🇧", label: "english" },
    { locale: "fr", flag: "🇫🇷", label: "français" },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={locale === "fr" ? "langue" : "language"}
          title={locale === "fr" ? "langue" : "language"}
          className="text-ink-soft hover:text-ink inline-flex cursor-pointer items-center"
        >
          <Globe2 size={14} strokeWidth={1.5} />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        sideOffset={8}
        collisionPadding={12}
        className="w-52 p-0 overflow-hidden text-xs"
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        <div className="border-b border-rule px-3 py-2 text-ink-faint">
          {locale === "fr" ? "langue" : "language"}
        </div>
        <div className="bg-popover text-popover-foreground">
          {languages.map((language) => (
            <a
              key={language.locale}
              href={withBasePath(localizedPath(language.locale, location.pathname))}
              className="flex items-center justify-between gap-3 px-3 py-2 text-ink-soft hover:bg-secondary/50 hover:text-ink"
            >
              <span className="inline-flex items-center gap-2">
                <span aria-hidden="true">{language.flag}</span>
                <span>{language.label}</span>
              </span>
              {language.locale === locale && (
                <Check
                  aria-label="selected"
                  size={12}
                  strokeWidth={1.5}
                  className="text-ink-faint"
                />
              )}
            </a>
          ))}
        </div>
      </PopoverContent>
    </Popover>
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
      {eyebrow && <div className="text-xs text-ink-faint mb-3 tracking-wide">{eyebrow}</div>}
      <h1 className="text-2xl sm:text-[1.75rem] font-medium tracking-tight text-ink">{title}</h1>
      {description && (
        <p className="mt-3 text-sm text-ink-soft max-w-2xl leading-relaxed">{description}</p>
      )}
    </header>
  );
}

export function MetaRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-[5.5rem_1fr] sm:grid-cols-[7rem_1fr] gap-x-4 text-xs leading-relaxed">
      <dt className="text-ink-faint">{label}</dt>
      <dd className="min-w-0 text-ink [overflow-wrap:anywhere]">{children}</dd>
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="text-ink-soft hover:text-ink text-[11px] tracking-tight">#{children}</span>
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
    <div className={`mx-auto max-w-5xl px-5 sm:px-8 py-10 sm:py-14 ${className}`}>{children}</div>
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
    <div
      className={`mx-auto max-w-3xl px-5 sm:px-8 py-10 sm:py-14 [overflow-wrap:anywhere] ${className}`}
    >
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
