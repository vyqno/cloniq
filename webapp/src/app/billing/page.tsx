import { BillingConsole } from "@/components/platform/BillingConsole";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { readPlatformState } from "@/lib/platform/store";

export default async function BillingPage() {
  const { billing } = await readPlatformState();

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
          Payments
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Billing and monetization</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          Track balances, usage, payout review, and monetization plans before live settlement is
          connected.
        </p>
        <div className="mt-8">
          <BillingConsole billing={billing} />
        </div>
      </main>
      <Footer />
    </>
  );
}
