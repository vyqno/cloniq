import { roadmapPhases } from "@/lib/product";
import { Section } from "@/components/ui/Section";

export function Roadmap() {
  return (
    <Section
      eyebrow="Build path"
      title="Designed for a multi-phase platform build"
      description="The public product starts with foundation and access control, then expands into creator, business, developer, meeting, payment, and ads systems."
    >
      <div className="rounded-[var(--radius)] border border-[var(--border)] bg-white shadow-sm">
        {roadmapPhases.map((phase, index) => (
          <div
            className="grid gap-4 border-b border-[var(--border)] p-6 last:border-b-0 md:grid-cols-[7rem_1fr]"
            key={phase.phase}
          >
            <div className="text-sm font-bold text-[var(--brand)]">Phase {phase.phase}</div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">{phase.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{phase.description}</p>
              {index === 0 ? (
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--success)]">
                  In progress
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
