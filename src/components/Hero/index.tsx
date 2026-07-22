import styles from './index.module.css'

export function Hero() {
  return (
    <section className={styles.root}>
      <div className={styles.frame}>
        <img
          className={styles.icon}
          src="/images/figma/hero-icon.png"
          alt=""
          width={104}
          height={104}
        />
        <div className={styles.copy}>
          <h1 className={styles.headline}>
            Track anything,
            <br />
            count everything
          </h1>
          <div className={styles.ledeWrap}>
            <p className={styles.lede}>
              A simple, beautiful numbers tracker for your daily goals. Calories, water, savings,
              workouts, or coffee. Tailored to your rhythm.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
