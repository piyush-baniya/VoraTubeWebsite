# VoraTube Privacy Policy

**Last updated:** September 25, 2026

VoraTube is an Android music player application ("the App") developed by Piyush Das ("we", "us", "our"). This Privacy Policy describes what the App accesses, what it stores on your device, what it sends over the internet, and which third-party services are involved.

VoraTube is local-first. The App has no VoraTube user accounts, no VoraTube-operated music or playlist server, and no VoraTube-operated profile for library data. Your audio files are not uploaded by VoraTube. The App can send limited song metadata to online lookup services, and its advertising and analytics SDKs can process data as described below.

The short version: **your audio files and App library stay on your device.** VoraTube has no account or cloud music library. It may send limited song metadata to LRCLIB or Apple for lyrics and genre lookup, while Google advertising and analytics services may process data as described below.

## 1. Information VoraTube accesses

VoraTube accesses information needed to provide music playback and the features you choose:

- **Audio on your device.** The App reads audio through Android's MediaStore and can also scan folders you select through Android's system folder picker. Imported folder references and song identity information are kept locally.
- **Audio metadata and artwork.** The App may read a song's title, artist, album, duration, genre, year, track information, embedded artwork, file name, path, and other available media metadata.
- **Playback and library activity.** This can include the current song, queue, playback position, favorites, playlists, play history, listening statistics, play counts, hidden-song choices, moods, and resume state.
- **Settings and content you provide.** This can include playback and appearance settings, sleep timer state, user-selected `.lrc` lyrics, playlist descriptions, playlist cover images, custom artwork, and files you choose for tag editing.
- **Playback service information.** The App uses Android's media playback service and Android Auto when you enable those features so playback controls and your local library can be used outside the main screen.

VoraTube does not request access to contacts, precise location, the camera, the microphone, SMS, or call logs. A file or image you select through Android's picker is read only for the feature you initiate.

## 2. Data stored on your device

VoraTube stores app data in Android app storage, its local database, and app-managed cache. This can include:

- local library metadata, imported-folder references, content hashes, and supported-format information;
- playlists, playlist descriptions, playlist covers, favorites, moods, and hidden-song settings;
- playback history, recently played and most-played lists, listening statistics, play counts, skip counts, queue, and playback position;
- settings, sleep timer state, audio-enhancement preferences, Premium activation state, and Android Auto/resume state;
- cached thumbnails, cached genre results, and cached lyrics;
- user-provided or user-edited lyrics, including the text of `.lrc` files;
- custom artwork and app-managed images, such as playlist covers;
- files and metadata created by the ringtone cutter; a ringtone is saved under the `Ringtones/VoraTube` folder in the device's media library when you request it;
- temporary working copies used while the tag editor verifies a change.

VoraTube does not operate a cloud account, cloud music library, or cloud backup service. VoraTube does not upload your audio files.

## 3. Permissions and device access

VoraTube requests permissions only for features that require them:

- On Android 13 and newer, **Music and audio** (`READ_MEDIA_AUDIO`) allows the App to find and play audio on the device.
- On older Android versions, storage access (`READ_EXTERNAL_STORAGE`) can be used to find and play audio. The App does not request broad all-files access.
- On older Android versions, tag editing can use `WRITE_EXTERNAL_STORAGE` to write a verified tag change back to the selected audio file.
- On newer Android versions, tag editing uses Android's MediaStore/content-provider write flow and may show Android's own confirmation dialog.
- The ringtone cutter can request **Modify system settings** (`WRITE_SETTINGS`) only when you ask it to assign a ringtone.
- **Foreground service**, **media playback foreground service**, and **wake lock** permissions support playback and controls while the App is not in the foreground.
- **Internet** access is used for the online features described in this policy and for the third-party SDKs.

Android's system picker controls which folder, file, or image you grant access to. Removing an imported folder or a song from VoraTube removes or hides the App's reference; it does not delete the physical audio file. You remain responsible for deleting the original file through Android or another app if you choose to do so.

## 4. Online lookups

The App never sends your audio files to the lookup services below.

### Lyrics

When lyrics are not embedded in the selected song or already stored locally, VoraTube may use the public LRCLIB service at `https://lrclib.net/api` to request matching lyrics. Depending on the lookup, the request can contain:

