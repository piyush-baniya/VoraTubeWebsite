import { useReveal } from "../hooks/useReveal";
import ApkpureCTA from "./ApkpureCTA";
import GooglePlayCTA from "./GooglePlayCTA";

/**
 * The app installation CTAs use the centralized Google Play and APKPure
 * destinations from src/config.ts, rendered through their shared components.
 * The previous direct APK download (public/VoraTube.apk) has been retired.
 */
export default function DownloadCTA() {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  return (
    <section className="download" id="download" aria-labelledby="download-title">
      <div ref={ref} className={`download__inner container reveal ${revealed ? "revealed" : ""}`}>
        <img className="download__logo" src="/logo.png" alt="" width={72} height={72} />
        <h2 id="download-title">Ready to hit play?</h2>
        <p>Get VoraTube on Google Play or APKPure and take your library for a spin.</p>

        <div className="download__stores">
          <GooglePlayCTA className="play-badge play-badge--big" />
          <ApkpureCTA className="apkpure-badge apkpure-badge--big" />
        </div>

        <p className="download__ios">
          🍎 Using iPhone? VoraTube for iOS is <strong>coming later</strong> — stay tuned.
        </p>
      </div>
    </section>
  );
}
