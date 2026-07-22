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
        <h1 className={styles.lede}>
          <span className={styles.brand}>Numo</span> is a simple, beautiful numbers tracker for
          your daily goals. Calories, water, savings, workouts, or coffee. Tailored to your rhythm.
        </h1>
      </div>
    </section>
  )
}
