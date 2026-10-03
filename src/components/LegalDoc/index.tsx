import { useEffect, type ReactNode } from 'react'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import styles from './index.module.css'

type Props = {
  title: string
  description: string
  children: ReactNode
}

export function LegalDoc({ title, description, children }: Props) {
  useEffect(() => {
    document.title = title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', description)
  }, [title, description])

  return (
    <div className={styles.root}>
      <SiteHeader />
      <main className={styles.main}>
        <article className={styles.doc}>{children}</article>
        <SiteFooter />
      </main>
    </div>
  )
}
