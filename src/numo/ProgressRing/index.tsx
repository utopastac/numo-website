import styles from './index.module.css'

type Props = {
  progress: number
  size?: number
  stroke?: number
  trackColor?: string
  fillColor?: string
  outlineColor?: string
  /** Soft stroke-dashoffset tween. Off for scroll-linked progress. */
  animated?: boolean
}

/** Mirrors SizeToken.Ring.overfillOutlineWidth (2). */
const OUTLINE_WIDTH = 2

/** Mirrors SizeToken.Ring.display (96) / displayStroke (24). */
export function ProgressRing({
  progress,
  size = 96,
  stroke = 24,
  trackColor = 'var(--numo-ring-track)',
  fillColor = 'var(--numo-ring-fill)',
  outlineColor = 'var(--numo-ring-outline)',
  animated = true,
}: Props) {
  const center = size / 2
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const clamped = Math.min(Math.max(progress, 0), 1)
  const offset = circumference * (1 - clamped)
  const tipRadius = stroke / 2

  // Same angle convention as iOS RingTipHalo: 0° = east, positive = clockwise on screen.
  const sweepDegrees = clamped >= 0.999 ? 360 - 0.001 : clamped * 360
  const tipAngleRad = ((-90 + sweepDegrees) * Math.PI) / 180
  const tipX = center + radius * Math.cos(tipAngleRad)
  const tipY = center + radius * Math.sin(tipAngleRad)
  const haloRadius = tipRadius + OUTLINE_WIDTH

  // Leading semicircle: diameter along the radial axis, arc through clockwise travel.
  const haloStartX = tipX + haloRadius * Math.cos(tipAngleRad)
  const haloStartY = tipY + haloRadius * Math.sin(tipAngleRad)
  const haloEndX = tipX + haloRadius * Math.cos(tipAngleRad + Math.PI)
  const haloEndY = tipY + haloRadius * Math.sin(tipAngleRad + Math.PI)
  const haloPath = `M ${haloStartX} ${haloStartY} A ${haloRadius} ${haloRadius} 0 0 1 ${haloEndX} ${haloEndY} Z`

  return (
    <svg
      className={styles.root}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
    >
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke={trackColor}
        strokeWidth={stroke}
      />
      {clamped > 0 && (
        <circle
          className={animated ? styles.fill : undefined}
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={fillColor}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${center} ${center})`}
        />
      )}
      {clamped > 0 && (
        <g>
          <path d={haloPath} fill={outlineColor} />
          <circle cx={tipX} cy={tipY} r={tipRadius} fill={fillColor} />
        </g>
      )}
    </svg>
  )
}
