import type { NumoCounter, NumoEntry } from '@/numo/data'
import { formatAmount, formatEntryTime } from '@/numo/data'
import styles from './index.module.css'

type Props = {
  entries: NumoEntry[]
  onDelete: (id: string) => void
  onOpenAll?: () => void
}

const PREVIEW_LIMIT = 5

export function EntryLogPreview({ entries, onDelete, onOpenAll }: Props) {
  const preview = entries.slice(0, PREVIEW_LIMIT)

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {preview.map((entry) => (
          <li key={entry.id} className={styles.row}>
            <span className={styles.amount}>{formatAmount(entry.amount)}</span>
            <span className={styles.time}>{formatEntryTime(entry.at)}</span>
            <button
              type="button"
              className={styles.delete}
              aria-label="Delete entry"
              onClick={() => onDelete(entry.id)}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
      <button type="button" className={styles.all} onClick={onOpenAll}>
        All entries
        <span className={styles.allIcon} aria-hidden="true">
          ↗
        </span>
      </button>
    </div>
  )
}

export function counterTitle(counter: NumoCounter): string {
  return `${counter.name} / ${counter.unit}`
}
