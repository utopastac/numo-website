import { ProgressRing } from '@/numo/ProgressRing'
import { MOSAIC_COUNTERS } from '@/data/marketing'
import { THEME_PALETTES, themeTrackColor, type ThemePaletteName } from '@/data/themes'
import styles from './index.module.css'

type Props = {
  palette: ThemePaletteName
}

export function CounterMosaic({ palette }: Props) {
  const swatches = THEME_PALETTES[palette]

  return (
    <section className={styles.root} aria-label="Counter examples">
      <div className={styles.frame}>
        <ul className={styles.grid}>
          {MOSAIC_COUNTERS.map((counter, index) => {
            const swatch = swatches[index % swatches.length]
            return (
              <li
                key={`${counter.name}-${counter.unit}`}
                className={styles.card}
                style={{
                  backgroundColor: swatch.hex,
                  color: swatch.dark,
                }}
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
                        progress={
                          counter.countDown ? 1 - counter.progress : counter.progress
                        }
                        size={72}
                        stroke={18}
                        trackColor={themeTrackColor(swatch.dark)}
                        fillColor={swatch.dark}
                        outlineColor={swatch.hex}
                        animated={false}
                      />
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
