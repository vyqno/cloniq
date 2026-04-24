import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export default function MarketplacePage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-4xl px-6 py-20 sm:px-8 lg:px-10">
        <h1 className="text-4xl font-semibold tracking-tight">Marketplace</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          Discover verified agents, creator clones, business solutions, and developer-accessible AI
          tools.
        </p>
      </main>
      <Footer />
    </>
  );
}
