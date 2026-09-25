import { APKPURE_URL } from "../config";

const APKPURE_BADGE_SRC = "/apkpure-badge.png";
const APKPURE_BADGE_ALT = "Get it on Apkpure";

export default function ApkpureCTA({ className = "apkpure-badge" }: { className?: string }) {
  return (
    <a className={className} href={APKPURE_URL} target="_blank" rel="noopener noreferrer">
      <img src={APKPURE_BADGE_SRC} alt={APKPURE_BADGE_ALT} width={2172} height={724} />
    </a>
  );
}
