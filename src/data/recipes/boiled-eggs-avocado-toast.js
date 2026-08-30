import { createRecipe } from './createRecipe'

export default createRecipe({
    id: 'boiled-eggs-avocado-toast',
    name: 'Boiled Eggs with Avocado Toast',
    cuisine: 'Continental',
    mealType: 'Breakfast',
    goals: ['b12_d3', 'hair_growth', 'eyesight'],
    timeMinutes: 8,
    servings: 1,
    tags: ['egg-based', 'quick'],
    diet: 'egg',
    nutrition: { calories: 350, protein: 16, carbs: 24, fat: 22 },
    ingredients: [
      { name: 'Eggs', qty: 2, unit: 'whole' },
      { name: 'Whole wheat bread', qty: 1, unit: 'slice' },
      { name: 'Avocado', qty: 0.5, unit: 'whole' },
      { name: 'Lemon juice', qty: 1, unit: 'tsp' },
      { name: 'Salt and pepper', qty: 1, unit: 'pinch' },
    ],
    steps: [
      'Boil the eggs for 7 minutes, cool, peel, and slice.',
      'Toast the bread while the eggs boil.',
      'Mash the avocado with lemon juice, salt, and pepper.',
      'Spread avocado on the toast and top with sliced egg.',
    ],
  })
