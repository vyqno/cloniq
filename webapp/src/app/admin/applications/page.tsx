import { AdminReviewBoard } from "@/components/applications/AdminReviewBoard";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { listApplications } from "@/lib/applications/store";

export default async function AdminApplicationsPage() {
  const applications = await listApplications();

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
          Admin review
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)]">
          Application review queue
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          Review Cloniq access requests, approve roles, request more information, or reject access.
        </p>
        <AdminReviewBoard initialApplications={applications} />
      </main>
      <Footer />
    </>
  );
}
