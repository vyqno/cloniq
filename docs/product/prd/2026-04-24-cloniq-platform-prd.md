# Cloniq Platform PRD

Date: 2026-04-24
Status: Draft for founder review
Owner: Cloniq

## 1. Product Vision

Cloniq is a premium AI business platform for creating, verifying, monetizing, deploying, discovering, and operating AI agents and AI clones.

The product should feel like a serious business ecosystem, not a chatbot wrapper. The reference direction is Apple Business plus Coinbase-grade trust: clean, calm, premium, verified, and operationally useful from the first session.

Cloniq combines the strongest ideas from the reference projects:

- AgentNet: AI expert marketplace, creator agents, RAG, paid usage, MCP/API distribution.
- web3ads: advertiser, publisher, viewer reward economy, campaign tooling, embeddable ad SDK.
- Pika Skills: 1:1 meeting avatars and real-time video meeting agents.
- thirdweb references: wallet auth, smart accounts, gasless transactions, checkout, and onchain payment rails.

Cloniq will be built from scratch under the Cloniq brand. The existing projects are references for product thinking and implementation patterns, not the final codebase.

## 2. Product Positioning

Cloniq is an AI business operating system.

It serves creators, companies, developers, advertisers, publishers, viewers, and end users through one account system and a set of connected workspaces. Each workspace unlocks only after a real application and review flow.

The platform should eventually support:

- Public discovery of AI agents, business solutions, creators, and agent-powered services.
- Creator AI clones that can chat, answer questions, run tools, join meetings, and earn revenue.
- Business AI workspaces for custom automations, support, sales, operations, onboarding, and voice workflows.
- Developer access through API keys, MCP server tooling, SDKs, and pay-per-use rails.
- Advertising and rewards for attention, publisher integrations, campaign spend, and viewer earnings.
- Admin review, compliance, trust tiers, audits, and operational control.

## 3. Product Pillars

### 3.1 Creator AI

Creators can build a monetized AI version of their knowledge, services, or persona.

Core capabilities:

- Create a public creator profile.
- Upload knowledge files and structured content.
- Define agent personality, rules, pricing, and availability.
- Offer chat, API access, meeting access, and paid workflows.
- Track earnings, usage, reviews, and audience growth.
- Apply for verified status and payout activation.

### 3.2 Business AI

Businesses can use Cloniq as a managed and self-serve AI operations platform.

Core capabilities:

- Apply for a business workspace.
- Configure business identity, team, billing, and review status.
- Build custom agents for sales, support, order acceptance, customer calls, internal tools, and workflows.
- Use managed setup from the Cloniq team for early or complex deployments.
- Use a no-code builder for repeatable workflows once templates are stable.
- Monitor transcripts, outcomes, calls, tasks, costs, and escalations.

Example custom workflow:

- A business configures a multilingual voice agent for order acceptance.
- The agent calls customers, verifies order details, handles English/Hindi/Kannada/Marathi, records the result, and sends low-confidence cases to human review.
- This is an example of the Business AI product line, not the whole product.

### 3.3 Marketplace

Users can discover and pay for agents, creators, business solutions, meeting agents, and developer-accessible tools.

Core capabilities:

- Browse public agents and solution templates.
- Search by category, language, pricing, trust tier, capability, and availability.
- View agent profiles, sample answers, usage terms, creator details, and verified badges.
- Start chat, book or launch meeting access, call a voice agent, or use API/MCP access if permitted.
- Pay through Cloniq wallet/payment rails.

### 3.4 Meeting Avatars

Cloniq supports real-time meeting agents using Pika-style video meeting capabilities.

Core capabilities:

- Join Google Meet or Zoom as an AI avatar.
- Use configured avatar image, voice, system prompt, and workspace context.
- Support creator clones, business agents, sales agents, support agents, and internal assistants.
- Produce post-meeting notes, transcripts, and action items.
- Require approved access and stronger review for public or paid meeting agents.

### 3.5 Developer Platform

Developers and AI clients can access Cloniq agents programmatically.

Core capabilities:

- API keys scoped to approved workspaces.
- MCP server access for Claude Desktop, Cursor, Windsurf, and compatible clients.
- SDKs for agent discovery, paid queries, tool calls, and business workflow execution.
- Usage logs, rate limits, billing, and key rotation.
- x402 or equivalent pay-per-call flow for machine-to-machine payments.

### 3.6 Ads and Rewards

Cloniq includes a web3ads-inspired attention and monetization layer.

Core capabilities:

