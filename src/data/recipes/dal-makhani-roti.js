import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'dal-makhani-roti',
  name: 'Dal Makhani (Minimal Cream) with Roti',
  cuisine: 'North Indian',
  mealType: 'Lunch',
  goals: ['strength'],
  timeMinutes: 35,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 430, protein: 18, carbs: 46, fat: 18 },
  ingredients: [
    { name: 'Black urad dal, soaked and boiled', qty: 0.75, unit: 'cup' },
    { name: 'Kidney beans, boiled', qty: 0.25, unit: 'cup' },
    { name: 'Tomato puree', qty: 0.5, unit: 'cup' },
    { name: 'Butter', qty: 1, unit: 'tsp' },
    { name: 'Fresh cream (optional, minimal)', qty: 1, unit: 'tsp' },
    { name: 'Whole wheat roti', qty: 2, unit: 'whole' },
  ],
  steps: [
    'Simmer boiled dal and kidney beans together with tomato puree for 15 minutes, mashing lightly.',
    'Stir in butter and a small swirl of cream at the end.',
    'Simmer 5 more minutes until thickened.',
    'Pack hot with roti.',
  ],
})
