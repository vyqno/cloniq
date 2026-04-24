import { workspaceCards } from "@/lib/product";
import { Section } from "@/components/ui/Section";

export function WorkspaceGrid() {
  return (
    <Section
      eyebrow="Workspaces"
      title="One account, multiple approved workspaces"
      description="Cloniq can activate creator, business, developer, advertiser, publisher, and admin experiences based on review status."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {workspaceCards.map((workspace) => (
          <article
            className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm"
            key={workspace.title}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-[var(--brand)]">{workspace.audience}</p>
                <h3 className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                  {workspace.title}
                </h3>
              </div>
              <span className="rounded-full bg-[var(--surface-muted)] px-3 py-1 text-xs font-semibold text-[var(--muted)]">
                {workspace.status}
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{workspace.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
