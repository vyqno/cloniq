import type { TrustState } from "@/lib/platform/types";

type TrustConsoleProps = {
  trust: TrustState;
};

export function TrustConsole({ trust }: TrustConsoleProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <article className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm">
        <p className="text-sm text-[var(--muted)]">KYC/KYB</p>
        <p className="mt-2 text-2xl font-semibold">{trust.kycStatus}</p>
      </article>
      <article className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm">
        <p className="text-sm text-[var(--muted)]">Risk</p>
        <p className="mt-2 text-2xl font-semibold">{trust.riskScore}</p>
      </article>
      <article className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm">
        <p className="text-sm text-[var(--muted)]">Moderation queue</p>
        <p className="mt-2 text-2xl font-semibold">{trust.moderationQueue} items</p>
      </article>
      <article className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm">
        <p className="text-sm text-[var(--muted)]">Audit trail</p>
        <ul className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
          {trust.auditEvents.map((event) => (
            <li key={event}>{event}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}
