"use client";

import { useState } from "react";
import type { MeetingSession } from "@/lib/platform/types";

type MeetingConsoleProps = {
  initialMeetings: MeetingSession[];
};

export function MeetingConsole({ initialMeetings }: MeetingConsoleProps) {
  const [meetings, setMeetings] = useState(initialMeetings);
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/meetings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: formData.get("title"), provider: formData.get("provider") }),
    });

    if (!response.ok) {
      setStatus("Meeting session could not be prepared.");
      return;
    }

    const body = (await response.json()) as { meeting: MeetingSession };
    setMeetings((current) => [body.meeting, ...current]);
    event.currentTarget.reset();
    setStatus(`${body.meeting.title} is ready for avatar launch.`);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <form className="grid gap-4 rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm" onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold">Prepare meeting avatar</h2>
        <input className="rounded-xl border border-[var(--border)] px-4 py-3" name="title" placeholder="Meeting title" required />
        <select className="rounded-xl border border-[var(--border)] px-4 py-3" name="provider" required>
          <option value="Pika">Pika</option>
          <option value="Voice adapter">Voice adapter</option>
        </select>
        <button className="min-h-12 rounded-[56px] bg-[var(--brand)] px-5 text-sm font-semibold text-white" type="submit">
          Prepare session
        </button>
        {status ? <p className="text-sm font-semibold text-[var(--brand)]">{status}</p> : null}
      </form>
      <div className="grid gap-4">
        {meetings.map((meeting) => (
          <article className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-sm" key={meeting.id}>
            <h3 className="text-lg font-semibold">{meeting.title}</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">Provider: {meeting.provider}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">Avatar: {meeting.avatar}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">Voice: {meeting.voice}</p>
            <span className="mt-4 inline-flex rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand)]">
              {meeting.status}
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}
