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
