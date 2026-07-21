import { HERO_POSTER, HERO_VIDEO } from '@/data/screenshots'
import { useAutoplayVideo } from '@/hooks/useAutoplayVideo'
import styles from './index.module.css'

export function PhoneShowcase() {
  const videoRef = useAutoplayVideo(1.35, { playWhenVisible: true })

  return (
    <section className={styles.root} aria-label="App preview">
      <div className={styles.frame}>
        <div className={styles.band}>
          <div className={styles.device}>
            <video
              ref={videoRef}
              className={styles.video}
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
