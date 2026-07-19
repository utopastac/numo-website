import { HERO_SCREENSHOT } from '@/data/screenshots'
import styles from './index.module.css'

export function Hero() {
  return (
    <header className={styles.root}>
      <img
        className={styles.wordmark}
        src="/images/logo-light.png"
        alt="numo"
        width={280}
        height={61}
      />

      <div className={styles.frame}>
        <div className={styles.copy}>
          <h1 className={styles.headline}>The simplest tracker for any number</h1>
          <p className={styles.lede}>
            Calories, protein, money, water — or anything you track.
            Local-first on iPhone, with widgets and Apple Watch.
          </p>
          <div className={styles.ctaRow}>
            <span className={styles.cta} aria-disabled="true">
              Coming soon on the App Store
            </span>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.device}>
            <img
              className={styles.screenshot}
              src={HERO_SCREENSHOT}
              alt="Numo counter screen on iPhone"
              width={390}
              height={844}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
