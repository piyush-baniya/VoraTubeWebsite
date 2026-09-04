export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <img src="/logo.png" alt="VoraTube logo" width={28} height={28} />
          <span>VoraTube</span>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#features">Features</a>
          <a href="#showcase">Screenshots</a>
          <a href="#download">Download</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-use">Terms of Use</a>
        </nav>
        <p>© {new Date().getFullYear()} VoraTube. A music player for Android.</p>
      </div>
    </footer>
  );
}