- Advertisers create and fund campaigns.
- Publishers embed Cloniq ad units or sponsored agent placements.
- Viewers can earn rewards where permitted.
- Agents can recommend sponsored tools or services with clear disclosure.
- Admins review campaigns, creatives, targeting, and abuse signals.
- Revenue is split across platform, publisher, and viewer according to configured rules.

### 3.7 Trust, Review, and Compliance

Cloniq is trust-gated by default.

Core capabilities:

- Public browsing before account approval.
- Application gate for creators, businesses, developers, advertisers, and publishers.
- Manual review by Cloniq admins before monetization or operational access.
- Role assignment after review.
- Approval, rejection, request-more-info, suspension, and re-review states.
- KYC/KYB later for payouts, ad spend, high-volume API, regulated use cases, and enterprise contracts.
- Audit logs for sensitive actions.

## 4. User Types

### 4.1 Public Visitor

Can browse public pages, marketplace listings, pricing, docs, and examples.

Cannot create monetized agents, run meeting avatars, access APIs, launch ads, publish ad units, or receive payouts without applying.

### 4.2 User or Buyer

Can chat with public/free agents, pay for premium interactions, book or launch paid experiences, and manage personal usage.

### 4.3 Creator

Can build and monetize AI clones, publish agents, set prices, manage knowledge, sell meetings, and track earnings after approval.

### 4.4 Business

Can configure business agents, invite team members, use managed setup, build no-code workflows, monitor operations, and connect APIs after approval.

### 4.5 Developer

Can create API keys, use MCP/SDK access, integrate paid agents into apps, and monitor usage after approval.

### 4.6 Advertiser

Can create campaigns, fund spend, define targeting, view performance, and manage creatives after approval.

### 4.7 Publisher

Can embed ad units, place sponsored agent slots, track impressions/clicks/revenue, and withdraw earnings after approval.

### 4.8 Viewer

Can earn eligible rewards for verified attention or participation where supported.

### 4.9 Admin

Can review applications, manage trust tiers, moderate agents/campaigns, inspect audit logs, resolve disputes, and configure platform policy.

## 5. Access and Onboarding

### 5.1 Public Platform Access

Before onboarding, users can access the public platform:

- Landing page.
- Marketplace browse.
- Public agent profiles.
- Pricing and product pages.
- Documentation previews.
- Application pages.

### 5.2 Application Gate

Any serious capability requires an application:

- Create or monetize an agent.
- Publish a creator profile.
- Create a business workspace.
- Use API/MCP keys.
- Launch a meeting avatar.
- Create ad campaigns.
- Register as publisher.
- Receive payouts.

The application collects:

- Intended role or roles.
- Personal or business identity.
- Use case.
- Website/social/company links.
- Expected usage.
- Payout or billing intent.
- Risk-sensitive details such as regulated domains, public voice usage, or campaign categories.

### 5.3 Admin Review

Applications enter an admin review queue.

Admin decisions:

- Approve.
- Reject.
- Request more information.
- Approve with limited permissions.
- Assign one or more roles.
- Require KYC/KYB.
- Escalate for manual review.

### 5.4 Approved Workspace Activation

After approval, the user receives one or more workspaces:

- Personal workspace.
- Creator workspace.
- Business workspace.
- Developer workspace.
- Advertiser workspace.
- Publisher workspace.

Each workspace exposes only the capabilities approved for that user or organization.

### 5.5 Verification Tiers

Verification is not a fake demo step. It should become a real operational control.

Initial tiers:

- Unapproved: public browsing only.
- Approved basic: limited platform access.
- Monetization approved: can earn and charge users.
- Business approved: can operate business workflows.
- Developer approved: can create API/MCP keys.
- Ads approved: can create campaigns or publish ad units.
- Verified/KYC/KYB: required for payouts, larger spend, enterprise, and higher-risk usage.

## 6. Core Apps

### 6.1 Public Website

Purpose:

- Explain Cloniq clearly.
- Signal trust, quality, and scale.
- Drive applications and marketplace discovery.

Primary pages:

- Home.
- Product overview.
- Marketplace.
- Business AI.
- Creator AI.
- Developer platform.
- Ads and rewards.
- Pricing.
- Docs.
- Apply.

### 6.2 Marketplace

Purpose:

- Let users discover and buy AI services.

Core screens:

- Browse agents.
- Agent profile.
- Category pages.
- Search results.
- Paid chat session.
- Voice/call entry point.
- Meeting booking or launch.
- Reviews and trust signals.

### 6.3 Creator Studio

Purpose:

- Let creators build, publish, and monetize AI clones.

Core screens:

- Creator dashboard.
- Agent builder.
- Knowledge upload.
- Pricing and offers.
- Meeting/avatar configuration.
- Tool/workflow configuration.
- Earnings and analytics.
- Reviews and moderation.

