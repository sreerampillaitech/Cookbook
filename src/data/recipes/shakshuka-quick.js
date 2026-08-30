import { createRecipe } from './createRecipe'

export default createRecipe({
    id: 'shakshuka-quick',
    name: 'Quick Shakshuka Cups',
    cuisine: 'Middle Eastern',
    mealType: 'Breakfast',
    goals: ['b12_d3', 'eyesight', 'weight_loss'],
    timeMinutes: 8,
    servings: 1,
    tags: ['egg-based', 'quick'],
    diet: 'egg',
    nutrition: { calories: 260, protein: 15, carbs: 12, fat: 17 },
    ingredients: [
      { name: 'Eggs', qty: 2, unit: 'whole' },
      { name: 'Canned crushed tomato', qty: 0.75, unit: 'cup' },
      { name: 'Bell pepper, diced', qty: 0.25, unit: 'cup' },
      { name: 'Cumin powder', qty: 0.5, unit: 'tsp' },
      { name: 'Paprika', qty: 0.5, unit: 'tsp' },
      { name: 'Olive oil', qty: 1, unit: 'tsp' },
      { name: 'Feta, crumbled', qty: 2, unit: 'tbsp' },
    ],
    steps: [
      'Heat olive oil in a small pan, soften the bell pepper for a minute.',
      'Stir in crushed tomato, cumin, and paprika, simmer 3 minutes until it thickens slightly.',
      'Make two wells and crack in the eggs, cover and cook 3–4 minutes until whites set.',
      'Scatter feta on top and eat straight from the pan.',
    ],
  })
