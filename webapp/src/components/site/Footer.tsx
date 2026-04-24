import Link from "next/link";

const footerLinks = [
  { href: "/apply", label: "Apply" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/studio", label: "Studio" },
  { href: "/business/workflows", label: "Workflows" },
  { href: "/developers/keys", label: "API keys" },
  { href: "/meetings", label: "Meetings" },
  { href: "/billing", label: "Billing" },
  { href: "/trust", label: "Trust" },
  { href: "/onchain", label: "Onchain" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-[var(--muted)] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <p>Cloniq builds verified AI business infrastructure.</p>
        <nav className="flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <Link className="font-medium hover:text-[var(--foreground)]" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
