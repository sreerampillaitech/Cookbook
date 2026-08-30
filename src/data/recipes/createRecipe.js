import { GOALS, CUISINES, MEAL_TYPES, DIET_TYPES } from '../goals'

const VALID_GOAL_IDS = GOALS.map((g) => g.id)
const VALID_DIET_IDS = DIET_TYPES.map((d) => d.id)

// A small factory function: pass in one recipe's details, get back a
// checked recipe object. Catches typos in cuisine/mealType/goals/diet
// immediately (in the browser console) instead of the recipe silently
// not showing up under a filter.
export function createRecipe(fields) {
  const { id, name, cuisine, mealType, goals, diet } = fields

  if (!CUISINES.includes(cuisine)) {
    console.warn(`Recipe "${id}": cuisine "${cuisine}" is not in CUISINES (data/goals.js)`)
  }
  if (!MEAL_TYPES.includes(mealType)) {
    console.warn(`Recipe "${id}": mealType "${mealType}" is not in MEAL_TYPES (data/goals.js)`)
  }
  goals.forEach((g) => {
    if (!VALID_GOAL_IDS.includes(g)) {
      console.warn(`Recipe "${id}": goal "${g}" is not a valid GOALS id (data/goals.js)`)
    }
  })
  if (diet && !VALID_DIET_IDS.includes(diet)) {
    console.warn(`Recipe "${id}": diet "${diet}" is not a valid DIET_TYPES id (data/goals.js)`)
  }
  if (!name || !id) {
    console.warn('Recipe is missing an id or name:', fields)
  }

  return fields
}
