/** Theme Colors collection from Numo design system (Light mode). */
export type ThemeSwatch = {
  name: string
  hex: string
}

export const THEME_PALETTES = {
  Muted: [
    { name: 'Periwinkle', hex: '#c9cfe0' },
    { name: 'Sand', hex: '#e8decf' },
    { name: 'Lime', hex: '#d6e0a8' },
    { name: 'Mist', hex: '#f5f5f7' },
    { name: 'Blush', hex: '#e5d4d6' },
    { name: 'Sage', hex: '#c7d6cc' },
    { name: 'Sky', hex: '#c2d6e3' },
    { name: 'Clay', hex: '#e0c4b2' },
    { name: 'Slate', hex: '#bfc7d4' },
    { name: 'Butter', hex: '#ebe3b8' },
  ],
  Neon: [
    { name: 'Hot Pink', hex: '#ff8cc7' },
    { name: 'Electric Cyan', hex: '#73f5fa' },
    { name: 'Acid Lime', hex: '#c7ff59' },
    { name: 'Plasma', hex: '#b88cff' },
    { name: 'Laser Orange', hex: '#ffad47' },
    { name: 'Volt Green', hex: '#66ff9e' },
    { name: 'Ultraviolet', hex: '#9e6bff' },
    { name: 'Shock Yellow', hex: '#fff54d' },
    { name: 'Neon Blue', hex: '#6bb2ff' },
    { name: 'Signal Red', hex: '#ff6b7a' },
  ],
  Metallic: [
    { name: 'Silver', hex: '#e0e3e8' },
    { name: 'Gold', hex: '#ebd694' },
    { name: 'Copper', hex: '#e5ad85' },
    { name: 'Bronze', hex: '#d6b885' },
    { name: 'Rose Gold', hex: '#ebc2c2' },
    { name: 'Gunmetal', hex: '#c2c7d1' },
    { name: 'Platinum', hex: '#e5e5ed' },
    { name: 'Champagne', hex: '#f0e0c2' },
    { name: 'Steel', hex: '#b2c2d6' },
    { name: 'Pewter', hex: '#d1ccc2' },
  ],
  Pastel: [
    { name: 'Cotton Candy', hex: '#fad6e5' },
    { name: 'Lavender', hex: '#e0d6fa' },
    { name: 'Mint Cream', hex: '#d1f5e0' },
    { name: 'Peach', hex: '#fae0cc' },
    { name: 'Baby Blue', hex: '#cce5fa' },
    { name: 'Buttercream', hex: '#faf2d6' },
    { name: 'Lilac', hex: '#ebd6f5' },
    { name: 'Coral Soft', hex: '#faccc7' },
    { name: 'Aqua Mist', hex: '#c7f0f0' },
    { name: 'Lemon Ice', hex: '#f5f5c7' },
  ],
  Clouds: [
    { name: 'Cumulus', hex: '#f7f7fa' },
    { name: 'Stratus', hex: '#e5e8ed' },
    { name: 'Dawn', hex: '#f5e5e0' },
    { name: 'Twilight', hex: '#e0dbf0' },
    { name: 'Overcast', hex: '#dbe0e5' },
    { name: 'Horizon', hex: '#d6e5f5' },
    { name: 'Fog', hex: '#ededeb' },
    { name: 'Sunset', hex: '#f2dbd1' },
    { name: 'Storm', hex: '#c7d1e0' },
    { name: 'Silver Lining', hex: '#ebedf2' },
  ],
  Ocean: [
    { name: 'Tide', hex: '#b8dbeb' },
    { name: 'Lagoon', hex: '#9ee0db' },
    { name: 'Seafoam', hex: '#c7ebdb' },
    { name: 'Coral Reef', hex: '#f0c7c2' },
    { name: 'Abyss', hex: '#adc2e0' },
    { name: 'Kelp', hex: '#bdd6b2' },
    { name: 'Pearl', hex: '#e5ebf0' },
    { name: 'Driftwood', hex: '#dbccb8' },
    { name: 'Harbor', hex: '#b2d1e5' },
    { name: 'Anemone', hex: '#e0bde5' },
  ],
  Forest: [
    { name: 'Moss', hex: '#c7dbad' },
    { name: 'Fern', hex: '#b2d6b8' },
    { name: 'Pine', hex: '#adccb8' },
    { name: 'Canopy', hex: '#d1e5bd' },
    { name: 'Bark', hex: '#d6c2ad' },
    { name: 'Lichen', hex: '#dbe5c7' },
    { name: 'Thicket', hex: '#b8c7a8' },
    { name: 'Mushroom', hex: '#e0d1c2' },
    { name: 'Ivy', hex: '#bddbc7' },
    { name: 'Soil', hex: '#d1bda3' },
  ],
  Ember: [
    { name: 'Flame', hex: '#f5b885' },
    { name: 'Amber', hex: '#f0cc7a' },
    { name: 'Rust', hex: '#e5ad8a' },
    { name: 'Coal', hex: '#c7c2bd' },
    { name: 'Cinder', hex: '#ebc7b2' },
    { name: 'Glow', hex: '#f5db9e' },
    { name: 'Smoke', hex: '#d6d1cc' },
    { name: 'Crimson Ash', hex: '#eba8a3' },
    { name: 'Hearth', hex: '#e5bd94' },
    { name: 'Sparks', hex: '#f5e0b8' },
  ],
  Desert: [
    { name: 'Dune', hex: '#f0e0c2' },
    { name: 'Adobe', hex: '#e5bd9e' },
    { name: 'Cactus', hex: '#c7dbb8' },
    { name: 'Ochre', hex: '#ebcc8a' },
    { name: 'Canyon', hex: '#e0ad94' },
    { name: 'Mirage', hex: '#d1e0e5' },
    { name: 'Sienna', hex: '#dbb894' },
    { name: 'Agave', hex: '#bdd6c7' },
    { name: 'Sandstone', hex: '#e8d6bd' },
    { name: 'Clay Pot', hex: '#d6b2a3' },
  ],
  Berry: [
    { name: 'Raspberry', hex: '#f0b8c7' },
    { name: 'Plum', hex: '#d6bddb' },
    { name: 'Mulberry', hex: '#dbb2d1' },
    { name: 'Cream', hex: '#f5ebe0' },
    { name: 'Currant', hex: '#e5adb2' },
    { name: 'Grape', hex: '#c7bde5' },
    { name: 'Rosehip', hex: '#f0ccd1' },
    { name: 'Brambles', hex: '#ccc7db' },
    { name: 'Boysenberry', hex: '#e0b8db' },
    { name: 'Jam', hex: '#ebc2bd' },
  ],
} as const satisfies Record<string, readonly ThemeSwatch[]>

export type ThemePaletteName = keyof typeof THEME_PALETTES

export const THEME_PILLS = Object.keys(THEME_PALETTES) as ThemePaletteName[]

export type ThemeListItem = {
  name: string
  value: string
}

/** Counter labels shown in the themes grid (colors come from the active palette). */
export const THEME_LIST_ITEMS: ThemeListItem[] = [
  { name: 'Calories', value: '2424' },
  { name: 'Workouts', value: '2424' },
  { name: 'Books', value: '20' },
  { name: 'Protein', value: '70' },
  { name: 'Water', value: '4' },
  { name: 'Vegetables', value: '2' },
  { name: 'Money', value: '2000' },
  { name: 'Coffee', value: '1' },
  { name: 'Alcohol', value: '5' },
]
