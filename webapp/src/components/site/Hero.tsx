import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
      <div className="flex flex-col justify-center">
        <Badge>Application-gated AI business platform</Badge>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1] tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">
          Build, verify, and monetize AI workforces.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          Cloniq gives creators, businesses, developers, advertisers, and publishers one trusted
          operating system for AI agents, AI clones, meetings, APIs, payments, and rewards.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/apply">Apply for access</ButtonLink>
          <ButtonLink href="/marketplace" variant="secondary">
            Explore marketplace
          </ButtonLink>
        </div>
      </div>
      <div className="rounded-[2rem] border border-[var(--border)] bg-white p-4 shadow-2xl shadow-blue-500/10">
        <div className="rounded-[1.5rem] bg-[var(--foreground)] p-5 text-white">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-sm font-semibold">Cloniq Business OS</span>
            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">
              Review required
            </span>
          </div>
          <div className="grid gap-3 py-5">
            {["Creator AI", "Business AI", "Meeting Avatar", "Developer API", "Ads Network"].map(
              (item) => (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4" key={item}>
                  <p className="text-sm font-semibold">{item}</p>
                  <p className="mt-1 text-xs leading-5 text-white/60">
                    Workspace unlocks after Cloniq approval.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
