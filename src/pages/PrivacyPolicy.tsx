import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "VoraTube Privacy Policy";
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
        <h1>VoraTube Privacy Policy</h1>
        <p>
          <strong>Effective date:</strong> September 15, 2026
        </p>
        <p>
          VoraTube is an Android music player application ("the App") developed
          by Piyush Das ("we", "us", "our"). This Privacy Policy explains what
          information the App accesses, what it stores on your device, what it
          transmits over the internet, and which third-party services are
          involved.
        </p>
        <p>
          The short version: <strong>your music files and your listening data
          stay on your device.</strong> VoraTube has no user accounts, no cloud
          music storage, and no server-side user profiles. When you view lyrics
          or when a song has no genre information, the App sends small,
          non-identifying song details (such as a song title, artist, and
          album) to third-party lookup services so it can show lyrics and
          genres. It displays ads unless you activate Premium. Everything else
          is described below.
        </p>

        <h2>1. Information VoraTube accesses</h2>
        <p>VoraTube accesses only what it needs to work as a local music player:</p>
        <ul>
          <li>
            <strong>Audio files already on your device.</strong> VoraTube reads
            music that already exists in your device's music library through
            Android's MediaStore. When you use features such as lyrics or
            changing a song's artwork image, you may also explicitly select
            individual files (a <code>.lrc</code> lyrics file or an image file)
            through your device's file picker; those files are read into the
            App and stored in the App's own private storage.
          </li>
          <li>
            <strong>Audio file metadata.</strong> Song title, artist, album,
            duration, genre, and embedded artwork read from your own files,
            used to build and display your library.
          </li>
          <li>
            <strong>Playback state.</strong> Which song is playing, your queue,
            your playback position, your playlists, your favorites, and your
            play history — all created by your own use of the App.
          </li>
          <li>
            <strong>Settings you choose in the App</strong> (for example
            appearance and playback preferences).
          </li>
        </ul>
        <p>
          VoraTube does <strong>not</strong> access your contacts, location,
          camera, microphone, photos, messages, or any other information
          unrelated to music playback.
        </p>

        <h2>2. Information stored locally on your device</h2>
        <p>VoraTube keeps a local database and cache on your device. This may include:</p>
        <ul>
          <li>your local library metadata (songs, albums, artists, genres)</li>
          <li>playlists and favorites</li>
          <li>
            playback history, recently played songs, most-played songs,
            listening statistics, and play counts
          </li>
          <li>queue state and playback position</li>
          <li>your in-app settings, including the sleep timer</li>
          <li>
            your audio enhancement settings (equalizer curve, playback speed,
            crossfade/gapless transition preference, volume boost, audio
            balance) — these are applied <strong>on your device</strong> during
            playback and are never transmitted anywhere
          </li>
          <li>your Premium activation state</li>
          <li>a cache of lyrics you have viewed</li>
          <li>
            the <code>.lrc</code> lyrics files you upload and any custom
            artwork image you set
          </li>
          <li>cached artwork thumbnails</li>
          <li>
            any ringtone you create with the ringtone cutter (stored in app
            storage and registered in your device's media library under
            "Ringtones/VoraTube")
          </li>
          <li>
            backup files you create (stored in the location you choose on your
            device)
          </li>
        </ul>
        <p>
          All of this information stays on your device.{" "}
          <strong>
            VoraTube does not operate a server, cloud storage, or cloud backup
            for your music, playlists, history, or any other personal data.
          </strong>{" "}
          VoraTube does not upload your audio files anywhere.
        </p>
        <p>
          <strong>Backup and restore.</strong> The App can create a backup of
          your library data, either manually or on a scheduled automatic basis.
          A backup is a single file written to a location you choose on your
          device (for example a folder you select with the system folder
          picker); it contains your library metadata, playlists, favorites,
          play history, listening statistics, settings, user-uploaded lyrics,
          and queue snapshot. It does <strong>not</strong> contain your audio
          files. Backup files remain under your control — VoraTube does not
          upload them to any server. If you save a backup into a folder that is
          synced by a cloud service you already use, that service processes the
          file under its own policies. Restoring a backup reads the file you
          choose and replaces your local VoraTube data with its contents.
        </p>

        <h2>3. Music and media permissions</h2>
        <ul>
          <li>
            On Android 13 and newer, VoraTube requests the{" "}
            <strong>"Music and audio"</strong> permission (
            <code>READ_MEDIA_AUDIO</code>) so it can find and play the music on
            your device.
          </li>
          <li>
            On older Android versions it may request{" "}
            <strong>storage access</strong> (
            <code>READ_EXTERNAL_STORAGE</code>) for the same purpose.
          </li>
          <li>
            Your music files are <strong>not uploaded</strong> to VoraTube or
            to VoraTube's servers. There are no VoraTube servers holding your
            music.
          </li>
          <li>
            If you use the ringtone cutter, VoraTube uses the{" "}
            <strong>"Modify system settings"</strong> permission (
            <code>WRITE_SETTINGS</code>) only at your request, to set the cut
            audio as your ringtone. VoraTube does not change any other system
            settings.
          </li>
          <li>
            To keep playing music and show playback controls while the App is
            not in the foreground, VoraTube runs a{" "}
            <strong>foreground media service</strong> and holds a{" "}
            <strong>wake lock</strong> (<code>FOREGROUND_SERVICE</code>,{" "}
            <code>FOREGROUND_SERVICE_MEDIA_PLAYBACK</code>, and{" "}
            <code>WAKE_LOCK</code> permissions). This keeps playback active
            only while you are playing music; it does not otherwise run in the
            background.
          </li>
        </ul>

        <h2>4. Network communications</h2>
        <p>
          VoraTube needs an internet connection for a small number of features.
          It never transmits your audio files over the network. The network
          features fall into two groups:
        </p>
        <p>
          <strong>Automatic, best-effort lookups (small song metadata only):</strong>
        </p>
        <ul>
          <li>
            <strong>Lyrics — LRCLIB.</strong> When lyrics for a song are not
            already embedded in the file or cached on your device, VoraTube may
            send that song's <strong>title, artist, album, and duration</strong>{" "}
            to the public LRCLIB lyrics service (
            <code>https://lrclib.net/api</code>) to fetch matching lyrics.
            Results are cached on your device. If the request fails, playback
            continues normally without lyrics. VoraTube never uploads your
            music files to LRCLIB.
          </li>
          <li>
            <strong>Genre enrichment — Apple iTunes Search API.</strong> For
            songs that have no genre information, VoraTube may send the song's{" "}
            <strong>title and artist</strong> to Apple's iTunes Search API (
            <code>https://itunes.apple.com/search</code>) to look up a genre
            label. Results are cached locally. VoraTube never uploads your
            music files to Apple.
          </li>
        </ul>
        <p>
          <strong>User-initiated actions (only when you tap them):</strong>
        </p>
        <ul>
          <li>
            <strong>"Find on YouTube."</strong> When you choose this action for
            a song, VoraTube opens a YouTube search in your browser or the
            YouTube app, using that song's title and artist as the search
            terms. No search happens automatically.
          </li>
          <li>
            <strong>"Search lyrics on the web."</strong> When you choose this
            action, VoraTube opens your default browser with a search (for
            example Google Search) for that song's title, artist, and lyrics.
            No search happens automatically.
          </li>
          <li>
            <strong>Donation page ("Buy Me a Momo").</strong> When you open the
            donation screen, VoraTube loads the Buy Me a Momo page (
            <code>https://buymemomo.com/piyushbaniya</code>) inside an in-app
            browser view. VoraTube does not control that website and is not
            responsible for data it collects; when you interact with it, that
            service handles your information under its own privacy policy.
          </li>
        </ul>
        <p>
          <strong>App updates.</strong> VoraTube checks with Google Play for
          available updates using the standard Google Play in-app update
          mechanism. These are ordinary Google Play Services update checks and
          do not transmit personal data from within the App.
        </p>

        <h2>5. Advertising</h2>
        <p>
          VoraTube integrates the <strong>Google Mobile Ads SDK</strong> and
          displays <strong>banner and interstitial advertisements</strong>{" "}
          served through Google AdMob. VoraTube does not display rewarded
          ("watch and earn") advertisements.
        </p>
        <ul>
          <li>
            When ads are shown, Google and its partners may collect and process
            information (such as device identifiers and advertising
            identifiers) under <strong>Google's own Privacy Policy</strong>:{" "}
            https://policies.google.com/technologies/ads
          </li>
          <li>
            If you activate <strong>Premium</strong>, all ad placements in
            VoraTube are disabled and no ad requests are made. Premium is a
            local entitlement activated within the App; it involves no payment
            processing by or account system in VoraTube itself.
          </li>
        </ul>

        <h2>6. Analytics and crash reporting</h2>
        <p>
          VoraTube uses <strong>Firebase Analytics</strong> (from Google) to
          measure general feature usage. This helps us understand which
          features are used and how the app performs, so we can improve
          VoraTube.
        </p>
        <p>
          What Analytics collects: small, non-personal feature usage events
          only. Examples include "shuffle toggled", "playlist created", "repeat
          mode changed", "ad shown", and "ringtone exported." No song title,
          artist, album, filename, file path, MediaStore URI, playlist name,
          lyrics text, search query, email, personal text, precise location, or
          local music library contents is ever sent to Analytics. Analytics
          does not build user profiles and does not track you across apps or
          websites for advertising purposes through our implementation.
        </p>
        <p>
          Firebase Analytics data is governed by{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noreferrer"
          >
            Google's Privacy Policy
          </a>
          .
        </p>
        <p>
          VoraTube does <strong>not</strong> include its own crash-reporting
          service. VoraTube does not use Crashlytics, Sentry, or any other
          crash-reporting package.
        </p>
        <p>
          Note that the advertising SDK described in Section 5 is a third-party
          component and may perform its own measurement as described by
          Google's policies.
        </p>

        <h2>7. Accounts</h2>
        <p>
          VoraTube has <strong>no user accounts, no login system, and no cloud
          account</strong>. There is no account deletion workflow because there
          are no accounts. If you uninstall the App, there is no VoraTube-side
          data left behind, because VoraTube holds no data outside your device.
        </p>

        <h2>8. Data sharing</h2>
        <p>
          VoraTube itself does not sell, rent, or share your personal data,
          because it does not collect personal data on any server. Information
          leaves your device only in the limited ways described above:
        </p>
        <ul>
          <li>song title/artist/album/duration sent to LRCLIB for lyrics;</li>
          <li>song title/artist sent to Apple's iTunes Search API for genre lookup;</li>
          <li>a YouTube search you explicitly trigger;</li>
          <li>a web search for lyrics that you explicitly trigger;</li>
          <li>the donation webpage you explicitly open;</li>
          <li>
            data processed by Google's advertising SDK when ads are displayed;
          </li>
          <li>
            non-personal feature usage events sent to Firebase Analytics (see
            Section 6).
          </li>
        </ul>
        <p>
          Backup files you create with the backup and restore feature remain in
          a location you choose on your own device and are not shared by
          VoraTube. If you store a backup in a folder that a cloud service you
          use syncs to the cloud, that service processes the file under its own
          policies.
        </p>
        <p>
          Each of those third parties processes information under its own
          privacy policy. VoraTube does not control their practices.
        </p>

        <h2>9. Data security</h2>
        <ul>
          <li>
            Your VoraTube data is stored locally on your device under Android's
            standard app sandboxing, which prevents other apps from reading it
            without your device's permissions.
          </li>
          <li>
            Communications with the lookup services and web pages described in
            this policy use HTTPS.
          </li>
          <li>
            Backup files are not encrypted by VoraTube; they are stored
            wherever you choose to put them. Treat a backup file with the same
            care you would treat any file containing personal information,
            especially if you store it in a synced or shared location.
          </li>
          <li>
            VoraTube does not upload your music library or audio files to any
            server, and does not operate cloud storage for user music.
          </li>
          <li>
            No method of transmission or storage is perfectly secure. VoraTube
            does not claim that its security measures, or those of your device
            or of third-party services, are infallible.
          </li>
        </ul>

        <h2>10. Data retention and deletion</h2>
        <p>
          <strong>Local data.</strong> Your local VoraTube data (library
          metadata, playlists, history, queue, settings, caches) remains on
          your device until you:
        </p>
        <ul>
          <li>
            delete it through the App's available functionality (for example
            deleting songs, playlists, or hidden tracks),
          </li>
          <li>clear the App's data in your device settings, or</li>
          <li>
            uninstall the App (which removes all VoraTube app data from your
            device).
          </li>
        </ul>
        <p>
          Where VoraTube deletes media on your behalf (such as deleting a
          song), it follows Android's standard storage and media deletion
          mechanisms, including Android's own user-consent confirmation where
          required.
        </p>
        <p>
          <strong>Backup files.</strong> VoraTube does not track, upload, or
          delete backup files you create. They remain in the location you chose
          until you delete, move, or overwrite them. Restoring a backup
          replaces your local VoraTube data with the backup's contents.
        </p>
        <p>
          <strong>Third-party data.</strong> VoraTube cannot delete data
          retained by third parties such as LRCLIB, Apple, YouTube, Google's
          advertising infrastructure, or Firebase Analytics. Their retention
          practices are governed by their respective privacy policies.
        </p>

        <h2>11. Children's privacy</h2>
        <p>
          VoraTube is a general-audience local music player. It does not
          knowingly collect personal information from anyone, including
          children under 13, because it does not operate accounts or servers.
          If you are a parent or guardian and believe a child has provided
          information to one of the third-party services described above,
          please contact that service directly, or contact us using the details
          below.
        </p>

        <h2>12. Third-party services summary</h2>
        <div className="policy__table-wrap">
          <table>
            <thead>
              <tr>
                <th>Service</th>
                <th>Purpose</th>
                <th>When</th>
                <th>What is sent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LRCLIB (lrclib.net)</td>
                <td>Lyrics lookup</td>
                <td>Automatic, best-effort</td>
                <td>Song title, artist, album, duration</td>
              </tr>
              <tr>
                <td>Apple iTunes Search (itunes.apple.com)</td>
                <td>Genre lookup</td>
                <td>Automatic, best-effort</td>
                <td>Song title, artist</td>
              </tr>
              <tr>
                <td>YouTube</td>
                <td>"Find on YouTube" action</td>
                <td>Only when you tap it</td>
                <td>Song title and artist as a search query</td>
              </tr>
              <tr>
                <td>Web search (e.g., Google Search)</td>
                <td>"Search lyrics on the web" action</td>
                <td>Only when you tap it</td>
                <td>Song title and artist as a search query</td>
              </tr>
              <tr>
                <td>Buy Me a Momo (buymemomo.com)</td>
                <td>Donations</td>
                <td>Only when you open it</td>
                <td>Whatever the website itself processes</td>
              </tr>
              <tr>
                <td>Google Mobile Ads</td>
                <td>Banner and interstitial advertising (AdMob)</td>
                <td>When ads are shown (Premium off)</td>
                <td>As described by Google's ad policies</td>
              </tr>
              <tr>
                <td>Firebase Analytics (Google)</td>
                <td>General feature usage measurement</td>
                <td>When analytics initializes</td>
                <td>Non-personal feature usage events only; no personal or local music data</td>
              </tr>
              <tr>
                <td>Google Play (Google Play Services)</td>
                <td>In-app app update checks</td>
                <td>Automatic, best-effort</td>
                <td>Standard Play Services update checks</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          These services are governed by their own privacy policies; VoraTube
          is not responsible for their content or practices.
        </p>

        <h2>13. Changes to this privacy policy</h2>
        <p>
          We may update this privacy policy as VoraTube evolves. The "Effective
          date" at the top will be updated, and the current version will always
          be available at the policy URL linked from the App and from the
          Google Play listing.
        </p>

        <h2>14. Contact information</h2>
        <p>
          If you have questions about this privacy policy or about VoraTube's
          data practices, contact:
        </p>
        <ul>
          <li>
            <strong>App:</strong> VoraTube
          </li>
          <li>
            <strong>Developer:</strong> Piyush Das
          </li>
          <li>
            <strong>Privacy contact:</strong>{" "}
            <a href="mailto:baniyapiyushwork@gmail.com">
              baniyapiyushwork@gmail.com
            </a>
          </li>
        </ul>
        <p>
          <em>
            This policy describes the current version of VoraTube. The
            published version is available at{" "}
            https://voratube.vercel.app/privacy-policy.
          </em>
        </p>
      </main>
    </div>
  );
}