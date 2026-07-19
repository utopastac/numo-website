import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Companion } from '@/components/Companion'
import { SiteFooter } from '@/components/SiteFooter'
import styles from './index.module.css'

export function App() {
  return (
    <div className={styles.root}>
      <Hero />
      <Features />
      <Companion />
      <SiteFooter />
    </div>
  )
}
