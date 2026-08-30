import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'chicken-keema-roti',
  name: 'Chicken Keema with Roti',
  cuisine: 'North Indian',
  mealType: 'Dinner',
  goals: ['strength'],
  timeMinutes: 25,
  servings: 1,
  tags: ['non-veg'],
  diet: 'chicken',
  nutrition: { calories: 400, protein: 32, carbs: 28, fat: 18 },
  ingredients: [
    { name: 'Chicken, minced', qty: 200, unit: 'g' },
    { name: 'Onion, chopped', qty: 0.5, unit: 'medium' },
    { name: 'Tomato, chopped', qty: 0.5, unit: 'medium' },
    { name: 'Ginger-garlic paste and garam masala', qty: 1.5, unit: 'tsp' },
    { name: 'Whole wheat roti', qty: 2, unit: 'whole' },
  ],
  steps: [
    'Sauté onion until golden, add ginger-garlic paste.',
    'Add tomato and garam masala, cook until pulpy.',
    'Add minced chicken, breaking it up, cook until done, 10 minutes.',
    'Serve with roti.',
  ],
})
