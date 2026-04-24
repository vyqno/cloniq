import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const className =
    variant === "primary"
      ? "inline-flex min-h-11 items-center justify-center rounded-[56px] bg-[var(--brand)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-[var(--brand-hover)]"
      : "inline-flex min-h-11 items-center justify-center rounded-[56px] border border-[var(--border)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] shadow-sm transition hover:border-[var(--brand)]";

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
