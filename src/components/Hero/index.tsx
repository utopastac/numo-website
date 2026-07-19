import { useEffect, useRef } from 'react'
import { HERO_POSTER, HERO_VIDEO } from '@/data/screenshots'
import styles from './index.module.css'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Browsers require muted to be set on the element before play() for autoplay.
    video.defaultMuted = true
    video.muted = true
    video.playsInline = true
    video.loop = false
    video.playbackRate = 1.35

    const tryPlay = () => {
      void video.play().catch(() => {
        // Autoplay can still fail (e.g. low-power mode); poster remains visible.
      })
    }

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      tryPlay()
    } else {
      video.addEventListener('canplay', tryPlay, { once: true })
    }

    return () => video.removeEventListener('canplay', tryPlay)
  }, [])

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
    </header>
  )
}
