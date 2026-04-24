import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export default function AdsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-4xl px-6 py-20 sm:px-8 lg:px-10">
        <h1 className="text-4xl font-semibold tracking-tight">Ads and Rewards</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          Run reviewed campaigns, publisher placements, viewer rewards, and sponsored agent
          distribution with clear disclosure.
        </p>
      </main>
      <Footer />
    </>
  );
}
