import { Button } from '@/components/Button'
import styles from './index.module.css'

export function FinalCTA() {
  return (
    <section className={styles.root} aria-labelledby="cta-heading">
      <div className={styles.frame}>
        <div className={styles.panel}>
          <div className={styles.copy}>
            <img
              className={styles.icon}
              src="/images/figma/hero-icon.png"
              alt=""
              width={104}
              height={104}
            />
            <h2 id="cta-heading" className={styles.heading}>
              Take control of your numbers
            </h2>
            <p className={styles.lede}>
              No subscriptions. No tracking scripts. No ads. Just a beautiful canvas to count the
              things that matter to you.
            </p>
          </div>
          <Button />
        </div>
      </div>
    </section>
  )
}
