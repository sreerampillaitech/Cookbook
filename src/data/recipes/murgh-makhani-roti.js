import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'murgh-makhani-roti',
  name: 'Murgh Makhani (Minimal Butter) with Roti',
  cuisine: 'North Indian',
  mealType: 'Dinner',
  goals: ['strength'],
  timeMinutes: 35,
  servings: 1,
  tags: ['non-veg'],
  diet: 'chicken',
  nutrition: { calories: 450, protein: 34, carbs: 32, fat: 22 },
  ingredients: [
    { name: 'Chicken, boneless, grilled', qty: 200, unit: 'g' },
    { name: 'Tomato puree', qty: 0.75, unit: 'cup' },
    { name: 'Cashew paste', qty: 2, unit: 'tbsp' },
    { name: 'Butter', qty: 1, unit: 'tsp' },
    { name: 'Whole wheat roti', qty: 2, unit: 'whole' },
  ],
  steps: [
    'Simmer tomato puree until reduced, 8 minutes.',
    'Stir in cashew paste and butter until glossy.',
    'Add the grilled chicken, simmer 5 minutes.',
    'Serve with roti.',
  ],
})
