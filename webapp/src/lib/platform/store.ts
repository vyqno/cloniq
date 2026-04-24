import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { initialPlatformState } from "./seed";
import type {
  AgentInput,
  CampaignInput,
  DeveloperKeyInput,
  MeetingInput,
  PlatformState,
  WorkflowInput,
} from "./types";

const dataDir = path.join(process.cwd(), ".data");
const dataFile = path.join(dataDir, "platform.json");

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function idFor(prefix: string, value: string) {
  return `${prefix}_${slugify(value)}_${Date.now().toString(36)}`;
}

async function writeState(state: PlatformState) {
  await mkdir(dataDir, { recursive: true });
  await writeFile(dataFile, JSON.stringify(state, null, 2));
}

export async function readPlatformState(): Promise<PlatformState> {
  try {
    const content = await readFile(dataFile, "utf8");
    return JSON.parse(content) as PlatformState;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      await writeState(initialPlatformState);
      return initialPlatformState;
    }
    throw error;
  }
}

export async function updatePlatformState(mutator: (state: PlatformState) => PlatformState) {
  const state = await readPlatformState();
  const nextState = mutator(state);
  await writeState(nextState);
  return nextState;
}

export function createAgent(state: PlatformState, input: AgentInput) {
  return {
    id: idFor("agent", input.name),
    slug: slugify(input.name),
    name: input.name,
    category: input.category,
    description: input.description,
    creator: "Pending creator",
    priceLabel: input.priceLabel,
    languages: ["English"],
    modalities: ["chat", "api"] as const,
    trustTier: "review" as const,
    status: "review" as const,
  };
}

export function createWorkflow(state: PlatformState, input: WorkflowInput) {
  return {
    id: idFor("workflow", input.name),
    name: input.name,
    trigger: input.trigger,
    action: input.action,
    review: "Human approval required before production",
    status: "draft" as const,
  };
}

export function createDeveloperKey(state: PlatformState, input: DeveloperKeyInput) {
  return {
    id: idFor("key", input.label),
    label: input.label,
    keyPreview: `clq_${slugify(input.label).slice(0, 8)}_••••`,
    scopes: ["agents:read", "chat:create"],
    status: "limited" as const,
    usageLabel: "0 calls this month",
  };
}

export function createMeeting(state: PlatformState, input: MeetingInput) {
  return {
    id: idFor("meeting", input.title),
    title: input.title,
    provider: input.provider,
    avatar: "Default Cloniq avatar",
    voice: "Default voice",
    status: "ready" as const,
  };
}

export function createCampaign(state: PlatformState, input: CampaignInput) {
  return {
    id: idFor("campaign", input.name),
    name: input.name,
    budgetLabel: input.budgetLabel,
    placement: "Marketplace sponsored slots",
    status: "review" as const,
  };
}

export async function addAgent(input: AgentInput) {
  let created = createAgent(initialPlatformState, input);
  await updatePlatformState((state) => {
    created = createAgent(state, input);
    return { ...state, agents: [created, ...state.agents] };
  });
  return created;
}

export async function addWorkflow(input: WorkflowInput) {
  let created = createWorkflow(initialPlatformState, input);
  await updatePlatformState((state) => {
    created = createWorkflow(state, input);
    return { ...state, workflows: [created, ...state.workflows] };
  });
  return created;
}

export async function addDeveloperKey(input: DeveloperKeyInput) {
  let created = createDeveloperKey(initialPlatformState, input);
  await updatePlatformState((state) => {
    created = createDeveloperKey(state, input);
    return { ...state, developerKeys: [created, ...state.developerKeys] };
  });
  return created;
}

export async function addMeeting(input: MeetingInput) {
  let created = createMeeting(initialPlatformState, input);
  await updatePlatformState((state) => {
    created = createMeeting(state, input);
    return { ...state, meetings: [created, ...state.meetings] };
  });
  return created;
}

export async function addCampaign(input: CampaignInput) {
  let created = createCampaign(initialPlatformState, input);
  await updatePlatformState((state) => {
    created = createCampaign(state, input);
    return { ...state, campaigns: [created, ...state.campaigns] };
  });
  return created;
}
