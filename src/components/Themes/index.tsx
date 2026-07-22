import { ProgressRing } from '@/numo/ProgressRing'
import {
  THEME_GRID_COUNT,
  THEME_PALETTES,
  THEME_PILLS,
  themeAppearance,
  themeCardBackground,
  themeContentColor,
  themeOutlineColor,
  themeTrackColor,
  type ThemePaletteName,
} from '@/data/themes'
import styles from './index.module.css'

type Props = {
  selected: ThemePaletteName
  onSelect: (palette: ThemePaletteName) => void
}

export function Themes({ selected, onSelect }: Props) {
  const swatches = THEME_PALETTES[selected]
  const appearance = themeAppearance(selected)

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

          <ul className={styles.grid} aria-label={`${selected} colour swatches`}>
            {Array.from({ length: THEME_GRID_COUNT }, (_, index) => {
              const swatch = swatches[index % swatches.length]
              const progress = 0.28 + ((index * 0.17) % 0.64)
              const content = themeContentColor(swatch, appearance)
              return (
                <li
                  key={`${swatch.name}-${index}`}
                  className={styles.item}
                  style={{ background: themeCardBackground(swatch, appearance) }}
                  aria-label={swatch.name}
                >
                  <ProgressRing
                    progress={progress}
                    size={64}
                    stroke={16}
                    trackColor={themeTrackColor(content)}
                    fillColor={content}
                    outlineColor={themeOutlineColor(swatch, appearance)}
                    animated={false}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
