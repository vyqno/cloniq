# Cloniq Phase 2 Access and Review Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn Cloniq's application-gated onboarding into a working review loop with thirdweb wallet entry, application submission, admin review decisions, and workspace activation states.

**Architecture:** Add thirdweb React v5 provider/client setup at the app root, then implement a small application domain model and file-backed development repository behind route handlers. The UI uses real form submission to `/api/applications`, admin decisions through `/api/applications/[id]/review`, and a dashboard that reflects approved workspace roles from submitted applications.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, thirdweb React v5, Base chain config, Vitest, React Testing Library, Node file storage for development.

---

## File Structure

- Modify: `webapp/package.json` to add `thirdweb`.
- Modify: `webapp/.gitignore` to ignore `.data/` application storage.
- Create: `webapp/src/lib/thirdweb/client.ts` for public client creation.
- Create: `webapp/src/lib/thirdweb/wallets.ts` for supported in-app and external wallets.
- Create: `webapp/src/components/providers/Providers.tsx` for `ThirdwebProvider`.
- Create: `webapp/src/components/site/WalletConnect.tsx` for the branded `ConnectButton`.
- Modify: `webapp/src/app/layout.tsx` to wrap the app with providers.
- Modify: `webapp/src/components/site/Header.tsx` to show wallet entry.
- Create: `webapp/src/lib/applications/types.ts` for roles, statuses, requests, and decisions.
- Create: `webapp/src/lib/applications/validation.ts` for deterministic validation.
- Create: `webapp/src/lib/applications/store.ts` for file-backed development persistence.
- Create: `webapp/src/app/api/applications/route.ts` for list/create.
- Create: `webapp/src/app/api/applications/[id]/review/route.ts` for admin decisions.
- Create: `webapp/src/components/applications/ApplicationForm.tsx` for client submission UX.
- Create: `webapp/src/components/applications/AdminReviewBoard.tsx` for admin review UX.
- Create: `webapp/src/components/dashboard/WorkspaceActivation.tsx` for approved workspace display.
- Modify: `webapp/src/app/apply/page.tsx` to render the real application form.
- Create: `webapp/src/app/admin/applications/page.tsx` for the review queue.
- Create: `webapp/src/app/dashboard/page.tsx` for workspace activation.
- Create: `webapp/tests/applications.test.ts` for validation and decision behavior.
- Create: `webapp/tests/apply-page.test.tsx` for the form page.

---

### Task 1: Install thirdweb and Add Provider

**Files:**
- Modify: `webapp/package.json`
- Create: `webapp/src/lib/thirdweb/client.ts`
- Create: `webapp/src/lib/thirdweb/wallets.ts`
- Create: `webapp/src/components/providers/Providers.tsx`
- Create: `webapp/src/components/site/WalletConnect.tsx`
- Modify: `webapp/src/app/layout.tsx`
- Modify: `webapp/src/components/site/Header.tsx`

- [ ] **Step 1: Install thirdweb**

Run:

```bash
cd webapp && pnpm add thirdweb
```

Expected: `thirdweb` is added to dependencies.

- [ ] **Step 2: Add thirdweb client**

Create `webapp/src/lib/thirdweb/client.ts`:

```ts
import { createThirdwebClient } from "thirdweb";

const fallbackClientId = "00000000000000000000000000000000";

export const thirdwebClient = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || fallbackClientId,
});

export const hasConfiguredThirdwebClient = Boolean(process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID);
```

- [ ] **Step 3: Add wallet configuration**

Create `webapp/src/lib/thirdweb/wallets.ts`:

```ts
import { base } from "thirdweb/chains";
import { createWallet, inAppWallet } from "thirdweb/wallets";

export const cloniqChain = base;

export const cloniqWallets = [
  inAppWallet({
    auth: {
      options: ["email", "passkey", "google"],
    },
    metadata: {
      name: "Cloniq",
    },
  }),
  createWallet("com.coinbase.wallet"),
  createWallet("io.metamask"),
];
```

- [ ] **Step 4: Add provider**

Create `webapp/src/components/providers/Providers.tsx`:

