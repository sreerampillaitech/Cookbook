import { createRecipe } from './createRecipe'

export default createRecipe({
    id: 'masala-scrambled-eggs-toast',
    name: 'Masala Scrambled Eggs on Toast',
    cuisine: 'North Indian',
    mealType: 'Breakfast',
    goals: ['b12_d3', 'strength'],
    timeMinutes: 8,
    servings: 1,
    tags: ['egg-based', 'quick'],
    diet: 'egg',
    nutrition: { calories: 340, protein: 18, carbs: 22, fat: 20 },
    ingredients: [
      { name: 'Eggs', qty: 3, unit: 'whole' },
      { name: 'Whole wheat bread', qty: 1, unit: 'slice' },
      { name: 'Onion, finely chopped', qty: 0.25, unit: 'medium' },
      { name: 'Tomato, finely chopped', qty: 0.25, unit: 'medium' },
      { name: 'Green chilli, chopped', qty: 1, unit: 'whole' },
      { name: 'Turmeric powder', qty: 1, unit: 'pinch' },
      { name: 'Black pepper', qty: 1, unit: 'pinch' },
      { name: 'Oil', qty: 1, unit: 'tsp' },
    ],
    steps: [
      'Put the bread in the toaster while you start the eggs.',
      'Heat oil in a small pan, sauté onion for 1 minute.',
      'Add tomato, turmeric, and pepper, cook 1 minute.',
      'Beat the eggs and pour in, scramble on medium heat for 2 minutes.',
      'Plate with the toast once it pops.',
    ],
  })
