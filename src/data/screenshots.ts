/** Hero still — fallback / reduced-motion. */
export const HERO_POSTER = '/images/hero-poster.jpg'

/** Hero screen recording — compressed H.264 for autoplay. */
export const HERO_VIDEO = '/images/hero.mp4'

/** Watch demo still — fallback / reduced-motion. */
export const WATCH_POSTER = '/images/watch-poster.png'

/** Watch screen recording — compressed H.264 for autoplay. */
export const WATCH_VIDEO = '/images/watch.mp4'

/** Remaining iPhone app screenshots for the gallery (no captions). */
export const GALLERY_SCREENSHOTS = [
  '/images/list-normal.png',
  '/images/compact.png',
  '/images/list-compact.png',
  '/images/history.png',
  '/images/settings.png',
  '/images/protein.png',
] as const

export type GalleryTone =
  | 'sky'
  | 'lavender'
  | 'sage'
  | 'sand'
  | 'peach'
  | 'mint'
  | 'butter'
  | 'steel'
  | 'pink'
  | 'white'

export const GALLERY_SLIDES = [
  {
    id: 'list-normal',
    image: '/images/list-normal.png',
    tone: 'sky' as const,
    alt: 'Numo dashboard with counter list',
  },
  {
    id: 'compact',
    image: '/images/compact.png',
    tone: 'lavender' as const,
    alt: 'Numo compact counter view',
  },
  {
    id: 'list-compact',
    image: '/images/list-compact.png',
    tone: 'sage' as const,
    alt: 'Numo compact list of counters',
  },
  {
    id: 'history',
    image: '/images/history.png',
    tone: 'sand' as const,
    alt: 'Numo history and progress chart',
  },
  {
    id: 'settings',
    image: '/images/settings.png',
    tone: 'peach' as const,
    alt: 'Numo settings screen',
  },
  {
    id: 'protein',
    image: '/images/protein.png',
    tone: 'mint' as const,
    alt: 'Numo protein counter detail',
  },
] as const

/** Apple Watch app screenshots. */
export const WATCH_SCREENSHOTS = [
  '/images/watch-1.png',
  '/images/watch-2.png',
  '/images/watch-3.png',
  '/images/watch-4.png',
] as const
