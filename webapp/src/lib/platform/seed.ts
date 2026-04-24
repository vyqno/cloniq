import type { PlatformState } from "./types";

export const initialPlatformState: PlatformState = {
  agents: [
    {
      id: "agent_creator_clone",
      slug: "creator-clone",
      name: "Creator Clone",
      category: "Creator",
      description: "A verified creator clone that answers paid questions and can join meetings.",
      creator: "Cloniq Studio",
      priceLabel: "$0.05/query",
      languages: ["English", "Hindi"],
      modalities: ["chat", "meeting", "api"],
      trustTier: "verified",
      status: "published",
    },
    {
      id: "agent_business_ops",
      slug: "business-ops-agent",
      name: "Business Ops Agent",
      category: "Business",
      description: "A managed workflow agent for customer calls, order updates, and escalation review.",
      creator: "Cloniq Business",
      priceLabel: "$0.20/task",
      languages: ["English", "Hindi", "Kannada", "Marathi"],
      modalities: ["voice", "workflow"],
      trustTier: "business",
      status: "published",
    },
  ],
  workflows: [
    {
      id: "workflow_order_acceptance",
      name: "Multilingual order acceptance",
      trigger: "CSV upload or API webhook",
      action: "Call customer, confirm order, update status",
      review: "Low-confidence calls enter human review",
      status: "managed_setup",
    },
    {
      id: "workflow_sales_qualification",
      name: "Sales qualification",
      trigger: "New inbound lead",
      action: "Score lead, book meeting, notify team",
      review: "Enterprise leads require approval",
      status: "active",
    },
  ],
  developerKeys: [
    {
      id: "key_mcp_demo",
      label: "MCP demo key",
      keyPreview: "clq_demo_••••_mcp",
      scopes: ["agents:read", "chat:create", "usage:read"],
      status: "limited",
      usageLabel: "128 calls this month",
    },
  ],
  meetings: [
    {
      id: "meeting_avatar_ready",
      title: "Creator clone meeting avatar",
      provider: "Pika",
      avatar: "Generated business portrait",
      voice: "Default voice until clone approved",
      status: "ready",
    },
  ],
  billing: {
    balanceLabel: "$240.00 platform credits",
    payoutStatus: "review",
    usageLabel: "1,420 metered events this month",
    plans: [
      {
        name: "Creator",
        audience: "Verified creators",
        priceLabel: "$29/mo + usage",
        includes: ["Paid agents", "Meeting offers", "Earnings dashboard"],
      },
      {
        name: "Business",
        audience: "Approved companies",
        priceLabel: "$299/mo + usage",
        includes: ["Managed setup", "Workflow builder", "Team access"],
      },
      {
        name: "Developer",
        audience: "API and MCP builders",
        priceLabel: "Usage based",
        includes: ["API keys", "MCP server", "Rate limits"],
      },
    ],
  },
  campaigns: [
    {
      id: "campaign_verified_tools",
      name: "Verified AI tools",
      budgetLabel: "$500",
      placement: "Marketplace sponsored slots",
      status: "review",
    },
  ],
  trust: {
    kycStatus: "manual_review",
    riskScore: "medium",
    moderationQueue: 3,
    auditEvents: ["Application approved", "Campaign sent to review", "Payout queued"],
  },
  onchain: {
    registryStatus: "ready_to_deploy",
    chain: "Base",
    contracts: ["AgentRegistry", "CampaignEscrow", "RevenueSplit"],
    attestations: ["Verified creator", "Approved business", "Reviewed campaign"],
  },
};
