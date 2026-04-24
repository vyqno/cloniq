import { OnchainConsole } from "@/components/platform/OnchainConsole";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { readPlatformState } from "@/lib/platform/store";

export default async function OnchainPage() {
  const { onchain } = await readPlatformState();

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-5xl px-6 py-20 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
          Onchain
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Base registry and revenue rails</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          Prepare the agent registry, campaign escrow, revenue splits, and reputation attestations
          for contract deployment.
        </p>
        <div className="mt-8">
          <OnchainConsole onchain={onchain} />
        </div>
      </main>
      <Footer />
    </>
  );
}
