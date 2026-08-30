import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'chinese-steamed-fish-bok-choy',
  name: 'Chinese Steamed Fish with Bok Choy',
  cuisine: 'Chinese',
  mealType: 'Dinner',
  goals: ['b12_d3', 'eyesight'],
  timeMinutes: 20,
  servings: 1,
  tags: ['non-veg'],
  diet: 'fish',
  nutrition: { calories: 320, protein: 32, carbs: 10, fat: 14 },
  ingredients: [
    { name: 'White fish fillet', qty: 200, unit: 'g' },
    { name: 'Ginger, julienned', qty: 1, unit: 'tbsp' },
    { name: 'Soy sauce and sesame oil', qty: 1, unit: 'tbsp' },
    { name: 'Bok choy', qty: 1.5, unit: 'cup' },
    { name: 'Spring onion, sliced', qty: 1, unit: 'stalk' },
  ],
  steps: [
    'Steam the fish with ginger for 8-10 minutes until just cooked.',
    'Steam bok choy alongside for the last 3 minutes.',
    'Drizzle with soy sauce and sesame oil, top with spring onion.',
  ],
})
