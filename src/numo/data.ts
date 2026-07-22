export type GoalDirection = 'countUp' | 'countDown'

export type NumoEntry = {
  id: string
  amount: number
  at: Date
}

export type NumoCounter = {
  id: string
  name: string
  unit: string
  goal: number
  direction: GoalDirection
  presets: number[]
  /** Palette CSS color (light background) */
  surface: string
  entries: NumoEntry[]
}

export const PALETTE = {
  sky: '#bccfe6',
  sand: '#d9cebd',
  mint: '#c8deb4',
  lavender: '#c4bfda',
  steel: '#b4bcce',
  sage: '#bdd4be',
  peach: '#deb5a8',
  white: '#f2f0ed',
  butter: '#ddd9aa',
  pink: '#e8b4be',
} as const

export const PRESETS = {
  calories: [5, 10, 25, 50, 100, 200, 500, 1000, 50],
  protein: [5, 10, 15, 20, 25, 30, 40, 50, 100],
  money: [1, 2, 5, 10, 20, 25, 50, 75, 100],
} as const

function entry(id: string, amount: number, minutesAgo: number): NumoEntry {
  return {
    id,
    amount,
    at: new Date(Date.now() - minutesAgo * 60_000),
  }
}

/** Seed matching the protein marketing screenshot vibe. */
export function createSampleCounters(): NumoCounter[] {
  return [
    {
      id: 'calories',
      name: 'Calories',
      unit: 'kcal',
      goal: 2200,
      direction: 'countDown',
      presets: [...PRESETS.calories],
      surface: PALETTE.sky,
      entries: [
        entry('c1', 1000, 180),
        entry('c2', 500, 120),
        entry('c3', 400, 60),
        entry('c4', 124, 30),
      ],
    },
    {
      id: 'protein',
      name: 'Protein',
      unit: 'g',
      goal: 150,
      direction: 'countUp',
      presets: [...PRESETS.protein],
      surface: PALETTE.sand,
      entries: [
        entry('p1', 10, 2),
        entry('p2', 20, 45),
        entry('p3', 15, 120),
        entry('p4', 50, 200),
      ],
    },
    {
      id: 'money',
      name: 'Money',
      unit: '$',
      goal: 3000,
      direction: 'countDown',
      presets: [...PRESETS.money],
      surface: PALETTE.mint,
      entries: [entry('m1', 900, 400)],
    },
  ]
}

export function counterTotal(counter: NumoCounter): number {
  return counter.entries.reduce((sum, e) => sum + e.amount, 0)
}

export function remainingLabel(counter: NumoCounter, total: number): string {
  const delta = counter.goal - total
  if (delta === 0) return 'On target'
  if (counter.direction === 'countDown') {
    if (delta > 0) return `${formatAmount(delta)} remaining`
    return `${formatAmount(Math.abs(delta))} over target`
  }
  if (delta > 0) return `${formatAmount(delta)} to go`
  return `${formatAmount(Math.abs(delta))} over target`
}

export function ringProgress(counter: NumoCounter, total: number): number {
  if (counter.goal <= 0) return 0
  const consumed = Math.min(Math.max(total / counter.goal, 0), 1)
  // Count-down: full when nothing is used, empties as remaining drops.
  if (counter.direction === 'countDown') return 1 - consumed
  return consumed
}

export function formatAmount(value: number): string {
  if (Number.isInteger(value)) return String(value)
  return value.toFixed(1).replace(/\.0$/, '')
}

export function formatEntryTime(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
    .format(date)
    .replace(',', ' at')
}

/** Sorted unique presets, max 9 — mirrors QuickAddConfiguration.filledPresets. */
export function displayPresets(presets: number[]): number[] {
  const unique = [...new Set(presets)].sort((a, b) => a - b)
  return unique.slice(0, 9)
}
