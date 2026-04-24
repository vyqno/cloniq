import type { OnchainState } from "@/lib/platform/types";

type OnchainConsoleProps = {
  onchain: OnchainState;
};

export function OnchainConsole({ onchain }: OnchainConsoleProps) {
  return (
    <div className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-[var(--brand)]">{onchain.chain}</p>
          <h2 className="mt-2 text-2xl font-semibold">Onchain registry readiness</h2>
        </div>
        <span className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand)]">
          {onchain.registryStatus}
        </span>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <h3 className="font-semibold">Contracts</h3>
          <ul className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
            {onchain.contracts.map((contract) => (
              <li key={contract}>{contract}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Attestations</h3>
          <ul className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
            {onchain.attestations.map((attestation) => (
              <li key={attestation}>{attestation}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
