import { Link } from "@tanstack/react-router";
import { Tag } from "@/components/site-shell";
import { type Entry, formatDate, lensLabels } from "@/content/data";

export function EntryList({
  entries,
  from = "",
}: {
  entries: Entry[];
  from?: string;
}) {
  if (entries.length === 0) {
    return (
      <div className="border-t border-rule">
        <p className="px-1 py-8 text-sm text-ink-soft">No entries yet.</p>
      </div>
    );
  }

  return (
    <ul className="border-t border-rule">
      {entries.map((a) => (
        <li key={a.slug} className="border-b border-rule">
          <Link
            to="/entries/$slug"
            params={{ slug: a.slug }}
            search={{ from }}
            className="block px-1 py-4 hover:bg-secondary/40 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-6">
              <time className="text-xs text-ink-faint sm:w-24 shrink-0 tabular-nums">
                {formatDate(a.date)}
              </time>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <h3 className="text-sm text-ink font-medium">{a.title}</h3>
                  {a.selected && (
                    <span className="text-[10px] tracking-wide text-accent">
                      ◆ chef-d’œuvre
                    </span>
                  )}
                </div>
                <div className="mt-1 text-[11px] text-ink-faint flex items-center gap-2 flex-wrap">
                  <span>{a.type}</span>
                  <span>·</span>
                  <span>{a.status}</span>
                  <span>·</span>
                  <span>{lensLabels(a.collections).join(" / ")}</span>
                </div>
                <p className="mt-1.5 text-xs text-ink-soft leading-relaxed max-w-2xl">
                  {a.summary}
                </p>
                {a.tags.length > 0 && (
                  <div className="mt-1.5 flex gap-2 flex-wrap">
                    {a.tags.slice(0, 5).map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
