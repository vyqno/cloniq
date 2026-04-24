import { MeetingConsole } from "@/components/platform/MeetingConsole";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { readPlatformState } from "@/lib/platform/store";

export default async function MeetingsPage() {
  const { meetings } = await readPlatformState();

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
          Meeting Avatars
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Pika-style meeting operations</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          Prepare approved AI avatars for Google Meet or Zoom with avatar, voice, notes, and
          transcript readiness.
        </p>
        <div className="mt-8">
          <MeetingConsole initialMeetings={meetings} />
        </div>
      </main>
      <Footer />
    </>
  );
}
