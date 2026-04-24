import { NextResponse } from "next/server";
import { reviewApplication } from "@/lib/applications/store";
import type { AccessRole, ApplicationStatus } from "@/lib/applications/types";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PATCH(request: Request, context: RouteContext) {
  const { id } = await context.params;
  const body = (await request.json()) as {
    status?: Exclude<ApplicationStatus, "pending">;
    reviewerNote?: string;
    approvedRoles?: AccessRole[];
  };

  if (!body.status || !["approved", "rejected", "needs_info"].includes(body.status)) {
    return NextResponse.json({ errors: ["Choose a valid review status."] }, { status: 400 });
  }

  const application = await reviewApplication(id, {
    status: body.status,
    reviewerNote: body.reviewerNote ?? "",
    approvedRoles: body.approvedRoles,
  });

  if (!application) {
    return NextResponse.json({ errors: ["Application not found."] }, { status: 404 });
  }

  return NextResponse.json({ application });
}
