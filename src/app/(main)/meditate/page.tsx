import { MeditationTimer } from "@/components/meditation-timer/Timer";
import { MeditatingNowCounter } from "@/components/MeditatingNowCounter";
import { discourses, chantingTracks, dohaTracks } from "@/data/discourses";
import { AudioPlayer } from "@/components/audio-player/AudioPlayer";
import type { AudioTrack } from "@/components/audio-player/AudioPlayer";
import {
  PlayCircle,
  ExternalLink,
  Music,
  Clock,
  Users,
  Mic2,
} from "lucide-react";

// Group sitting schedule from dhamma.org
const groupSittings = [
  {
    time: "Daily at 4:30 AM",
    location: "Worldwide (dhamma.org schedule)",
    url: "https://www.dhamma.org/en/os/sitting",
    note: "Old student group sittings",
  },
  {
    time: "Daily at 6:00 AM",
    location: "Online (international)",
    url: "https://www.dhamma.org/en/os/sitting",
    note: "Join via dhamma.org old student login",
  },
  {
    time: "Daily at 6:00 PM",
    location: "Online (international)",
    url: "https://www.dhamma.org/en/os/sitting",
    note: "Evening group sit",
  },
];

export default function MeditatePage() {
  const discourseAudioTracks: AudioTrack[] = discourses.map((d) => ({
    id: d.id,
    title: d.title,
    subtitle: d.description,
    audioUrl: d.audioUrl,
    externalUrl: "https://discourses.dhamma.org/recordings/discourses",
    duration: d.duration,
  }));

  const chantingAudioTracks: AudioTrack[] = chantingTracks.map((c) => ({
    id: c.id,
    title: c.title,
    subtitle: `${c.source} · ${c.language}`,
    audioUrl: c.audioUrl,
    externalUrl: "https://discourses.dhamma.org/recordings/chantings",
    duration: c.duration,
  }));

  const dohaAudioTracks: AudioTrack[] = dohaTracks.map((d) => ({
    id: d.id,
    title: d.title,
    subtitle: `Day ${d.day} Doha`,
    audioUrl: d.audioUrl,
    externalUrl: "https://discourses.dhamma.org/recordings/chantings",
    duration: d.duration,
  }));

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Meditating now counter */}
      <MeditatingNowCounter />

      {/* Timer section */}
      <section>
        <h2 className="section-title mb-4 flex items-center gap-2">
          <Clock size={20} className="text-rust" />
          Meditation Timer
        </h2>
        <MeditationTimer />
        <p className="text-xs text-brown-200 dark:text-beige-300 mt-3 text-center">
          Bell sounds are generated in-browser. Sessions are logged to your profile when you stop.
        </p>
      </section>

      {/* Group sittings */}
      <section>
        <h2 className="section-title mb-4 flex items-center gap-2">
          <Users size={20} className="text-rust" />
          Group Sittings
        </h2>
        <div className="card divide-y divide-beige-200 dark:divide-brown-300">
          {groupSittings.map((sit, i) => (
            <div key={i} className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-brown-500 dark:text-cream text-sm">
                  {sit.time}
                </p>
                <p className="text-xs text-brown-200 dark:text-beige-300 mt-0.5">
                  {sit.location}
                </p>
                <p className="text-xs text-brown-100 dark:text-beige-200 mt-0.5 italic">
                  {sit.note}
                </p>
              </div>
              <a
                href={sit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs flex items-center gap-1 flex-shrink-0"
              >
                Join <ExternalLink size={12} />
              </a>
            </div>
          ))}
        </div>
        <p className="text-xs text-brown-200 dark:text-beige-300 mt-2">
          Group sittings require an old student account on dhamma.org.{" "}
          <a
            href="https://www.dhamma.org/en/os/sitting"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rust hover:underline"
          >
            View full schedule →
          </a>
        </p>
      </section>

      {/* Discourse Audio */}
      <section>
        <h2 className="section-title mb-2 flex items-center gap-2">
          <PlayCircle size={20} className="text-rust" />
          Goenka Discourses
        </h2>
        <p className="text-sm text-brown-200 dark:text-beige-300 mb-4">
          10-day course discourses by S.N. Goenka (Days 1–11). Requires{" "}
          <a
            href="https://discourses.dhamma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rust hover:underline"
          >
            discourses.dhamma.org
          </a>{" "}
          old student login for playback.
        </p>
        <AudioPlayer tracks={discourseAudioTracks} />
      </section>

      {/* Chanting */}
      <section>
        <h2 className="section-title mb-2 flex items-center gap-2">
          <Music size={20} className="text-rust" />
          Morning Chanting (Pali)
        </h2>
        <p className="text-sm text-brown-200 dark:text-beige-300 mb-4">
          Pali suttas chanted by S.N. Goenka — one for each day of the 10-day course.
        </p>
        <AudioPlayer tracks={chantingAudioTracks} />
      </section>

      {/* Dohas */}
      <section>
        <h2 className="section-title mb-2 flex items-center gap-2">
          <Mic2 size={20} className="text-rust" />
          Dohas (Hindi &amp; Rajasthani Songs)
        </h2>
        <p className="text-sm text-brown-200 dark:text-beige-300 mb-4">
          Devotional songs by S.N. Goenka in Hindi and Rajasthani, paired with each course day.
        </p>
        <AudioPlayer tracks={dohaAudioTracks} />
      </section>

      {/* Dhamma.org link */}
      <div className="card p-5 flex items-center justify-between">
        <div>
          <p className="font-medium text-brown-500 dark:text-cream">
            Old Student Resources
          </p>
          <p className="text-sm text-brown-200 dark:text-beige-300 mt-0.5">
            Access the full audio library, group sitting schedule, and more on dhamma.org.
          </p>
        </div>
        <a
          href="https://discourses.dhamma.org"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex items-center gap-1.5 flex-shrink-0 text-sm"
        >
          dhamma.org <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
