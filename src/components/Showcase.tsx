import { useReveal } from "../hooks/useReveal";

type Shot = {
  src: string;
  alt: string;
  title: string;
  copy: string;
  bullets: string[];
};

const SHOTS: Shot[] = [
  {
    src: "/screenshots/FullPlayer.png",
    alt: "VoraTube full-screen player with animated artwork, lyrics, and playback controls",
    title: "A player built for deep listening",
    copy: "A focused full-screen player keeps artwork, lyrics, the queue, and controls within reach. Shape every listen with volume boost, ReplayGain, crossfade, speed, and a mini player.",
    bullets: ["Full-screen and mini player", "Volume boost + ReplayGain", "Lyrics, queue, and quick controls"],
  },
  {
    src: "/screenshots/Playlist.png",
    alt: "VoraTube playlist screen showing songs, queue, and the Now Playing panel",
    title: "Build the perfect listening flow",
    copy: "Create a playlist from any screen, add or remove songs, pin what matters, reorder tracks, and keep Favorites close. The queue stays in sync as you play.",
    bullets: ["Create, rename, and manage playlists", "Reorder songs and the queue", "Favorites, recent, and new music"],
  },
  {
    src: "/screenshots/RingtoneCutter.png",
    alt: "Ringtone maker screen with waveform trim handles, play button, and Set as Ringtone action",
    title: "Turn a favorite song into your ringtone",
    copy: "Select a section from any song, preview it, fine-tune the start and end points, and export the result — ready to become your system ringtone.",
    bullets: ["Waveform trim handles", "Start and end fine-tuning", "Preview, export, and set as ringtone"],
  },
  {
    src: "/screenshots/SmartMixes.png",
    alt: "VoraTube Smart Mixes screen with Favorites, Daily, Chill, Energy, Focus, Happy, Sad, Romantic, Throwback, and Discovery tiles",
    title: "A smart mix for every moment",
    copy: "Smart Mixes make it easy to play your local library in a new way. Choose a feeling or a moment and VoraTube builds the mix for you.",
    bullets: ["Favorites, Daily, and Discovery mixes", "Chill, Energy, Focus, Happy, and Sad", "Romantic and Throwback playlists"],
  },
];

function ShotCard({ shot, flip }: { shot: Shot; flip: boolean }) {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`showcase__row reveal ${revealed ? "revealed" : ""} ${flip ? "showcase__row--flip" : ""}`}
    >
      <div className="showcase__phone">
        <div className="phone">
          <img src={shot.src} alt={shot.alt} loading="lazy" />
        </div>
      </div>
      <div className="showcase__copy">
        <h3>{shot.title}</h3>
        <p>{shot.copy}</p>
        <ul>
          {shot.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Showcase() {
  const graphic = useReveal<HTMLDivElement>();
  const stats = useReveal<HTMLDivElement>();
  return (
    <section className="showcase container" id="showcase" aria-label="App screenshots">
      <div className="section-head">
        <h2>
          Every screen, <span className="gradient-text">thought through</span>
        </h2>
        <p>Real screens from the latest VoraTube release — made for listening, organizing, and making music yours.</p>
      </div>

      <div
        ref={graphic.ref}
        className={`showcase__graphic reveal ${graphic.revealed ? "revealed" : ""}`}
      >
        <img
          src="/screenshots/graphic.png"
          alt="VoraTube — Your music. Your library. Your way."
          loading="lazy"
        />
      </div>

      {SHOTS.map((s, i) => (
        <ShotCard key={s.title} shot={s} flip={i % 2 === 1} />
      ))}

      <div
        id="stats"
        ref={stats.ref}
        className={`stats reveal ${stats.revealed ? "revealed" : ""}`}
        aria-label="Statistics feature"
      >
        <div className="stats__copy">
          <h3>See your listening story</h3>
          <p>
            Explore most played songs, recently played music, listening history, play counts,
            listening duration, and daily, weekly, and yearly insights — all from one clear view.
          </p>
        </div>
        <div className="stats__phone">
          <div className="phone phone--small">
            <img
              src="/screenshots/Statistics.png"
              alt="Statistics screen showing listening time, top songs, and recently played music"
              loading="lazy"
            />
          </div>
          <div className="phone phone--small phone--offset">
            <img
              src="/screenshots/Library.png"
              alt="Library screen with Songs, Albums, Artists, and Genres tabs"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
