import type { LucideIcon } from 'lucide-react'
import { Lock, Plus, Target } from 'lucide-react'
import styles from './index.module.css'

const FEATURES: {
  title: string
  body: string
  Icon: LucideIcon
  tone: 'sage' | 'sand' | 'sky'
}[] = [
  {
    title: 'One tap logging',
    body: 'Custom quick add presets and a keypad for anything in between. Rapid taps batch into a single entry.',
    Icon: Plus,
    tone: 'sage',
  },
  {
    title: 'Goals that fit',
    body: 'Count up to a target or down from a budget. Daily, weekly, or monthly resets with a clear progress ring.',
    Icon: Target,
    tone: 'sand',
  },
  {
    title: 'Private by design',
    body: 'Everything stays on your devices. No accounts, no cloud sync, no HealthKit, just local counters you control.',
    Icon: Lock,
    tone: 'sky',
  },
]

export function Features() {
  return (
    <section className={styles.root} aria-labelledby="features-heading">
      <div className={styles.frame}>
        <div className={styles.intro}>
          <h2 id="features-heading" className={styles.heading}>
            Built for the numbers you actually care about
          </h2>
          <p className={styles.lede}>
            Multi-counter pager, history charts, templates for calories, protein, money, and water,
            or start blank and make it yours.
          </p>
        </div>

        <ul className={styles.list}>
          {FEATURES.map(({ title, body, Icon, tone }) => (
            <li key={title} className={`${styles.item} ${styles[tone]}`}>
              <div className={styles.header}>
                <Icon className={styles.icon} aria-hidden="true" strokeWidth={1.75} />
                <h3 className={styles.title}>{title}</h3>
              </div>
              <p className={styles.body}>{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
