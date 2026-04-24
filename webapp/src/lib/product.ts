export type ProductPillar = {
  title: string;
  description: string;
  capabilities: string[];
};

export type WorkspaceCard = {
  title: string;
  audience: string;
  description: string;
  status: "Application required" | "Internal";
};

export type RoadmapPhase = {
  phase: string;
  title: string;
  description: string;
};

export const productPillars: ProductPillar[] = [
  {
    title: "Creator AI",
    description:
      "Build monetized AI clones around knowledge, personality, tools, meetings, and paid access.",
    capabilities: ["Agent profiles", "Knowledge upload", "Paid chat", "Meeting access"],
  },
  {
    title: "Business AI",
    description:
      "Operate managed and no-code AI workflows for sales, support, calls, operations, and internal teams.",
    capabilities: ["Managed setup", "Workflow builder", "Human review", "Usage analytics"],
  },
  {
    title: "Marketplace",
    description:
      "Discover verified agents, business solutions, creator clones, and developer-accessible AI tools.",
    capabilities: ["Public browse", "Trust badges", "Paid sessions", "Reviews"],
  },
  {
    title: "Meeting Avatars",
    description:
      "Launch approved AI avatars into Google Meet or Zoom with voice, context, notes, and transcripts.",
    capabilities: ["Pika-style meetings", "Avatar setup", "Voice setup", "Post-meeting notes"],
  },
  {
    title: "Developer Platform",
    description:
      "Use Cloniq agents through API keys, MCP, SDKs, metered billing, and machine-to-machine payments.",
    capabilities: ["API keys", "MCP server", "Usage logs", "Rate limits"],
  },
  {
    title: "Ads and Rewards",
    description:
      "Run a fair attention network for campaigns, publisher placements, viewer rewards, and sponsored agents.",
    capabilities: ["Campaigns", "Publisher SDK", "Viewer rewards", "Fraud review"],
  },
  {
    title: "Trust and Review",
    description:
      "Gate serious capabilities through applications, manual review, workspace permissions, and later KYC/KYB.",
    capabilities: ["Applications", "Admin review", "Role assignment", "Audit logs"],
  },
];

export const workspaceCards: WorkspaceCard[] = [
  {
    title: "Creator Workspace",
    audience: "Creators",
    description: "Create AI clones, configure knowledge, price interactions, and track earnings.",
    status: "Application required",
  },
  {
    title: "Business Workspace",
    audience: "Companies",
    description:
      "Build managed or no-code workflows for calls, support, sales, operations, and internal tools.",
    status: "Application required",
  },
  {
    title: "Developer Console",
    audience: "Developers",
    description: "Create scoped API keys, connect MCP clients, and monitor metered agent usage.",
    status: "Application required",
  },
  {
    title: "Advertiser Console",
    audience: "Advertisers",
    description: "Create reviewed campaigns, fund spend, and measure sponsored placements.",
    status: "Application required",
  },
  {
    title: "Publisher Console",
    audience: "Publishers",
    description: "Embed Cloniq placements, track attention, and receive approved revenue share.",
    status: "Application required",
  },
  {
    title: "Admin Console",
    audience: "Cloniq team",
    description: "Review applications, moderate agents, approve campaigns, and inspect audit logs.",
    status: "Internal",
  },
];

export const roadmapPhases: RoadmapPhase[] = [
  {
    phase: "01",
    title: "Foundation",
    description: "Next.js 16 app, design baseline, public shell, and application-gated navigation.",
  },
  {
    phase: "02",
    title: "Accounts and Review",
    description:
      "thirdweb auth, application submissions, admin review, roles, and workspace activation.",
  },
  {
    phase: "03",
    title: "Creator and Marketplace",
    description: "Agent builder, RAG knowledge, marketplace profiles, and paid chat.",
  },
  {
    phase: "04",
    title: "Business Platform",
    description:
      "Managed setup requests, workflow templates, no-code builder, and human review queues.",
  },
  {
    phase: "05",
    title: "Ecosystem Rails",
    description:
      "Developer API/MCP, meeting avatars, payments, ads, rewards, compliance, and onchain expansion.",
  },
];