### 6.4 Business Workspace

Purpose:

- Let approved businesses operate custom AI workflows.

Core screens:

- Business dashboard.
- Team and roles.
- Managed setup requests.
- Workflow builder.
- Agent templates.
- Voice workflow configuration.
- Data imports and integrations.
- Calls/tasks/transcripts.
- Human review queue.
- Billing and usage.

### 6.5 Developer Console

Purpose:

- Let developers integrate Cloniq agents into external products and AI clients.

Core screens:

- API keys.
- MCP setup.
- SDK docs.
- Usage logs.
- Rate limits.
- Billing.
- Webhooks.
- Sandbox/test console.

### 6.6 Meeting Workspace

Purpose:

- Manage Pika-style meeting agents.

Core screens:

- Avatar setup.
- Voice setup.
- Meeting link launch.
- Prompt/context builder.
- Active sessions.
- Leave meeting controls.
- Notes and transcript history.
- Compliance warnings and recording consent states.

### 6.7 Ads and Rewards Console

Purpose:

- Manage advertiser, publisher, and viewer economy.

Core screens:

- Advertiser campaign builder.
- Campaign review status.
- Funding and spend.
- Publisher embed setup.
- Ad unit analytics.
- Viewer reward wallet.
- Fraud/abuse review.
- Revenue split reports.

### 6.8 Admin Console

Purpose:

- Operate trust, approvals, moderation, and policy.

Core screens:

- Application review queue.
- User and workspace management.
- Role and permission assignment.
- Agent moderation.
- Business workflow review.
- Meeting avatar review.
- Campaign review.
- Payout review.
- Audit logs.
- Dispute resolution.

## 7. Business Customization Model

Cloniq supports both managed setup and self-serve no-code customization.

### 7.1 Managed Setup

Best for early customers, enterprise workflows, sensitive voice/call use cases, and complex integrations.

Flow:

- Business applies.
- Admin approves business workspace.
- Business submits managed setup request.
- Cloniq team configures workflow.
- Business tests in staging.
- Admin approves production launch.
- Business monitors outcomes and requests changes.

### 7.2 No-Code Builder

Best for repeatable templates and scalable self-serve operations.

Builder components:

- Trigger: chat, call, meeting, API, schedule, webhook, upload.
- Input: form, CSV, database, CRM, order system, manual entry.
- Agent: prompt, knowledge, language, voice, tools.
- Action: send message, call customer, update status, create ticket, run tool, escalate.
- Review: human approval, confidence threshold, transcript review.
- Output: dashboard state, webhook, email, CSV export, API response.

### 7.3 Templates

Initial template categories:

- Customer support.
- Sales qualification.
- Order acceptance.
- Appointment booking.
- Meeting note taker.
- Creator clone.
- Paid expert Q&A.
- Internal knowledge assistant.
- API-accessible tool agent.
- Sponsored recommendation agent.

## 8. Monetization

Cloniq should support multiple revenue streams.

### 8.1 Platform Revenue

- Subscription plans for creators and businesses.
- Platform fee on paid agent interactions.
- Platform fee on meeting minutes.
- API usage margin.
- Ads platform fee.
- Managed setup fees.
- Enterprise contracts.

### 8.2 Creator Revenue

- Pay per query.
- Pay per minute.
- Paid meeting sessions.
- Subscriptions.
- Bundled products.
- API usage share.

### 8.3 Business Billing

- Monthly workspace plan.
- Usage-based AI calls/tasks.
- Meeting minutes.
- Voice minutes.
- Storage and knowledge size.
- Managed setup and support.

### 8.4 Developer Billing

- API calls.
- MCP agent usage.
- Tool execution.
- Webhook usage.
- Higher-rate plans.

### 8.5 Ads and Rewards

- Advertiser campaign spend.
- Publisher revenue share.
- Viewer reward allocation.
- Sponsored marketplace placements.
- Sponsored agent recommendations with disclosure.

## 9. Technical Architecture

### 9.1 Application Foundation

Target stack:

- Next.js 16 App Router.
- React 19.
- TypeScript.
- Tailwind CSS v4.
- GSAP for premium motion.
- pnpm workspace or Turborepo when packages become necessary.

The frontend should use a Coinbase-inspired design system with Cloniq identity:

- Trust-first layout.
- Clean fintech UI.
- Strong onboarding and review states.
- Premium interaction design.
- Responsive dashboards.
- Accessible forms and tables.

### 9.2 Auth and Payments

Target stack:

