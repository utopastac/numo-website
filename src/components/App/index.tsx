import { SiteHeader } from '@/components/SiteHeader'
import { CounterMosaic } from '@/components/CounterMosaic'
import { Hero } from '@/components/Hero'
import { PhoneShowcase } from '@/components/PhoneShowcase'
import { Clarity } from '@/components/Clarity'
import { Themes } from '@/components/Themes'
import { Features } from '@/components/Features'
import { FinalCTA } from '@/components/FinalCTA'
import { SiteFooter } from '@/components/SiteFooter'
import { ScrollRing } from '@/components/ScrollRing'
import styles from './index.module.css'

export function App() {
  return (
    <div className={styles.root}>
      <SiteHeader />
      <main className={styles.main}>
        <CounterMosaic />
        <Hero />
        <PhoneShowcase />
        <Clarity />
        <Themes />
        <Features />
        <FinalCTA />
        <SiteFooter />
      </main>
      <ScrollRing />
    </div>
  )
}
