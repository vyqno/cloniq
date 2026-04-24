import { DeveloperKeyConsole } from "@/components/platform/DeveloperKeyConsole";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { readPlatformState } from "@/lib/platform/store";

export default async function DeveloperKeysPage() {
  const { developerKeys } = await readPlatformState();

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
          Developer Console
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">API and MCP access</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          Create scoped keys for REST, MCP, and future x402 machine-to-machine payment flows.
        </p>
        <div className="mt-8">
          <DeveloperKeyConsole initialKeys={developerKeys} />
        </div>
      </main>
      <Footer />
    </>
  );
}
