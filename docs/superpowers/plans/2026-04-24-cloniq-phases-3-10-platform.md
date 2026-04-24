# Cloniq Phases 3-10 Platform Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the remaining Cloniq product pillars as working foundations: creator marketplace, business workflows, developer keys, meeting avatars, billing, ads/rewards, trust/compliance, and onchain registry surfaces.

**Architecture:** Add a shared file-backed platform repository for development data and deterministic seed records, then expose each PRD phase through a concrete route, API, and focused UI surface. External systems such as Supabase, Pika, KYC, smart contracts, and payment settlement are represented by stable typed adapter states so the app works now and can be swapped to real providers phase-by-phase.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, thirdweb v5, Vitest, React Testing Library, file-backed local development storage.

---

## Task 1: Add Platform Domain

**Files:**
- Create: `webapp/src/lib/platform/types.ts`
- Create: `webapp/src/lib/platform/seed.ts`
- Create: `webapp/src/lib/platform/store.ts`
- Create: `webapp/tests/platform.test.ts`

Steps:
- [ ] Write tests that assert seeded agents, workflows, API keys, meetings, billing, ads, trust, and onchain data exist.
- [ ] Implement typed platform entities.
- [ ] Implement seed data for all PRD phases.
- [ ] Implement a file-backed store that initializes from seed data.
- [ ] Run `pnpm test tests/platform.test.ts`.
- [ ] Commit as `feat: add cloniq platform domain`.

## Task 2: Add Platform APIs

**Files:**
- Create: `webapp/src/app/api/agents/route.ts`
- Create: `webapp/src/app/api/workflows/route.ts`
- Create: `webapp/src/app/api/developer-keys/route.ts`
- Create: `webapp/src/app/api/meetings/route.ts`
- Create: `webapp/src/app/api/campaigns/route.ts`

Steps:
- [ ] Add list/create APIs for agents, workflows, developer keys, meeting sessions, and campaigns.
- [ ] Validate minimum required fields for each create request.
- [ ] Run `pnpm lint && pnpm test && pnpm build`.
- [ ] Commit as `feat: add cloniq platform apis`.

## Task 3: Build Creator and Marketplace

**Files:**
- Modify: `webapp/src/app/marketplace/page.tsx`
- Modify: `webapp/src/app/creators/page.tsx`
- Create: `webapp/src/app/studio/page.tsx`
- Create: `webapp/src/app/agent/[slug]/page.tsx`
- Create: `webapp/src/components/platform/AgentGrid.tsx`
- Create: `webapp/src/components/platform/AgentBuilder.tsx`

Steps:
- [ ] Render seeded marketplace agents with prices, languages, modalities, and review status.
- [ ] Add creator studio with a working local agent builder form.
- [ ] Add agent profile route with chat/API/meeting offer details.
- [ ] Run `pnpm lint && pnpm test && pnpm build`.
- [ ] Commit as `feat: build creator marketplace foundation`.

## Task 4: Build Business and Developer Platforms

**Files:**
- Modify: `webapp/src/app/business/page.tsx`
- Modify: `webapp/src/app/developers/page.tsx`
- Create: `webapp/src/app/business/workflows/page.tsx`
- Create: `webapp/src/app/developers/keys/page.tsx`
- Create: `webapp/src/components/platform/WorkflowBoard.tsx`
- Create: `webapp/src/components/platform/DeveloperKeyConsole.tsx`

Steps:
- [ ] Render managed setup and no-code workflow templates.
- [ ] Add a workflow builder form backed by the local workflow API.
- [ ] Add developer key console backed by the local key API.
- [ ] Run `pnpm lint && pnpm test && pnpm build`.
- [ ] Commit as `feat: build business developer foundations`.

## Task 5: Build Meetings, Billing, Ads, Trust, and Onchain Surfaces

**Files:**
- Modify: `webapp/src/app/ads/page.tsx`
- Create: `webapp/src/app/meetings/page.tsx`
- Create: `webapp/src/app/billing/page.tsx`
- Create: `webapp/src/app/trust/page.tsx`
- Create: `webapp/src/app/onchain/page.tsx`
- Create: `webapp/src/components/platform/MeetingConsole.tsx`
- Create: `webapp/src/components/platform/BillingConsole.tsx`
- Create: `webapp/src/components/platform/AdsConsole.tsx`
- Create: `webapp/src/components/platform/TrustConsole.tsx`
- Create: `webapp/src/components/platform/OnchainConsole.tsx`

Steps:
- [ ] Render Pika-style meeting session setup and status.
- [ ] Render billing plans, usage, balances, and payout review state.
- [ ] Render advertiser campaign and publisher reward surfaces.
- [ ] Render trust/KYC/KYB, audit, moderation, and dispute controls.
- [ ] Render onchain registry, escrow, revenue split, and attestation readiness.
- [ ] Run `pnpm lint && pnpm test && pnpm build`.
- [ ] Commit as `feat: build ecosystem operations surfaces`.

## Task 6: Wire Navigation and Final Verification

**Files:**
- Modify: `webapp/src/components/site/Header.tsx`
- Modify: `webapp/src/components/site/Footer.tsx`
- Modify: `webapp/src/components/site/Roadmap.tsx`
- Modify: `webapp/tests/home.test.tsx`

Steps:
- [ ] Add routes for studio, meetings, billing, trust, and onchain to navigation.
- [ ] Expand roadmap to phases 1-10.
- [ ] Update tests for the full platform shell.
- [ ] Run `pnpm lint && pnpm test && pnpm build`.
- [ ] Start `pnpm dev`.

## Self-Review Notes

- Spec coverage: This plan covers all remaining PRD pillars with functional foundations and local persistence. Production-grade Supabase, Pika, KYC, payment settlement, and smart contract deployment remain provider-specific follow-up work.
- Placeholder scan: No empty TODO steps are present; external integrations are deliberately represented as typed readiness states.
- Type consistency: All platform surfaces consume the same `PlatformState` and entity types.
