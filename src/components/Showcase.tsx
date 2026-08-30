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
    src: "/screenshots/player.jpg",
    alt: "VoraTube full-screen player with large circular album art and playback controls",
    title: "A player that stays out of the way",
    copy: "Full-screen artwork, quick access to favorites, lyrics and the queue, with volume boost, 10-second skip, shuffle and repeat right where your thumb expects them.",
    bullets: ["Circular album artwork", "Volume boost toggle", "±10s skip, shuffle & repeat"],
  },
  {
    src: "/screenshots/queue.jpg",
    alt: "Up Next queue bottom sheet listing upcoming songs with drag handles",
    title: "Your queue, under control",
    copy: "The Up Next sheet shows exactly what's coming. Reorder tracks with drag handles, jump to anything, or clear the queue in one tap.",
    bullets: ["Drag to reorder", "One-tap remove", "Clear the whole queue"],
  },
  {
    src: "/screenshots/ringtoneCutter.jpg",
    alt: "Ringtone cutter screen with waveform trim handles and set as ringtone button",
    title: "Built-in ringtone cutter",
    copy: "Turn any song in your library into a ringtone. Drag the handles on the waveform to pick a segment, fine-tune by the second, preview, and set it — all inside the app.",
    bullets: ["Waveform trim handles", "Start / end fine-tuning", "Set as ringtone directly"],
  },
  {
    src: "/screenshots/smartMix.jpg",
    alt: "Daily Mix smart playlist generated from listening habits",
    title: "Smart mixes from your habits",
    copy: "Daily Mix builds a personalized playlist from what you actually listen to — generated automatically, refreshed for you, ready to play or shuffle.",
    bullets: ["Personalized Daily Mix", "Play or shuffle instantly", "Regenerated as you listen"],
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
  const stats = useReveal<HTMLDivElement>();
  return (
    <section className="showcase container" id="showcase" aria-label="App screenshots">
      <div className="section-head">
        <h2>
          Every screen, <span className="gradient-text">thought through</span>
        </h2>
        <p>Real screens from VoraTube — no mockups, no marketing fluff.</p>
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
          <h3>Know your listening</h3>
          <p>
            The Statistics screen keeps score: listening time, plays, top artist, most played
            tracks, recently played, and even your peak listening day.
          </p>
        </div>
        <div className="stats__phone">
          <div className="phone phone--small">
            <img src="/screenshots/statistics.jpg" alt="Statistics screen showing listening time, top artist and recently played songs" loading="lazy" />
          </div>
          <div className="phone phone--small phone--offset">
            <img src="/screenshots/library.jpg" alt="Library screen with Songs, Albums, Artists and Genres tabs" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
