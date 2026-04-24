import Link from "next/link";
import { WalletConnect } from "@/components/site/WalletConnect";
import { ButtonLink } from "@/components/ui/ButtonLink";

const links = [
  { href: "/marketplace", label: "Marketplace" },
  { href: "/business", label: "Business" },
  { href: "/creators", label: "Creators" },
  { href: "/developers", label: "Developers" },
  { href: "/ads", label: "Ads" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-4 px-6 sm:px-8 lg:px-10">
        <Link className="text-lg font-bold tracking-tight text-[var(--foreground)]" href="/">
          Cloniq
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--muted)] lg:flex">
          {links.map((link) => (
            <Link className="transition hover:text-[var(--foreground)]" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <WalletConnect />
          <ButtonLink href="/apply">Apply for access</ButtonLink>
        </div>
      </div>
    </header>
  );
}
