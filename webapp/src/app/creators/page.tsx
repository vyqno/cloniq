import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function CreatorsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-4xl px-6 py-20 sm:px-8 lg:px-10">
        <h1 className="text-4xl font-semibold tracking-tight">Creator AI</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          Build AI clones from your knowledge, sell paid chat, offer meetings, expose APIs, and
          track earnings after approval.
        </p>
        <div className="mt-8">
          <ButtonLink href="/studio">Open creator studio</ButtonLink>
        </div>
      </main>
      <Footer />
    </>
  );
}
