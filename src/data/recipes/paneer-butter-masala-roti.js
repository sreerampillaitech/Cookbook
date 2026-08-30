import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'paneer-butter-masala-roti',
  name: 'Paneer Butter Masala with Roti',
  cuisine: 'North Indian',
  mealType: 'Lunch',
  goals: ['strength'],
  timeMinutes: 30,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 460, protein: 17, carbs: 38, fat: 26 },
  ingredients: [
    { name: 'Paneer, cubed', qty: 100, unit: 'g' },
    { name: 'Tomato puree', qty: 0.75, unit: 'cup' },
    { name: 'Cashews, soaked', qty: 6, unit: 'whole' },
    { name: 'Butter', qty: 1, unit: 'tsp' },
    { name: 'Garam masala', qty: 0.5, unit: 'tsp' },
    { name: 'Whole wheat roti', qty: 2, unit: 'whole' },
  ],
  steps: [
    'Blend cashews with a little water into a smooth paste.',
    'Simmer tomato puree with garam masala for 5 minutes.',
    'Stir in cashew paste and butter, simmer 3 minutes until glossy.',
    'Add paneer, warm through, pack with roti.',
  ],
})
