import { type KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, SlidersHorizontal, X } from "lucide-react";

import { Popover, PopoverAnchor, PopoverContent } from "@/components/ui/popover";
import { ENTRIES, NOTES, ALL_TAGS, formatDate, lensLabels } from "@/content/data";

export function SearchTrigger() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      const typing =
        target &&
        (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);

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

  // Single popover anchored to the trigger on every viewport so the close
  // ✕ replaces the magnifying glass in place.
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverAnchor asChild>{trigger}</PopoverAnchor>
      <PopoverContent
        align="end"
        sideOffset={8}
        collisionPadding={12}
        className="w-[calc(100vw-2rem)] sm:w-[28rem] p-0 overflow-hidden"
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

function matchesQuery(values: string[], query: string) {
  return values.some((value) => value.toLowerCase().includes(query));
}

function SearchPanel({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [type, setType] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [tag, setTag] = useState<string | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const q = query.trim().toLowerCase();
  const hasFilter = !!(type || status || tag);

  const entries = useMemo(() => {
    return ENTRIES.filter((e) => {
      if (
        q &&
        !matchesQuery([e.title, e.summary, e.type, e.status, ...e.tags, ...lensLabels(e.lenses)], q)
      ) {
        return false;
      }
      if (type && e.type !== type) return false;
      if (status && e.status !== status) return false;
      if (tag && !e.tags.includes(tag)) return false;
      return true;
    });
  }, [q, type, status, tag]);

  const notes = useMemo(() => {
    if (type || status) return [];
    return NOTES.filter((n) => {
      if (q && !matchesQuery([n.title, n.summary, ...n.tags], q)) return false;
      if (tag && !n.tags.includes(tag)) return false;
      return true;
    });
  }, [q, type, status, tag]);

  const resultCount = entries.length + notes.length;

  useEffect(() => {
    setActiveIndex(0);
  }, [query, type, status, tag]);

  function go(fn: () => void) {
    onClose();
    setTimeout(fn, 0);
  }

  function selectResult(index: number) {
    if (index < 0 || index >= resultCount) return;

    if (index < entries.length) {
      const entry = entries[index];
      go(() =>
        navigate({
          to: "/entries/$slug",
          params: { slug: entry.slug },
          search: { from: "" },
        }),
      );
      return;
    }

    const note = notes[index - entries.length];
    go(() =>
      navigate({
        to: "/notes/$slug",
        params: { slug: note.slug },
      }),
    );
  }

  function onPanelKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (resultCount === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % resultCount);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => (index - 1 + resultCount) % resultCount);
      return;
    }

    if (event.key === "Enter") {
      const target = event.target as HTMLElement | null;
      const canSelectResult =
        target?.tagName === "INPUT" || Boolean(target?.closest("[data-search-result]"));

      if (!canSelectResult) return;

      event.preventDefault();
      selectResult(activeIndex);
    }
  }

  return (
    <div className="bg-popover text-popover-foreground" onKeyDown={onPanelKeyDown}>
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
            (filtersOpen || hasFilter ? "text-ink" : "text-ink-faint hover:text-ink")
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
          <FilterRow label="type" options={ALL_TYPES} value={type} onChange={setType} />
          <FilterRow label="status" options={ALL_STATUSES} value={status} onChange={setStatus} />
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
          <div className="px-4 py-8 text-center text-sm text-ink-soft">no matches.</div>
        ) : (
          <div className="py-2">
            {entries.length > 0 && (
              <ResultGroup heading={`entries (${entries.length})`}>
                {entries.map((e, index) => (
                  <ResultRow
                    key={`e-${e.slug}`}
                    title={e.title}
                    meta={`${e.type} · ${e.status}`}
                    date={formatDate(e.date)}
                    active={activeIndex === index}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => selectResult(index)}
                  />
                ))}
              </ResultGroup>
            )}
            {notes.length > 0 && (
              <ResultGroup heading={`notes (${notes.length})`}>
                {notes.map((n, index) => {
                  const resultIndex = entries.length + index;
                  return (
                    <ResultRow
                      key={`n-${n.slug}`}
                      title={n.title}
                      meta="note"
                      date={formatDate(n.date)}
                      active={activeIndex === resultIndex}
                      onMouseEnter={() => setActiveIndex(resultIndex)}
                      onClick={() => selectResult(resultIndex)}
                    />
                  );
                })}
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

function ResultGroup({ heading, children }: { heading: string; children: React.ReactNode }) {
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
  active,
  onMouseEnter,
  onClick,
}: {
  title: string;
  meta: string;
  date: string;
  active: boolean;
  onMouseEnter: () => void;
  onClick: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        data-search-result="true"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        aria-selected={active}
        className={
          "w-full text-left px-2 py-2 rounded-sm transition-colors " +
          (active ? "bg-secondary/70" : "hover:bg-secondary/60")
        }
      >
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-sm text-ink truncate">{title}</span>
          <span className="text-[11px] text-ink-faint shrink-0 tabular-nums">{date}</span>
        </div>
        <div className="text-[11px] text-ink-faint mt-0.5">{meta}</div>
      </button>
    </li>
  );
}
