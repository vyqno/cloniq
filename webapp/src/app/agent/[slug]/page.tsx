import { notFound } from "next/navigation";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { readPlatformState } from "@/lib/platform/store";

type AgentPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function AgentPage({ params }: AgentPageProps) {
  const { slug } = await params;
  const { agents } = await readPlatformState();
  const agent = agents.find((item) => item.slug === slug);

  if (!agent) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-5xl px-6 py-20 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
          {agent.category}
        </p>
        <h1 className="mt-4 text-5xl font-semibold leading-[1] tracking-tight">{agent.name}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">{agent.description}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-5">
            <p className="text-sm text-[var(--muted)]">Price</p>
            <p className="mt-2 text-xl font-semibold">{agent.priceLabel}</p>
          </div>
          <div className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-5">
            <p className="text-sm text-[var(--muted)]">Languages</p>
            <p className="mt-2 text-xl font-semibold">{agent.languages.join(", ")}</p>
          </div>
          <div className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-5">
            <p className="text-sm text-[var(--muted)]">Trust</p>
            <p className="mt-2 text-xl font-semibold">{agent.trustTier}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/apply">Request access</ButtonLink>
          <ButtonLink href="/developers/keys" variant="secondary">
            API access
          </ButtonLink>
          <ButtonLink href="/meetings" variant="secondary">
            Meeting avatar
          </ButtonLink>
        </div>
      </main>
      <Footer />
    </>
  );
}
