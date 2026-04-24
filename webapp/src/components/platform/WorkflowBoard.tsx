"use client";

import { useState } from "react";
import type { WorkflowTemplate } from "@/lib/platform/types";

type WorkflowBoardProps = {
  initialWorkflows: WorkflowTemplate[];
};

export function WorkflowBoard({ initialWorkflows }: WorkflowBoardProps) {
  const [workflows, setWorkflows] = useState(initialWorkflows);
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/workflows", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        trigger: formData.get("trigger"),
        action: formData.get("action"),
      }),
    });

    if (!response.ok) {
      setStatus("Workflow could not be created.");
      return;
    }

    const body = (await response.json()) as { workflow: WorkflowTemplate };
    setWorkflows((current) => [body.workflow, ...current]);
    event.currentTarget.reset();
    setStatus(`${body.workflow.name} saved as a draft workflow.`);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <form className="grid gap-4 rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm" onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold">No-code workflow builder</h2>
        <input className="rounded-xl border border-[var(--border)] px-4 py-3" name="name" placeholder="Workflow name" required />
        <input className="rounded-xl border border-[var(--border)] px-4 py-3" name="trigger" placeholder="Trigger, e.g. API webhook" required />
        <input className="rounded-xl border border-[var(--border)] px-4 py-3" name="action" placeholder="Action, e.g. call customer" required />
        <button className="min-h-12 rounded-[56px] bg-[var(--brand)] px-5 text-sm font-semibold text-white" type="submit">
          Save workflow
        </button>
        {status ? <p className="text-sm font-semibold text-[var(--brand)]">{status}</p> : null}
      </form>
      <div className="grid gap-4">
        {workflows.map((workflow) => (
          <article className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm" key={workflow.id}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-semibold">{workflow.name}</h3>
              <span className="rounded-full bg-[var(--surface-muted)] px-3 py-1 text-xs font-semibold">{workflow.status}</span>
            </div>
            <p className="mt-3 text-sm text-[var(--muted)]">Trigger: {workflow.trigger}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">Action: {workflow.action}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">Review: {workflow.review}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
