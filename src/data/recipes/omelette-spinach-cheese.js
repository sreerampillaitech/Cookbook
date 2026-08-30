import { createRecipe } from './createRecipe'

export default createRecipe({
    id: 'omelette-spinach-cheese',
    name: 'Omelette with Spinach and Cheese',
    cuisine: 'Continental',
    mealType: 'Breakfast',
    goals: ['b12_d3', 'eyesight', 'strength'],
    timeMinutes: 8,
    servings: 1,
    tags: ['egg-based', 'quick'],
    diet: 'egg',
    nutrition: { calories: 310, protein: 20, carbs: 4, fat: 24 },
    ingredients: [
      { name: 'Eggs', qty: 3, unit: 'whole' },
      { name: 'Spinach, chopped', qty: 0.5, unit: 'cup' },
      { name: 'Cheese, grated', qty: 2, unit: 'tbsp' },
      { name: 'Butter or oil', qty: 1, unit: 'tsp' },
      { name: 'Black pepper', qty: 1, unit: 'pinch' },
    ],
    steps: [
      'Wilt the spinach in a dry pan for 1 minute, set aside.',
      'Beat the eggs with pepper, pour into a lightly buttered pan on medium-low heat.',
      'When mostly set, scatter spinach and cheese over one half.',
      'Fold the omelette over the filling and cook 30 seconds more before serving.',
    ],
  })
