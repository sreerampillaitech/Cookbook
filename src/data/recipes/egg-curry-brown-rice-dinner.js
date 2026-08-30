import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'egg-curry-brown-rice-dinner',
  name: 'Egg Curry with Brown Rice',
  cuisine: 'North Indian',
  mealType: 'Dinner',
  goals: ['b12_d3', 'strength'],
  timeMinutes: 25,
  servings: 1,
  tags: ['heat-retaining'],
  diet: 'egg',
  nutrition: { calories: 400, protein: 18, carbs: 42, fat: 18 },
  ingredients: [
    { name: 'Eggs, boiled', qty: 3, unit: 'whole' },
    { name: 'Onion, chopped', qty: 0.5, unit: 'medium' },
    { name: 'Tomato puree', qty: 0.5, unit: 'cup' },
    { name: 'Garam masala', qty: 0.5, unit: 'tsp' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Sauté onion until golden, add tomato puree and garam masala, cook until thick.',
    'Halve the boiled eggs, nestle into the gravy.',
    'Simmer 5 minutes, serve with rice.',
  ],
})
