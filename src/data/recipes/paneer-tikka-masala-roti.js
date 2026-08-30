import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'paneer-tikka-masala-roti',
  name: 'Paneer Tikka Masala with Roti',
  cuisine: 'North Indian',
  mealType: 'Lunch',
  goals: ['strength'],
  timeMinutes: 30,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 440, protein: 19, carbs: 34, fat: 24 },
  ingredients: [
    { name: 'Paneer, cubed and grilled', qty: 100, unit: 'g' },
    { name: 'Onion, cubed', qty: 0.5, unit: 'medium' },
    { name: 'Bell pepper, cubed', qty: 0.5, unit: 'medium' },
    { name: 'Tomato puree', qty: 0.5, unit: 'cup' },
    { name: 'Tikka masala spice mix', qty: 1, unit: 'tsp' },
    { name: 'Whole wheat roti', qty: 2, unit: 'whole' },
  ],
  steps: [
    'Pan-sear paneer cubes until lightly charred, set aside.',
    'Sauté onion and bell pepper for 3 minutes.',
    'Add tomato puree and tikka spice, simmer 5 minutes.',
    'Fold in the grilled paneer, pack hot with roti.',
  ],
})
