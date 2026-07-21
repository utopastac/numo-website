import { ProgressRing } from '@/numo/ProgressRing'
import {
  THEME_LIST_ITEMS,
  THEME_PALETTES,
  THEME_PILLS,
  type ThemePaletteName,
} from '@/data/themes'
import styles from './index.module.css'

type Props = {
  selected: ThemePaletteName
  onSelect: (palette: ThemePaletteName) => void
}

export function Themes({ selected, onSelect }: Props) {
  const swatches = THEME_PALETTES[selected]

  return (
    <section className={styles.root} aria-labelledby="themes-heading">
      <div className={styles.frame}>
        <h2 id="themes-heading" className={styles.heading}>
          Themes & customisation
        </h2>

        <div className={styles.content}>
          <div className={styles.pills} role="tablist" aria-label="Theme collections">
            {THEME_PILLS.map((pill) => {
              const isSelected = pill === selected
              return (
                <button
                  key={pill}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={isSelected ? `${styles.pill} ${styles.pillSelected}` : styles.pill}
                  onClick={() => onSelect(pill)}
                >
                  {pill}
                </button>
              )
            })}
          </div>

          <ul className={styles.grid}>
            {THEME_LIST_ITEMS.map((item, index) => {
              const swatch = swatches[index % swatches.length]
              return (
                <li
                  key={item.name}
                  className={styles.item}
                  style={{ backgroundColor: swatch.hex }}
                >
                  <ProgressRing
                    progress={0.75}
                    size={32}
                    stroke={8}
                    trackColor="var(--color-indicator-track)"
                    fillColor="var(--color-indicator-fill)"
                    outlineColor={swatch.hex}
                    animated={false}
                  />
                  <span className={styles.name}>{item.name}</span>
                  <span className={styles.value}>{item.value}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
