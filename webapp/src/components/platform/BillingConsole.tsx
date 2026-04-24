import type { BillingState } from "@/lib/platform/types";

type BillingConsoleProps = {
  billing: BillingState;
};

export function BillingConsole({ billing }: BillingConsoleProps) {
  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm">
          <p className="text-sm text-[var(--muted)]">Balance</p>
          <p className="mt-2 text-2xl font-semibold">{billing.balanceLabel}</p>
        </article>
        <article className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm">
          <p className="text-sm text-[var(--muted)]">Payout</p>
          <p className="mt-2 text-2xl font-semibold">{billing.payoutStatus}</p>
        </article>
        <article className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm">
          <p className="text-sm text-[var(--muted)]">Usage</p>
          <p className="mt-2 text-2xl font-semibold">{billing.usageLabel}</p>
        </article>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {billing.plans.map((plan) => (
          <article className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm" key={plan.name}>
            <p className="text-sm font-semibold text-[var(--brand)]">{plan.audience}</p>
            <h2 className="mt-2 text-xl font-semibold">{plan.name}</h2>
            <p className="mt-2 text-lg font-semibold">{plan.priceLabel}</p>
            <ul className="mt-4 grid gap-2 text-sm text-[var(--muted)]">
              {plan.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
