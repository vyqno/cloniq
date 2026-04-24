import { NextResponse } from "next/server";
import { addMeeting, readPlatformState } from "@/lib/platform/store";

export async function GET() {
  const state = await readPlatformState();
  return NextResponse.json({ meetings: state.meetings });
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<{ title: string; provider: "Pika" | "Voice adapter" }>;

  if (!body.title || !body.provider) {
    return NextResponse.json({ errors: ["Title and provider are required."] }, { status: 400 });
  }

  const meeting = await addMeeting({ title: body.title, provider: body.provider });
  return NextResponse.json({ meeting }, { status: 201 });
}
