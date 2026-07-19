import { displayPresets, formatAmount } from '@/numo/data'
import styles from './index.module.css'

type Props = {
  presets: number[]
  onAdd: (amount: number) => void
}

export function QuickAddGrid({ presets, onAdd }: Props) {
  const values = displayPresets(presets)

  return (
    <div className={styles.root}>
      {values.map((value) => (
        <button
          key={value}
          type="button"
          className={styles.button}
          onClick={() => onAdd(value)}
        >
          {formatAmount(value)}
        </button>
      ))}
      <button
        type="button"
        className={styles.button}
        aria-label="Custom amount"
        onClick={() => {
          const raw = window.prompt('Amount to add')
          if (!raw) return
          const amount = Number(raw)
          if (!Number.isFinite(amount) || amount === 0) return
          onAdd(amount)
        }}
      >
        ···
      </button>
    </div>
  )
}
