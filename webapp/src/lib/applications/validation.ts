import {
  accessRoles,
  type AccessApplication,
  type ApplicationInput,
  type ReviewDecision,
} from "./types";

type ValidationResult = { ok: true; value: ApplicationInput } | { ok: false; errors: string[] };

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