```tsx
"use client";

import { ThirdwebProvider } from "thirdweb/react";

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return <ThirdwebProvider>{children}</ThirdwebProvider>;
}
```

- [ ] **Step 5: Add wallet connect component**

Create `webapp/src/components/site/WalletConnect.tsx`:

```tsx
"use client";

import { ConnectButton } from "thirdweb/react";
import { thirdwebClient } from "@/lib/thirdweb/client";
import { cloniqChain, cloniqWallets } from "@/lib/thirdweb/wallets";

export function WalletConnect() {
  return (
    <ConnectButton
      client={thirdwebClient}
      wallets={cloniqWallets}
      chain={cloniqChain}
      connectButton={{
        label: "Connect",
        style: {
          minWidth: "96px",
          height: "44px",
          borderRadius: "56px",
          background: "#eef0f3",
          color: "#0a0b0d",
          fontSize: "14px",
          fontWeight: 600,
        },
      }}
      connectModal={{
        title: "Connect to Cloniq",
        titleIcon: "",
        size: "compact",
      }}
    />
  );
}
```

- [ ] **Step 6: Wrap root layout**

Modify `webapp/src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Providers } from "@/components/providers/Providers";
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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

- [ ] **Step 7: Add wallet to header**

Modify `webapp/src/components/site/Header.tsx` so the right side contains both wallet and apply:

```tsx
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WalletConnect } from "@/components/site/WalletConnect";

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
```

- [ ] **Step 8: Run verification**

Run:

```bash
cd webapp && pnpm lint && pnpm test && pnpm build
```

Expected: lint, tests, and build pass.

- [ ] **Step 9: Commit**

Run:

```bash
git add webapp/package.json webapp/pnpm-lock.yaml webapp/src/lib/thirdweb webapp/src/components/providers webapp/src/components/site/WalletConnect.tsx webapp/src/app/layout.tsx webapp/src/components/site/Header.tsx
git commit -m "feat: add thirdweb wallet entry"
```

---

### Task 2: Add Application Domain and Tests

**Files:**
- Create: `webapp/src/lib/applications/types.ts`
- Create: `webapp/src/lib/applications/validation.ts`
- Create: `webapp/tests/applications.test.ts`

- [ ] **Step 1: Write application tests**

Create `webapp/tests/applications.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { applyReviewDecision, validateApplicationInput } from "@/lib/applications/validation";

describe("application validation", () => {
  it("accepts a complete creator and business application", () => {
    const result = validateApplicationInput({
      applicantName: "Asha Rao",
      email: "asha@example.com",
      organization: "Asha Labs",
      roles: ["creator", "business"],
      useCase: "I want to create a verified AI clone and business support workflow.",
      links: "https://example.com",
      expectedUsage: "100 paid chats per week",
    });

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.roles).toEqual(["creator", "business"]);
    }
  });

  it("rejects applications without roles or a real use case", () => {
    const result = validateApplicationInput({
      applicantName: "A",
      email: "not-email",
      organization: "",
      roles: [],
      useCase: "short",
      links: "",
      expectedUsage: "",
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errors).toContain("Choose at least one access role.");
      expect(result.errors).toContain("Use case must be at least 20 characters.");
      expect(result.errors).toContain("Enter a valid email address.");
    }
  });
});

