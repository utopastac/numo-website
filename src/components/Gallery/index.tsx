import { GALLERY_SCREENSHOTS } from '@/data/screenshots'
import styles from './index.module.css'

export function Gallery() {
  return (
    <section className={styles.root} aria-label="App screenshots">
      <ul className={styles.list}>
        {GALLERY_SCREENSHOTS.map((src) => (
          <li key={src} className={styles.item}>
            <img
              className={styles.image}
              src={src}
              alt=""
              width={390}
              height={844}
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
