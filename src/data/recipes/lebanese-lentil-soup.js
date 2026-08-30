import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'lebanese-lentil-soup',
  name: 'Lebanese Lentil Soup',
  cuisine: 'Middle Eastern',
  mealType: 'Lunch',
  goals: ['weight_loss'],
  timeMinutes: 25,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 320, protein: 15, carbs: 50, fat: 6 },
  ingredients: [
    { name: 'Red lentils, cooked', qty: 1, unit: 'cup' },
    { name: 'Cumin powder', qty: 1, unit: 'tsp' },
    { name: 'Garlic, minced', qty: 1, unit: 'clove' },
    { name: 'Lemon juice', qty: 1, unit: 'tbsp' },
    { name: 'Olive oil', qty: 1, unit: 'tsp' },
  ],
  steps: [
    'Simmer lentils with cumin and garlic and enough water for a soup consistency, 10 minutes.',
    'Blend partially for a smoother texture if desired.',
    'Finish with lemon juice and a drizzle of olive oil.',
    'Pack hot in an insulated container.',
  ],
})
