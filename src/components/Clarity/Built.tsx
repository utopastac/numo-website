import { ProgressRing } from '@/numo/ProgressRing'
import styles from './Built.module.css'

/** CSS recreation of Clarity interfaces — kept for reference; Clarity uses Figma exports. */
export function ClarityBuilt() {
  return (
    <div className={styles.grid}>
      <article className={styles.feature}>
        <div className={styles.panel}>
          <div className={styles.counterCard}>
            <header className={styles.counterHeader}>
              <p className={styles.counterTitle}>Calories / kCal</p>
            </header>
            <div className={styles.counterBody}>
              <div className={styles.counterCopy}>
                <p className={styles.counterValue}>70</p>
                <p className={styles.counterMeta}>520 remaining</p>
              </div>
              <ProgressRing
                progress={0.12}
                size={96}
                stroke={24}
                trackColor="var(--color-indicator-track)"
                fillColor="var(--color-indicator-fill)"
                outlineColor="var(--theme-sand)"
                animated={false}
              />
            </div>
            <div className={styles.presets} aria-hidden="true">
              {[5, 10, 25, 50, 100, 200, 500, 1000, 50, '…'].map((value, index) => (
                <span key={`${value}-${index}`} className={styles.preset}>
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className={styles.caption}>Your metrics, visualised and instantly accessible</p>
      </article>

      <article className={styles.feature}>
        <div className={`${styles.panel} ${styles.panelNarrow}`}>
          <div className={styles.widget}>
            <ProgressRing
              progress={0.8}
              size={48}
              stroke={12}
              trackColor="var(--color-indicator-track)"
              fillColor="var(--color-indicator-fill)"
              outlineColor="var(--theme-sand)"
              animated={false}
            />
            <p className={styles.widgetLabel}>Calories</p>
            <p className={styles.widgetValue}>2424</p>
            <p className={styles.widgetMeta}>80 Remaining</p>
          </div>
        </div>
        <p className={styles.caption}>Widgets</p>
      </article>

      <article className={styles.feature}>
        <div className={`${styles.panel} ${styles.panelNarrow}`}>
          <div className={styles.watch}>
            <p className={styles.watchTime}>10:09</p>
            <ProgressRing
              progress={0.8}
              size={78}
              stroke={14}
              trackColor="rgb(255 255 255 / 0.28)"
              fillColor="#ffffff"
              outlineColor="#595102"
              animated={false}
            />
            <div className={styles.watchCopy}>
              <p className={styles.watchLabel}>Calories</p>
              <p className={styles.watchValue}>2424</p>
              <p className={styles.watchMeta}>80 Remaining</p>
            </div>
          </div>
        </div>
        <p className={styles.caption}>Watch</p>
      </article>
    </div>
  )
}
