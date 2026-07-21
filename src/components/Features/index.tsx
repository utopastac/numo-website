import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { FEATURE_SLIDES } from '@/data/marketing'
import styles from './index.module.css'

const TONE_CLASS = {
  sky: styles.sky,
  mint: styles.mint,
  white: styles.white,
  butter: styles.butter,
} as const

export function Features() {
  const scrollerRef = useRef<HTMLUListElement>(null)

  const scrollByCard = (direction: -1 | 1) => {
    const scroller = scrollerRef.current
    if (!scroller) return
    const card = scroller.querySelector('li')
    const amount = (card?.clientWidth ?? 320) + 32
    scroller.scrollBy({ left: amount * direction, behavior: 'smooth' })
  }

  return (
    <section className={styles.root} aria-labelledby="features-heading">
      <div className={styles.header}>
        <h2 id="features-heading" className={styles.heading}>
          Power features, packaged beautifully
        </h2>
        <div className={styles.nav}>
          <button
            type="button"
            className={styles.navButton}
            aria-label="Previous feature"
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
            aria-label="Next feature"
            onClick={() => scrollByCard(1)}
          >
            <ArrowRight size={20} strokeWidth={1.6667} aria-hidden="true" />
          </button>
        </div>
      </div>

      <ul className={styles.track} ref={scrollerRef}>
        {FEATURE_SLIDES.map((slide) => (
          <li key={slide.id} className={styles.slide}>
            <div className={`${styles.visual} ${TONE_CLASS[slide.tone]}`}>
              <img
                className={styles.image}
                src={slide.image}
                alt=""
                width={472}
                height={267}
                loading="lazy"
              />
            </div>
            <p className={styles.body}>{slide.body}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
