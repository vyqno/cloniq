import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { AgentGrid } from "@/components/platform/AgentGrid";
import { readPlatformState } from "@/lib/platform/store";

export default async function MarketplacePage() {
  const { agents } = await readPlatformState();

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <h1 className="text-4xl font-semibold tracking-tight">Marketplace</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          Discover verified agents, creator clones, business solutions, and developer-accessible AI
          tools.
        </p>
        <div className="mt-8">
          <AgentGrid agents={agents} />
        </div>
      </main>
      <Footer />
    </>
  );
}
