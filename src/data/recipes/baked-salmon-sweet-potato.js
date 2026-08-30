import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'baked-salmon-sweet-potato',
  name: 'Baked Salmon with Sweet Potato',
  cuisine: 'Continental',
  mealType: 'Dinner',
  goals: ['b12_d3', 'eyesight', 'hair_growth'],
  timeMinutes: 30,
  servings: 1,
  tags: ['non-veg'],
  diet: 'fish',
  nutrition: { calories: 420, protein: 32, carbs: 30, fat: 20 },
  ingredients: [
    { name: 'Salmon fillet', qty: 180, unit: 'g' },
    { name: 'Sweet potato, cubed', qty: 1, unit: 'medium' },
    { name: 'Olive oil', qty: 1, unit: 'tbsp' },
    { name: 'Black pepper and herbs', qty: 1, unit: 'pinch' },
  ],
  steps: [
    'Toss sweet potato in olive oil, roast at 200°C for 15 minutes.',
    'Add the salmon to the tray, season, bake 12-15 more minutes.',
    'Serve together.',
  ],
})
