import { PhoneMock } from '@/components/PhoneMock'
import styles from './index.module.css'

export function Hero() {
  return (
    <header className={styles.root}>
      <div className={styles.atmosphere} aria-hidden="true">
        <div className={styles.blobPeriwinkle} />
        <div className={styles.blobSand} />
        <div className={styles.blobSage} />
        <div className={styles.grain} />
      </div>

      <div className={styles.frame}>
        <div className={styles.copy}>
          <img
            className={styles.wordmark}
            src="/images/logo-light.png"
            alt="numo"
            width={280}
            height={61}
          />
          <h1 className={styles.headline}>Count what matters.</h1>
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
          <PhoneMock />
        </div>
      </div>
    </header>
  )
}
