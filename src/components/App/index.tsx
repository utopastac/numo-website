import { useState } from 'react'
import { SiteHeader } from '@/components/SiteHeader'
import { CounterMosaic } from '@/components/CounterMosaic'
import { Hero } from '@/components/Hero'
import { PhoneShowcase } from '@/components/PhoneShowcase'
import { Clarity } from '@/components/Clarity'
import { WatchShowcase } from '@/components/WatchShowcase'
import { Themes } from '@/components/Themes'
import { Features } from '@/components/Features'
import { Gallery } from '@/components/Gallery'
import { FinalCTA } from '@/components/FinalCTA'
import { SiteFooter } from '@/components/SiteFooter'
import { ScrollRing } from '@/components/ScrollRing'
import type { ThemePaletteName } from '@/data/themes'
import styles from './index.module.css'

export function App() {
  const [palette, setPalette] = useState<ThemePaletteName>('Muted')

  return (
    <div className={styles.root}>
      <SiteHeader />
      <main className={styles.main}>
        <CounterMosaic palette={palette} />
        <Hero />
        <PhoneShowcase />
        <Clarity />
        <WatchShowcase />
        <Themes selected={palette} onSelect={setPalette} />
        <Features />
        <FinalCTA />
        <Gallery />
        <SiteFooter />
      </main>
      <ScrollRing />
    </div>
  )
}
