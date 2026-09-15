import { useReveal } from "../hooks/useReveal";
import GooglePlayCTA from "./GooglePlayCTA";

/**
 * Single source of truth for the app installation CTA is
 * GOOGLE_PLAY_URL in src/config.ts, rendered via <GooglePlayCTA />
 * so every Play Store button on the site shares one destination.
 * The previous APK download (public/VoraTube.apk) has been retired.
 */
export default function DownloadCTA() {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  return (
    <section className="download" id="download" aria-labelledby="download-title">
      <div ref={ref} className={`download__inner container reveal ${revealed ? "revealed" : ""}`}>
        <img className="download__logo" src="/logo.png" alt="" width={72} height={72} />
        <h2 id="download-title">Ready to hit play?</h2>
        <p>Get VoraTube on Google Play and take your library for a spin.</p>

        <GooglePlayCTA className="btn btn--primary btn--big" />

        <p className="download__ios">
          🍎 Using iPhone? VoraTube for iOS is <strong>coming later</strong> — stay tuned.
        </p>
      </div>
    </section>
  );
}
