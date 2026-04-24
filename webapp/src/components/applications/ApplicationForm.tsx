"use client";

import { useState } from "react";
import { accessRoles, type AccessRole } from "@/lib/applications/types";

const roleLabels: Record<AccessRole, string> = {
  creator: "Creator",
  business: "Business",
  developer: "Developer",
  advertiser: "Advertiser",
  publisher: "Publisher",
};

export function ApplicationForm() {
  const [roles, setRoles] = useState<AccessRole[]>([]);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function toggleRole(role: AccessRole) {
    setRoles((current) =>
      current.includes(role) ? current.filter((item) => item !== role) : [...current, role],
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        applicantName: formData.get("applicantName"),
        email: formData.get("email"),
        organization: formData.get("organization"),
        roles,
        useCase: formData.get("useCase"),
        links: formData.get("links"),
        expectedUsage: formData.get("expectedUsage"),
      }),
    });

    if (!response.ok) {
      const body = (await response.json()) as { errors?: string[] };
      setStatus(body.errors?.join(" ") || "Application could not be submitted.");
      setIsSubmitting(false);
      return;
    }

    const body = (await response.json()) as { application: { id: string } };
    event.currentTarget.reset();
    setRoles([]);
    setStatus(`Application ${body.application.id} submitted for Cloniq review.`);
    setIsSubmitting(false);
  }

  return (
    <form
      className="mt-8 grid gap-5 rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm"
      onSubmit={handleSubmit}
    >
      <label className="grid gap-2 text-sm font-semibold">
        Applicant name
        <input
          className="rounded-xl border border-[var(--border)] px-4 py-3 font-normal"
          name="applicantName"
          required
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        Email
        <input
          className="rounded-xl border border-[var(--border)] px-4 py-3 font-normal"
          name="email"
          required
          type="email"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        Organization
        <input
          className="rounded-xl border border-[var(--border)] px-4 py-3 font-normal"
          name="organization"
        />
      </label>
      <fieldset className="grid gap-3">
        <legend className="text-sm font-semibold">Access roles</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {accessRoles.map((role) => (
            <label
              className="flex items-center gap-3 rounded-xl border border-[var(--border)] px-4 py-3 text-sm font-semibold"
              key={role}
            >
              <input checked={roles.includes(role)} onChange={() => toggleRole(role)} type="checkbox" />
              {roleLabels[role]}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="grid gap-2 text-sm font-semibold">
        Use case
        <textarea
          className="min-h-32 rounded-xl border border-[var(--border)] px-4 py-3 font-normal"
          name="useCase"
          required
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        Links
        <input
          className="rounded-xl border border-[var(--border)] px-4 py-3 font-normal"
          name="links"
          placeholder="Website, GitHub, LinkedIn, company page"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        Expected usage
        <input
          className="rounded-xl border border-[var(--border)] px-4 py-3 font-normal"
          name="expectedUsage"
          placeholder="Example: 500 chats/month, 20 calls/day"
        />
      </label>
      <button
        className="min-h-12 rounded-[56px] bg-[var(--brand)] px-5 text-sm font-semibold text-white hover:bg-[var(--brand-hover)]"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Submitting..." : "Submit application"}
      </button>
      {status ? <p className="text-sm font-semibold text-[var(--brand)]">{status}</p> : null}
    </form>
  );
}
