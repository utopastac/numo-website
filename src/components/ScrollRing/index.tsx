import { ArrowUp } from 'lucide-react'
import { ProgressRing } from '@/numo/ProgressRing'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import styles from './index.module.css'

const RING_SIZE = 56
const RING_STROKE = 14
const SHOW_AT = 0.04

/** Fixed product-style ring that fills with page scroll progress. */
export function ScrollRing() {
  const progress = useScrollProgress()
  const visible = progress >= SHOW_AT
  const complete = progress >= 0.995
  const percent = Math.round(progress * 100)

  const scrollToTop = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      className={styles.root}
      data-visible={visible ? 'true' : 'false'}
      data-complete={complete ? 'true' : 'false'}
      onClick={scrollToTop}
      aria-label={
        complete
          ? 'Back to top'
          : `Page progress ${percent} percent. Click to return to top`
      }
    >
      <ProgressRing
        progress={progress}
        size={RING_SIZE}
        stroke={RING_STROKE}
        trackColor="var(--color-ring-track)"
        fillColor="var(--color-ring-fill)"
        outlineColor="var(--color-white)"
        animated={false}
      />
      <span className={styles.tip} aria-hidden="true">
        <ArrowUp strokeWidth={2.25} />
      </span>
    </button>
  )
}
