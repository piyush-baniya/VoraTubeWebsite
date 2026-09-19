/**
 * Official Google Play listing URL for VoraTube.
 *
 * Single source of truth: every "Get it on Google Play" CTA on the site
 * (hero, header, download section) reads this value, so changing it here
 * updates them all. Set it to "#" to render the CTAs as visibly inactive
 * placeholders again (see PLAY_URL_CONFIGURED below).
 *
 * The explicit `string` annotation is required: without it TypeScript infers
 * the literal type of the assigned value and flags the placeholder comparison
 * below as "no overlap" (TS2367) under `strict`.
 */
export const GOOGLE_PLAY_URL: string = "https://play.google.com/store/apps/details?id=com.piyushbaniya.vora_tube";

/** True once a real Play Store URL has been configured. */
export const PLAY_URL_CONFIGURED = GOOGLE_PLAY_URL !== "#";
