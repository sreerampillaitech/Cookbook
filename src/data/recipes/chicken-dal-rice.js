import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'chicken-dal-rice',
  name: 'Chicken Dal with Brown Rice',
  cuisine: 'North Indian',
  mealType: 'Dinner',
  goals: ['strength', 'b12_d3'],
  timeMinutes: 35,
  servings: 1,
  tags: ['non-veg', 'heat-retaining'],
  diet: 'chicken',
  nutrition: { calories: 430, protein: 34, carbs: 40, fat: 16 },
  ingredients: [
    { name: 'Chicken, boneless, cubed', qty: 150, unit: 'g' },
    { name: 'Toor dal, cooked', qty: 0.5, unit: 'cup' },
    { name: 'Onion and tomato', qty: 0.5, unit: 'cup' },
    { name: 'Garam masala', qty: 0.5, unit: 'tsp' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Sauté onion and tomato with garam masala.',
    'Add chicken, cook until sealed on all sides.',
    'Add cooked dal and a little water, simmer 15 minutes until chicken is cooked through.',
    'Serve with rice.',
  ],
})
