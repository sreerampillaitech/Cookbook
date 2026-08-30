import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'fish-tacos-whole-wheat',
  name: 'Fish Tacos (Whole Wheat Tortilla)',
  cuisine: 'Continental',
  mealType: 'Dinner',
  goals: ['b12_d3', 'weight_loss'],
  timeMinutes: 25,
  servings: 1,
  tags: ['non-veg'],
  diet: 'fish',
  nutrition: { calories: 380, protein: 30, carbs: 36, fat: 14 },
  ingredients: [
    { name: 'White fish fillet, cubed', qty: 180, unit: 'g' },
    { name: 'Cumin and paprika', qty: 1, unit: 'tsp' },
    { name: 'Cabbage slaw', qty: 0.5, unit: 'cup' },
    { name: 'Whole wheat tortillas', qty: 2, unit: 'whole' },
    { name: 'Lime wedge', qty: 1, unit: 'whole' },
  ],
  steps: [
    'Season fish with cumin and paprika, pan-sear until just cooked, 4 minutes per side.',
    'Warm the tortillas.',
    'Fill with fish and cabbage slaw, finish with a squeeze of lime.',
  ],
})
