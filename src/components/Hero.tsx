import { useReveal } from "../hooks/useReveal";

export default function Hero() {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden="true" />
      <div ref={ref} className={`hero__inner container reveal ${revealed ? "revealed" : ""}`}>
        <div className="hero__copy">
          <p className="hero__eyebrow">Offline music player for Android</p>
          <h1 id="hero-title">
            Your music, <span className="gradient-text">beautifully</span> organized
          </h1>
          <p className="hero__sub">
            VoraTube is a fast, gorgeous music player with smart mixes, a tidy queue, listening
            statistics, and even a built-in ringtone cutter. No account, no noise — just your
            library, played beautifully.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#download">
              Download for Android
            </a>
            <a className="btn btn--ghost" href="#features">
              Explore features
            </a>
          </div>
          <ul className="hero__chips" aria-label="Quick facts">
            <li>🎵 Offline playback</li>
            <li>🎨 Dark, polished UI</li>
            <li>📊 Listening stats</li>
          </ul>
        </div>

        <div className="hero__phone" aria-hidden="true">
          <div className="phone phone--tilt">
            <img src="/screenshots/Home.png" alt="" loading="eager" />
          </div>
          <div className="phone phone--back">
            <img src="/screenshots/player.jpg" alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
