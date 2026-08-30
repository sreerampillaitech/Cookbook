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
  'Continental',
  'Japanese',
  'Korean',
  'Thai',
  'Chinese',
  'Middle Eastern',
  'Mediterranean',
]