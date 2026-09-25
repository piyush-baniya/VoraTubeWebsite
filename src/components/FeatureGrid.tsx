import { useReveal } from "../hooks/useReveal";

const FEATURES = [
  {
    icon: "🎵",
    title: "Powerful offline playback",
    copy: "Play music stored on your device with background playback, lock-screen and notification controls, shuffle, repeat, queue controls, speed, crossfade, volume boost and ReplayGain.",
  },
  {
    icon: "🎚️",
    title: "10-band equalizer",
    copy: "Shape every listen with 10 bands, presets, custom settings, preamp, ReplayGain, volume boost, playback speed and crossfade.",
  },
  {
    icon: "📚",
    title: "Organize your music",
    copy: "Browse Songs, Albums, Artists and Genres; create, rename, duplicate, reorder and pin playlists; mark Favorites, hide songs, search, and find recently added or played music.",
  },
  {
    icon: "🧠",
    title: "Smart mixes",
    copy: "Rediscover your library with Favorites, Daily, Chill, Energy, Focus, Happy, Sad, Romantic, Throwback and Discovery mixes.",
  },
  {
    icon: "🎤",
    title: "Synced lyrics",
    copy: "Find lyrics automatically, follow real-time highlighting, tap a line to seek, use embedded or imported LRC files, cache them locally, and enjoy portrait or landscape layouts.",
  },
  {
    icon: "✍️",
    title: "Lyrics editor",
    copy: "Edit the lyrics for a song and export them as .lrc files for your collection.",
  },
  {
    icon: "📊",
    title: "Listening statistics",
    copy: "Explore most played songs, recently played music, listening history, play counts, listening duration, and daily, weekly and yearly insights.",
  },
  {
    icon: "🎨",
    title: "Chameleon theme",
    copy: "Let artwork-inspired colors set the mood, or choose System, Light, Dark or Chameleon themes in a modern responsive interface.",
  },
  {
    icon: "💾",
    title: "Local backup",
    copy: "Back up supported playlists, favorites, settings, listening information and personalized data to storage you control, then restore it when you need it.",
  },
  {
    icon: "🔔",
    title: "Background playback",
    copy: "Keep listening with lock-screen and notification controls, a mini player and queue access while you use other apps.",
  },
  {
    icon: "⏱️",
    title: "Sleep timer",
    copy: "Set a countdown or scheduled stop time so playback ends when you are ready to wind down.",
  },
  {
    icon: "✂️",
    title: "Ringtone maker",
    copy: "Select a section, preview it, fine-tune the start and end points, export the audio, and set it as your system ringtone.",
  },
];

export default function FeatureGrid() {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  return (
    <section className="features container" id="features" aria-labelledby="features-title">
      <div className="section-head">
        <h2 id="features-title">
          Built for <span className="gradient-text">your music</span>
        </h2>
        <p>Powerful, privacy-friendly tools for playing, organizing and personalizing your local music.</p>
      </div>
      <div ref={ref} className={`features__grid reveal ${revealed ? "revealed" : ""}`}>
        {FEATURES.map((f, i) => (
          <article
            key={f.title}
            className="feature-card"
            style={{ transitionDelay: revealed ? `${(i % 4) * 70}ms` : "0ms" }}
          >
            <span className="feature-card__icon" aria-hidden="true">
              {f.icon}
            </span>
            <h3>{f.title}</h3>
            <p>{f.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
