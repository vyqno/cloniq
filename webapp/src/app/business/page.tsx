import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function BusinessPage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-4xl px-6 py-20 sm:px-8 lg:px-10">
        <h1 className="text-4xl font-semibold tracking-tight">Business AI</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          Use managed setup or no-code workflows to operate AI agents for support, sales, calls, and
          internal operations.
        </p>
        <div className="mt-8">
          <ButtonLink href="/business/workflows">Open workflow builder</ButtonLink>
        </div>
      </main>
      <Footer />
    </>
  );
}
