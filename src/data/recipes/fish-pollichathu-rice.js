import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'fish-pollichathu-rice',
  name: 'Kerala Fish Pollichathu with Rice',
  cuisine: 'Kerala',
  mealType: 'Dinner',
  goals: ['b12_d3', 'eyesight'],
  timeMinutes: 35,
  servings: 1,
  tags: ['non-veg'],
  diet: 'fish',
  nutrition: { calories: 370, protein: 30, carbs: 26, fat: 18 },
  ingredients: [
    { name: 'Fish fillet (pearl spot or similar)', qty: 200, unit: 'g' },
    { name: 'Onion and shallot, sliced', qty: 0.5, unit: 'cup' },
    { name: 'Kashmiri chilli and coriander powder', qty: 1.5, unit: 'tsp' },
    { name: 'Banana leaf (or foil)', qty: 1, unit: 'piece' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Marinate the fish briefly in spices.',
    'Sauté onion and shallot with the marinade until fragrant, coat the fish in this masala.',
    'Wrap in banana leaf or foil, pan-roast on low heat 8 minutes per side.',
    'Serve with rice.',
  ],
})
