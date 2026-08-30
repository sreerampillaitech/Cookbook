import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'ginger-water-amla',
  name: 'Warm Ginger Water with Amla Powder',
  cuisine: 'North Indian',
  mealType: 'Snack',
  goals: ['grey_hair'],
  timeMinutes: 3,
  servings: 1,
  tags: ['before-bed', 'quick', 'no-cook'],
  diet: 'veg',
  nutrition: { calories: 15, protein: 0, carbs: 3, fat: 0 },
  ingredients: [
    { name: 'Fresh ginger, grated', qty: 0.5, unit: 'tsp' },
    { name: 'Amla powder', qty: 0.5, unit: 'tsp' },
    { name: 'Warm water', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Steep grated ginger in warm water for 2 minutes.',
    'Stir in amla powder and drink warm before bed.',
  ],
})
