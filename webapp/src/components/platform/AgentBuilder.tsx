"use client";

import { useState } from "react";

export function AgentBuilder() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/agents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        category: formData.get("category"),
        description: formData.get("description"),
        priceLabel: formData.get("priceLabel"),
      }),
    });

    if (!response.ok) {
      setStatus("Agent could not be submitted for review.");
      return;
    }

    const body = (await response.json()) as { agent: { name: string } };
    event.currentTarget.reset();
    setStatus(`${body.agent.name} submitted for Cloniq review.`);
  }

  return (
    <form className="mt-8 grid gap-5 rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm" onSubmit={handleSubmit}>
      <label className="grid gap-2 text-sm font-semibold">
        Agent name
        <input className="rounded-xl border border-[var(--border)] px-4 py-3 font-normal" name="name" required />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        Category
        <input className="rounded-xl border border-[var(--border)] px-4 py-3 font-normal" name="category" required />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        Description
        <textarea className="min-h-28 rounded-xl border border-[var(--border)] px-4 py-3 font-normal" name="description" required />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        Price
        <input className="rounded-xl border border-[var(--border)] px-4 py-3 font-normal" name="priceLabel" placeholder="$0.05/query" required />
      </label>
      <button className="min-h-12 rounded-[56px] bg-[var(--brand)] px-5 text-sm font-semibold text-white" type="submit">
        Submit agent for review
      </button>
      {status ? <p className="text-sm font-semibold text-[var(--brand)]">{status}</p> : null}
    </form>
  );
}
