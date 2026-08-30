import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'egyptian-grilled-fish-rice',
  name: 'Egyptian Grilled Fish with Rice',
  cuisine: 'Middle Eastern',
  mealType: 'Dinner',
  goals: ['b12_d3', 'eyesight'],
  timeMinutes: 25,
  servings: 1,
  tags: ['non-veg'],
  diet: 'fish',
  nutrition: { calories: 350, protein: 32, carbs: 30, fat: 12 },
  ingredients: [
    { name: 'White fish fillet', qty: 200, unit: 'g' },
    { name: 'Cumin, coriander, and garlic', qty: 1.5, unit: 'tsp' },
    { name: 'Lemon juice', qty: 1, unit: 'tbsp' },
    { name: 'Cooked rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Marinate fish in spices, garlic, and lemon juice for 10 minutes.',
    'Grill or pan-sear 4 minutes per side.',
    'Serve with rice.',
  ],
})
