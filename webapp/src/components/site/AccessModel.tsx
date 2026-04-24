import { Section } from "@/components/ui/Section";

const steps = [
  ["Public access", "Browse the platform, marketplace, docs, pricing, and examples before onboarding."],
  ["Application gate", "Apply for creator, business, developer, advertiser, publisher, or multi-role access."],
  ["Cloniq review", "Admins approve, reject, request more information, or assign limited permissions."],
  ["Workspace activation", "Approved roles unlock only the workspace capabilities that passed review."],
];

export function AccessModel() {
  return (
    <Section
      eyebrow="Trust"
      title="Real onboarding before serious access"
      description="Cloniq does not use fake KYC screens. Monetization, publishing, APIs, meeting avatars, ads, and payouts require a real application and review process."
    >
      <div className="grid gap-4 lg:grid-cols-4">
        {steps.map(([title, description], index) => (
          <article
            className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm"
            key={title}
          >
            <span className="text-sm font-bold text-[var(--brand)]">0{index + 1}</span>
            <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
