import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cloniq | AI Business Platform",
  description: "Create, verify, monetize, deploy, and operate AI agents and AI clones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
