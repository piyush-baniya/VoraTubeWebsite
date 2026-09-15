import { GOOGLE_PLAY_URL, PLAY_URL_CONFIGURED } from "../config";

/**
 * The site's single Google Play call-to-action.
 *
 * Until GOOGLE_PLAY_URL is configured, the button is rendered as a visibly
 * inactive element (no href, no navigation, reduced emphasis) so it never
 * links to a broken or fake destination. Once the real Play listing URL is
 * set in src/config.ts, every instance becomes a normal external link.
 */
export default function GooglePlayCTA({ className = "btn btn--primary" }: { className?: string }) {
  if (!PLAY_URL_CONFIGURED) {
    return (
      <span
        className={`${className} btn--inactive`}
        role="link"
        aria-disabled="true"
        title="Coming soon to Google Play"
      >
        Get it on Google Play
      </span>
    );
  }
  return (
    <a className={className} href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">
      Get it on Google Play
    </a>
  );
}
