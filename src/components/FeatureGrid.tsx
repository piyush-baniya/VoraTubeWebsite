import { useReveal } from "../hooks/useReveal";

const FEATURES = [
  {
    icon: "🏠",
    title: "Home that knows you",
    copy: "Continue listening, your most played track, and quick listening stats — right on the home screen.",
  },
  {
    icon: "📚",
    title: "Library with tabs",
    copy: "Browse your music by Songs, Albums, Artists, or Genres with a clean, responsive grid.",
  },
  {
    icon: "🔍",
    title: "Instant search",
    copy: "Find any song, album, or artist in your collection in a tap.",
  },
  {
    icon: "📋",
    title: "Playlists",
    copy: "Create playlists from any screen and keep your favorites organized.",
  },
  {
    icon: "🎚️",
    title: "Volume boost",
    copy: "A built-in boost toggle for quiet tracks, right in the player.",
  },
  {
    icon: "✂️",
    title: "Ringtone cutter",
    copy: "Trim any song with a waveform editor and set it as your ringtone.",
  },
  {
    icon: "🧠",
    title: "Daily Mix",
    copy: "A personalized mix generated automatically from your listening habits.",
  },
  {
    icon: "📊",
    title: "Statistics",
    copy: "Listening time, plays, top artists, peak day — see your habits at a glance.",
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
        <p>Everything a local music player should be — and a few things it usually isn't.</p>
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
