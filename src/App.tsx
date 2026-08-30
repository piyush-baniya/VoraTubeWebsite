import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import FeatureGrid from "./components/FeatureGrid";
import DownloadCTA from "./components/DownloadCTA";
import Footer from "./components/Footer";

export default function App() {
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
