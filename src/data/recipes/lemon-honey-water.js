import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'lemon-honey-water',
  name: 'Warm Lemon Honey Water',
  cuisine: 'Continental',
  mealType: 'Snack',
  goals: ['weight_loss'],
  timeMinutes: 3,
  servings: 1,
  tags: ['before-bed', 'quick', 'no-cook'],
  diet: 'veg',
  nutrition: { calories: 25, protein: 0, carbs: 7, fat: 0 },
  ingredients: [
    { name: 'Lemon juice', qty: 1, unit: 'tsp' },
    { name: 'Honey, minimal', qty: 0.5, unit: 'tsp' },
    { name: 'Warm water', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Stir lemon juice and honey into warm water.',
    'Drink warm before bed.',
  ],
})