- thirdweb for wallet auth, in-app wallets, smart accounts, checkout, and gasless transactions.
- Base L2 as the primary chain for low-cost transactions.
- Optional fiat/onramp provider depending on market needs.

### 9.3 Data and Backend

Target stack:

- Supabase Postgres for primary data.
- pgvector for knowledge retrieval.
- Supabase Storage or compatible object storage for uploads.
- Server actions or route handlers for application logic.
- Edge routes where latency matters.
- Background job runner for calls, indexing, review, and webhooks.

### 9.4 AI and Agent Runtime

Target stack:

- RAG pipeline for knowledge-grounded agents.
- LLM provider abstraction for Groq/OpenAI/other models.
- Tool execution layer for business workflows.
- Optional sandbox execution for untrusted tools.
- Memory and audit trail for agent actions.

### 9.5 Voice and Meetings

Target stack:

- Pika-style meeting skill for Google Meet/Zoom avatar sessions.
- Voice provider abstraction for speech, real-time voice, and multilingual support.
- Call transcript, summary, and outcome storage.
- Consent and compliance handling for recordings.

### 9.6 Developer and MCP

Target stack:

- MCP server package.
- REST API.
- SDK package.
- API key management.
- Usage metering.
- Webhook delivery.

### 9.7 Ads and Publisher SDK

Target stack:

- Campaign server.
- Publisher React component or SDK.
- Impression and click tracking.
- Reward accounting.
- Fraud and abuse review.
- Optional privacy-preserving proof layer in later phases.

### 9.8 Smart Contracts

Potential contract areas:

- Agent registry.
- Revenue split accounting.
- Payout rails.
- Campaign escrow.
- Reputation attestations.

Smart contracts should not block the first platform launch unless required for a specific sponsor, hackathon, or payment requirement.

## 10. Data Model

Initial core entities:

- `users`: personal identity and base account.
- `applications`: access requests and review history.
- `workspaces`: personal, creator, business, developer, advertiser, publisher.
- `workspace_members`: team access and roles.
- `roles`: assigned capabilities and permissions.
- `agents`: AI agents and clones.
- `agent_versions`: versioned prompts, settings, and release state.
- `knowledge_sources`: uploaded files, URLs, docs, and structured sources.
- `knowledge_chunks`: indexed chunks and embeddings.
- `tools`: reusable actions and business tool definitions.
- `workflows`: no-code business workflows.
- `workflow_runs`: execution logs and outcomes.
- `chat_sessions`: user-agent conversations.
- `messages`: chat and agent messages.
- `meeting_agents`: avatar, voice, and meeting configuration.
- `meeting_sessions`: live and historical meeting sessions.
- `call_sessions`: voice call logs and outcomes.
- `transcripts`: call/meeting/chat transcript records.
- `api_keys`: developer and workspace API access.
- `usage_events`: metering for billing and analytics.
- `transactions`: charges, payouts, credits, and refunds.
- `campaigns`: advertiser campaigns.
- `ad_units`: publisher placements.
- `impressions`: tracked ad views.
- `clicks`: tracked ad clicks.
- `rewards`: viewer or publisher rewards.
- `reviews`: ratings, feedback, and moderation notes.
- `audit_logs`: sensitive admin/user/system events.

## 11. Key User Flows

### 11.1 Public to Approved Creator

1. Visitor lands on Cloniq.
2. Visitor browses marketplace and creator product pages.
3. Visitor applies as creator.
4. Admin reviews application.
5. Creator is approved with creator workspace.
6. Creator creates an agent, uploads knowledge, sets price, and submits for review.
7. Admin approves publication.
8. Users pay to interact with the agent.
9. Creator tracks earnings and usage.

### 11.2 Business Custom Workflow

1. Business applies for access.
2. Admin approves business workspace.
3. Business chooses managed setup or no-code builder.
4. Business configures an agent and workflow.
5. Workflow is tested in staging.
6. Admin or business owner approves launch.
7. Workflow runs against real customers or internal users.
8. Low-confidence outcomes go to human review.
9. Business monitors analytics and cost.

### 11.3 Developer API/MCP Access

1. Developer applies.
2. Admin approves developer workspace.
3. Developer creates scoped API key.
4. Developer installs MCP server or uses REST/SDK.
5. Developer invokes agents through metered usage.
6. Cloniq tracks usage, billing, rate limits, and errors.

### 11.4 Advertiser Campaign

1. Advertiser applies.
2. Admin approves ads workspace.
3. Advertiser creates campaign and funds budget.
4. Admin reviews creative and targeting.
5. Campaign runs across marketplace placements and publisher SDK surfaces.
6. Impressions, clicks, conversions, spend, and rewards are tracked.

