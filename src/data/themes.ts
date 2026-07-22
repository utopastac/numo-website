/** Theme Colors collection from Numo design system (Light + Dark modes). */
export type ThemeAppearance = 'adaptive' | 'alwaysDark' | 'alwaysLight'

export type ThemeSwatch = {
  name: string
  /** Light-mode card background / tint companion for always-dark packs. */
  hex: string
  /** Dark-mode counterpart — ring fill and card content (or fill mid for always-dark). */
  dark: string
  /** CSS linear-gradient (top-left → bottom-right), matching iOS light fills. */
  lightGradient?: string
  /** CSS linear-gradient (top-left → bottom-right), matching iOS dark fills. */
  darkGradient?: string
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
  Gradient: [
    { name: 'Rose', hex: '#f5c4bf', dark: '#591f21', lightGradient: 'linear-gradient(to bottom right, #f5c7d1, #f5c4bf, #f5c2ad)', darkGradient: 'linear-gradient(to bottom right, #571a29, #591f21, #5c241a)' },
    { name: 'Coral', hex: '#f5cfa6', dark: '#593017', lightGradient: 'linear-gradient(to bottom right, #f5c2ad, #f5cfa6, #f5db9e)', darkGradient: 'linear-gradient(to bottom right, #5c241a, #593017, #573d14)' },
    { name: 'Amber', hex: '#e8e5a1', dark: '#454214', lightGradient: 'linear-gradient(to bottom right, #f5db9e, #e8e5a1, #dbf0a3)', darkGradient: 'linear-gradient(to bottom right, #573d14, #454214, #334714)' },
    { name: 'Chartreuse', hex: '#c7edb8', dark: '#244721', lightGradient: 'linear-gradient(to bottom right, #dbf0a3, #c7edb8, #b3ebcc)', darkGradient: 'linear-gradient(to bottom right, #334714, #244721, #14472e)' },
    { name: 'Mint', hex: '#b0e8db', dark: '#12453b', lightGradient: 'linear-gradient(to bottom right, #b3ebcc, #b0e8db, #ade6eb)', darkGradient: 'linear-gradient(to bottom right, #14472e, #12453b, #0f4247)' },
    { name: 'Aqua', hex: '#b0def0', dark: '#12364d', lightGradient: 'linear-gradient(to bottom right, #ade6eb, #b0def0, #b3d6f5)', darkGradient: 'linear-gradient(to bottom right, #0f4247, #12364d, #142952)' },
    { name: 'Sky', hex: '#bacff5', dark: '#1c2454', lightGradient: 'linear-gradient(to bottom right, #b3d6f5, #bacff5, #c2c7f5)', darkGradient: 'linear-gradient(to bottom right, #142952, #1c2454, #241f57)' },
    { name: 'Indigo', hex: '#d1c4f5', dark: '#331c54', lightGradient: 'linear-gradient(to bottom right, #c2c7f5, #d1c4f5, #e0c2f5)', darkGradient: 'linear-gradient(to bottom right, #241f57, #331c54, #421a52)' },
    { name: 'Violet', hex: '#e8bfed', dark: '#4a174d', lightGradient: 'linear-gradient(to bottom right, #e0c2f5, #e8bfed, #f0bde6)', darkGradient: 'linear-gradient(to bottom right, #421a52, #4a174d, #521447)' },
    { name: 'Fuchsia', hex: '#f2c2db', dark: '#541738', lightGradient: 'linear-gradient(to bottom right, #f0bde6, #f2c2db, #f5c7d1)', darkGradient: 'linear-gradient(to bottom right, #521447, #541738, #571a29)' },
  ],
  Aurora: [
    { name: 'Borealis', hex: '#9effc7', dark: '#0a2b2b', darkGradient: 'linear-gradient(to bottom right, #0a2e24, #0a2b2b, #0a2933)' },
    { name: 'Ion', hex: '#73faeb', dark: '#0d2138', darkGradient: 'linear-gradient(to bottom right, #0a2933, #0d2138, #0f1a3d)' },
    { name: 'Curtain', hex: '#b8e0ff', dark: '#171440', darkGradient: 'linear-gradient(to bottom right, #0f1a3d, #171440, #1f0f42)' },
    { name: 'Pulse', hex: '#c7b3ff', dark: '#142136', darkGradient: 'linear-gradient(to bottom right, #1f0f42, #142136, #0a3329)' },
    { name: 'Veil', hex: '#8cffe0', dark: '#0b2b30', darkGradient: 'linear-gradient(to bottom right, #0a3329, #0b2b30, #0d2438)' },
    { name: 'Glacier', hex: '#b3f5ff', dark: '#0e2629', darkGradient: 'linear-gradient(to bottom right, #0d2438, #0e2629, #0f291a)' },
    { name: 'Ribbon', hex: '#94ebb8', dark: '#1a1c29', darkGradient: 'linear-gradient(to bottom right, #0f291a, #1a1c29, #240f38)' },
    { name: 'Corona', hex: '#d1bdff', dark: '#171738', darkGradient: 'linear-gradient(to bottom right, #240f38, #171738, #0a1f38)' },
    { name: 'Arc', hex: '#7ae6fa', dark: '#121736', darkGradient: 'linear-gradient(to bottom right, #0a1f38, #121736, #1a0f33)' },
    { name: 'Noctilucent', hex: '#e0d1ff', dark: '#121f2b', darkGradient: 'linear-gradient(to bottom right, #1a0f33, #121f2b, #0a2e24)' },
  ],
  Dusk: [
    { name: 'Afterglow', hex: '#ffc785', dark: '#4a1714', darkGradient: 'linear-gradient(to bottom right, #471a0f, #4a1714, #4d141a)' },
    { name: 'Emberline', hex: '#ff9e7a', dark: '#471421', darkGradient: 'linear-gradient(to bottom right, #4d141a, #471421, #421429)' },
    { name: 'Horizon', hex: '#ffb8b3', dark: '#331233', darkGradient: 'linear-gradient(to bottom right, #421429, #331233, #240f3d)' },
    { name: 'Marina', hex: '#ebb3ff', dark: '#361726', darkGradient: 'linear-gradient(to bottom right, #240f3d, #361726, #471f0f)' },
    { name: 'Cinder', hex: '#ffd68c', dark: '#301a26', darkGradient: 'linear-gradient(to bottom right, #471f0f, #301a26, #1a143d)' },
    { name: 'Twilight', hex: '#c7b8ff', dark: '#331f26', darkGradient: 'linear-gradient(to bottom right, #1a143d, #331f26, #4d290f)' },
    { name: 'Saffron', hex: '#ffe094', dark: '#4a1c1c', darkGradient: 'linear-gradient(to bottom right, #4d290f, #4a1c1c, #470f29)' },
    { name: 'Magenta Hour', hex: '#ff99c7', dark: '#2e1230', darkGradient: 'linear-gradient(to bottom right, #470f29, #2e1230, #141438)' },
    { name: 'Indigo Fall', hex: '#b3c2ff', dark: '#211229', darkGradient: 'linear-gradient(to bottom right, #141438, #211229, #2e0f1a)' },
    { name: 'Nightcap', hex: '#ffb39e', dark: '#3b1414', darkGradient: 'linear-gradient(to bottom right, #2e0f1a, #3b1414, #471a0f)' },
  ],
  Nebula: [
    { name: 'Void', hex: '#d9b3ff', dark: '#0b0d24', darkGradient: 'linear-gradient(to bottom right, #0d0a1f, #0b0d24, #0a0f29)' },
    { name: 'Quark', hex: '#8cc7ff', dark: '#170d26', darkGradient: 'linear-gradient(to bottom right, #0a0f29, #170d26, #240a24)' },
    { name: 'Pulsar', hex: '#ff8cd9', dark: '#170f29', darkGradient: 'linear-gradient(to bottom right, #240a24, #170f29, #0a142e)' },
    { name: 'Nova', hex: '#b3ebff', dark: '#120f2b', darkGradient: 'linear-gradient(to bottom right, #0a142e, #120f2b, #1a0a29)' },
    { name: 'Eclipse', hex: '#eb9eff', dark: '#130b26', darkGradient: 'linear-gradient(to bottom right, #1a0a29, #130b26, #0d0d24)' },
    { name: 'Cosmos', hex: '#9eb3ff', dark: '#1b0d1f', darkGradient: 'linear-gradient(to bottom right, #0d0d24, #1b0d1f, #290d1a)' },
    { name: 'Orion', hex: '#ffadc7', dark: '#1f0b24', darkGradient: 'linear-gradient(to bottom right, #290d1a, #1f0b24, #140a2e)' },
    { name: 'Singularity', hex: '#b894ff', dark: '#0f122b', darkGradient: 'linear-gradient(to bottom right, #140a2e, #0f122b, #0a1a29)' },
    { name: 'Photon', hex: '#94f2ff', dark: '#141221', darkGradient: 'linear-gradient(to bottom right, #0a1a29, #141221, #1f0a1a)' },
    { name: 'Event Horizon', hex: '#ff94b8', dark: '#160a1c', darkGradient: 'linear-gradient(to bottom right, #1f0a1a, #160a1c, #0d0a1f)' },
  ],
  Twilight: [
    { name: 'Dusk Blue', hex: '#d1e6ff', dark: '#424269', darkGradient: 'linear-gradient(to bottom right, #38476b, #424269, #4d3d66)' },
    { name: 'Lavender Hour', hex: '#e6d6ff', dark: '#543b5c', darkGradient: 'linear-gradient(to bottom right, #4d3d66, #543b5c, #5c3852)' },
    { name: 'Mauve', hex: '#ffd1e6', dark: '#5e3b4d', darkGradient: 'linear-gradient(to bottom right, #5c3852, #5e3b4d, #613d47)' },
    { name: 'Slate Rose', hex: '#ffdbd6', dark: '#47474f', darkGradient: 'linear-gradient(to bottom right, #613d47, #47474f, #2e5257)' },
    { name: 'Teal Dusk', hex: '#c7f5f0', dark: '#364d63', darkGradient: 'linear-gradient(to bottom right, #2e5257, #364d63, #3d4770)' },
    { name: 'Periwinkle Night', hex: '#d6e0ff', dark: '#4a4066', darkGradient: 'linear-gradient(to bottom right, #3d4770, #4a4066, #57385c)' },
    { name: 'Soft Plum', hex: '#f5d1f5', dark: '#45425e', darkGradient: 'linear-gradient(to bottom right, #57385c, #45425e, #334d61)' },
    { name: 'Harbor', hex: '#ccebfa', dark: '#3d4763', darkGradient: 'linear-gradient(to bottom right, #334d61, #3d4763, #474266)' },
    { name: 'Heather', hex: '#ebdbfa', dark: '#524259', darkGradient: 'linear-gradient(to bottom right, #474266, #524259, #5c424d)' },
    { name: 'Afterlight', hex: '#ffe0db', dark: '#4a455c', darkGradient: 'linear-gradient(to bottom right, #5c424d, #4a455c, #38476b)' },
  ],
  Bloom: [
    { name: 'Petal', hex: '#fae3e3', dark: '#6b2947', lightGradient: 'linear-gradient(to bottom right, #fae0eb, #fae3e3, #fae6db)' },
    { name: 'Peony', hex: '#f7e0e0', dark: '#702e24', lightGradient: 'linear-gradient(to bottom right, #fae6db, #f7e0e0, #f5dbe6)' },
    { name: 'Blush', hex: '#f0def0', dark: '#662438', lightGradient: 'linear-gradient(to bottom right, #f5dbe6, #f0def0, #ebe0fa)' },
    { name: 'Lilac', hex: '#f2e8e8', dark: '#4d2966', lightGradient: 'linear-gradient(to bottom right, #ebe0fa, #f2e8e8, #faf0d6)' },
    { name: 'Pollen', hex: '#edf2de', dark: '#66471a', lightGradient: 'linear-gradient(to bottom right, #faf0d6, #edf2de, #e0f5e6)' },
    { name: 'Stem', hex: '#e8ebf0', dark: '#295238', lightGradient: 'linear-gradient(to bottom right, #e0f5e6, #e8ebf0, #f0e0fa)' },
    { name: 'Orchid', hex: '#f5e3e8', dark: '#57245c', lightGradient: 'linear-gradient(to bottom right, #f0e0fa, #f5e3e8, #fae6d6)' },
    { name: 'Nectar', hex: '#edebe5', dark: '#6b381f', lightGradient: 'linear-gradient(to bottom right, #fae6d6, #edebe5, #e0f0f5)' },
    { name: 'Dew', hex: '#e3f2eb', dark: '#244757', lightGradient: 'linear-gradient(to bottom right, #e0f0f5, #e3f2eb, #e6f5e0)' },
    { name: 'Garden', hex: '#f0ebe6', dark: '#384d2e', lightGradient: 'linear-gradient(to bottom right, #e6f5e0, #f0ebe6, #fae0eb)' },
  ],
  Dawn: [
    { name: 'Daybreak', hex: '#f6edeb', dark: '#5c381a', lightGradient: 'linear-gradient(to bottom right, #fcf0db, #f6edeb, #f0ebfa)' },
    { name: 'Haze', hex: '#f6e8e8', dark: '#473d57', lightGradient: 'linear-gradient(to bottom right, #f0ebfa, #f6e8e8, #fce6d6)' },
    { name: 'Apricot', hex: '#f1ebe8', dark: '#66331f', lightGradient: 'linear-gradient(to bottom right, #fce6d6, #f1ebe8, #e6f0fa)' },
    { name: 'Mist', hex: '#f1f2e8', dark: '#2e3d57', lightGradient: 'linear-gradient(to bottom right, #e6f0fa, #f1f2e8, #fcf5d6)' },
    { name: 'Sunbeam', hex: '#eef2e8', dark: '#614714', lightGradient: 'linear-gradient(to bottom right, #fcf5d6, #eef2e8, #e0f0fa)' },
    { name: 'Horizon', hex: '#e8f1f9', dark: '#29425c', lightGradient: 'linear-gradient(to bottom right, #e0f0fa, #e8f1f9, #f0f2f7)' },
    { name: 'Cloudline', hex: '#f5f2e9', dark: '#383d4d', lightGradient: 'linear-gradient(to bottom right, #f0f2f7, #f5f2e9, #faf2db)' },
    { name: 'Citrine', hex: '#edf4eb', dark: '#5c4214', lightGradient: 'linear-gradient(to bottom right, #faf2db, #edf4eb, #e0f5fa)' },
    { name: 'Air', hex: '#edf0ed', dark: '#24475c', lightGradient: 'linear-gradient(to bottom right, #e0f5fa, #edf0ed, #faebe0)' },
    { name: 'Morning', hex: '#fbedde', dark: '#4d3324', lightGradient: 'linear-gradient(to bottom right, #faebe0, #fbedde, #fcf0db)' },
  ],
  Water: [
    { name: 'Caribbean', hex: '#6bd6db', dark: '#0f525c', lightGradient: 'linear-gradient(to bottom right, #8ce6e0, #6bd6db, #5cc2d1)' },
    { name: 'Glacier', hex: '#add1eb', dark: '#294766', lightGradient: 'linear-gradient(to bottom right, #d1e6f5, #add1eb, #85b3db)' },
    { name: 'Alpine Lake', hex: '#66c2ad', dark: '#144d3d', lightGradient: 'linear-gradient(to bottom right, #94dbc7, #66c2ad, #47a394)' },
    { name: 'Mediterranean', hex: '#5794db', dark: '#14386b', lightGradient: 'linear-gradient(to bottom right, #7ab8eb, #5794db, #3870c2)' },
    { name: 'Hot Spring', hex: '#b8dbb3', dark: '#474d1a', lightGradient: 'linear-gradient(to bottom right, #dbebb8, #b8dbb3, #94ccbd)' },
    { name: 'River', hex: '#ada37a', dark: '#47381f', lightGradient: 'linear-gradient(to bottom right, #c7bd94, #ada37a, #8f8561)' },
    { name: 'Tide Pool', hex: '#7ab88f', dark: '#1f472e', lightGradient: 'linear-gradient(to bottom right, #9ed1ad, #7ab88f, #61997a)' },
    { name: 'Reef', hex: '#c7c7e0', dark: '#522447', lightGradient: 'linear-gradient(to bottom right, #b8e0e6, #c7c7e0, #dbb3d1)' },
    { name: 'Fjord', hex: '#708aa8', dark: '#1f2e47', lightGradient: 'linear-gradient(to bottom right, #94adc7, #708aa8, #526b8a)' },
    { name: 'Spring', hex: '#9edbe0', dark: '#14424d', lightGradient: 'linear-gradient(to bottom right, #c7ebf0, #9edbe0, #7ac7d1)' },
  ],
  Sheen: [
    { name: 'Silver', hex: '#d6dbe6', dark: '#474d57', lightGradient: 'linear-gradient(to bottom right, #f0f2f7, #d6dbe6, #b8bdcc)', darkGradient: 'linear-gradient(to bottom right, #6b707a, #474d57, #292b33)' },
    { name: 'Gold', hex: '#e6c77a', dark: '#573d14', lightGradient: 'linear-gradient(to bottom right, #f5e6ad, #e6c77a, #cca352)', darkGradient: 'linear-gradient(to bottom right, #7a5c1f, #573d14, #33240a)' },
    { name: 'Copper', hex: '#db946b', dark: '#522414', lightGradient: 'linear-gradient(to bottom right, #f0c29e, #db946b, #bd6b47)', darkGradient: 'linear-gradient(to bottom right, #753d24, #522414, #2e140a)' },
    { name: 'Rose Gold', hex: '#e6adb3', dark: '#52242e', lightGradient: 'linear-gradient(to bottom right, #f5d6d6, #e6adb3, #cc858f)', darkGradient: 'linear-gradient(to bottom right, #753d47, #52242e, #2e141a)' },
    { name: 'Bronze', hex: '#cca36b', dark: '#472e14', lightGradient: 'linear-gradient(to bottom right, #e6c794, #cca36b, #ad804d)', darkGradient: 'linear-gradient(to bottom right, #66471f, #472e14, #291a0a)' },
    { name: 'Gunmetal', hex: '#a3adc2', dark: '#292e3d', lightGradient: 'linear-gradient(to bottom right, #c7d1e0, #a3adc2, #808a9e)', darkGradient: 'linear-gradient(to bottom right, #475261, #292e3d, #141a24)' },
    { name: 'Platinum', hex: '#e0e6f0', dark: '#424752', lightGradient: 'linear-gradient(to bottom right, #f5f5fa, #e0e6f0, #c7ccdb)', darkGradient: 'linear-gradient(to bottom right, #666b7a, #424752, #24262e)' },
    { name: 'Champagne', hex: '#e6d1a8', dark: '#4d381a', lightGradient: 'linear-gradient(to bottom right, #f7ebd1, #e6d1a8, #ccb380)', darkGradient: 'linear-gradient(to bottom right, #6b572e, #4d381a, #291f0f)' },
    { name: 'Steel', hex: '#adc2db', dark: '#242e42', lightGradient: 'linear-gradient(to bottom right, #d1e0f0, #adc2db, #8599b8)', darkGradient: 'linear-gradient(to bottom right, #3d4d66, #242e42, #0f1424)' },
    { name: 'Titanium', hex: '#c7c2bd', dark: '#38332e', lightGradient: 'linear-gradient(to bottom right, #e6e0db, #c7c2bd, #a39e99)', darkGradient: 'linear-gradient(to bottom right, #5c5752, #38332e, #1f1a1a)' },
  ],
} as const satisfies Record<string, readonly ThemeSwatch[]>

