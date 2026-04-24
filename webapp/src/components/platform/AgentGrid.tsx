import Link from "next/link";
import type { AgentListing } from "@/lib/platform/types";

type AgentGridProps = {
  agents: AgentListing[];
};

export function AgentGrid({ agents }: AgentGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {agents.map((agent) => (
        <article className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm" key={agent.id}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-[var(--brand)]">{agent.category}</p>
            <span className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand)]">
              {agent.trustTier}
            </span>
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">{agent.name}</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{agent.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {agent.modalities.map((modality) => (
              <span className="rounded-full bg-[var(--surface-muted)] px-3 py-1 text-xs font-semibold" key={modality}>
                {modality}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between gap-4">
            <p className="text-sm font-semibold">{agent.priceLabel}</p>
            <Link className="rounded-[56px] bg-[var(--brand)] px-4 py-2 text-sm font-semibold text-white" href={`/agent/${agent.slug}`}>
              View agent
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
