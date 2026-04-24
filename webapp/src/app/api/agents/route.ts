import { NextResponse } from "next/server";
import { addAgent, readPlatformState } from "@/lib/platform/store";

export async function GET() {
  const state = await readPlatformState();
  return NextResponse.json({ agents: state.agents });
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<{
    name: string;
    category: string;
    description: string;
    priceLabel: string;
  }>;

  if (!body.name || !body.category || !body.description || !body.priceLabel) {
    return NextResponse.json({ errors: ["Name, category, description, and price are required."] }, { status: 400 });
  }

  const agent = await addAgent({
    name: body.name,
    category: body.category,
    description: body.description,
    priceLabel: body.priceLabel,
  });
  return NextResponse.json({ agent }, { status: 201 });
}
