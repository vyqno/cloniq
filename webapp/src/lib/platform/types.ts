export type AgentModality = "chat" | "voice" | "meeting" | "api" | "workflow";

export type AgentListing = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  creator: string;
  priceLabel: string;
  languages: string[];
  modalities: AgentModality[];
  trustTier: "review" | "verified" | "business";
  status: "draft" | "review" | "published";
};

export type WorkflowTemplate = {
  id: string;
  name: string;
  trigger: string;
  action: string;
  review: string;
  status: "draft" | "managed_setup" | "active";
};

export type DeveloperKey = {
  id: string;
  label: string;
  keyPreview: string;
  scopes: string[];
  status: "active" | "limited" | "revoked";
  usageLabel: string;
};

export type MeetingSession = {
  id: string;
  title: string;
  provider: "Pika" | "Voice adapter";
  avatar: string;
  voice: string;
  status: "ready" | "needs_avatar" | "needs_voice" | "live";
};

export type BillingPlan = {
  name: string;
  audience: string;
  priceLabel: string;
  includes: string[];
};

export type BillingState = {
  balanceLabel: string;
  payoutStatus: "not_configured" | "review" | "approved";
  usageLabel: string;
  plans: BillingPlan[];
};

export type Campaign = {
  id: string;
  name: string;
  budgetLabel: string;
  placement: string;
  status: "draft" | "review" | "active" | "paused";
};

export type TrustState = {
  kycStatus: "manual_review" | "provider_required" | "verified";
  riskScore: "low" | "medium" | "high";
  moderationQueue: number;
  auditEvents: string[];
};

export type OnchainState = {
  registryStatus: "ready_to_deploy" | "deployed";
  chain: string;
  contracts: string[];
  attestations: string[];
};

export type PlatformState = {
  agents: AgentListing[];
  workflows: WorkflowTemplate[];
  developerKeys: DeveloperKey[];
  meetings: MeetingSession[];
  billing: BillingState;
  campaigns: Campaign[];
  trust: TrustState;
  onchain: OnchainState;
};

export type AgentInput = Pick<AgentListing, "name" | "category" | "description" | "priceLabel">;
export type WorkflowInput = Pick<WorkflowTemplate, "name" | "trigger" | "action">;
export type DeveloperKeyInput = Pick<DeveloperKey, "label">;
export type MeetingInput = Pick<MeetingSession, "title" | "provider">;
export type CampaignInput = Pick<Campaign, "name" | "budgetLabel">;
