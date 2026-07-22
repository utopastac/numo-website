import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { GALLERY_SLIDES } from '@/data/screenshots'
import {
  THEME_PALETTES,
  themeAppearance,
  themeCardBackground,
  type ThemePaletteName,
} from '@/data/themes'
import styles from './index.module.css'

type Props = {
  palette: ThemePaletteName
}

export function Gallery({ palette }: Props) {
  const scrollerRef = useRef<HTMLUListElement>(null)
  const swatches = THEME_PALETTES[palette]
  const appearance = themeAppearance(palette)

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
        {GALLERY_SLIDES.map((slide, index) => {
          const swatch = swatches[index % swatches.length]
          return (
            <li key={slide.id} className={styles.slide}>
              <div
                className={styles.visual}
                style={{ background: themeCardBackground(swatch, appearance) }}
              >
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
          )
        })}
      </ul>
    </section>
  )
}
