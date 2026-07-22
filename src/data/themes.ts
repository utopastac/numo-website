/** Theme Colors collection from Numo design system (Light + Dark modes). */
export type ThemeSwatch = {
  name: string
  /** Light-mode card background. */
  hex: string
  /** Dark-mode counterpart — used for ring fill and card content. */
  dark: string
}

export const THEME_PALETTES = {
  Muted: [
    { name: 'Periwinkle', hex: '#c9cfe0', dark: '#292b3d' },
    { name: 'Sand', hex: '#e8decf', dark: '#3d362b' },
    { name: 'Lime', hex: '#d6e0a8', dark: '#33381f' },
    { name: 'Mist', hex: '#f5f5f7', dark: '#38383d' },
    { name: 'Blush', hex: '#e5d4d6', dark: '#42292e' },
    { name: 'Sage', hex: '#c7d6cc', dark: '#24382e' },
    { name: 'Sky', hex: '#c2d6e3', dark: '#1f3342' },
    { name: 'Clay', hex: '#e0c4b2', dark: '#472e24' },
    { name: 'Slate', hex: '#bfc7d4', dark: '#2e303b' },
    { name: 'Butter', hex: '#ebe3b8', dark: '#3d381f' },
  ],
  Neon: [
    { name: 'Hot Pink', hex: '#ff8cc7', dark: '#6b0f3d' },
    { name: 'Electric Cyan', hex: '#73f5fa', dark: '#0a4d57' },
    { name: 'Acid Lime', hex: '#c7ff59', dark: '#2e570a' },
    { name: 'Plasma', hex: '#b88cff', dark: '#42146b' },
    { name: 'Laser Orange', hex: '#ffad47', dark: '#662e0a' },
    { name: 'Volt Green', hex: '#66ff9e', dark: '#0a5729' },
    { name: 'Ultraviolet', hex: '#9e6bff', dark: '#330f66' },
    { name: 'Shock Yellow', hex: '#fff54d', dark: '#574d0a' },
    { name: 'Neon Blue', hex: '#6bb2ff', dark: '#0f296b' },
    { name: 'Signal Red', hex: '#ff6b7a', dark: '#6b0f1a' },
  ],
  Metallic: [
    { name: 'Silver', hex: '#e0e3e8', dark: '#474a52' },
    { name: 'Gold', hex: '#ebd694', dark: '#57421a' },
    { name: 'Copper', hex: '#e5ad85', dark: '#57291a' },
    { name: 'Bronze', hex: '#d6b885', dark: '#4d331a' },
    { name: 'Rose Gold', hex: '#ebc2c2', dark: '#572e33' },
    { name: 'Gunmetal', hex: '#c2c7d1', dark: '#292e38' },
    { name: 'Platinum', hex: '#e5e5ed', dark: '#3d3d47' },
    { name: 'Champagne', hex: '#f0e0c2', dark: '#4d3d24' },
    { name: 'Steel', hex: '#b2c2d6', dark: '#1f293d' },
    { name: 'Pewter', hex: '#d1ccc2', dark: '#38332e' },
  ],
  Pastel: [
    { name: 'Cotton Candy', hex: '#fad6e5', dark: '#4d2938' },
    { name: 'Lavender', hex: '#e0d6fa', dark: '#382952' },
    { name: 'Mint Cream', hex: '#d1f5e0', dark: '#1f4733' },
    { name: 'Peach', hex: '#fae0cc', dark: '#523324' },
    { name: 'Baby Blue', hex: '#cce5fa', dark: '#1f3352' },
    { name: 'Buttercream', hex: '#faf2d6', dark: '#4d421f' },
    { name: 'Lilac', hex: '#ebd6f5', dark: '#42294d' },
    { name: 'Coral Soft', hex: '#faccc7', dark: '#522424' },
    { name: 'Aqua Mist', hex: '#c7f0f0', dark: '#1a4247' },
    { name: 'Lemon Ice', hex: '#f5f5c7', dark: '#47471f' },
  ],
  Clouds: [
    { name: 'Cumulus', hex: '#f7f7fa', dark: '#33363d' },
    { name: 'Stratus', hex: '#e5e8ed', dark: '#383b42' },
    { name: 'Dawn', hex: '#f5e5e0', dark: '#472e2e' },
    { name: 'Twilight', hex: '#e0dbf0', dark: '#2e2947' },
    { name: 'Overcast', hex: '#dbe0e5', dark: '#33383d' },
    { name: 'Horizon', hex: '#d6e5f5', dark: '#1f2e47' },
    { name: 'Fog', hex: '#ededeb', dark: '#3d3d3b' },
    { name: 'Sunset', hex: '#f2dbd1', dark: '#4d2924' },
    { name: 'Storm', hex: '#c7d1e0', dark: '#242938' },
    { name: 'Silver Lining', hex: '#ebedf2', dark: '#383b42' },
  ],
  Ocean: [
    { name: 'Tide', hex: '#b8dbeb', dark: '#142e42' },
    { name: 'Lagoon', hex: '#9ee0db', dark: '#0f3d3d' },
    { name: 'Seafoam', hex: '#c7ebdb', dark: '#1a4233' },
    { name: 'Coral Reef', hex: '#f0c7c2', dark: '#522429' },
    { name: 'Abyss', hex: '#adc2e0', dark: '#141f47' },
    { name: 'Kelp', hex: '#bdd6b2', dark: '#243d1f' },
    { name: 'Pearl', hex: '#e5ebf0', dark: '#333842' },
    { name: 'Driftwood', hex: '#dbccb8', dark: '#423324' },
    { name: 'Harbor', hex: '#b2d1e5', dark: '#1a2e47' },
    { name: 'Anemone', hex: '#e0bde5', dark: '#421f47' },
  ],
  Forest: [
    { name: 'Moss', hex: '#c7dbad', dark: '#243d1a' },
    { name: 'Fern', hex: '#b2d6b8', dark: '#1a4224' },
    { name: 'Pine', hex: '#adccb8', dark: '#1a3324' },
    { name: 'Canopy', hex: '#d1e5bd', dark: '#29421a' },
    { name: 'Bark', hex: '#d6c2ad', dark: '#422e1f' },
    { name: 'Lichen', hex: '#dbe5c7', dark: '#334224' },
    { name: 'Thicket', hex: '#b8c7a8', dark: '#24331a' },
    { name: 'Mushroom', hex: '#e0d1c2', dark: '#473329' },
    { name: 'Ivy', hex: '#bddbc7', dark: '#1a3d29' },
    { name: 'Soil', hex: '#d1bda3', dark: '#3d291a' },
  ],
  Ember: [
    { name: 'Flame', hex: '#f5b885', dark: '#5c240f' },
    { name: 'Amber', hex: '#f0cc7a', dark: '#57380f' },
    { name: 'Rust', hex: '#e5ad8a', dark: '#522414' },
    { name: 'Coal', hex: '#c7c2bd', dark: '#292424' },
    { name: 'Cinder', hex: '#ebc7b2', dark: '#4d291f' },
    { name: 'Glow', hex: '#f5db9e', dark: '#573d14' },
    { name: 'Smoke', hex: '#d6d1cc', dark: '#332e2e' },
    { name: 'Crimson Ash', hex: '#eba8a3', dark: '#571a1a' },
    { name: 'Hearth', hex: '#e5bd94', dark: '#472914' },
    { name: 'Sparks', hex: '#f5e0b8', dark: '#52381a' },
  ],
  Desert: [
    { name: 'Dune', hex: '#f0e0c2', dark: '#4d3d1f' },
    { name: 'Adobe', hex: '#e5bd9e', dark: '#52291a' },
    { name: 'Cactus', hex: '#c7dbb8', dark: '#243d1f' },
    { name: 'Ochre', hex: '#ebcc8a', dark: '#573814' },
    { name: 'Canyon', hex: '#e0ad94', dark: '#4d1f1a' },
    { name: 'Mirage', hex: '#d1e0e5', dark: '#1f333d' },
    { name: 'Sienna', hex: '#dbb894', dark: '#47291a' },
    { name: 'Agave', hex: '#bdd6c7', dark: '#1a382e' },
    { name: 'Sandstone', hex: '#e8d6bd', dark: '#423324' },
    { name: 'Clay Pot', hex: '#d6b2a3', dark: '#47241f' },
  ],
  Berry: [
    { name: 'Raspberry', hex: '#f0b8c7', dark: '#571a29' },
    { name: 'Plum', hex: '#d6bddb', dark: '#3d1f47' },
    { name: 'Mulberry', hex: '#dbb2d1', dark: '#471a3d' },
    { name: 'Cream', hex: '#f5ebe0', dark: '#42382e' },
    { name: 'Currant', hex: '#e5adb2', dark: '#521a24' },
    { name: 'Grape', hex: '#c7bde5', dark: '#291f4d' },
    { name: 'Rosehip', hex: '#f0ccd1', dark: '#522429' },
    { name: 'Brambles', hex: '#ccc7db', dark: '#2e2942' },
    { name: 'Boysenberry', hex: '#e0b8db', dark: '#421a42' },
    { name: 'Jam', hex: '#ebc2bd', dark: '#4d1f1f' },
  ],
} as const satisfies Record<string, readonly ThemeSwatch[]>

export type ThemePaletteName = keyof typeof THEME_PALETTES

export const THEME_PILLS = Object.keys(THEME_PALETTES) as ThemePaletteName[]

/** Cards shown in the themes colour grid (5×2). */
export const THEME_GRID_COUNT = 10

export function themeTrackColor(dark: string) {
  return `color-mix(in srgb, ${dark} 20%, transparent)`
}
