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
