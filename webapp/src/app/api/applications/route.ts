import { NextResponse } from "next/server";
import { createApplication, listApplications } from "@/lib/applications/store";
import type { AccessRole } from "@/lib/applications/types";
import { validateApplicationInput } from "@/lib/applications/validation";

export async function GET() {
  const applications = await listApplications();
  return NextResponse.json({ applications });
}

export async function POST(request: Request) {
  const body = (await request.json()) as {
    applicantName?: string;
    email?: string;
    organization?: string;
    roles?: AccessRole[];
    useCase?: string;
    links?: string;
    expectedUsage?: string;
  };

  const validation = validateApplicationInput({
    applicantName: body.applicantName ?? "",
    email: body.email ?? "",
    organization: body.organization ?? "",
    roles: body.roles ?? [],
    useCase: body.useCase ?? "",
    links: body.links ?? "",
    expectedUsage: body.expectedUsage ?? "",
  });

  if (!validation.ok) {
    return NextResponse.json({ errors: validation.errors }, { status: 400 });
  }

  const application = await createApplication(validation.value);
  return NextResponse.json({ application }, { status: 201 });
}
