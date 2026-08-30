import { useEffect, useState } from "react";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#showcase", label: "Screenshots" },
  { href: "#stats", label: "Statistics" },
  { href: "#download", label: "Download" },
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
          <li>
            <a className="btn btn--small" href="#download" onClick={() => setOpen(false)}>
              Get the App
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
