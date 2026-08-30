import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'chicken-stew-rice',
  name: 'Kerala Chicken Stew with Rice',
  cuisine: 'Kerala',
  mealType: 'Dinner',
  goals: ['strength'],
  timeMinutes: 35,
  servings: 1,
  tags: ['non-veg'],
  diet: 'chicken',
  nutrition: { calories: 400, protein: 32, carbs: 34, fat: 16 },
  ingredients: [
    { name: 'Chicken, curry cut', qty: 200, unit: 'g' },
    { name: 'Potato, cubed', qty: 0.5, unit: 'medium' },
    { name: 'Coconut milk, thin', qty: 0.75, unit: 'cup' },
    { name: 'Whole spices (cinnamon, cloves, cardamom)', qty: 1, unit: 'pinch' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Sauté whole spices briefly in a little oil.',
    'Add chicken and potato, cook 5 minutes.',
    'Add coconut milk and a little water, simmer 20 minutes until chicken is cooked through.',
    'Serve with rice.',
  ],
})
