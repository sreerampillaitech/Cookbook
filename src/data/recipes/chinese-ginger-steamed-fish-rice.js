import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'chinese-ginger-steamed-fish-rice',
  name: 'Chinese Ginger Steamed Fish with Rice',
  cuisine: 'Chinese',
  mealType: 'Dinner',
  goals: ['b12_d3', 'eyesight'],
  timeMinutes: 20,
  servings: 1,
  tags: ['non-veg'],
  diet: 'fish',
  nutrition: { calories: 330, protein: 32, carbs: 30, fat: 10 },
  ingredients: [
    { name: 'White fish fillet', qty: 200, unit: 'g' },
    { name: 'Ginger, julienned', qty: 1.5, unit: 'tbsp' },
    { name: 'Soy sauce', qty: 1, unit: 'tbsp' },
    { name: 'Spring onion, sliced', qty: 1, unit: 'stalk' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Lay the fish on a plate, top generously with ginger.',
    'Steam for 8-10 minutes until just cooked through.',
    'Drizzle with soy sauce, top with spring onion, serve with rice.',
  ],
})
