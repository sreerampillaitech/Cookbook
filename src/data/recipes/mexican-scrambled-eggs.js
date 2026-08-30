import { createRecipe } from './createRecipe'

export default createRecipe({
    id: 'mexican-scrambled-eggs',
    name: 'Mexican Scrambled Eggs (Huevos Rancheros Style)',
    cuisine: 'Continental',
    mealType: 'Breakfast',
    goals: ['b12_d3', 'eyesight'],
    timeMinutes: 9,
    servings: 1,
    tags: ['egg-based', 'quick'],
    diet: 'egg',
    nutrition: { calories: 330, protein: 17, carbs: 18, fat: 21 },
    ingredients: [
      { name: 'Eggs', qty: 3, unit: 'whole' },
      { name: 'Tomato, diced', qty: 0.5, unit: 'medium' },
      { name: 'Onion, diced', qty: 0.25, unit: 'medium' },
      { name: 'Jalapeño or green chilli, diced', qty: 1, unit: 'whole' },
      { name: 'Corn tortilla or roti', qty: 1, unit: 'whole' },
      { name: 'Oil', qty: 1, unit: 'tsp' },
      { name: 'Coriander leaves, chopped', qty: 1, unit: 'tbsp' },
    ],
    steps: [
      'Heat oil, sauté onion, tomato, and chilli for 2 minutes until softened.',
      'Beat the eggs and pour in, scramble gently until just set.',
      'Warm the tortilla or roti alongside.',
      'Top with coriander and serve together.',
    ],
  })
