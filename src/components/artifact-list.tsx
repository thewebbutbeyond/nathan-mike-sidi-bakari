import { Link } from "@tanstack/react-router";
import { type Artifact, COLLECTIONS, formatDate } from "@/content/data";
import { cn } from "@/lib/utils";

/**
 * Catalog row — one artifact rendered as an institutional index entry.
 * Fixed-width accession + date columns, then title and tags.
 */
export function ArtifactRow({ artifact }: { artifact: Artifact }) {
  return (
    <Link
      to="/artifacts/$slug"
      params={{ slug: artifact.slug }}
      className="group grid grid-cols-[5.5rem_1fr] items-baseline gap-x-4 gap-y-1 border-b border-border py-5 transition-colors hover:bg-muted/40 sm:grid-cols-[6rem_6.5rem_1fr_auto] sm:gap-x-6"
    >
      <span className="accession order-1">{artifact.accession}</span>
      <span className="order-3 font-mono text-[0.72rem] text-muted-foreground sm:order-2">
        {formatDate(artifact.date)}
      </span>
      <div className="order-2 sm:order-3">
        <h3
          className="font-display text-[1.15rem] leading-snug tracking-tight text-foreground group-hover:text-foreground md:text-[1.25rem]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
        >
          {artifact.title}
        </h3>
        <p className="mt-1 max-w-2xl text-[0.85rem] leading-relaxed text-muted-foreground">
          {artifact.summary}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground">
          <span className="font-sans">{artifact.type}</span>
          <span aria-hidden>·</span>
          {artifact.collections.map((c) => (
            <span key={c} className="font-sans">
              {COLLECTIONS[c].label}
            </span>
          ))}
        </div>
      </div>
      <span className="order-4 hidden self-start font-mono text-[0.72rem] text-muted-foreground transition-colors group-hover:text-foreground sm:inline">
        →
      </span>
    </Link>
  );
}

/**
 * Catalog card — block layout for grids (Selected, Collection detail).
 */
export function ArtifactCard({
  artifact,
  feature,
}: {
  artifact: Artifact;
  feature?: boolean;
}) {
  return (
    <Link
      to="/artifacts/$slug"
      params={{ slug: artifact.slug }}
      className={cn(
        "group flex flex-col border border-border bg-background p-6 transition-colors hover:border-foreground/40",
        feature && "md:p-8",
      )}
    >
      <div className="flex items-center justify-between border-b border-border pb-3">
        <span className="accession">{artifact.accession}</span>
        <span className="font-mono text-[0.7rem] text-muted-foreground">
          {formatDate(artifact.date)}
        </span>
      </div>
      <h3
        className={cn(
          "mt-5 font-display tracking-tight",
          feature ? "text-[1.7rem] leading-[1.1] md:text-[2rem]" : "text-[1.3rem] leading-snug",
        )}
        style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
      >
        {artifact.title}
      </h3>
      <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-muted-foreground">
        {artifact.summary}
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
        <span>{artifact.type}</span>
        <span aria-hidden>·</span>
        {artifact.collections.map((c) => (
          <span key={c}>{COLLECTIONS[c].label}</span>
        ))}
      </div>
    </Link>
  );
}
