import styles from './index.module.css'

const PRESETS = ['10', '20', '50', '100', '200', '500']

export function PhoneMock() {
  return (
    <div className={styles.root} aria-hidden="true">
      <div className={styles.device}>
        <div className={styles.screen}>
          <div className={styles.statusBar}>
            <span>9:41</span>
            <span className={styles.statusIcons}>●●●</span>
          </div>

          <div className={styles.page}>
            <div className={styles.header}>
              <div className={styles.heroCopy}>
                <p className={styles.value}>1,240</p>
                <p className={styles.subtitle}>of 2,000 kcal</p>
              </div>
              <div className={styles.ringWrap}>
                <svg className={styles.ring} viewBox="0 0 120 120">
                  <circle className={styles.ringTrack} cx="60" cy="60" r="48" />
                  <circle className={styles.ringFill} cx="60" cy="60" r="48" />
                </svg>
              </div>
            </div>

            <div className={styles.presets}>
              {PRESETS.map((value) => (
                <span key={value} className={styles.preset}>
                  +{value}
                </span>
              ))}
            </div>

            <div className={styles.log}>
              <div className={styles.logRow}>
                <span>+200</span>
                <span className={styles.logTime}>Just now</span>
              </div>
              <div className={styles.logRow}>
                <span>+50</span>
                <span className={styles.logTime}>12:18</span>
              </div>
              <div className={styles.logRow}>
                <span>+100</span>
                <span className={styles.logTime}>11:42</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
