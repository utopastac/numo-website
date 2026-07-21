import { useEffect, useState } from 'react'

/** Document scroll progress from 0 (top) to 1 (bottom). */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const read = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight
      const next = max <= 0 ? 0 : window.scrollY / max
      setProgress(Math.min(1, Math.max(0, next)))
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(read)
    }

    read()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return progress
}
