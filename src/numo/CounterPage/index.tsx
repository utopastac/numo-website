import type { CSSProperties } from 'react'
import { ProgressRing } from '@/numo/ProgressRing'
import { QuickAddGrid } from '@/numo/QuickAddGrid'
import { EntryLogPreview, counterTitle } from '@/numo/EntryLogPreview'
import type { NumoCounter } from '@/numo/data'
import {
  counterTotal,
  formatAmount,
  remainingLabel,
  ringProgress,
} from '@/numo/data'
import styles from './index.module.css'

type Props = {
  counter: NumoCounter
  toast: string | null
  onAdd: (amount: number) => void
  onUndo: () => void
  onDeleteEntry: (id: string) => void
  onOpenList?: () => void
}

export function CounterPage({
  counter,
  toast,
  onAdd,
  onUndo,
  onDeleteEntry,
  onOpenList,
}: Props) {
  const total = counterTotal(counter)
  const progress = ringProgress(counter, total)

  return (
    <div
      className={styles.root}
      style={
        {
          '--numo-surface': counter.surface,
          '--numo-ring-outline': counter.surface,
          '--numo-interactive-fg': counter.surface,
        } as CSSProperties
      }
    >
      <header className={styles.toolbar}>
        <button type="button" className={styles.iconBtn} aria-label="All counters" onClick={onOpenList}>
          <MenuIcon />
        </button>
        <h2 className={styles.title}>{counterTitle(counter)}</h2>
        <div className={styles.toolbarEnd}>
          <button type="button" className={styles.iconBtn} aria-label="History" disabled>
            <ChartIcon />
          </button>
          <button type="button" className={styles.iconBtn} aria-label="Settings" disabled>
            <SlidersIcon />
          </button>
        </div>
      </header>

      <div className={styles.header}>
        <div className={styles.hero}>
          <p className={styles.number}>{formatAmount(total)}</p>
          <p className={styles.subtitle}>{remainingLabel(counter, total)}</p>
        </div>
        <ProgressRing progress={progress} />
      </div>

      <div className={styles.quickAdd}>
        <QuickAddGrid presets={counter.presets} onAdd={onAdd} />
      </div>

      {toast && (
        <div className={styles.toast} role="status">
          <span>{toast}</span>
          <span className={styles.toastDivider} aria-hidden="true" />
          <button type="button" className={styles.toastUndo} onClick={onUndo} aria-label="Undo">
            ↩
          </button>
        </div>
      )}

      <EntryLogPreview entries={counter.entries} onDelete={onDeleteEntry} />
    </div>
  )
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}

function ChartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 19V10M12 19V5M19 19v-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}

function SlidersIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 8h8M17 8h2M5 16h2M11 16h8M13 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM9 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}
