export type ThemeKey =
  | 'sky'
  | 'lavender'
  | 'steel'
  | 'sand'
  | 'sage'
  | 'peach'
  | 'white'
  | 'butter'
  | 'pink'
  | 'mint'

export type MosaicCounter = {
  name: string
  unit: string
  value: string
  remaining: string
  progress: number
  theme: ThemeKey
}

export const MOSAIC_COUNTERS: MosaicCounter[] = [
  { name: 'Calories', unit: 'kCal', value: '70', remaining: '520 remaining', progress: 0.12, theme: 'sky' },
  { name: 'Workouts', unit: 'sessions', value: '12', remaining: '8 to go', progress: 0.6, theme: 'lavender' },
  { name: 'Books', unit: 'read', value: '20', remaining: '12 to go', progress: 0.62, theme: 'steel' },
  { name: 'Protein', unit: 'g', value: '70', remaining: '80 to go', progress: 0.46, theme: 'sand' },
  { name: 'Water', unit: 'glasses', value: '4', remaining: '4 to go', progress: 0.5, theme: 'sage' },
  { name: 'Vegetables', unit: 'servings', value: '2', remaining: '4 to go', progress: 0.33, theme: 'peach' },
  { name: 'Money', unit: '$', value: '2000', remaining: '520 remaining', progress: 0.8, theme: 'white' },
  { name: 'Coffee', unit: 'cups', value: '1', remaining: '2 remaining', progress: 0.33, theme: 'butter' },
]

export const FEATURE_SLIDES = [
  {
    id: 'quick-add',
    image: '/images/figma/feature-quick-add.png',
    tone: 'sky' as const,
    body: 'Log recurring values in a single tap. Customize your grid with values of 5, 10, 25, 100 or custom amounts. Keep track effortlessly.',
  },
  {
    id: 'history',
    image: '/images/figma/feature-history.png',
    tone: 'mint' as const,
    body: 'Visualise your journey over days, weeks, or months. Review progress curves, view history entries, and easily edit logs with simple swipe gestures.',
  },
  {
    id: 'dashboard',
    image: '/images/figma/feature-dashboard.png',
    tone: 'white' as const,
    body: 'Organise your dashboard with soft pastel tones of steel, sage, peach, sky or butter. Toggle compact list mode to see dozens of metrics in a glance.',
  },
  {
    id: 'limits',
    image: '/images/figma/feature-limits.png',
    tone: 'butter' as const,
    body: 'Set soft daily or weekly limits. Choose auto-reset intervals or trigger countdowns instead of counting up. Track precisely the way you want.',
  },
] as const
