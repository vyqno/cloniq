"use client";

import { useState } from "react";
import type { DeveloperKey } from "@/lib/platform/types";

type DeveloperKeyConsoleProps = {
  initialKeys: DeveloperKey[];
};

export function DeveloperKeyConsole({ initialKeys }: DeveloperKeyConsoleProps) {
  const [keys, setKeys] = useState(initialKeys);
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/developer-keys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ label: formData.get("label") }),
    });

    if (!response.ok) {
      setStatus("Developer key could not be created.");
      return;
    }

    const body = (await response.json()) as { developerKey: DeveloperKey };
    setKeys((current) => [body.developerKey, ...current]);
    event.currentTarget.reset();
    setStatus(`${body.developerKey.label} created with limited scopes.`);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <form className="grid gap-4 rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm" onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold">Create API key</h2>
        <input className="rounded-xl border border-[var(--border)] px-4 py-3" name="label" placeholder="Production MCP key" required />
        <button className="min-h-12 rounded-[56px] bg-[var(--brand)] px-5 text-sm font-semibold text-white" type="submit">
          Create limited key
        </button>
        {status ? <p className="text-sm font-semibold text-[var(--brand)]">{status}</p> : null}
      </form>
      <div className="grid gap-4">
        {keys.map((key) => (
          <article className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm" key={key.id}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-semibold">{key.label}</h3>
              <span className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand)]">{key.status}</span>
            </div>
            <p className="mt-3 font-mono text-sm">{key.keyPreview}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">{key.usageLabel}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
              {key.scopes.join(" / ")}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
