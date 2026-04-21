import { Link } from "@tanstack/react-router";
import { Artifact, COLLECTIONS } from "@/content/data";
import { fmtDateShort } from "./site-shell";

const collectionLabel = (slug: string) =>
  COLLECTIONS.find((c) => c.slug === slug)?.label ?? slug;

export function ArtifactList({ artifacts }: { artifacts: Artifact[] }) {
  if (!artifacts.length) {
    return (
      <p className="py-10 font-serif italic text-ink-faint">
        No entries yet in this part of the archive.
      </p>
    );
  }
  return (
    <ul className="divide-y divide-rule">
      {artifacts.map((a) => (
        <li key={a.slug}>
          <ArtifactRow artifact={a} />
        </li>
      ))}
    </ul>
  );
}

export function ArtifactRow({ artifact }: { artifact: Artifact }) {
  return (
    <Link
      to="/artifacts/$slug"
      params={{ slug: artifact.slug }}
      className="group block py-7 transition-colors hover:bg-paper-deep/40"
    >
      <div className="grid gap-4 md:grid-cols-[8.5rem_1fr_auto] md:items-baseline md:gap-8">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
          {fmtDateShort(artifact.date)}
        </div>
        <div className="min-w-0">
          <div className="flex items-baseline gap-3">
            <h3 className="font-display text-2xl leading-tight text-ink transition-colors group-hover:text-lamp md:text-[1.7rem]">
              {artifact.title}
            </h3>
            {artifact.milestone && (
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-lamp">
                ◆ Milestone
              </span>
            )}
          </div>
          <p className="mt-2 max-w-2xl font-serif text-[15px] leading-relaxed text-ink-soft">
            {artifact.summary}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
            <span>{artifact.id}</span>
            <span aria-hidden>·</span>
            <span>{artifact.type}</span>
            <span aria-hidden>·</span>
            <span>{artifact.collections.map(collectionLabel).join(" / ")}</span>
            {artifact.status !== "active" && (
              <>
                <span aria-hidden>·</span>
                <span className="italic normal-case tracking-normal">{artifact.status}</span>
              </>
            )}
          </div>
        </div>
        <div className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint md:block">
          Read →
        </div>
      </div>
    </Link>
  );
}

export function ArtifactCard({ artifact }: { artifact: Artifact }) {
  return (
    <Link
      to="/artifacts/$slug"
      params={{ slug: artifact.slug }}
      className="group block border-t border-rule pt-6"
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
        {artifact.id} · {fmtDateShort(artifact.date)}
      </div>
      <h3 className="mt-3 font-display text-2xl leading-tight text-ink transition-colors group-hover:text-lamp">
        {artifact.title}
      </h3>
      <p className="mt-2 font-serif text-[15px] leading-relaxed text-ink-soft">
        {artifact.summary}
      </p>
      <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
        {artifact.type} · {artifact.collections.map(collectionLabel).join(" / ")}
      </div>
    </Link>
  );
}
