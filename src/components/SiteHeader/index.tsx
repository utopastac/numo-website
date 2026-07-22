import { useEffect, useState } from 'react'
import { Button } from '@/components/Button'
import styles from './index.module.css'

export function SiteHeader() {
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    let compact = false

    const onScroll = () => {
      const y = window.scrollY
      // Hysteresis so threshold flicker doesn't cancel the ease mid-way.
      const next = compact ? y > 4 : y > 24
      if (next === compact) return
      compact = next
      setCompact(next)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={styles.root} data-compact={compact ? 'true' : undefined}>
      <div className={styles.inner}>
        <img
          className={styles.wordmark}
          src="/images/logo-light.png"
          alt="numo"
          width={111}
          height={24}
        />
        <Button className={styles.cta} />
      </div>
    </header>
  )
}
