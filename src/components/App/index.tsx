import { SiteHeader } from '@/components/SiteHeader'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Gallery } from '@/components/Gallery'
import { Companion } from '@/components/Companion'
import { SiteFooter } from '@/components/SiteFooter'
import styles from './index.module.css'

export function App() {
  return (
    <div className={styles.root}>
      <SiteHeader />
      <div className={styles.main}>
        <Hero />
        <Features />
        <Companion />
        <Gallery />
        <SiteFooter />
      </div>
    </div>
  )
}
