// Health goals this kitchen is stocked for.
// `mark` is a 1-2 letter stamp glyph used on the recipe card's goal seal.
export const GOALS = [
  { id: 'weight_loss', label: 'Weight loss', mark: 'WL' },
  { id: 'strength', label: 'Strength', mark: 'ST' },
  { id: 'b12_d3', label: 'B12 / D3', mark: 'B12' },
  { id: 'hair_growth', label: 'Hair growth', mark: 'HG' },
  { id: 'grey_hair', label: 'Grey hair reversal', mark: 'GH' },
  { id: 'eyesight', label: 'Eyesight', mark: 'EY' },
]

export const GOAL_MAP = Object.fromEntries(GOALS.map((g) => [g.id, g]))

export const MEAL_TYPES = ['Breakfast', 'Lunch', 'Dinner', 'Snack']

export const CUISINES = [
  'Kerala',
  'North Indian',
  'South Indian',
  'Continental',
  'Japanese',
  'Korean',
  'Thai',
  'Chinese',
  'Vietnamese',
  'Indonesian',
  'Malaysian',
  'Singaporean',
  'Tibetan',
  'Middle Eastern',
  'Mediterranean',
]

// Diet / protein-source markers shown on each recipe card.
export const DIET_TYPES = [
  { id: 'veg', label: 'Vegetarian', mark: '🌿', isVeg: true },
  { id: 'egg', label: 'Egg', mark: '🥚', isVeg: false },
  { id: 'chicken', label: 'Chicken', mark: '🍗', isVeg: false },
  { id: 'fish', label: 'Fish', mark: '🐟', isVeg: false },
  { id: 'seafood', label: 'Seafood', mark: '🦐', isVeg: false },
  { id: 'red_meat', label: 'Red meat', mark: '🥩', isVeg: false },
]

export const DIET_MAP = Object.fromEntries(DIET_TYPES.map((d) => [d.id, d]))
