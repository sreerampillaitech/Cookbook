import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'turkish-lentil-soup',
  name: 'Turkish Lentil Soup (Mercimek Çorbası)',
  cuisine: 'Middle Eastern',
  mealType: 'Lunch',
  goals: ['weight_loss'],
  timeMinutes: 25,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 310, protein: 14, carbs: 48, fat: 6 },
  ingredients: [
    { name: 'Red lentils, cooked', qty: 1, unit: 'cup' },
    { name: 'Carrot, diced', qty: 0.25, unit: 'medium' },
    { name: 'Cumin and paprika', qty: 1, unit: 'tsp' },
    { name: 'Lemon juice', qty: 1, unit: 'tbsp' },
    { name: 'Butter', qty: 1, unit: 'tsp' },
  ],
  steps: [
    'Simmer lentils and carrot with enough water for soup consistency, 12 minutes.',
    'Blend until smooth.',
    'Melt butter with cumin and paprika, stir into the soup.',
    'Finish with lemon juice, pack hot.',
  ],
})
