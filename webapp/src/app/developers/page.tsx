import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export default function DevelopersPage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-4xl px-6 py-20 sm:px-8 lg:px-10">
        <h1 className="text-4xl font-semibold tracking-tight">Developer Platform</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          Integrate Cloniq agents through API keys, MCP, SDKs, rate limits, usage logs, and metered
          billing.
        </p>
      </main>
      <Footer />
    </>
  );
}
