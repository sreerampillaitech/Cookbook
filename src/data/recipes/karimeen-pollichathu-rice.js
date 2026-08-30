import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'karimeen-pollichathu-rice',
  name: 'Karimeen Pollichathu with Rice',
  cuisine: 'Kerala',
  mealType: 'Dinner',
  goals: ['b12_d3', 'eyesight'],
  timeMinutes: 35,
  servings: 1,
  tags: ['non-veg'],
  diet: 'fish',
  nutrition: { calories: 370, protein: 30, carbs: 26, fat: 18 },
  ingredients: [
    { name: 'Pearl spot fish (karimeen)', qty: 200, unit: 'g' },
    { name: 'Onion and tomato, chopped', qty: 0.5, unit: 'cup' },
    { name: 'Coriander and chilli powder', qty: 1.5, unit: 'tsp' },
    { name: 'Banana leaf (or foil)', qty: 1, unit: 'piece' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Marinate the cleaned fish with spices.',
    'Prepare a thick onion-tomato masala, coat the fish generously.',
    'Wrap in banana leaf, pan-roast on low heat 8 minutes per side.',
    'Serve with rice.',
  ],
})
