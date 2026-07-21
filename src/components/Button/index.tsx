import styles from './index.module.css'

type Props = {
  label?: string
  className?: string
}

export function Button({ label = 'Get the App', className }: Props) {
  return (
    <span className={[styles.root, className].filter(Boolean).join(' ')} aria-disabled="true">
      {label}
    </span>
  )
}
