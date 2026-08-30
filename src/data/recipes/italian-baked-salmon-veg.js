import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'italian-baked-salmon-veg',
  name: 'Italian Baked Salmon with Vegetables',
  cuisine: 'Mediterranean',
  mealType: 'Dinner',
  goals: ['b12_d3', 'eyesight', 'hair_growth'],
  timeMinutes: 25,
  servings: 1,
  tags: ['non-veg'],
  diet: 'fish',
  nutrition: { calories: 410, protein: 32, carbs: 18, fat: 22 },
  ingredients: [
    { name: 'Salmon fillet', qty: 180, unit: 'g' },
    { name: 'Cherry tomatoes and zucchini', qty: 1, unit: 'cup' },
    { name: 'Olive oil and basil', qty: 1, unit: 'tbsp' },
  ],
  steps: [
    'Toss vegetables in olive oil, arrange around the salmon on a tray.',
    'Bake at 200°C for 15 minutes until salmon flakes easily.',
    'Finish with fresh basil.',
  ],
})
