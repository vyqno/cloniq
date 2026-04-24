import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { AccessApplication, ApplicationInput, ReviewDecision } from "./types";
import { applyReviewDecision } from "./validation";

const dataDir = path.join(process.cwd(), ".data");
const dataFile = path.join(dataDir, "applications.json");

async function readApplications(): Promise<AccessApplication[]> {
  try {
    const content = await readFile(dataFile, "utf8");
    return JSON.parse(content) as AccessApplication[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

async function writeApplications(applications: AccessApplication[]) {
  await mkdir(dataDir, { recursive: true });
  await writeFile(dataFile, JSON.stringify(applications, null, 2));
}

export async function listApplications() {
  return readApplications();
}

export async function createApplication(input: ApplicationInput) {
  const now = new Date().toISOString();
  const application: AccessApplication = {
    ...input,
    id: `app_${Date.now().toString(36)}`,
    status: "pending",
    createdAt: now,
    updatedAt: now,
  };
  const applications = await readApplications();
  await writeApplications([application, ...applications]);
  return application;
}

export async function reviewApplication(id: string, decision: ReviewDecision) {
  const applications = await readApplications();
  const index = applications.findIndex((application) => application.id === id);

  if (index === -1) {
    return null;
  }

  const reviewed = applyReviewDecision(applications[index], decision);
  applications[index] = reviewed;
  await writeApplications(applications);
  return reviewed;
}
