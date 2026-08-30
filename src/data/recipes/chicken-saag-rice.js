import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'chicken-saag-rice',
  name: 'Chicken Saag with Brown Rice',
  cuisine: 'North Indian',
  mealType: 'Dinner',
  goals: ['strength', 'eyesight'],
  timeMinutes: 30,
  servings: 1,
  tags: ['non-veg', 'heat-retaining'],
  diet: 'chicken',
  nutrition: { calories: 410, protein: 34, carbs: 32, fat: 16 },
  ingredients: [
    { name: 'Chicken, boneless, cubed', qty: 200, unit: 'g' },
    { name: 'Spinach, pureed', qty: 2, unit: 'cup' },
    { name: 'Onion, chopped', qty: 0.5, unit: 'medium' },
    { name: 'Garam masala', qty: 0.5, unit: 'tsp' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Sauté onion until golden, add garam masala.',
    'Add chicken, cook until sealed.',
    'Stir in spinach puree, simmer 12 minutes until chicken is cooked through.',
    'Serve with rice.',
  ],
})
