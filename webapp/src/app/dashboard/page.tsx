import { WorkspaceActivation } from "@/components/dashboard/WorkspaceActivation";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { listApplications } from "@/lib/applications/store";

export default async function DashboardPage() {
  const applications = await listApplications();

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-5xl px-6 py-20 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
          Dashboard
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)]">
          Workspace status
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          Approved Cloniq roles activate workspaces here. Phase 3 will expand each workspace into
          full creator, business, developer, advertiser, and publisher surfaces.
        </p>
        <WorkspaceActivation applications={applications} />
      </main>
      <Footer />
    </>
  );
}
