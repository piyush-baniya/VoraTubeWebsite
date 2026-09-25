import { useReveal } from "../hooks/useReveal";
import ApkpureCTA from "./ApkpureCTA";
import GooglePlayCTA from "./GooglePlayCTA";

export default function Hero() {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden="true" />
      <div ref={ref} className={`hero__inner container reveal ${revealed ? "revealed" : ""}`}>
        <div className="hero__copy">
          <p className="hero__eyebrow">Modern offline music player for Android</p>
          <h1 id="hero-title">
            Your music. <span className="gradient-text">Your way.</span>
          </h1>
          <p className="hero__sub">
            VoraTube is a modern, powerful and privacy-friendly offline music player and local MP3
            player for Android. Play and organize music stored on your device with a 10-band
            equalizer, synced lyrics, playlists, smart mixes, listening statistics, ReplayGain,
            crossfade, Chameleon themes, ringtone maker, sleep timer and local backup.
          </p>
          <p className="hero__privacy">No account or cloud music library required. Your music stays yours.</p>
          <div className="hero__cta">
            <GooglePlayCTA className="play-badge" />
            <ApkpureCTA className="apkpure-badge" />
            <a className="btn btn--ghost" href="#features">
              Explore features
            </a>
          </div>
          <ul className="hero__chips" aria-label="Quick facts">
            <li>🎵 Local MP3 playback</li>
            <li>🎤 Synced lyrics + LRC</li>
            <li>🎚️ 10-band EQ + ReplayGain</li>
          </ul>
        </div>

        <div className="hero__phone" aria-hidden="true">
          <div className="phone phone--tilt">
            <img src="/screenshots/Library.png" alt="" loading="eager" />
          </div>
          <div className="phone phone--back">
            <img src="/screenshots/FullPlayer.png" alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
