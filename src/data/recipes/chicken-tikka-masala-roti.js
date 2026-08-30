import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'chicken-tikka-masala-roti',
  name: 'Chicken Tikka Masala with Roti',
  cuisine: 'North Indian',
  mealType: 'Dinner',
  goals: ['strength'],
  timeMinutes: 35,
  servings: 1,
  tags: ['non-veg'],
  diet: 'chicken',
  nutrition: { calories: 440, protein: 36, carbs: 32, fat: 20 },
  ingredients: [
    { name: 'Chicken breast, cubed and grilled', qty: 200, unit: 'g' },
    { name: 'Tomato puree', qty: 0.75, unit: 'cup' },
    { name: 'Yoghurt', qty: 2, unit: 'tbsp' },
    { name: 'Tikka masala spice mix', qty: 1, unit: 'tsp' },
    { name: 'Whole wheat roti', qty: 2, unit: 'whole' },
  ],
  steps: [
    'Marinate and grill the chicken until charred at the edges.',
    'Simmer tomato puree with spice mix for 8 minutes.',
    'Stir in yoghurt off the heat, then add the grilled chicken.',
    'Serve with roti.',
  ],
})
