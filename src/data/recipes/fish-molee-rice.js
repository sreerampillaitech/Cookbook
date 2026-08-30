import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'fish-molee-rice',
  name: 'Kerala Fish Molee with Rice',
  cuisine: 'Kerala',
  mealType: 'Dinner',
  goals: ['b12_d3', 'eyesight'],
  timeMinutes: 30,
  servings: 1,
  tags: ['non-veg'],
  diet: 'fish',
  nutrition: { calories: 360, protein: 30, carbs: 26, fat: 16 },
  ingredients: [
    { name: 'White fish fillets', qty: 200, unit: 'g' },
    { name: 'Coconut milk, thin', qty: 0.75, unit: 'cup' },
    { name: 'Onion, sliced', qty: 0.5, unit: 'medium' },
    { name: 'Green chilli and ginger', qty: 1, unit: 'tbsp' },
    { name: 'Curry leaves', qty: 1, unit: 'sprig' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Sauté onion, green chilli, and ginger until soft.',
    'Add fish and coconut milk, simmer gently without boiling hard, 12 minutes.',
    'Finish with curry leaves, serve with rice.',
  ],
})
