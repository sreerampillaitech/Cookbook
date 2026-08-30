import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'pan-seared-fish-broccoli',
  name: 'Pan Seared Fish with Steamed Broccoli',
  cuisine: 'Continental',
  mealType: 'Dinner',
  goals: ['b12_d3', 'eyesight'],
  timeMinutes: 20,
  servings: 1,
  tags: ['non-veg'],
  diet: 'fish',
  nutrition: { calories: 340, protein: 32, carbs: 10, fat: 18 },
  ingredients: [
    { name: 'White fish fillet', qty: 180, unit: 'g' },
    { name: 'Broccoli florets', qty: 1.5, unit: 'cup' },
    { name: 'Garlic, minced', qty: 1, unit: 'clove' },
    { name: 'Olive oil', qty: 1, unit: 'tbsp' },
    { name: 'Lemon wedge', qty: 1, unit: 'whole' },
  ],
  steps: [
    'Steam the broccoli until just tender, 5 minutes.',
    'Season the fish, sear in olive oil with garlic, 3-4 minutes per side.',
    'Serve with broccoli and a squeeze of lemon.',
  ],
})
