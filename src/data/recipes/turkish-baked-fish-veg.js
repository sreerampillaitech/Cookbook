import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'turkish-baked-fish-veg',
  name: 'Turkish Baked Fish with Vegetables',
  cuisine: 'Middle Eastern',
  mealType: 'Dinner',
  goals: ['b12_d3', 'eyesight'],
  timeMinutes: 30,
  servings: 1,
  tags: ['non-veg'],
  diet: 'fish',
  nutrition: { calories: 350, protein: 30, carbs: 22, fat: 16 },
  ingredients: [
    { name: 'White fish fillet', qty: 200, unit: 'g' },
    { name: 'Tomato and bell pepper, sliced', qty: 1, unit: 'cup' },
    { name: 'Olive oil and paprika', qty: 1, unit: 'tbsp' },
  ],
  steps: [
    'Layer tomato and bell pepper in a baking dish, drizzle with olive oil.',
    'Place fish on top, season with paprika.',
    'Bake at 200°C for 18-20 minutes until cooked through.',
  ],
})
