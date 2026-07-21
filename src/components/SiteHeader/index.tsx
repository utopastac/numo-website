import { useEffect, useState } from 'react'
import { Button } from '@/components/Button'
import styles from './index.module.css'

export function SiteHeader() {
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setCompact(window.scrollY > 16)
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
