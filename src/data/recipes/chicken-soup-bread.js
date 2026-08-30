import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'chicken-soup-bread',
  name: 'Chicken Soup with Whole Wheat Bread',
  cuisine: 'Continental',
  mealType: 'Dinner',
  goals: ['strength', 'b12_d3'],
  timeMinutes: 30,
  servings: 1,
  tags: ['non-veg', 'heat-retaining'],
  diet: 'chicken',
  nutrition: { calories: 350, protein: 30, carbs: 32, fat: 10 },
  ingredients: [
    { name: 'Chicken, shredded', qty: 150, unit: 'g' },
    { name: 'Carrot and celery, diced', qty: 0.5, unit: 'cup' },
    { name: 'Garlic, minced', qty: 1, unit: 'clove' },
    { name: 'Chicken stock or water', qty: 2, unit: 'cup' },
    { name: 'Whole wheat bread', qty: 1, unit: 'slice' },
  ],
  steps: [
    'Sauté garlic, carrot, and celery for 3 minutes.',
    'Add stock and shredded chicken, simmer 15 minutes.',
    'Season and serve with bread on the side.',
  ],
})
