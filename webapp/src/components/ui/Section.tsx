type SectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export function Section({ eyebrow, title, description, children }: SectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-7 text-[var(--muted)]">{description}</p>
      </div>
      {children}
    </section>
  );
}
