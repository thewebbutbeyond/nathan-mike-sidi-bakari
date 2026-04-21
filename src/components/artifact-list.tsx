import { Link } from "@tanstack/react-router";
import {
  type Artifact,
  collectionLabels,
  formatDate,
} from "@/content/data";
import { cn } from "@/lib/utils";

const typeLabels: Record<Artifact["type"], string> = {
  project: "Project",
  essay: "Essay",
  talk: "Talk",
  memo: "Memo",
  company: "Company",
  investment: "Investment",
  photograph: "Photograph",
  recording: "Recording",
  "open-source": "Open source",
  paper: "Paper",
};

export function ArtifactRow({ artifact }: { artifact: Artifact }) {
  return (
    <li className="group border-b border-rule">
      <Link
        to="/artifacts/$slug"
        params={{ slug: artifact.slug }}
        className="grid grid-cols-12 items-baseline gap-4 py-5 transition-colors hover:bg-paper-deep/40 md:gap-6 md:py-6"
      >
        <div className="col-span-12 md:col-span-2">
          <div className="label-mono">{formatDate(artifact.date, "short")}</div>
          <div className="label-mono mt-1 text-ink-faint">{artifact.accession}</div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <h3 className="font-display text-xl leading-snug text-ink transition-colors group-hover:text-accent-ink md:text-[1.5rem]">
            {artifact.title}
          </h3>
          <p className="mt-2 font-serif text-[0.975rem] leading-relaxed text-ink-muted">
            {artifact.summary}
          </p>
        </div>
        <div className="col-span-12 flex flex-wrap items-baseline gap-x-3 gap-y-1 md:col-span-3 md:flex-col md:items-end md:gap-1 md:text-right">
          <span className="label-mono text-ink">{typeLabels[artifact.type]}</span>
          <span className="label-mono text-ink-faint">
            {artifact.collections.map((c) => collectionLabels[c]).join(" · ")}
          </span>
          {artifact.status && artifact.status !== "shipped" && (
            <span className="label-mono text-accent-ink">{artifact.status}</span>
          )}
        </div>
      </Link>
    </li>
  );
}

export function ArtifactList({
  artifacts,
  className,
}: {
  artifacts: Artifact[];
  className?: string;
}) {
  if (artifacts.length === 0) {
    return (
      <p className="border-y border-rule py-12 text-center font-serif italic text-ink-muted">
        No artifacts filed under this heading yet.
      </p>
    );
  }
  return (
    <ul className={cn("border-t border-rule", className)}>
      {artifacts.map((a) => (
        <ArtifactRow key={a.slug} artifact={a} />
      ))}
    </ul>
  );
}

export { typeLabels };
