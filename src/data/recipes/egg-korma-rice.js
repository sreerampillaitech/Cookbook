import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'egg-korma-rice',
  name: 'Egg Korma with Brown Rice',
  cuisine: 'North Indian',
  mealType: 'Dinner',
  goals: ['b12_d3', 'strength'],
  timeMinutes: 25,
  servings: 1,
  tags: ['heat-retaining'],
  diet: 'egg',
  nutrition: { calories: 410, protein: 18, carbs: 38, fat: 20 },
  ingredients: [
    { name: 'Eggs, boiled', qty: 3, unit: 'whole' },
    { name: 'Onion-cashew paste', qty: 3, unit: 'tbsp' },
    { name: 'Yoghurt', qty: 2, unit: 'tbsp' },
    { name: 'Garam masala', qty: 0.5, unit: 'tsp' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Sauté the onion-cashew paste until fragrant.',
    'Stir in yoghurt and garam masala, simmer 5 minutes.',
    'Add halved boiled eggs, warm through.',
    'Serve with rice.',
  ],
})
