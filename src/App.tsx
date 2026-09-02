import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import FeatureGrid from "./components/FeatureGrid";
import DownloadCTA from "./components/DownloadCTA";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function App() {
  // Minimal path routing without an extra dependency: the only secondary
  // page is the public privacy policy, which must live at a stable URL
  // (Google Play requirement).
  if (window.location.pathname.replace(/\/+$/, "") === "/privacy-policy") {
    return <PrivacyPolicy />;
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Showcase />
        <FeatureGrid />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
