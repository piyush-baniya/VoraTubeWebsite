import { useEffect } from "react";

export default function TermsOfUse() {
  useEffect(() => {
    document.title = "VoraTube Terms of Use";
  }, []);

  return (
    <div className="policy">
      <header className="policy__header">
        <a className="policy__home" href="/">
          <img src="/logo.png" alt="VoraTube logo" width={30} height={30} />
          <span>Back to VoraTube</span>
        </a>
      </header>
      <main className="policy__content container">
        <h1>VoraTube Terms of Use</h1>
        <p>
          <strong>Effective date:</strong> September 15, 2026
        </p>
        <p>
          VoraTube is an Android music player application ("the App") developed
          by Piyush Das ("we", "us", "our"). By downloading, installing, or
          using the App, you agree to these Terms of Use. If you do not agree
          with any part of these terms, please do not use the App.
        </p>
        <p>
          The short version: <strong>VoraTube is a local, personal music
          player.</strong> It plays the music that already exists on your
          device, keeps your library data on your device, and asks you to use
          it lawfully and responsibly. There is no company, business entity, or
          registered address behind VoraTube — it is an independently developed
          App.
        </p>

        <h2>1. Use of the App</h2>
        <p>
          VoraTube is a local-first music player designed to help you browse,
          organize, and play music that already exists on your device. You
          agree to use the App for lawful, personal, non-commercial purposes
          and in a manner that respects the rights of others. You may not
          misuse the App, attempt to reverse engineer it, or attempt to
          disrupt its normal operation.
        </p>

        <h2>2. Local music and device content</h2>
        <p>
          The App reads audio files already present on your device through your
          device's music library, or files you explicitly choose to import
          yourself. Your music files and your library data remain on your
          device. VoraTube does not upload your audio files to any server. You
          are responsible for ensuring you have the right to use and play the
          music on your device in accordance with applicable law.
        </p>

        <h2>3. Third-party services</h2>
        <p>
          To provide certain features, the App may send small, non-identifying
          details about a song (such as its title and artist) to third-party
          services for lyrics and genre lookup. The App may also open external
          websites you explicitly choose to visit, such as YouTube or a
          donation page. Those services are governed by their own terms and
          privacy policies, and VoraTube is not responsible for them. See the
          App's <a href="/privacy-policy">Privacy Policy</a> for details of
          what is sent and when.
        </p>
        <p>
          The App also uses <strong>Firebase Analytics</strong> (Google) to
          measure general, non-personal feature usage — for example which
          features are used and how often. It never sends song details, your
          library, or any personal information to Analytics. See the App's{" "}
          <a href="/privacy-policy">Privacy Policy</a> for details.
        </p>

        <h2>4. Advertising</h2>
        <p>
          VoraTube is a fully released app and displays live, production
          advertisements served through the Google Mobile Ads SDK (Google
          AdMob), unless you activate Premium. Ads are provided by third
          parties under their own policies. Activating Premium is a local
          entitlement within the App and disables all ad placements; it
          involves no payment processing by or account system in VoraTube
          itself.
        </p>

        <h2>5. Audio features</h2>
        <p>
          VoraTube includes locally implemented audio functionality, such as a{" "}
          <strong>volume boost</strong> toggle, that processes audio on your
          device during playback. Audio behavior may vary depending on your
          Android device, hardware, OS version, headphones, speakers, and any
          manufacturer audio processing. Audio features operate on the files
          already on your device; using them never uploads your music
          anywhere.
        </p>

        <h2>6. Intellectual property</h2>
        <p>
          Unless stated otherwise, the VoraTube name, logo, and the interface
          of the App are the property of the developer. The music, artwork, and
          other content in your library remain the property of their respective
          owners. VoraTube does not claim any ownership of the media you play
          through the App.
        </p>

        <h2>7. User responsibility</h2>
        <p>
          You are responsible for how you use the App and for the music you
          play through it. Please respect copyright and the rights of artists
          and rights holders. VoraTube is provided for use with media you are
          lawfully allowed to play, and you agree not to use it to infringe
          anyone's rights. VoraTube does not provide or supply copyrighted
          music.
        </p>

        <h2>8. Availability</h2>
        <p>
          VoraTube is a fully released app, publicly available on Google Play.
          It is provided "as is" and may be updated, changed, or discontinued
          at any time. We make no guarantee that the App will always be
          available, free of errors, or compatible with every device, and we do
          not guarantee that every feature will work identically on every
          device.
        </p>

        <h2>9. Disclaimer of warranties</h2>
        <p>
          The App is provided "as is" and "as available", without warranties of
          any kind, whether express or implied, including any implied
          warranties of merchantability, fitness for a particular purpose, or
          non-infringement. We do not warrant that the App's functionality,
          lyric or genre lookups, or playback features will be uninterrupted or
          error-free on every device.
        </p>

        <h2>10. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, the developer is not liable
          for any indirect, incidental, special, or consequential damages
          arising from your use of, or inability to use, the App. VoraTube does
          not claim that all music playback or features will be flawless on
          every device.
        </p>

        <h2>11. Changes to the App and these terms</h2>
        <p>
          We may update these Terms of Use and the App as it evolves, and may
          modify, improve, remove, or replace features in future versions. The
          "Effective date" at the top will be updated, and the current version
          will always be available at this page. Continued use of the App after
          any change means you accept the updated terms.
        </p>

        <h2>12. Contact information</h2>
        <p>
          If you have questions about these Terms of Use or about VoraTube,
          contact:
        </p>
        <ul>
          <li>
            <strong>App:</strong> VoraTube
          </li>
          <li>
            <strong>Developer:</strong> Piyush Das
          </li>
          <li>
            <strong>Contact:</strong>{" "}
            <a href="mailto:baniyapiyushwork@gmail.com">
              baniyapiyushwork@gmail.com
            </a>
          </li>
        </ul>
        <p>
          See also our <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </main>
    </div>
  );
}

