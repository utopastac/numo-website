import styles from './index.module.css'

const FEATURES = [
  {
    title: 'One-tap logging',
    body: 'Custom quick-add presets and a keypad for anything in between. Rapid taps batch into a single entry.',
  },
  {
    title: 'Goals that fit',
    body: 'Count up to a target or down from a budget. Daily, weekly, or monthly resets with a clear progress ring.',
  },
  {
    title: 'Private by design',
    body: 'Everything stays on your devices. No accounts, no cloud sync, no HealthKit — just local counters you control.',
  },
]

export function Features() {
  return (
    <section className={styles.root} aria-labelledby="features-heading">
      <div className={styles.frame}>
        <div className={styles.intro}>
          <h2 id="features-heading" className={styles.heading}>
            Built for the numbers you actually care about.
          </h2>
          <p className={styles.lede}>
            Multi-counter pager, history charts, templates for calories, protein, money, and water —
            or start blank and make it yours.
          </p>
        </div>

        <ul className={styles.list}>
          {FEATURES.map((feature) => (
            <li key={feature.title} className={styles.item}>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.body}>{feature.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
