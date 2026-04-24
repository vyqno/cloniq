import { NextResponse } from "next/server";
import { addDeveloperKey, readPlatformState } from "@/lib/platform/store";

export async function GET() {
  const state = await readPlatformState();
  return NextResponse.json({ developerKeys: state.developerKeys });
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<{ label: string }>;

  if (!body.label) {
    return NextResponse.json({ errors: ["Key label is required."] }, { status: 400 });
  }

  const developerKey = await addDeveloperKey({ label: body.label });
  return NextResponse.json({ developerKey }, { status: 201 });
}
