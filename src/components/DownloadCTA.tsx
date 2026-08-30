import { useReveal } from "../hooks/useReveal";

/**
 * Single source of truth for the Android APK download link.
 * The APK is bundled with the site (public/VoraTube.apk) and served directly.
 * The public file is named "VoraTube.apk" so browsers always save it
 * with the correct name, even when they ignore the download attribute.
 */
export const APK_DOWNLOAD_URL = "/VoraTube.apk";

export default function DownloadCTA() {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  return (
    <section className="download" id="download" aria-labelledby="download-title">
      <div ref={ref} className={`download__inner container reveal ${revealed ? "revealed" : ""}`}>
        <img className="download__logo" src="/logo.png" alt="" width={72} height={72} />
        <h2 id="download-title">Ready to hit play?</h2>
        <p>Download VoraTube for Android and take your library for a spin.</p>

        <a
          className="btn btn--primary btn--big"
          href={APK_DOWNLOAD_URL}
          download="VoraTube.apk"
          rel="noopener noreferrer"
        >
          ⬇ Download APK for Android
        </a>

        <p className="download__ios">
          🍎 Using iPhone? VoraTube for iOS is <strong>coming later</strong> — stay tuned.
        </p>
      </div>
    </section>
  );
}
