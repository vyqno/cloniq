import type { AccessApplication } from "@/lib/applications/types";

type WorkspaceActivationProps = {
  applications: AccessApplication[];
};

export function WorkspaceActivation({ applications }: WorkspaceActivationProps) {
  const approvedRoles = Array.from(
    new Set(applications.flatMap((application) => application.approvedRoles ?? [])),
  );

  return (
    <div className="mt-8 rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">Workspace activation</h2>
      {approvedRoles.length === 0 ? (
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
          No approved workspaces yet. Submit an application and wait for Cloniq review.
        </p>
      ) : (
        <div className="mt-4 flex flex-wrap gap-2">
          {approvedRoles.map((role) => (
            <span
              className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-sm font-semibold text-[var(--brand)]"
              key={role}
            >
              {role} workspace active
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
