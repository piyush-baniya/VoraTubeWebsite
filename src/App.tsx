import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import FeatureGrid from "./components/FeatureGrid";
import DownloadCTA from "./components/DownloadCTA";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

export default function App() {
  // Minimal path routing without an extra dependency: the only secondary
  // pages are the public privacy policy and terms of use, which must live at
  // stable URLs (Google Play requirement).
  const path = window.location.pathname.replace(/\/+$/, "");
  if (path === "/privacy-policy") {
    return <PrivacyPolicy />;
  }
  if (path === "/terms-of-use") {
    return <TermsOfUse />;
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
