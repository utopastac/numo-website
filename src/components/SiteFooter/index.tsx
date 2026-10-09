import { Link } from 'react-router-dom'
import styles from './index.module.css'

export function SiteFooter() {
  return (
    <footer className={styles.root}>
      <div className={styles.frame}>
        <div className={styles.brand}>
          <Link to="/" aria-label="Dayring home">
            <img
              className={styles.wordmark}
              src="/images/dayring-logo.svg"
              alt="Dayring"
              width={484}
              height={102}
            />
          </Link>
          <p className={styles.tagline}>
            A minimalist utility designed for tracking daily, weekly, and lifetime metrics on iOS.
          </p>
          <p className={styles.compat}>
            Compatible with iOS 26.0 or later. Optimized for iPhone and Apple Watch.
          </p>
        </div>
        <div className={styles.meta}>
          <nav className={styles.links} aria-label="Legal">
            <Link to="/support" className={styles.link}>
              Support
            </Link>
            <Link to="/privacy" className={styles.link}>
              Privacy
            </Link>
          </nav>
          <p className={styles.credit}>
            A product from{' '}
            <a href="https://f-90.co.uk" className={styles.link}>
              f-90
            </a>
          </p>
          <p className={styles.copy}>© 2026 Dayring</p>
        </div>
      </div>
    </footer>
  )
}