describe("application review decisions", () => {
  it("activates approved roles when an application is approved", () => {
    const reviewed = applyReviewDecision(
      {
        id: "app_1",
        applicantName: "Asha Rao",
        email: "asha@example.com",
        organization: "Asha Labs",
        roles: ["creator", "developer"],
        useCase: "Creator clone and API access.",
        links: "https://example.com",
        expectedUsage: "100 calls per week",
        status: "pending",
        createdAt: "2026-04-24T00:00:00.000Z",
        updatedAt: "2026-04-24T00:00:00.000Z",
      },
      { status: "approved", reviewerNote: "Approved for launch." },
    );

    expect(reviewed.status).toBe("approved");
    expect(reviewed.approvedRoles).toEqual(["creator", "developer"]);
    expect(reviewed.reviewerNote).toBe("Approved for launch.");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```bash
cd webapp && pnpm test tests/applications.test.ts
```

Expected: FAIL because application modules do not exist.

- [ ] **Step 3: Add application types**

Create `webapp/src/lib/applications/types.ts`:

```ts
export const accessRoles = ["creator", "business", "developer", "advertiser", "publisher"] as const;

export type AccessRole = (typeof accessRoles)[number];

export type ApplicationStatus = "pending" | "approved" | "rejected" | "needs_info";

export type ApplicationInput = {
  applicantName: string;
  email: string;
  organization: string;
  roles: AccessRole[];
  useCase: string;
  links: string;
  expectedUsage: string;
};

export type AccessApplication = ApplicationInput & {
  id: string;
  status: ApplicationStatus;
  approvedRoles?: AccessRole[];
  reviewerNote?: string;
  createdAt: string;
  updatedAt: string;
};

export type ReviewDecision = {
  status: Exclude<ApplicationStatus, "pending">;
  reviewerNote: string;
  approvedRoles?: AccessRole[];
};
```

- [ ] **Step 4: Add validation and decision helpers**

Create `webapp/src/lib/applications/validation.ts`:

```ts
import { accessRoles, type AccessApplication, type ApplicationInput, type ReviewDecision } from "./types";

type ValidationResult =
  | { ok: true; value: ApplicationInput }
  | { ok: false; errors: string[] };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateApplicationInput(input: ApplicationInput): ValidationResult {
  const errors: string[] = [];
  const roles = input.roles.filter((role) => accessRoles.includes(role));

  if (input.applicantName.trim().length < 2) {
    errors.push("Applicant name must be at least 2 characters.");
  }

  if (!emailPattern.test(input.email.trim())) {
    errors.push("Enter a valid email address.");
  }

  if (roles.length === 0) {
    errors.push("Choose at least one access role.");
  }

  if (input.useCase.trim().length < 20) {
    errors.push("Use case must be at least 20 characters.");
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    value: {
      applicantName: input.applicantName.trim(),
      email: input.email.trim().toLowerCase(),
      organization: input.organization.trim(),
      roles,
      useCase: input.useCase.trim(),
      links: input.links.trim(),
      expectedUsage: input.expectedUsage.trim(),
    },
  };
}

export function applyReviewDecision(
  application: AccessApplication,
  decision: ReviewDecision,
): AccessApplication {
  const now = new Date().toISOString();

  return {
    ...application,
    status: decision.status,
    reviewerNote: decision.reviewerNote.trim(),
    approvedRoles: decision.status === "approved" ? decision.approvedRoles ?? application.roles : [],
    updatedAt: now,
  };
}
```

- [ ] **Step 5: Run application tests**

Run:

```bash
cd webapp && pnpm test tests/applications.test.ts
```

Expected: PASS.

- [ ] **Step 6: Commit**

Run:

```bash
git add webapp/src/lib/applications webapp/tests/applications.test.ts
git commit -m "feat: add access application domain"
```

---

### Task 3: Add File-Backed Application API

**Files:**
- Modify: `webapp/.gitignore`
- Create: `webapp/src/lib/applications/store.ts`
- Create: `webapp/src/app/api/applications/route.ts`
- Create: `webapp/src/app/api/applications/[id]/review/route.ts`

- [ ] **Step 1: Ignore development data**

Add to `webapp/.gitignore`:

```gitignore
.data/
```

- [ ] **Step 2: Add application store**

Create `webapp/src/lib/applications/store.ts`:

```ts
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { AccessApplication, ApplicationInput, ReviewDecision } from "./types";
import { applyReviewDecision } from "./validation";

const dataDir = path.join(process.cwd(), ".data");
const dataFile = path.join(dataDir, "applications.json");

async function readApplications(): Promise<AccessApplication[]> {
  try {
    const content = await readFile(dataFile, "utf8");
    return JSON.parse(content) as AccessApplication[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

async function writeApplications(applications: AccessApplication[]) {
  await mkdir(dataDir, { recursive: true });
  await writeFile(dataFile, JSON.stringify(applications, null, 2));
}

export async function listApplications() {
  return readApplications();
}

export async function createApplication(input: ApplicationInput) {
  const now = new Date().toISOString();
  const application: AccessApplication = {
    ...input,
    id: `app_${Date.now().toString(36)}`,
    status: "pending",
    createdAt: now,
    updatedAt: now,
  };
  const applications = await readApplications();
  await writeApplications([application, ...applications]);
  return application;
}

export async function reviewApplication(id: string, decision: ReviewDecision) {
  const applications = await readApplications();
  const index = applications.findIndex((application) => application.id === id);

  if (index === -1) {
    return null;
  }

  const reviewed = applyReviewDecision(applications[index], decision);
  applications[index] = reviewed;
  await writeApplications(applications);
  return reviewed;
}
```

- [ ] **Step 3: Add list/create route**

Create `webapp/src/app/api/applications/route.ts`:

```ts
import { NextResponse } from "next/server";
import { createApplication, listApplications } from "@/lib/applications/store";
import { validateApplicationInput } from "@/lib/applications/validation";
import type { AccessRole } from "@/lib/applications/types";

export async function GET() {
  const applications = await listApplications();
  return NextResponse.json({ applications });
}

export async function POST(request: Request) {
  const body = (await request.json()) as {
    applicantName?: string;
    email?: string;
    organization?: string;
    roles?: AccessRole[];
    useCase?: string;
    links?: string;
    expectedUsage?: string;
  };

  const validation = validateApplicationInput({
    applicantName: body.applicantName ?? "",
    email: body.email ?? "",
    organization: body.organization ?? "",
    roles: body.roles ?? [],
    useCase: body.useCase ?? "",
    links: body.links ?? "",
    expectedUsage: body.expectedUsage ?? "",
  });

  if (!validation.ok) {
    return NextResponse.json({ errors: validation.errors }, { status: 400 });
  }

  const application = await createApplication(validation.value);
  return NextResponse.json({ application }, { status: 201 });
}
```

- [ ] **Step 4: Add review route**

Create `webapp/src/app/api/applications/[id]/review/route.ts`:

```ts
import { NextResponse } from "next/server";
import { reviewApplication } from "@/lib/applications/store";
import type { AccessRole, ApplicationStatus } from "@/lib/applications/types";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PATCH(request: Request, context: RouteContext) {
  const { id } = await context.params;
  const body = (await request.json()) as {
    status?: Exclude<ApplicationStatus, "pending">;
    reviewerNote?: string;
    approvedRoles?: AccessRole[];
  };

  if (!body.status || !["approved", "rejected", "needs_info"].includes(body.status)) {
    return NextResponse.json({ errors: ["Choose a valid review status."] }, { status: 400 });
  }

  const application = await reviewApplication(id, {
    status: body.status,
    reviewerNote: body.reviewerNote ?? "",
    approvedRoles: body.approvedRoles,
  });

  if (!application) {
    return NextResponse.json({ errors: ["Application not found."] }, { status: 404 });
  }

  return NextResponse.json({ application });
}
```

- [ ] **Step 5: Run verification**

Run:

```bash
cd webapp && pnpm lint && pnpm test && pnpm build
```

Expected: lint, tests, and build pass.

- [ ] **Step 6: Commit**

Run:

```bash
git add webapp/.gitignore webapp/src/lib/applications/store.ts webapp/src/app/api/applications
git commit -m "feat: add application review api"
```

---

### Task 4: Add Application, Admin, and Dashboard UI

**Files:**
- Create: `webapp/src/components/applications/ApplicationForm.tsx`
- Create: `webapp/src/components/applications/AdminReviewBoard.tsx`
- Create: `webapp/src/components/dashboard/WorkspaceActivation.tsx`
- Modify: `webapp/src/app/apply/page.tsx`
- Create: `webapp/src/app/admin/applications/page.tsx`
- Create: `webapp/src/app/dashboard/page.tsx`
- Create: `webapp/tests/apply-page.test.tsx`

- [ ] **Step 1: Add apply page test**

Create `webapp/tests/apply-page.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ApplyPage from "@/app/apply/page";

describe("Apply page", () => {
  it("renders the real application form", () => {
    render(<ApplyPage />);

    expect(screen.getByRole("heading", { name: /apply for cloniq access/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/applicant name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/creator/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit application/i })).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```bash
cd webapp && pnpm test tests/apply-page.test.tsx
```

Expected: FAIL because the form fields do not exist yet.

- [ ] **Step 3: Add ApplicationForm**

Create `webapp/src/components/applications/ApplicationForm.tsx` with a client component that posts to `/api/applications`:

```tsx
"use client";

import { useState } from "react";
import { accessRoles, type AccessRole } from "@/lib/applications/types";

const roleLabels: Record<AccessRole, string> = {
  creator: "Creator",
  business: "Business",
  developer: "Developer",
  advertiser: "Advertiser",
  publisher: "Publisher",
};

export function ApplicationForm() {
  const [roles, setRoles] = useState<AccessRole[]>([]);
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function toggleRole(role: AccessRole) {
    setRoles((current) =>
      current.includes(role) ? current.filter((item) => item !== role) : [...current, role],
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        applicantName: formData.get("applicantName"),
        email: formData.get("email"),
        organization: formData.get("organization"),
        roles,
        useCase: formData.get("useCase"),
        links: formData.get("links"),
        expectedUsage: formData.get("expectedUsage"),
      }),
    });

    if (!response.ok) {
      const body = (await response.json()) as { errors?: string[] };
      setStatus(body.errors?.join(" ") || "Application could not be submitted.");
      setIsSubmitting(false);
      return;
    }

    const body = (await response.json()) as { application: { id: string } };
    event.currentTarget.reset();
    setRoles([]);
    setStatus(`Application ${body.application.id} submitted for Cloniq review.`);
    setIsSubmitting(false);
  }

  return (
    <form className="mt-8 grid gap-5 rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm" onSubmit={handleSubmit}>
      <label className="grid gap-2 text-sm font-semibold">
        Applicant name
        <input className="rounded-xl border border-[var(--border)] px-4 py-3 font-normal" name="applicantName" required />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        Email
        <input className="rounded-xl border border-[var(--border)] px-4 py-3 font-normal" name="email" required type="email" />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        Organization
        <input className="rounded-xl border border-[var(--border)] px-4 py-3 font-normal" name="organization" />
      </label>
      <fieldset className="grid gap-3">
        <legend className="text-sm font-semibold">Access roles</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {accessRoles.map((role) => (
            <label className="flex items-center gap-3 rounded-xl border border-[var(--border)] px-4 py-3 text-sm font-semibold" key={role}>
              <input checked={roles.includes(role)} onChange={() => toggleRole(role)} type="checkbox" />
              {roleLabels[role]}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="grid gap-2 text-sm font-semibold">
        Use case
        <textarea className="min-h-32 rounded-xl border border-[var(--border)] px-4 py-3 font-normal" name="useCase" required />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        Links
        <input className="rounded-xl border border-[var(--border)] px-4 py-3 font-normal" name="links" placeholder="Website, GitHub, LinkedIn, company page" />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        Expected usage
        <input className="rounded-xl border border-[var(--border)] px-4 py-3 font-normal" name="expectedUsage" placeholder="Example: 500 chats/month, 20 calls/day" />
      </label>
      <button className="min-h-12 rounded-[56px] bg-[var(--brand)] px-5 text-sm font-semibold text-white hover:bg-[var(--brand-hover)]" disabled={isSubmitting} type="submit">
        {isSubmitting ? "Submitting..." : "Submit application"}
      </button>
      {status ? <p className="text-sm font-semibold text-[var(--brand)]">{status}</p> : null}
    </form>
  );
}
```

- [ ] **Step 4: Add AdminReviewBoard**

Create `webapp/src/components/applications/AdminReviewBoard.tsx`:

```tsx
"use client";

import { useState } from "react";
import type { AccessApplication, ApplicationStatus } from "@/lib/applications/types";

type AdminReviewBoardProps = {
  initialApplications: AccessApplication[];
};

export function AdminReviewBoard({ initialApplications }: AdminReviewBoardProps) {
  const [applications, setApplications] = useState(initialApplications);

  async function review(id: string, status: Exclude<ApplicationStatus, "pending">) {
    const response = await fetch(`/api/applications/${id}/review`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status, reviewerNote: `Marked ${status} by Cloniq admin.` }),
    });
    const body = (await response.json()) as { application: AccessApplication };
    setApplications((current) =>
      current.map((application) => (application.id === id ? body.application : application)),
    );
  }

  return (
    <div className="mt-8 grid gap-4">
      {applications.length === 0 ? (
        <p className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 text-sm text-[var(--muted)]">
          No applications are waiting for review.
        </p>
      ) : null}
      {applications.map((application) => (
        <article className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm" key={application.id}>
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold text-[var(--brand)]">{application.status}</p>
              <h2 className="mt-1 text-xl font-semibold">{application.applicantName}</h2>
              <p className="mt-1 text-sm text-[var(--muted)]">{application.email}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {application.roles.map((role) => (
                <span className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand)]" key={role}>
                  {role}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{application.useCase}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button className="rounded-[56px] bg-[var(--brand)] px-4 py-2 text-sm font-semibold text-white" onClick={() => review(application.id, "approved")}>
              Approve
            </button>
            <button className="rounded-[56px] bg-[var(--surface-muted)] px-4 py-2 text-sm font-semibold" onClick={() => review(application.id, "needs_info")}>
              Request info
            </button>
            <button className="rounded-[56px] bg-red-50 px-4 py-2 text-sm font-semibold text-[var(--danger)]" onClick={() => review(application.id, "rejected")}>
              Reject
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
```

- [ ] **Step 5: Add WorkspaceActivation**

Create `webapp/src/components/dashboard/WorkspaceActivation.tsx`:

```tsx
import type { AccessApplication } from "@/lib/applications/types";

type WorkspaceActivationProps = {
  applications: AccessApplication[];
};

export function WorkspaceActivation({ applications }: WorkspaceActivationProps) {
  const approvedRoles = Array.from(
    new Set(applications.flatMap((application) => application.approvedRoles ?? [])),
  );

  return (
    <div className="mt-8 rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">Workspace activation</h2>
      {approvedRoles.length === 0 ? (
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
          No approved workspaces yet. Submit an application and wait for Cloniq review.
        </p>
      ) : (
        <div className="mt-4 flex flex-wrap gap-2">
          {approvedRoles.map((role) => (
            <span className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-sm font-semibold text-[var(--brand)]" key={role}>
              {role} workspace active
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 6: Wire pages**

Modify `webapp/src/app/apply/page.tsx` to render `ApplicationForm`, create `webapp/src/app/admin/applications/page.tsx` with `AdminReviewBoard`, and create `webapp/src/app/dashboard/page.tsx` with `WorkspaceActivation`.

- [ ] **Step 7: Run verification**

Run:

```bash
cd webapp && pnpm lint && pnpm test && pnpm build
```

Expected: lint, tests, and build pass.

- [ ] **Step 8: Commit**

Run:

```bash
git add webapp/src/components/applications webapp/src/components/dashboard webapp/src/app/apply/page.tsx webapp/src/app/admin webapp/src/app/dashboard webapp/tests/apply-page.test.tsx
git commit -m "feat: add application review workspace ui"
```

---

### Task 5: Final Verification and Dev Server

**Files:**
- No source changes expected.

- [ ] **Step 1: Run full verification**

Run:

```bash
cd webapp && pnpm lint && pnpm test && pnpm build
```

Expected: all commands pass.

- [ ] **Step 2: Start dev server**

Run:

```bash
cd webapp && pnpm dev
```

Expected: Next.js dev server starts on `http://localhost:3000` or the next available port.

## Self-Review Notes

- Spec coverage: This implements Phase 2 foundations for thirdweb wallet entry, access applications, review decisions, admin queue, and workspace activation. It does not add Supabase, production auth sessions, KYC/KYB provider, payouts, or protected middleware.
- Placeholder scan: The plan uses product-page placeholders from Phase 1 only; Phase 2 steps include exact file paths and code.
- Type consistency: `AccessRole`, `ApplicationStatus`, `ApplicationInput`, `AccessApplication`, and `ReviewDecision` are defined once and reused by tests, routes, and UI.
