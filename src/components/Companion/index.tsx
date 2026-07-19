import { WATCH_POSTER, WATCH_SCREENSHOTS, WATCH_VIDEO } from '@/data/screenshots'
import { useAutoplayVideo } from '@/hooks/useAutoplayVideo'
import styles from './index.module.css'

export function Companion() {
  const videoRef = useAutoplayVideo(1.2, { playWhenVisible: true })

  return (
    <section className={styles.root} aria-labelledby="companion-heading">
      <div className={styles.frame}>
        <div className={styles.band}>
          <div className={styles.copy}>
            <h2 id="companion-heading" className={styles.heading}>
              Home Screen and wrist
            </h2>
            <p className={styles.lede}>
              Interactive widgets for quick add from your Home Screen, plus an Apple Watch app
              and complication so your primary total is always within reach.
            </p>
          </div>

          <div className={styles.device}>
            <video
              ref={videoRef}
              className={styles.video}
              src={WATCH_VIDEO}
              poster={WATCH_POSTER}
              width={416}
              height={496}
              autoPlay
              muted
              playsInline
              preload="auto"
              disableRemotePlayback
              aria-label="Numo on Apple Watch"
            />
            <img
              className={styles.poster}
              src={WATCH_POSTER}
              alt="Numo on Apple Watch"
              width={416}
              height={496}
            />
          </div>

          <ul className={styles.shots}>
            {WATCH_SCREENSHOTS.map((src) => (
              <li key={src} className={styles.shot}>
                <img
                  className={styles.shotImage}
                  src={src}
                  alt=""
                  width={416}
                  height={496}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