- song title;
- artist name;
- album name, when available; and
- duration, when available and eligible.

The App identifies itself with a User-Agent containing the VoraTube app name and project link. Results are stored in the App's local lyrics cache. A network failure does not interrupt playback. You can also provide, edit, or export `.lrc` lyrics yourself; those files are not uploaded by VoraTube.

### Genre enrichment

If a song has no local genre, VoraTube may send a best-effort query containing the song title and artist to Apple's iTunes Search API at `https://itunes.apple.com/search`. The request asks for up to five song results for the United States. A returned genre is cached locally for 30 days; a failed lookup is temporarily suppressed for 7 days. This lookup does not send your audio file.

### User-initiated external links

When you choose the relevant action, the App may open an external page using information from the current song:

- **Find on YouTube** opens a YouTube search using the song title and artist.
- **Search lyrics on the web** opens a browser search using the song title, artist, and lyrics-related terms.
- **Donations** opens `https://buymemomo.com/piyushbaniya` in an in-app browser view.

These actions are not performed automatically. Once an external page is opened, that service handles information according to its own privacy policy. The App cannot control its content or practices.

### Google Play updates

Production Google Play installations include a check for app-update information using the Google Play in-app update API. The check is handled by Google Play Services and is only used to show or start an update flow. The App does not use the update API to upload your music or library.

## 5. Tag editing

The tag editor is a local file-editing feature. When you select a supported audio file, VoraTube creates a temporary working copy in app-private storage, applies and verifies the requested metadata change, and then writes the change back to the original file using the Android version-appropriate storage flow. The App does not upload the original file or a working copy to a server.

The editor supports writing supported tags to MP3, M4A, FLAC, WAV, and Ogg Vorbis files. Opus files are available for reading but are not written. Temporary working copies are not backups and are cleaned up after processing or failure. A tag change can alter the original file, so keep your own copy if you need to preserve it.

## 6. Playlists, Android Auto, and ringtones

Playlist import accepts M3U/M3U8 files and resolves entries against songs already present in the local library. It does not download or copy missing music. Playlist export creates a playlist document for the user to manage outside the App.

Android Auto exposes the local media library and playback controls through the connected Android system. The App does not use Android Auto to upload your library to a VoraTube cloud service.

The ringtone cutter processes a user-selected audio file locally and, when requested, registers the resulting file in Android's media library so it can be assigned as a ringtone. VoraTube does not change unrelated system settings.

## 7. Backups and restore

VoraTube can create a manual backup or a scheduled automatic backup. The backup is a compressed, integrity-checked `.vtbak` file written to a folder selected through Android's system folder picker. VoraTube does not upload the backup.

A backup can contain portable song references and metadata, playlists (including descriptions and custom cover images), favorites, moods, play history, listening statistics, hidden-song and tag-edit flags, selected settings, user-provided lyrics, and a queue snapshot. It does not contain the audio files themselves. The backup is not encrypted by VoraTube.

Automatic backups can be enabled at a user-selected interval from 1 to 7 days. VoraTube creates an automatic backup only when the saved backup directory is available and the portable user state has changed. The App does not automatically delete old backup files. If you place a backup in a folder synced by another service, that service may process it under its own policies. Restoring a backup reads the selected file and applies its contents to the local VoraTube library.

## 8. Advertising

VoraTube includes the Google Mobile Ads SDK and may display banner and interstitial advertisements through Google AdMob when Premium is inactive. VoraTube does not use rewarded ("watch and earn") advertisements. VoraTube does not present a separate in-app consent-management screen for this SDK; any consent controls provided by Android or Google are handled by those services.

Google and its advertising partners may process device, app, advertising, and usage information when ads are requested or displayed, including advertising identifiers. Their processing is governed by Google's applicable policies, including `https://policies.google.com/technologies/ads`.

Activating Premium prevents VoraTube from initializing the ads SDK and making ad requests while Premium is active. Premium is a local entitlement; VoraTube does not process payments or maintain a VoraTube account for it.

## 9. Analytics and diagnostics

