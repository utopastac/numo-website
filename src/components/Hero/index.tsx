import { HERO_POSTER, HERO_VIDEO } from '@/data/screenshots'
import { useAutoplayVideo } from '@/hooks/useAutoplayVideo'
import styles from './index.module.css'

export function Hero() {
  const videoRef = useAutoplayVideo(1.35)

  return (
    <section className={styles.root}>
      <div className={styles.frame}>
        <div className={styles.copy}>
          <h1 className={styles.headline}>The simplest tracker for any number</h1>
          <p className={styles.lede}>
            Calories, protein, money, water, or anything you track.
            Local first on iPhone, with widgets and Apple Watch.
          </p>
          <div className={styles.ctaRow}>
            <span className={styles.cta} aria-disabled="true">
              Coming soon on the App Store
            </span>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.device}>
            <video
              ref={videoRef}
              className={styles.screenshot}
              src={HERO_VIDEO}
              poster={HERO_POSTER}
              width={390}
              height={844}
              autoPlay
              muted
              playsInline
              preload="auto"
              disableRemotePlayback
              aria-label="Numo app demo on iPhone"
            />
            <img
              className={styles.poster}
              src={HERO_POSTER}
              alt="Numo counter screen on iPhone"
              width={390}
              height={844}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
