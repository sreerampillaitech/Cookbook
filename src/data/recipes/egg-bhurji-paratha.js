import { createRecipe } from './createRecipe'

export default createRecipe({
    id: 'egg-bhurji-paratha',
    name: 'Egg Bhurji with Paratha',
    cuisine: 'North Indian',
    mealType: 'Breakfast',
    goals: ['b12_d3', 'strength'],
    timeMinutes: 10,
    servings: 1,
    tags: ['egg-based'],
    diet: 'egg',
    nutrition: { calories: 400, protein: 18, carbs: 34, fat: 22 },
    ingredients: [
      { name: 'Eggs', qty: 3, unit: 'whole' },
      { name: 'Onion, chopped', qty: 0.5, unit: 'medium' },
      { name: 'Tomato, chopped', qty: 0.5, unit: 'medium' },
      { name: 'Green chilli, chopped', qty: 1, unit: 'whole' },
      { name: 'Turmeric powder', qty: 0.25, unit: 'tsp' },
      { name: 'Whole wheat paratha', qty: 1, unit: 'whole' },
      { name: 'Oil', qty: 1, unit: 'tsp' },
    ],
    steps: [
      'Heat oil, sauté onion until translucent, 2 minutes.',
      'Add tomato, green chilli, and turmeric, cook 2 minutes.',
      'Beat the eggs and pour in, scramble until just set, breaking into coarse pieces.',
      'Serve hot with a warm paratha.',
    ],
  })
