import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'italian-herb-baked-fish-salad',
  name: 'Italian Herb Baked Fish with Salad',
  cuisine: 'Mediterranean',
  mealType: 'Dinner',
  goals: ['b12_d3', 'eyesight'],
  timeMinutes: 25,
  servings: 1,
  tags: ['non-veg'],
  diet: 'fish',
  nutrition: { calories: 340, protein: 30, carbs: 14, fat: 18 },
  ingredients: [
    { name: 'White fish fillet', qty: 200, unit: 'g' },
    { name: 'Italian herbs and olive oil', qty: 1, unit: 'tbsp' },
    { name: 'Mixed salad greens', qty: 2, unit: 'cup' },
  ],
  steps: [
    'Coat the fish in herbs and olive oil.',
    'Bake at 200°C for 15 minutes until cooked through.',
    'Serve with a simple dressed salad.',
  ],
})
