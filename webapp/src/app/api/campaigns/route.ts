import { NextResponse } from "next/server";
import { addCampaign, readPlatformState } from "@/lib/platform/store";

export async function GET() {
  const state = await readPlatformState();
  return NextResponse.json({ campaigns: state.campaigns });
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<{ name: string; budgetLabel: string }>;

  if (!body.name || !body.budgetLabel) {
    return NextResponse.json({ errors: ["Campaign name and budget are required."] }, { status: 400 });
  }

  const campaign = await addCampaign({ name: body.name, budgetLabel: body.budgetLabel });
  return NextResponse.json({ campaign }, { status: 201 });
}
