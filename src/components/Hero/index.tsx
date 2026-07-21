import styles from './index.module.css'

export function Hero() {
  return (
    <section className={styles.root}>
      <div className={styles.frame}>
        <img
          className={styles.icon}
          src="/images/figma/hero-icon.png"
          alt=""
          width={152}
          height={152}
        />
        <div className={styles.copy}>
          <h1 className={styles.headline}>
            Track anything.
            <br />
            Count everything.
          </h1>
          <p className={styles.lede}>
            The simple, beautiful numbers tracker for your daily goals. Calories, water, savings,
            workouts, or coffee. Tailored to your rhythm.
          </p>
        </div>
      </div>
    </section>
  )
}
