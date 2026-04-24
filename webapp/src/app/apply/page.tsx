import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { ButtonLink } from "@/components/ui/ButtonLink";

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
        <div className="mt-8 rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Phase 2 will activate real submissions</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
            The first implementation phase establishes the public shell. The next phase adds
            thirdweb auth, application forms, admin review, and workspace activation.
          </p>
          <div className="mt-6">
            <ButtonLink href="/">Return home</ButtonLink>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
