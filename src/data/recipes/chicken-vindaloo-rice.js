import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'chicken-vindaloo-rice',
  name: 'Chicken Vindaloo with Brown Rice',
  cuisine: 'North Indian',
  mealType: 'Dinner',
  goals: ['strength'],
  timeMinutes: 40,
  servings: 1,
  tags: ['non-veg'],
  diet: 'chicken',
  nutrition: { calories: 420, protein: 34, carbs: 30, fat: 18 },
  ingredients: [
    { name: 'Chicken, curry cut', qty: 200, unit: 'g' },
    { name: 'Vinegar', qty: 1, unit: 'tbsp' },
    { name: 'Kashmiri chilli powder', qty: 1.5, unit: 'tsp' },
    { name: 'Garlic and ginger paste', qty: 1, unit: 'tbsp' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Marinate chicken in vinegar, chilli powder, and garlic-ginger paste for 20 minutes.',
    'Sauté onion until golden, add the marinated chicken.',
    'Add a little water, simmer 25 minutes until tender.',
    'Serve with rice.',
  ],
})
