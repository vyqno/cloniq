"use client";

import { useState } from "react";
import type { Campaign } from "@/lib/platform/types";

type AdsConsoleProps = {
  initialCampaigns: Campaign[];
};

export function AdsConsole({ initialCampaigns }: AdsConsoleProps) {
  const [campaigns, setCampaigns] = useState(initialCampaigns);
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/campaigns", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: formData.get("name"), budgetLabel: formData.get("budgetLabel") }),
    });

    if (!response.ok) {
      setStatus("Campaign could not be created.");
      return;
    }

    const body = (await response.json()) as { campaign: Campaign };
    setCampaigns((current) => [body.campaign, ...current]);
    event.currentTarget.reset();
    setStatus(`${body.campaign.name} sent to campaign review.`);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <form className="grid gap-4 rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm" onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold">Create campaign</h2>
        <input className="rounded-xl border border-[var(--border)] px-4 py-3" name="name" placeholder="Campaign name" required />
        <input className="rounded-xl border border-[var(--border)] px-4 py-3" name="budgetLabel" placeholder="$500" required />
        <button className="min-h-12 rounded-[56px] bg-[var(--brand)] px-5 text-sm font-semibold text-white" type="submit">
          Send to review
        </button>
        {status ? <p className="text-sm font-semibold text-[var(--brand)]">{status}</p> : null}
      </form>
      <div className="grid gap-4">
        {campaigns.map((campaign) => (
          <article className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm" key={campaign.id}>
            <h3 className="text-lg font-semibold">{campaign.name}</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">Budget: {campaign.budgetLabel}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">Placement: {campaign.placement}</p>
            <span className="mt-4 inline-flex rounded-full bg-[var(--surface-muted)] px-3 py-1 text-xs font-semibold">{campaign.status}</span>
          </article>
        ))}
      </div>
    </div>
  );
}
