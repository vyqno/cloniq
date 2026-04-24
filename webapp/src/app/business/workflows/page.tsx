import { WorkflowBoard } from "@/components/platform/WorkflowBoard";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { readPlatformState } from "@/lib/platform/store";

export default async function BusinessWorkflowsPage() {
  const { workflows } = await readPlatformState();

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
          Business Workspace
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Managed and no-code workflows</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          Configure business automations with triggers, agent actions, and human review controls.
        </p>
        <div className="mt-8">
          <WorkflowBoard initialWorkflows={workflows} />
        </div>
      </main>
      <Footer />
    </>
  );
}
