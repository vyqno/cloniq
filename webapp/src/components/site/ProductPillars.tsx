import { productPillars } from "@/lib/product";
import { Section } from "@/components/ui/Section";

export function ProductPillars() {
  return (
    <Section
      eyebrow="Platform"
      title="Every side of the AI business economy in one system"
      description="Cloniq is designed as an ecosystem from day one: marketplace, business tools, meeting avatars, APIs, ads, rewards, and trust controls."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {productPillars.map((pillar) => (
          <article
            className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm"
            key={pillar.title}
          >
            <h3 className="text-lg font-semibold text-[var(--foreground)]">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{pillar.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {pillar.capabilities.map((capability) => (
                <span
                  className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand)]"
                  key={capability}
                >
                  {capability}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
