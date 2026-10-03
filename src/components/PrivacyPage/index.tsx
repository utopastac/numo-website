import { Link } from 'react-router-dom'
import { LegalDoc } from '@/components/LegalDoc'
import styles from './index.module.css'

export function PrivacyPage() {
  return (
    <LegalDoc
      title="Privacy Policy — Numo"
      description="Privacy policy for Numo, a local-first iOS counter app."
    >
      <h1>Privacy Policy</h1>
      <p className={styles.meta}>Last updated: 2 October 2026</p>

      <p>
        Numo (“Numo”, “we”, “us”) is a local-first counter app for iPhone and Apple Watch.
        This policy explains what information the app handles and what it does not.
      </p>

      <h2>Summary</h2>
      <p>
        Numo does not require an account, does not sell personal data, and does not include
        third-party advertising or analytics SDKs. Your counters and history are stored on
        your devices.
      </p>

      <h2>Information we process</h2>
      <ul>
        <li>
          <strong>Counters and entries</strong> you create (names, units, goals, amounts,
          timestamps, themes, and similar app state) are stored locally using on-device
          storage provided by iOS and watchOS, including an App Group shared with Numo
          widgets and the Apple Watch companion when installed.
        </li>
        <li>
          <strong>Exports</strong> you choose to share or save (for example CSV backups)
          leave the app only when you explicitly use the system share sheet or save to Files
          / another app.
        </li>
        <li>
          <strong>Widget snapshots</strong> (a small on-device preview of a counter’s current
          value) may be written to shared local storage so Home Screen and watch face widgets
          can update. This data does not leave your devices through Numo.
        </li>
      </ul>

      <h2>Information we do not collect</h2>
      <ul>
        <li>No account registration or login.</li>
        <li>No location tracking.</li>
        <li>No advertising identifiers used for ads.</li>
        <li>No third-party analytics or crash-reporting SDKs from us.</li>
        <li>No HealthKit, contact list, camera, or microphone access for tracking.</li>
        <li>
          No cloud sync operated by Numo — we do not run a Numo backend for your logs.
        </li>
      </ul>

      <h2>Apple and the operating system</h2>
      <p>
        Apple may collect diagnostic or usage information according to your device settings
        and Apple’s own privacy policy (for example if you have opted in to Share iPhone
        Analytics or App Store diagnostics). Watch and iPhone communication uses Apple’s
        system frameworks. That processing is controlled by Apple, not by Numo.
      </p>

      <h2>Children</h2>
      <p>
        Numo does not knowingly collect personal information from children. Because counters
        stay on device and we do not operate accounts or analytics, the app is suitable for
        general audiences under App Store guidelines.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy if the app’s behaviour changes. The “Last updated” date at
        the top will change when we do. Continued use of the app after an update means you
        accept the revised policy.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy:{' '}
        <a href="mailto:archgrovehouse@gmail.com">archgrovehouse@gmail.com</a>. You can also
        visit <Link to="/support">Support</Link>.
      </p>
    </LegalDoc>
  )
}
