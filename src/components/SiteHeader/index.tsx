import styles from './index.module.css'

export function SiteHeader() {
  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <img
          className={styles.wordmark}
          src="/images/logo-light.png"
          alt="numo"
          width={160}
          height={35}
        />
        <span className={styles.download} aria-disabled="true">
          Download on iOS
        </span>
      </div>
    </header>
  )
}
