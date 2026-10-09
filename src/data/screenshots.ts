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

export const GALLERY_SLIDES = [
  {
    id: 'list-normal',
    image: '/images/list-normal.png',
    alt: 'Dayring dashboard with counter list',
  },
  {
    id: 'compact',
    image: '/images/compact.png',
    alt: 'Dayring compact counter view',
  },
  {
    id: 'list-compact',
    image: '/images/list-compact.png',
    alt: 'Dayring compact list of counters',
  },
  {
    id: 'history',
    image: '/images/history.png',
    alt: 'Dayring history and progress chart',
  },
  {
    id: 'settings',
    image: '/images/settings.png',
    alt: 'Dayring settings screen',
  },
  {
    id: 'protein',
    image: '/images/protein.png',
    alt: 'Dayring protein counter detail',
  },
] as const

/** Apple Watch app screenshots. */
export const WATCH_SCREENSHOTS = [
  '/images/watch-1.png',
  '/images/watch-2.png',
  '/images/watch-3.png',
  '/images/watch-4.png',
] as const
