import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { ApplicationForm } from "@/components/applications/ApplicationForm";

export default function ApplyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-4xl px-6 py-20 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
          Application gate
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)]">
          Apply for Cloniq access
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          Serious capabilities require review. Tell Cloniq what you want to build as a creator,
          business, developer, advertiser, publisher, or multi-role operator.
        </p>
        <ApplicationForm />
      </main>
      <Footer />
    </>
  );
}
