import { GOOGLE_PLAY_URL, PLAY_URL_CONFIGURED } from "../config";

/**
 * Official "Get it on Google Play" badge graphic.
 *
 * Vendored into public/ from Google's badges page
 * (play.google.com/intl/en_us/badges → en_badge_web_generic.png, 646x250).
 * The artwork is never cropped, recolored, or restyled — Google's guidelines
 * forbid modifying the badge. The transparent padding baked into the asset
 * already equals the clear space those guidelines require (a quarter of the
 * badge height), so the file is used exactly as published and only the
 * rendered size changes (see .play-badge in src/index.css).
 */
const PLAY_BADGE_SRC = "/play-badge.png";
const PLAY_BADGE_ALT = "Get it on Google Play";

/**
 * The site's single Google Play call-to-action, drawn with the official badge.
 *
 * Until GOOGLE_PLAY_URL is configured (the "#" placeholder in src/config.ts),
 * the badge is rendered as a visibly inactive element (no href, no navigation,
 * reduced emphasis) so it never links to a broken or fake destination. With a
 * real Play listing URL set, every instance is a normal external link.
 */
export default function GooglePlayCTA({ className = "play-badge" }: { className?: string }) {
  const badge = (
    <img src={PLAY_BADGE_SRC} alt={PLAY_BADGE_ALT} width={646} height={250} />
  );

  if (!PLAY_URL_CONFIGURED) {
    return (
      <span
        className={`${className} play-badge--inactive`}
        role="link"
        aria-disabled="true"
        title="Coming soon to Google Play"
      >
        {badge}
      </span>
    );
  }

  return (
    <a className={className} href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">
      {badge}
    </a>
  );
}
