import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, SlidersHorizontal, X } from "lucide-react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
} from "@/components/ui/popover";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  ENTRIES,
  NOTES,
  ALL_TAGS,
  formatDate,
} from "@/content/data";

export function SearchTrigger() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const triggerRef = useRef<HTMLButtonElement>(null);

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

  const trigger = (
    <button
      ref={triggerRef}
      type="button"
      onClick={() => setOpen((v) => !v)}
      aria-label={open ? "Close search" : "Search"}
      title="Search (⌘K)"
      className="text-ink-soft hover:text-ink inline-flex items-center"
    >
      {open ? (
        <X size={14} strokeWidth={1.5} />
      ) : (
        <Search size={14} strokeWidth={1.5} className="-scale-x-100" />
      )}
    </button>
  );

  // Mobile / tablet: centered modal
  if (isMobile) {
    return (
      <>
        {trigger}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="overflow-hidden p-0 max-w-xl gap-0">
            <SearchPanel onClose={() => setOpen(false)} />
          </DialogContent>
        </Dialog>
      </>
    );
  }

  // Desktop: popover anchored to the icon
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverAnchor asChild>{trigger}</PopoverAnchor>
      <PopoverContent
        align="end"
        sideOffset={8}
        className="w-[28rem] p-0 overflow-hidden"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onInteractOutside={(e) => {
          // If the click is on the trigger button, let the button's onClick
          // handle toggling so we don't double-fire close + reopen.
          const target = e.target as Node | null;
          if (target && triggerRef.current?.contains(target)) {
            e.preventDefault();
          }
        }}
      >
        <SearchPanel onClose={() => setOpen(false)} />
      </PopoverContent>
    </Popover>
  );
}

const ALL_TYPES = Array.from(new Set(ENTRIES.map((e) => e.type))).sort();
const ALL_STATUSES = Array.from(new Set(ENTRIES.map((e) => e.status))).sort();

function SearchPanel({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [type, setType] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [tag, setTag] = useState<string | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const q = query.trim().toLowerCase();
  const hasFilter = !!(type || status || tag);

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
    if (type || status) return [];
    return NOTES.filter((n) => {
      if (q && !n.title.toLowerCase().includes(q)) return false;
      if (tag && !n.tags.includes(tag)) return false;
      return true;
    });
  }, [q, type, status, tag]);

  function go(fn: () => void) {
    onClose();
    setTimeout(fn, 0);
  }

  return (
    <div className="bg-popover text-popover-foreground">
      {/* search input + filter toggle */}
      <div className="flex items-center border-b border-rule px-3">
        <button
          type="button"
          onClick={() => setFiltersOpen((v) => !v)}
          aria-label="Toggle filters"
          aria-expanded={filtersOpen}
          title="Filters"
          className={
            "mr-2 inline-flex items-center transition-colors " +
            (filtersOpen || hasFilter
              ? "text-ink"
              : "text-ink-faint hover:text-ink")
          }
        >
          <SlidersHorizontal size={14} strokeWidth={1.5} />
          {hasFilter && (
            <span className="ml-1 text-[10px] tabular-nums">
              {[type, status, tag].filter(Boolean).length}
            </span>
          )}
        </button>
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search…"
          className="flex h-11 w-full bg-transparent py-3 text-sm outline-none placeholder:text-ink-faint"
        />
      </div>

      {/* filters (collapsed by default) */}
      {filtersOpen && (
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
      )}

      {/* results */}
      <div className="max-h-[50vh] overflow-y-auto">
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
    </div>
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
