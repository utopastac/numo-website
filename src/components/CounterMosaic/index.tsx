import { ProgressRing } from '@/numo/ProgressRing'
import { MOSAIC_COUNTERS, type ThemeKey } from '@/data/marketing'
import styles from './index.module.css'

const THEME_CLASS: Record<ThemeKey, string> = {
  sky: styles.sky,
  lavender: styles.lavender,
  steel: styles.steel,
  sand: styles.sand,
  sage: styles.sage,
  peach: styles.peach,
  white: styles.white,
  butter: styles.butter,
  pink: styles.pink,
  mint: styles.mint,
}

const THEME_VARS: Record<ThemeKey, string> = {
  sky: 'var(--theme-sky)',
  lavender: 'var(--theme-lavender)',
  steel: 'var(--theme-steel)',
  sand: 'var(--theme-sand)',
  sage: 'var(--theme-sage)',
  peach: 'var(--theme-peach)',
  white: 'var(--theme-white)',
  butter: 'var(--theme-butter)',
  pink: 'var(--theme-pink)',
  mint: 'var(--theme-mint)',
}

export function CounterMosaic() {
  return (
    <section className={styles.root} aria-label="Counter examples">
      <div className={styles.frame}>
        <ul className={styles.grid}>
          {MOSAIC_COUNTERS.map((counter) => (
            <li
              key={`${counter.name}-${counter.unit}`}
              className={`${styles.card} ${THEME_CLASS[counter.theme]}`}
            >
              <div className={styles.face}>
                <header className={styles.header}>
                  <p className={styles.label}>
                    <span>{counter.name}</span>
                    <span>/</span>
                    <span>{counter.unit}</span>
                  </p>
                </header>
                <div className={styles.body}>
                  <div className={styles.display}>
                    <div className={styles.copy}>
                      <p className={styles.value}>{counter.value}</p>
                      <p className={styles.remaining}>{counter.remaining}</p>
                    </div>
                    <ProgressRing
                      progress={counter.progress}
                      size={72}
                      stroke={18}
                      trackColor="var(--color-indicator-track)"
                      fillColor="var(--color-indicator-fill)"
                      outlineColor={THEME_VARS[counter.theme]}
                      animated={false}
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
