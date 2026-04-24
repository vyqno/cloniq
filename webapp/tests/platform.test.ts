import { describe, expect, it } from "vitest";
import { createAgent, createCampaign, createDeveloperKey, createMeeting, createWorkflow } from "@/lib/platform/store";
import { initialPlatformState } from "@/lib/platform/seed";

describe("Cloniq platform state", () => {
  it("seeds every remaining PRD phase", () => {
    expect(initialPlatformState.agents.length).toBeGreaterThan(0);
    expect(initialPlatformState.workflows.length).toBeGreaterThan(0);
    expect(initialPlatformState.developerKeys.length).toBeGreaterThan(0);
    expect(initialPlatformState.meetings.length).toBeGreaterThan(0);
    expect(initialPlatformState.billing.plans.length).toBeGreaterThan(0);
    expect(initialPlatformState.campaigns.length).toBeGreaterThan(0);
    expect(initialPlatformState.trust.kycStatus).toBe("manual_review");
    expect(initialPlatformState.onchain.registryStatus).toBe("ready_to_deploy");
  });

  it("creates deterministic platform records", () => {
    const agent = createAgent(initialPlatformState, {
      name: "Order Ops Clone",
      category: "Business",
      description: "Accepts customer orders over multilingual calls.",
      priceLabel: "$0.20/call",
    });
    const workflow = createWorkflow(initialPlatformState, {
      name: "Order acceptance",
      trigger: "CSV upload",
      action: "Call customer",
    });
    const key = createDeveloperKey(initialPlatformState, { label: "MCP production" });
    const meeting = createMeeting(initialPlatformState, { title: "Creator intro", provider: "Pika" });
    const campaign = createCampaign(initialPlatformState, {
      name: "Verified AI tools",
      budgetLabel: "$500",
    });

    expect(agent.slug).toBe("order-ops-clone");
    expect(workflow.status).toBe("draft");
    expect(key.keyPreview).toMatch(/^clq_/);
    expect(meeting.status).toBe("ready");
    expect(campaign.status).toBe("review");
  });
});
