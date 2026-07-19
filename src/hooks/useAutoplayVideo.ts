import { useEffect, useRef } from 'react'

type Options = {
  /** Only play while the element intersects the viewport. */
  playWhenVisible?: boolean
  /** Fraction of the element that must be visible to start playback. */
  threshold?: number
}

/** Muted inline autoplay for hero / companion demos. */
export function useAutoplayVideo(playbackRate = 1, options: Options = {}) {
  const { playWhenVisible = false, threshold = 0.45 } = options
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.defaultMuted = true
    video.muted = true
    video.playsInline = true
    video.playbackRate = playbackRate

    const tryPlay = () => {
      void video.play().catch(() => {
        // Autoplay can fail (e.g. low-power mode); poster remains visible.
      })
    }

    if (!playWhenVisible) {
      if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        tryPlay()
      } else {
        video.addEventListener('canplay', tryPlay, { once: true })
      }
      return () => video.removeEventListener('canplay', tryPlay)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.currentTime = 0
          tryPlay()
        } else {
          video.pause()
        }
      },
      { threshold },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [playbackRate, playWhenVisible, threshold])

  return videoRef
}
