import { describe, expect, it } from "vitest";
import { productPillars, workspaceCards } from "@/lib/product";

describe("Cloniq product data", () => {
  it("defines the full platform pillars from the PRD", () => {
    expect(productPillars.map((pillar) => pillar.title)).toEqual([
      "Creator AI",
      "Business AI",
      "Marketplace",
      "Meeting Avatars",
      "Developer Platform",
      "Ads and Rewards",
      "Trust and Review",
    ]);
  });

  it("defines approved workspaces for every platform side", () => {
    expect(workspaceCards.map((workspace) => workspace.title)).toEqual([
      "Creator Workspace",
      "Business Workspace",
      "Developer Console",
      "Advertiser Console",
      "Publisher Console",
      "Admin Console",
    ]);
  });
});
