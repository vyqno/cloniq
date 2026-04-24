import { NextResponse } from "next/server";
import { addWorkflow, readPlatformState } from "@/lib/platform/store";

export async function GET() {
  const state = await readPlatformState();
  return NextResponse.json({ workflows: state.workflows });
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<{ name: string; trigger: string; action: string }>;

  if (!body.name || !body.trigger || !body.action) {
    return NextResponse.json({ errors: ["Name, trigger, and action are required."] }, { status: 400 });
  }

  const workflow = await addWorkflow({ name: body.name, trigger: body.trigger, action: body.action });
  return NextResponse.json({ workflow }, { status: 201 });
}