Production VoraTube includes Firebase Analytics from Google. The App sends feature events such as playback controls, shuffle/repeat changes, lyrics actions, playlist actions, searches, ringtone actions, and ad load/show outcomes. VoraTube's custom events use only small categorical values such as a boolean, repeat mode, or ad outcome. VoraTube does not intentionally add song titles, artists, albums, filenames, paths, MediaStore URIs, playlist names, lyrics, search terms, email addresses, or other local music content to its custom analytics events.

Firebase Analytics and the underlying Google SDKs may collect and process their own standard app, device, and usage information when Analytics is available. The App treats Analytics as best-effort and does not allow an analytics failure to block playback or other features. The VoraTube development variant is configured without Firebase Analytics.

VoraTube does not include a separately integrated Crashlytics, Sentry, or other crash-reporting service. Android, Google Play Services, and included third-party SDKs may process their own diagnostic information under their respective policies.

### Accounts and service providers

VoraTube has no user registration, login, or VoraTube cloud account, so there is no VoraTube account to delete. If you uninstall the App, Android removes the App's sandboxed data. Data held by third-party services is subject to that service's own terms and retention practices.

VoraTube does not sell or rent your music or local library data. The App's network disclosures are limited to the lookup, external-link, advertising, analytics, and Play-update functions described above, together with files you explicitly export or store through Android's picker.

## 10. Data retention and deletion

Local VoraTube data remains on the device until the user deletes it through an available App action, clears the App's data in Android settings, or uninstalls the App. Removing an imported folder or hiding/removing a song changes VoraTube's local library reference; it does not delete the original audio file. A media-delete action, when offered, uses Android's media-storage mechanism and may require Android confirmation.

Caches may remain until they are replaced, cleared, the App data is cleared, or the App is uninstalled. VoraTube does not set a guaranteed server-side retention period because VoraTube does not operate a server for the App's library data.

Backup files remain in the folder chosen by the user until the user, Android, or another app deletes, moves, or overwrites them. VoraTube cannot delete third-party data held by LRCLIB, Apple, YouTube, Google advertising systems, Firebase Analytics, or other external providers; use those providers' own privacy channels where applicable.

## 11. Data security

VoraTube stores App-managed data using Android's app sandbox and local database mechanisms. Audio files remain in the locations and permissions controlled by Android and the user. The App uses HTTPS for the online lookup APIs it controls.

Backup files are not encrypted by VoraTube. Files selected through Android's system picker may be accessible to the user, other permitted apps, or a sync service according to the user's choices. No storage or transmission method is completely secure, and VoraTube cannot guarantee the security practices of the device or third-party services.

## 12. Children's privacy

VoraTube is a general-audience music player and does not ask for an account or directly ask for a child's personal information. Online advertising, analytics, and other third-party services may have their own age and data practices. Parents or guardians should review those services' policies and use appropriate device controls.

## 13. Third-party services

| Service | Purpose | When used | Information or action |
| --- | --- | --- | --- |
| LRCLIB (`lrclib.net`) | Lyrics lookup | Best-effort online lookup | Song title, artist, and when available album and duration |
| Apple iTunes Search (`itunes.apple.com`) | Genre lookup | When local genre is missing | Query built from song title and artist |
| Google Mobile Ads / AdMob | Banner and interstitial ads | When Premium is inactive | Data processed under Google's advertising policies |
| Firebase Analytics | App feature measurement | When Analytics is available in a production build | Custom events without local music or personal fields; standard SDK processing may also occur |
| Google Play in-app update API | App update flow | When a production Play update is checked or started | App update status handled by Google Play |
| YouTube | User-requested song search | Only after the user chooses it | Song title and artist as search terms |
| Browser search | User-requested lyrics search | Only after the user chooses it | Song title, artist, and search terms |
| Buy Me a Momo (`buymemomo.com`) | Donation page | Only after the user opens it | Information handled by that website |

These services are governed by their own terms and privacy policies. VoraTube is not responsible for their content, availability, or practices.

## 14. Changes and contact

We may update this Privacy Policy as the App changes. The date at the top will show when the current version was last updated, and the current version will be available in the App and at `https://voratube.vercel.app/privacy-policy`.

If you have questions about this Privacy Policy or VoraTube's data practices, contact:

- **App:** VoraTube
- **Developer:** Piyush Das
- **Privacy contact:** baniyapiyushwork@gmail.com
