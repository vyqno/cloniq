import { AgentBuilder } from "@/components/platform/AgentBuilder";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export default function StudioPage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-4xl px-6 py-20 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
          Creator Studio
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Build a Cloniq agent</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          Submit an AI clone or expert agent for review. Phase 3 now tracks draft submissions through
          the same platform data layer as the marketplace.
        </p>
        <AgentBuilder />
      </main>
      <Footer />
    </>
  );
}