export type ThemePaletteName = keyof typeof THEME_PALETTES

export const THEME_PILLS = Object.keys(THEME_PALETTES) as ThemePaletteName[]

/** Cards shown in the themes colour grid (5×2). */
export const THEME_GRID_COUNT = 10

/** Appearance lock per pack — mirrors iOS `CounterColorPack.appearanceLock`. */
export const THEME_APPEARANCE = {
  Muted: 'adaptive',
  Neon: 'adaptive',
  Metallic: 'adaptive',
  Pastel: 'adaptive',
  Clouds: 'adaptive',
  Ocean: 'adaptive',
  Forest: 'adaptive',
  Ember: 'adaptive',
  Desert: 'adaptive',
  Berry: 'adaptive',
  Gradient: 'adaptive',
  Aurora: 'alwaysDark',
  Dusk: 'alwaysDark',
  Nebula: 'alwaysDark',
  Twilight: 'alwaysDark',
  Bloom: 'alwaysLight',
  Dawn: 'alwaysLight',
  Water: 'alwaysLight',
  Sheen: 'adaptive',
} as const satisfies Record<ThemePaletteName, ThemeAppearance>

export function themeAppearance(palette: ThemePaletteName): ThemeAppearance {
  return THEME_APPEARANCE[palette]
}

/** Visible card / mosaic fill — gradient when defined, otherwise solid. */
export function themeCardBackground(
  swatch: ThemeSwatch,
  appearance: ThemeAppearance = 'adaptive',
): string {
  if (appearance === 'alwaysDark') {
    return swatch.darkGradient ?? swatch.dark
  }
  return swatch.lightGradient ?? swatch.hex
}

/** Tint companion for text and ring fill (dark on light, light on dark). */
export function themeContentColor(
  swatch: ThemeSwatch,
  appearance: ThemeAppearance = 'adaptive',
): string {
  return appearance === 'alwaysDark' ? swatch.hex : swatch.dark
}

/** Ring outline — matches the solid representative of the fill. */
export function themeOutlineColor(
  swatch: ThemeSwatch,
  appearance: ThemeAppearance = 'adaptive',
): string {
  return appearance === 'alwaysDark' ? swatch.dark : swatch.hex
}

export function themeTrackColor(content: string) {
  return `color-mix(in srgb, ${content} 20%, transparent)`
}
