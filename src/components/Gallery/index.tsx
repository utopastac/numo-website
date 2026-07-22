import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { GALLERY_SLIDES } from '@/data/screenshots'
import styles from './index.module.css'

const TONE_CLASS = {
  sky: styles.sky,
  lavender: styles.lavender,
  sage: styles.sage,
  sand: styles.sand,
  peach: styles.peach,
  mint: styles.mint,
  butter: styles.butter,
  steel: styles.steel,
  pink: styles.pink,
  white: styles.white,
} as const

export function Gallery() {
  const scrollerRef = useRef<HTMLUListElement>(null)

  const scrollByCard = (direction: -1 | 1) => {
    const scroller = scrollerRef.current
    if (!scroller) return
    const card = scroller.querySelector('li')
    const amount = (card?.clientWidth ?? 320) + 32
    scroller.scrollBy({ left: amount * direction, behavior: 'smooth' })
  }

  return (
    <section className={styles.root} aria-label="App screenshots">
      <div className={styles.header}>
        <div className={styles.nav}>
          <button
            type="button"
            className={styles.navButton}
            aria-label="Previous screenshot"
            onClick={() => scrollByCard(-1)}
          >
            <ArrowRight
              className={styles.navIconPrev}
              size={20}
              strokeWidth={1.6667}
              aria-hidden="true"
            />
          </button>
          <button
            type="button"
            className={styles.navButton}
            aria-label="Next screenshot"
            onClick={() => scrollByCard(1)}
          >
            <ArrowRight size={20} strokeWidth={1.6667} aria-hidden="true" />
          </button>
        </div>
      </div>

      <ul className={styles.track} ref={scrollerRef}>
        {GALLERY_SLIDES.map((slide) => (
          <li key={slide.id} className={styles.slide}>
            <div className={`${styles.visual} ${TONE_CLASS[slide.tone]}`}>
              <img
                className={styles.image}
                src={slide.image}
                alt={slide.alt}
                width={390}
                height={844}
                loading="lazy"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
