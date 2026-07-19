import styles from './index.module.css'

type Props = {
  progress: number
  size?: number
  stroke?: number
  trackColor?: string
  fillColor?: string
  outlineColor?: string
}

/** Mirrors SizeToken.Ring.display (96) / displayStroke (24). */
export function ProgressRing({
  progress,
  size = 96,
  stroke = 24,
  trackColor = 'var(--numo-ring-track)',
  fillColor = 'var(--numo-ring-fill)',
  outlineColor = 'var(--numo-ring-outline)',
}: Props) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const clamped = Math.min(Math.max(progress, 0), 1)
  const offset = circumference * (1 - clamped)
  const tipAngle = -90 + clamped * 360
  const tipRadius = stroke / 2

  return (
    <svg
      className={styles.root}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={trackColor}
        strokeWidth={stroke}
      />
      {clamped > 0 && (
        <circle
          className={styles.fill}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={fillColor}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      )}
      {clamped > 0 && (
        <g transform={`rotate(${tipAngle} ${size / 2} ${size / 2})`}>
          <circle
            cx={size / 2}
            cy={stroke / 2}
            r={tipRadius + 2}
            fill={outlineColor}
          />
          <circle cx={size / 2} cy={stroke / 2} r={tipRadius} fill={fillColor} />
        </g>
      )}
    </svg>
  )
}
