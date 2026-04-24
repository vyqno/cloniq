import { AdsConsole } from "@/components/platform/AdsConsole";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { readPlatformState } from "@/lib/platform/store";

export default async function AdsPage() {
  const { campaigns } = await readPlatformState();

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <h1 className="text-4xl font-semibold tracking-tight">Ads and Rewards</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          Run reviewed campaigns, publisher placements, viewer rewards, and sponsored agent
          distribution with clear disclosure.
        </p>
        <div className="mt-8">
          <AdsConsole initialCampaigns={campaigns} />
        </div>
      </main>
      <Footer />
    </>
  );
}
