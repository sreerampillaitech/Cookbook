import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'lentil-soup-bread',
  name: 'Lentil Soup with Whole Wheat Bread',
  cuisine: 'Continental',
  mealType: 'Lunch',
  goals: ['weight_loss', 'strength'],
  timeMinutes: 30,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 360, protein: 17, carbs: 54, fat: 8 },
  ingredients: [
    { name: 'Red lentils, cooked', qty: 1, unit: 'cup' },
    { name: 'Carrot, diced', qty: 0.5, unit: 'medium' },
    { name: 'Onion, diced', qty: 0.25, unit: 'medium' },
    { name: 'Cumin powder', qty: 0.5, unit: 'tsp' },
    { name: 'Whole wheat bread', qty: 1, unit: 'slice' },
  ],
  steps: [
    'Sauté onion and carrot for 3 minutes.',
    'Add cooked lentils, cumin, and enough water to reach soup consistency, simmer 10 minutes.',
    'Blend partially for a creamier texture if desired.',
    'Pack hot with bread on the side.',
  ],
})
