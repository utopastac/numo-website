import styles from './index.module.css'

const ITEMS = [
  {
    id: 'metrics',
    src: '/images/figma/clarity-metrics.png',
    width: 386,
    height: 256,
    caption: 'Your metrics, visualised and instantly accessible',
    alt: 'Calories counter with progress ring and quick-add grid',
  },
  {
    id: 'widgets',
    src: '/images/figma/clarity-widget.png',
    width: 165,
    height: 165,
    caption: 'Homescreen widgets',
    alt: 'Home Screen calories widget',
  },
  {
    id: 'watch',
    src: '/images/figma/clarity-watch.png',
    width: 205,
    height: 251,
    caption: 'Companion watch app',
    alt: 'Apple Watch calories complication',
  },
] as const

export function Clarity() {
  return (
    <section className={styles.root} aria-labelledby="clarity-heading">
      <div className={styles.frame}>
        <h2 id="clarity-heading" className={styles.heading}>
          Designed for absolute clarity
        </h2>

        <div className={styles.grid}>
          {ITEMS.map((item) => (
            <article key={item.id} className={styles.feature}>
              <div className={styles.panel}>
                <img
                  className={styles.image}
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                />
              </div>
              <p className={styles.caption}>{item.caption}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
