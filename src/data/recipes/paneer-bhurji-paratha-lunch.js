import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'paneer-bhurji-paratha-lunch',
  name: 'Paneer Bhurji with Paratha',
  cuisine: 'North Indian',
  mealType: 'Lunch',
  goals: ['strength'],
  timeMinutes: 15,
  servings: 1,
  tags: ['vegetarian'],
  diet: 'veg',
  nutrition: { calories: 400, protein: 18, carbs: 32, fat: 22 },
  ingredients: [
    { name: 'Paneer, crumbled', qty: 100, unit: 'g' },
    { name: 'Onion, finely chopped', qty: 0.5, unit: 'medium' },
    { name: 'Tomato, finely chopped', qty: 0.5, unit: 'medium' },
    { name: 'Green chilli, chopped', qty: 1, unit: 'whole' },
    { name: 'Turmeric powder', qty: 0.25, unit: 'tsp' },
    { name: 'Whole wheat paratha', qty: 1, unit: 'whole' },
  ],
  steps: [
    'Sauté onion until translucent, add tomato and green chilli, cook 2 minutes.',
    'Add turmeric and crumbled paneer, toss for 2 minutes until warmed through.',
    'Pack hot with a paratha.',
  ],
})
