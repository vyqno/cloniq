"use client";

import { useState } from "react";
import type { AccessApplication, ApplicationStatus } from "@/lib/applications/types";

type AdminReviewBoardProps = {
  initialApplications: AccessApplication[];
};

export function AdminReviewBoard({ initialApplications }: AdminReviewBoardProps) {
  const [applications, setApplications] = useState(initialApplications);

  async function review(id: string, status: Exclude<ApplicationStatus, "pending">) {
    const response = await fetch(`/api/applications/${id}/review`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status, reviewerNote: `Marked ${status} by Cloniq admin.` }),
    });
    const body = (await response.json()) as { application: AccessApplication };
    setApplications((current) =>
      current.map((application) => (application.id === id ? body.application : application)),
    );
  }

  return (
    <div className="mt-8 grid gap-4">
      {applications.length === 0 ? (
        <p className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 text-sm text-[var(--muted)]">
          No applications are waiting for review.
        </p>
      ) : null}
      {applications.map((application) => (
        <article
          className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm"
          key={application.id}
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold text-[var(--brand)]">{application.status}</p>
              <h2 className="mt-1 text-xl font-semibold">{application.applicantName}</h2>
              <p className="mt-1 text-sm text-[var(--muted)]">{application.email}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {application.roles.map((role) => (
                <span
                  className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand)]"
                  key={role}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{application.useCase}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              className="rounded-[56px] bg-[var(--brand)] px-4 py-2 text-sm font-semibold text-white"
              onClick={() => review(application.id, "approved")}
            >
              Approve
            </button>
            <button
              className="rounded-[56px] bg-[var(--surface-muted)] px-4 py-2 text-sm font-semibold"
              onClick={() => review(application.id, "needs_info")}
            >
              Request info
            </button>
            <button
              className="rounded-[56px] bg-red-50 px-4 py-2 text-sm font-semibold text-[var(--danger)]"
              onClick={() => review(application.id, "rejected")}
            >
              Reject
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
