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
          <strong>Effective date:</strong> September 5, 2026
        </p>
        <p>
          These Terms of Use ("Terms") govern your use of the VoraTube Android
          application ("the App") developed by Piyush Das ("we", "us", "our").
          By downloading, installing, or using the App, you agree to these
          Terms. If you do not agree, please do not use the App.
        </p>

        <h2>1. Release status</h2>
        <p>
          VoraTube is <strong>fully released</strong>. The App is no longer in
          development, beta, or testing. The version distributed on this
          website and on Google Play is the production version of the App.
        </p>

        <h2>2. License</h2>
        <p>
          We grant you a personal, non-exclusive, non-transferable, revocable
          license to use the App on devices you own or control, for personal,
          non-commercial purposes. You may not resell, sublicense, reverse
          engineer (except where permitted by law), or use the App to provide a
          service to others.
        </p>

        <h2>3. Advertising</h2>
        <p>
          The App displays <strong>live, real advertisements</strong> served by
          Google through the Google Mobile Ads SDK. Test or demo advertisements
          are not used in the released version of the App.
        </p>
        <ul>
          <li>
            Advertisements are delivered, targeted, and measured by Google and
            its partners, not by VoraTube. Your interactions with ads are
            governed by{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noreferrer"
            >
              Google's advertising policies
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              Google's Privacy Policy
            </a>
            .
          </li>
          <li>
            If you activate <strong>Premium</strong>, all ad placements in the
            App are disabled and no ad requests are made.
          </li>
          <li>
            We do not control the content of third-party advertisements and are
            not responsible for the products, services, or websites they
            promote. Interacting with an ad is an interaction between you and
            the advertiser.
          </li>
        </ul>

        <h2>4. Acceptable use</h2>
        <ul>
          <li>
            Use the App only with music and audio files you have the legal
            right to access and play.
          </li>
          <li>
            Do not attempt to interfere with, disrupt, or circumvent the
            advertising or any other part of the App (for example, by
            artificially generating ad impressions or clicks).
          </li>
          <li>
            Do not use the App in any way that violates applicable law or the
            rights of others.
          </li>
        </ul>

        <h2>5. Third-party services</h2>
        <p>
          The App relies on third-party services for certain optional features:
          LRCLIB (lyrics lookup), Apple's iTunes Search API (genre lookup),
          YouTube ("Find on YouTube" action), Buy Me a Momo (donations), and
          Google Mobile Ads (advertising). These services are governed by their
          own terms and privacy policies. VoraTube is not responsible for their
          content, availability, or practices.
        </p>

        <h2>6. Intellectual property</h2>
        <p>
          The App itself — its code, design, name, and branding — is owned by
          the developer. Your music files and other content remain yours;
          VoraTube claims no ownership over them. Song metadata, lyrics, and
          artwork retrieved from third-party services remain the property of
          their respective owners.
        </p>

        <h2>7. No warranty</h2>
        <p>
          The App is provided <strong>"as is" and "as available"</strong>{" "}
          without warranties of any kind, express or implied, including
          warranties of merchantability, fitness for a particular purpose, and
          non-infringement. We do not warrant that the App will be
          uninterrupted, error-free, or that third-party services (lyrics,
          genres, ads) will always be available.
        </p>

        <h2>8. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, the developer shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages, or any loss of data, profits, or goodwill arising
          from your use of or inability to use the App. Because your music and
          listening data stay on your device, you are responsible for backing
          up your own files.
        </p>

        <h2>9. Changes to the App and these Terms</h2>
        <p>
          We may update the App and these Terms from time to time. The
          "Effective date" above will be updated, and the current version will
          always be available at this page. Continued use of the App after
          changes take effect constitutes acceptance of the revised Terms.
        </p>

        <h2>10. Termination</h2>
        <p>
          You may stop using the App and uninstall it at any time. We reserve
          the right to restrict or revoke access to the App for anyone who
          violates these Terms.
        </p>

        <h2>11. Contact</h2>
        <p>
          Questions about these Terms can be sent to{" "}
          <a href="mailto:baniyapiyushwork@gmail.com">
            baniyapiyushwork@gmail.com
          </a>
          . See also our <a href="/privacy-policy">Privacy Policy</a>.
        </p>

      </main>
    </div>
  );
}
