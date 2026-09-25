import { useEffect, useState } from "react";
import ApkpureCTA from "./ApkpureCTA";
import GooglePlayCTA from "./GooglePlayCTA";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#showcase", label: "Screenshots" },
  { href: "#stats", label: "Statistics" },
  { href: "#download", label: "Get the App" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <nav className="navbar__inner container" aria-label="Main navigation">
        <a className="navbar__brand" href="#main" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="VoraTube logo" width={34} height={34} />
          <span>VoraTube</span>
        </a>

        <button
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`bar ${open ? "bar--x1" : ""}`} />
          <span className={`bar ${open ? "bar--x2" : ""}`} />
          <span className={`bar ${open ? "bar--x3" : ""}`} />
        </button>

        <ul id="nav-menu" className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li className="navbar__store-badges">
            <GooglePlayCTA className="play-badge play-badge--small" />
            <ApkpureCTA className="apkpure-badge apkpure-badge--small" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
