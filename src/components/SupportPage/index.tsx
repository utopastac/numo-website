import { Link } from 'react-router-dom'
import { LegalDoc } from '@/components/LegalDoc'
import styles from './index.module.css'

export function SupportPage() {
  return (
    <LegalDoc
      title="Support — Numo"
      description="Support and contact for Numo on iPhone and Apple Watch."
    >
      <h1>Support</h1>
      <p>
        Need help with Numo on iPhone or Apple Watch? Start with the notes below, or email
        us directly.
      </p>

      <div className={styles.actions}>
        <a
          className={styles.button}
          href="mailto:archgrovehouse@gmail.com?subject=Numo%20support"
        >
          Email support
        </a>
        <Link className={styles.buttonSecondary} to="/privacy">
          Privacy Policy
        </Link>
      </div>

      <h2>Where is my data stored?</h2>
      <p>
        Counters and history stay on your devices. Numo uses on-device storage shared with
        widgets and the Apple Watch companion when installed. Uninstalling the app, or
        erasing the app’s data, removes local logs. Export anything you want to keep before
        deleting the app.
      </p>

      <h2>How do I export?</h2>
      <p>
        Use the in-app export action to save a CSV backup via the system share sheet (Files,
        Mail, Messages, and so on).
      </p>

      <h2>Widgets and Apple Watch</h2>
      <p>
        Home Screen widgets and the watch companion read from the same on-device data as the
        iPhone app. If a widget looks stale, open Numo once so it can refresh, and confirm
        the watch is paired and nearby.
      </p>

      <h2>Something looks wrong</h2>
      <p>
        Tell us your device model, iOS or watchOS version, and what you were doing when the
        issue happened. Screenshots help. Email{' '}
        <a href="mailto:archgrovehouse@gmail.com">archgrovehouse@gmail.com</a>.
      </p>

      <h2>Contact</h2>
      <p>
        <a href="mailto:archgrovehouse@gmail.com">archgrovehouse@gmail.com</a>
        <br />
        We aim to reply within a few days.
      </p>
    </LegalDoc>
  )
}