### 11.5 Meeting Avatar

1. Approved creator or business configures meeting avatar.
2. User provides meeting link or schedules session.
3. Cloniq validates permissions, avatar, voice, balance, and consent requirements.
4. Avatar joins meeting.
5. Session produces transcript, notes, and action items.
6. Usage is billed and logged.

## 12. Phase Roadmap

### Phase 0: Product Definition

- Complete PRD.
- Define design direction.
- Decide repo structure.
- Define first data model.
- Define trust/access model.

### Phase 1: Fresh Foundation

- Create new Next.js 16 application.
- Configure TypeScript, Tailwind v4, linting, testing, and design tokens.
- Add Coinbase-inspired Cloniq UI foundation.
- Add public pages and application-gated navigation.

### Phase 2: Auth, Accounts, and Applications

- Add thirdweb auth.
- Create user records.
- Build application submission flow.
- Build admin review queue.
- Implement role/workspace activation.

### Phase 3: Creator and Marketplace Core

- Build creator workspace.
- Build agent creation flow.
- Build knowledge upload and RAG indexing.
- Build marketplace browse and agent profile.
- Build paid/free chat interactions.

### Phase 4: Business Workspace

- Build business application and workspace.
- Build managed setup request flow.
- Build workflow template model.
- Build initial no-code workflow builder.
- Build human review queue.

### Phase 5: Developer Platform

- Build API key console.
- Build MCP server.
- Build REST API for agent usage.
- Add usage metering and rate limits.
- Add docs and sample integrations.

### Phase 6: Meetings and Voice

- Integrate Pika-style meeting avatar flow.
- Add avatar, voice, and session configuration.
- Add meeting transcripts, summaries, and notes.
- Add compliance and consent states.
- Add multilingual voice workflow support.

### Phase 7: Payments and Monetization

- Add wallet balances and checkout.
- Add creator pricing and platform fees.
- Add business billing.
- Add API billing.
- Add payout review flow.

### Phase 8: Ads and Rewards

- Build advertiser workspace.
- Build publisher workspace.
- Build campaign model and review flow.
- Build publisher SDK/ad unit.
- Add impression/click/reward tracking.

### Phase 9: Advanced Trust and Compliance

- Add KYC/KYB provider integration.
- Add risk scoring.
- Add content moderation.
- Add audit export.
- Add dispute and refund workflows.

### Phase 10: Onchain and Ecosystem Expansion

- Add agent registry contracts where useful.
- Add campaign escrow or revenue split contracts if needed.
- Add public developer SDKs.
- Add marketplace growth features.
- Add enterprise controls.

## 13. Success Metrics

### Platform

- Approved applications.
- Activated workspaces.
- Weekly active users.
- Retention by role.
- Public to application conversion.

### Creator

- Published agents.
- Paid interactions.
- Creator earnings.
- Repeat buyers.
- Agent satisfaction and review score.

### Business

- Approved businesses.
- Active workflows.
- Completed workflow runs.
- Human escalation rate.
- Cost per completed task.

### Developer

- Active API keys.
- MCP installs.
- API calls.
- Error rate.
- Revenue per developer workspace.

### Meetings and Voice

- Meeting sessions.
- Call completion rate.
- Minutes billed.
- Transcript review rate.
- Multilingual success rate.

### Ads and Rewards

- Campaign spend.
- Publisher revenue.
- Viewer rewards.
- Impression quality.
- Fraud/review rate.

## 14. Non-Goals

These are intentionally out of scope for the first implementation plan:

- Reusing old webapp code directly as the production foundation.
- Launching all product pillars in the first release.
- Requiring smart contracts for every workflow before product-market validation.
- Pretending KYC/KYB is complete before a real provider or manual review process exists.
- Allowing unrestricted public agent monetization without review.

## 15. Open Decisions

These decisions should be made before implementation planning:

- Repo layout: single Next.js app first vs. pnpm monorepo from day one.
- Initial database migration strategy.
- First LLM provider.
- First voice provider for business calls.
- First KYC/KYB provider or manual-only launch policy.
- Whether Pika meeting support ships before or after creator chat marketplace.
- Whether ads/rewards are included in the first public demo or reserved for later.

## 16. Founder Review Checklist

Before implementation planning, confirm:

- Cloniq remains the final product name.
- The platform is ecosystem-first, not marketplace-only.
- Application-gated access is required before serious capabilities.
- Business customization supports both managed setup and no-code builder.
- The order-acceptance voice bot is a sample business workflow, not the whole product.
- Next.js 16 is the target app foundation.
- Coinbase-inspired trust design is the preferred UI direction.
