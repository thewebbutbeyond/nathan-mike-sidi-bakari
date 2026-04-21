import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  ENTRIES,
  NOTES,
  COLLECTIONS,
  ALL_TAGS,
  lensLabel,
  formatDate,
  type Collection,
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

function SearchPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const q = query.trim().toLowerCase();

  const { entries, notes, tags, lenses, types, statuses } = useMemo(() => {
    if (!q) {
      return {
        entries: ENTRIES.slice(0, 6),
        notes: NOTES.slice(0, 4),
        tags: [] as string[],
        lenses: [] as { slug: Collection; label: string }[],
        types: [] as string[],
        statuses: [] as string[],
      };
    }

    const entries = ENTRIES.filter((e) => {
      const hay = [
        e.title,
        e.summary,
        e.type,
        e.status,
        ...e.tags,
        ...e.collections.map((c) => lensLabel(c)),
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    }).slice(0, 8);

    const notes = NOTES.filter((n) => {
      const hay = [n.title, n.summary, ...n.tags].join(" ").toLowerCase();
      return hay.includes(q);
    }).slice(0, 6);

    const tags = ALL_TAGS.filter((t) => t.toLowerCase().includes(q)).slice(0, 8);

    const lenses = COLLECTIONS.filter(
      (c) =>
        c.label.toLowerCase().includes(q) ||
        c.slug.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q),
    ).map((c) => ({ slug: c.slug, label: c.label }));

    const allTypes = Array.from(new Set(ENTRIES.map((e) => e.type)));
    const types = allTypes.filter((t) => t.toLowerCase().includes(q)).slice(0, 6);

    const allStatuses = Array.from(new Set(ENTRIES.map((e) => e.status)));
    const statuses = allStatuses.filter((s) => s.toLowerCase().includes(q));

    return { entries, notes, tags, lenses, types, statuses };
  }, [q]);

  function go(fn: () => void) {
    onOpenChange(false);
    // defer so dialog unmounts cleanly before nav
    setTimeout(fn, 0);
  }

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        placeholder="search entries, notes, tags, types, lenses…"
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        <CommandEmpty>no matches.</CommandEmpty>

        {entries.length > 0 && (
          <CommandGroup heading={q ? "entries" : "recent entries"}>
            {entries.map((e) => (
              <CommandItem
                key={`e-${e.slug}`}
                value={`entry ${e.title} ${e.tags.join(" ")} ${e.type} ${e.status}`}
                onSelect={() =>
                  go(() =>
                    navigate({
                      to: "/entries/$slug",
                      params: { slug: e.slug },
                      search: { from: "" },
                    }),
                  )
                }
              >
                <div className="flex w-full items-baseline justify-between gap-3">
                  <span className="truncate">{e.title}</span>
                  <span className="text-[11px] text-ink-faint shrink-0 tabular-nums">
                    {formatDate(e.date)}
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        )}

        {notes.length > 0 && (
          <>
            <CommandSeparator />
            <CommandGroup heading={q ? "notes" : "recent notes"}>
              {notes.map((n) => (
                <CommandItem
                  key={`n-${n.slug}`}
                  value={`note ${n.title} ${n.tags.join(" ")}`}
                  onSelect={() =>
                    go(() =>
                      navigate({
                        to: "/notes/$slug",
                        params: { slug: n.slug },
                      }),
                    )
                  }
                >
                  <div className="flex w-full items-baseline justify-between gap-3">
                    <span className="truncate">{n.title}</span>
                    <span className="text-[11px] text-ink-faint shrink-0 tabular-nums">
                      {formatDate(n.date)}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}

        {lenses.length > 0 && (
          <>
            <CommandSeparator />
            <CommandGroup heading="lenses">
              {lenses.map((l) => (
                <CommandItem
                  key={`l-${l.slug}`}
                  value={`lens ${l.label} ${l.slug}`}
                  onSelect={() =>
                    go(() =>
                      navigate({
                        to: "/lenses/$slug",
                        params: { slug: l.slug },
                      }),
                    )
                  }
                >
                  <span>{l.label}</span>
                  <span className="ml-auto text-[11px] text-ink-faint">
                    /lenses/{l.slug}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}

        {tags.length > 0 && (
          <>
            <CommandSeparator />
            <CommandGroup heading="tags">
              {tags.map((t) => {
                const matchedEntries = ENTRIES.filter((e) => e.tags.includes(t));
                const matchedNotes = NOTES.filter((n) => n.tags.includes(t));
                const count = matchedEntries.length + matchedNotes.length;
                return (
                  <CommandItem
                    key={`t-${t}`}
                    value={`tag ${t}`}
                    onSelect={() => setQuery(t)}
                  >
                    <span>#{t}</span>
                    <span className="ml-auto text-[11px] text-ink-faint">
                      {count} {count === 1 ? "match" : "matches"}
                    </span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </>
        )}

        {types.length > 0 && (
          <>
            <CommandSeparator />
            <CommandGroup heading="types">
              {types.map((t) => (
                <CommandItem
                  key={`ty-${t}`}
                  value={`type ${t}`}
                  onSelect={() => setQuery(t)}
                >
                  <span>{t}</span>
                  <span className="ml-auto text-[11px] text-ink-faint">type</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}

        {statuses.length > 0 && (
          <>
            <CommandSeparator />
            <CommandGroup heading="status">
              {statuses.map((s) => (
                <CommandItem
                  key={`s-${s}`}
                  value={`status ${s}`}
                  onSelect={() => setQuery(s)}
                >
                  <span>{s}</span>
                  <span className="ml-auto text-[11px] text-ink-faint">status</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}
      </CommandList>
    </CommandDialog>
  );
}
