import { WATCH_POSTER, WATCH_VIDEO } from '@/data/screenshots'
import { useAutoplayVideo } from '@/hooks/useAutoplayVideo'
import styles from './index.module.css'

export function WatchShowcase() {
  const videoRef = useAutoplayVideo(1.35, { playWhenVisible: true })

  return (
    <section className={styles.root} aria-label="Watch app preview">
      <div className={styles.frame}>
        <div className={styles.band}>
          <div className={styles.stack}>
            <div className={styles.strap} aria-hidden="true" />
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
                aria-label="Numo companion app demo on Apple Watch"
              />
              <img
                className={styles.poster}
                src={WATCH_POSTER}
                alt="Numo counter screen on Apple Watch"
                width={416}
                height={496}
              />
            </div>
            <div className={styles.strap} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
