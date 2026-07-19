import { useCallback, useEffect, useState } from 'react'
import { CounterPage } from '@/numo/CounterPage'
import {
  createSampleCounters,
  formatAmount,
  type NumoCounter,
  type NumoEntry,
} from '@/numo/data'
import '@/numo/tokens.css'
import styles from './index.module.css'

type Props = {
  /** Starting counter id — defaults to protein (hero screenshot). */
  initialCounterId?: string
  className?: string
}

/**
 * Interactive Numo UI — designed to run inside the marketing site
 * (e.g. Hero phone frame) without replacing the page around it.
 */
export function NumoApp({ initialCounterId = 'protein', className }: Props) {
  const [counters, setCounters] = useState<NumoCounter[]>(() => createSampleCounters())
  const [activeId, setActiveId] = useState(initialCounterId)
  const [toast, setToast] = useState<string | null>(null)
  const [lastAddedId, setLastAddedId] = useState<string | null>(null)

  const active = counters.find((c) => c.id === activeId) ?? counters[0]

  useEffect(() => {
    if (!toast) return
    const id = window.setTimeout(() => setToast(null), 2800)
    return () => window.clearTimeout(id)
  }, [toast, lastAddedId])

  const updateActive = useCallback((recipe: (counter: NumoCounter) => NumoCounter) => {
    setCounters((prev) => prev.map((c) => (c.id === activeId ? recipe(c) : c)))
  }, [activeId])

  const onAdd = useCallback(
    (amount: number) => {
      const entry: NumoEntry = {
        id: crypto.randomUUID(),
        amount,
        at: new Date(),
      }
      updateActive((counter) => ({
        ...counter,
        entries: [entry, ...counter.entries],
      }))
      setLastAddedId(entry.id)
      setToast(`${formatAmount(amount)} added`)
    },
    [updateActive],
  )

  const onUndo = useCallback(() => {
    if (!lastAddedId) return
    updateActive((counter) => ({
      ...counter,
      entries: counter.entries.filter((e) => e.id !== lastAddedId),
    }))
    setLastAddedId(null)
    setToast(null)
  }, [lastAddedId, updateActive])

  const onDeleteEntry = useCallback(
    (id: string) => {
      updateActive((counter) => ({
        ...counter,
        entries: counter.entries.filter((e) => e.id !== id),
      }))
      if (id === lastAddedId) {
        setLastAddedId(null)
        setToast(null)
      }
    },
    [lastAddedId, updateActive],
  )

  const cycleCounter = useCallback(() => {
    setCounters((prev) => {
      const index = prev.findIndex((c) => c.id === activeId)
      const next = prev[(index + 1) % prev.length]
      setActiveId(next.id)
      setToast(null)
      setLastAddedId(null)
      return prev
    })
  }, [activeId])

  if (!active) return null

  return (
    <div className={[styles.root, 'numoTokens', className].filter(Boolean).join(' ')}>
      <div className={styles.statusBar} aria-hidden="true">
        <span>9:41</span>
        <span className={styles.island} />
        <span className={styles.statusEnd}>●●●</span>
      </div>
      <CounterPage
        counter={active}
        toast={toast}
        onAdd={onAdd}
        onUndo={onUndo}
        onDeleteEntry={onDeleteEntry}
        onOpenList={cycleCounter}
      />
    </div>
  )
}
