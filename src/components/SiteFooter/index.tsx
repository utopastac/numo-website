import styles from './index.module.css'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.root}>
      <div className={styles.frame}>
        <img
          className={styles.wordmark}
          src="/images/logo-light.png"
          alt="numo"
          width={120}
          height={26}
        />
        <p className={styles.meta}>
          © {year} numo · A product from{' '}
          <a href="https://f-90.co.uk" className={styles.link}>
            f-90
          </a>
        </p>
      </div>
    </footer>
  )
}
