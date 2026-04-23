import { createFileRoute, Link } from "@tanstack/react-router";

import { Container, SiteShell, Tag } from "@/components/site-shell";
import { EntryList } from "@/components/entry-list";
import {
  entries,
  formatLocalizedDate,
  notes,
  sortedLocalizedEntries,
  sortedLocalizedNotes,
} from "@/content/localized";

export const Route = createFileRoute("/fr/")({
  head: () => ({
    meta: [
      { title: "Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content:
          "archive personnelle de travaux, notes et traces entre ingénierie, entrepreneuriat, investissement, art et réflexion.",
      },
      { property: "og:title", content: "Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content:
          "archive personnelle de travaux, notes et traces entre ingénierie, entrepreneuriat, investissement, art et réflexion.",
      },
    ],
  }),
  component: HomePage,
});

const ROUTES = [
  {
    to: "/fr/chefs-doeuvre" as const,
    label: "chefs-d’œuvre",
    description: "Entrées marquées depuis la chronologie.",
  },
  {
    to: "/fr/timeline" as const,
    label: "chronologie",
    description: "Le plus récent en premier.",
  },
  {
    to: "/fr/lenses" as const,
    label: "regards",
    description: "Quatre manières de traverser la même archive.",
  },
  {
    to: "/fr/notes" as const,
    label: "notes",
    description: "Réflexions irrégulières, structure légère.",
  },
];

function HomePage() {
  const allEntries = entries("fr");
  const allNotes = notes("fr");
  const recent = sortedLocalizedEntries("fr").slice(0, 6);
  const latestNotes = sortedLocalizedNotes("fr").slice(0, 3);

  const contentYears = [
    ...allEntries.map((entry) => entry.date),
    ...allNotes.map((note) => note.date),
  ]
    .map((date) => date.slice(0, 4))
    .filter((year) => /^\d{4}$/.test(year))
    .sort();
  const years = new Set(contentYears);
  const earliest = contentYears[0];

  const stats = [
    { label: "entrées", value: allEntries.length },
    { label: "notes", value: allNotes.length },
    { label: "années", value: years.size, sub: earliest ? `depuis ${earliest}` : "pas encore" },
  ];

  return (
    <SiteShell locale="fr">
      <Container>
        <section className="mb-10 max-w-2xl">
          <div className="text-xs text-ink-faint mb-4 tracking-wide">
            carnet personnel · {earliest ? `tenu depuis ${earliest}` : "nouvellement ouvert"}
          </div>
          <h1 className="text-xl sm:text-2xl font-medium tracking-tight leading-relaxed text-ink">
            Une archive personnelle de travaux, notes et traces.
          </h1>
          <p className="mt-4 text-sm text-ink-soft leading-relaxed">
            Je garde cet espace pour me souvenir de ce que j'ai fait, de ce que je pensais, et de la
            manière dont les fils se croisent. Il est ouvert à toute personne qui veut s'y promener.
          </p>
        </section>

        <section className="mb-16">
          <dl className="grid grid-cols-3 border-y border-rule">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-4 py-4 ${i < stats.length - 1 ? "border-r border-rule" : ""}`}
              >
                <dt className="text-[11px] tracking-[0.08em] text-ink-faint">{s.label}</dt>
                <dd className="mt-1.5 flex items-baseline gap-2">
                  <span className="text-xl font-medium tabular-nums text-ink">
                    {s.value.toString().padStart(2, "0")}
                  </span>
                  {s.sub && <span className="text-[11px] text-ink-faint">{s.sub}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mb-16">
          <SectionHeading label="points de départ" />
          <ul className="grid grid-cols-1 sm:grid-cols-2 border-t border-rule">
            {ROUTES.map((r, i) => (
              <li key={r.to} className={`border-b border-rule ${i % 2 === 0 ? "sm:border-r" : ""}`}>
                <Link
                  to={r.to}
                  className="group block px-4 py-5 hover:bg-secondary/60 transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm font-medium text-ink">→ {r.label}</span>
                  </div>
                  <p className="mt-1.5 text-xs text-ink-soft leading-relaxed">{r.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <SectionHeading
            label="entrées récentes"
            right={
              <Link
                to="/fr/timeline"
                className="text-xs text-ink-soft hover:text-ink underline underline-offset-4"
              >
                chronologie →
              </Link>
            }
          />
          <EntryList locale="fr" entries={recent} />
        </section>

        <section>
          <SectionHeading
            label="depuis les notes"
            right={
              <Link
                to="/fr/notes"
                className="text-xs text-ink-soft hover:text-ink underline underline-offset-4"
              >
                notes →
              </Link>
            }
          />
          <ul className="border-t border-rule">
            {latestNotes.map((n) => (
              <li key={n.slug} className="border-b border-rule">
                <Link
                  to="/fr/notes/$slug"
                  params={{ slug: n.slug }}
                  className="block px-1 py-4 hover:bg-secondary/40 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-6">
                    <time className="text-xs text-ink-faint sm:w-24 shrink-0 tabular-nums">
                      {formatLocalizedDate(n.date, "fr")}
                    </time>
                    <div className="min-w-0">
                      <div className="text-sm text-ink font-medium">{n.title}</div>
                      <p className="mt-1 text-xs text-ink-soft leading-relaxed">{n.summary}</p>
                      <div className="mt-1.5 flex items-center gap-3 text-[11px] text-ink-faint">
                        <span>{n.readingMinutes} min de lecture</span>
                        <span>·</span>
                        <span className="flex gap-2">
                          {n.tags.slice(0, 3).map((t) => (
                            <Tag key={t}>{t}</Tag>
                          ))}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </SiteShell>
  );
}

function SectionHeading({ label, right }: { label: string; right?: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between mb-3">
      <h2 className="text-xs tracking-[0.08em] text-ink-faint">{label}</h2>
      {right}
    </div>
  );
}
