import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, X } from "lucide-react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  ENTRIES,
  NOTES,
  ALL_TAGS,
  formatDate,
} from "@/content/data";

export function SearchTrigger() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      const typing =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      if (e.key === "/" && !typing) {
        e.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search"
        title="Search (⌘K)"
        className="text-ink-faint hover:text-ink inline-flex items-center"
      >
        <Search size={14} strokeWidth={1.5} className="-scale-x-100" />
      </button>
      <SearchPalette open={open} onOpenChange={setOpen} />
    </>
  );
}

const ALL_TYPES = Array.from(new Set(ENTRIES.map((e) => e.type))).sort();
const ALL_STATUSES = Array.from(new Set(ENTRIES.map((e) => e.status))).sort();

function SearchPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [type, setType] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [tag, setTag] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setType(null);
      setStatus(null);
      setTag(null);
    }
  }, [open]);

  const q = query.trim().toLowerCase();

  const entries = useMemo(() => {
    return ENTRIES.filter((e) => {
      if (q && !e.title.toLowerCase().includes(q)) return false;
      if (type && e.type !== type) return false;
      if (status && e.status !== status) return false;
      if (tag && !e.tags.includes(tag)) return false;
      return true;
    });
  }, [q, type, status, tag]);

  const notes = useMemo(() => {
    // Notes only have titles + tags. Hide them when an entry-only filter is set.
    if (type || status) return [];
    return NOTES.filter((n) => {
      if (q && !n.title.toLowerCase().includes(q)) return false;
      if (tag && !n.tags.includes(tag)) return false;
      return true;
    });
  }, [q, type, status, tag]);

  function go(fn: () => void) {
    onOpenChange(false);
    setTimeout(fn, 0);
  }

  const hasFilter = !!(type || status || tag);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden p-0 max-w-xl gap-0">
        {/* search input */}
        <div className="flex items-center border-b border-rule px-3">
          <Search size={14} strokeWidth={1.5} className="mr-2 text-ink-faint -scale-x-100" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search by title…"
            className="flex h-11 w-full bg-transparent py-3 text-sm outline-none placeholder:text-ink-faint"
          />
        </div>

        {/* filters */}
        <div className="border-b border-rule px-3 py-3 space-y-2 max-h-[40vh] overflow-y-auto">
          <FilterRow
            label="type"
            options={ALL_TYPES}
            value={type}
            onChange={setType}
          />
          <FilterRow
            label="status"
            options={ALL_STATUSES}
            value={status}
            onChange={setStatus}
          />
          <FilterRow
            label="tag"
            options={ALL_TAGS}
            value={tag}
            onChange={setTag}
            renderLabel={(t) => `#${t}`}
          />
          {hasFilter && (
            <button
              type="button"
              onClick={() => {
                setType(null);
                setStatus(null);
                setTag(null);
              }}
              className="text-[11px] text-ink-faint hover:text-ink inline-flex items-center gap-1"
            >
              <X size={11} strokeWidth={1.5} /> clear filters
            </button>
          )}
        </div>

        {/* results */}
        <div className="max-h-[45vh] overflow-y-auto">
          {entries.length === 0 && notes.length === 0 ? (
            <div className="px-4 py-8 text-center text-sm text-ink-soft">
              no matches.
            </div>
          ) : (
            <div className="py-2">
              {entries.length > 0 && (
                <ResultGroup heading={`entries (${entries.length})`}>
                  {entries.map((e) => (
                    <ResultRow
                      key={`e-${e.slug}`}
                      title={e.title}
                      meta={`${e.type} · ${e.status}`}
                      date={formatDate(e.date)}
                      onClick={() =>
                        go(() =>
                          navigate({
                            to: "/entries/$slug",
                            params: { slug: e.slug },
                            search: { from: "" },
                          }),
                        )
                      }
                    />
                  ))}
                </ResultGroup>
              )}
              {notes.length > 0 && (
                <ResultGroup heading={`notes (${notes.length})`}>
                  {notes.map((n) => (
                    <ResultRow
                      key={`n-${n.slug}`}
                      title={n.title}
                      meta="note"
                      date={formatDate(n.date)}
                      onClick={() =>
                        go(() =>
                          navigate({
                            to: "/notes/$slug",
                            params: { slug: n.slug },
                          }),
                        )
                      }
                    />
                  ))}
                </ResultGroup>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function FilterRow({
  label,
  options,
  value,
  onChange,
  renderLabel,
}: {
  label: string;
  options: string[];
  value: string | null;
  onChange: (v: string | null) => void;
  renderLabel?: (v: string) => string;
}) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="text-[10px] tracking-[0.08em] uppercase text-ink-faint w-12 shrink-0">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {options.map((o) => {
          const active = value === o;
          return (
            <button
              key={o}
              type="button"
              onClick={() => onChange(active ? null : o)}
              className={
                "text-[11px] px-1.5 py-0.5 rounded-sm border transition-colors " +
                (active
                  ? "border-ink text-ink bg-secondary"
                  : "border-rule text-ink-soft hover:text-ink hover:border-ink-faint")
              }
            >
              {renderLabel ? renderLabel(o) : o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ResultGroup({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="px-2 pb-2">
      <div className="px-2 py-1 text-[10px] tracking-[0.08em] uppercase text-ink-faint">
        {heading}
      </div>
      <ul>{children}</ul>
    </div>
  );
}

function ResultRow({
  title,
  meta,
  date,
  onClick,
}: {
  title: string;
  meta: string;
  date: string;
  onClick: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className="w-full text-left px-2 py-2 rounded-sm hover:bg-secondary/60 transition-colors"
      >
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-sm text-ink truncate">{title}</span>
          <span className="text-[11px] text-ink-faint shrink-0 tabular-nums">
            {date}
          </span>
        </div>
        <div className="text-[11px] text-ink-faint mt-0.5">{meta}</div>
      </button>
    </li>
  );
}
