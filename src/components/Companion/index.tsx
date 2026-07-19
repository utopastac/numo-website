import styles from './index.module.css'

export function Companion() {
  return (
    <section className={styles.root} aria-labelledby="companion-heading">
      <div className={styles.frame}>
        <img
          className={styles.icon}
          src="/images/app-icon.png"
          alt=""
          width={88}
          height={88}
        />
        <div className={styles.copy}>
          <h2 id="companion-heading" className={styles.heading}>
            Home Screen and wrist.
          </h2>
          <p className={styles.lede}>
            Interactive widgets for quick-add from your Home Screen, plus an Apple Watch app
            and complication so your primary total is always within reach.
          </p>
        </div>
      </div>
    </section>
  )
}
