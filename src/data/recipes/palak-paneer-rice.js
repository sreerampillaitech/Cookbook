import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'palak-paneer-rice',
  name: 'Palak Paneer with Brown Rice',
  cuisine: 'North Indian',
  mealType: 'Lunch',
  goals: ['strength', 'eyesight'],
  timeMinutes: 30,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 420, protein: 18, carbs: 40, fat: 20 },
  ingredients: [
    { name: 'Paneer, cubed', qty: 100, unit: 'g' },
    { name: 'Spinach, blanched and pureed', qty: 2, unit: 'cup' },
    { name: 'Onion, chopped', qty: 0.5, unit: 'medium' },
    { name: 'Tomato, chopped', qty: 1, unit: 'medium' },
    { name: 'Ginger-garlic paste', qty: 1, unit: 'tsp' },
    { name: 'Garam masala', qty: 0.5, unit: 'tsp' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Sauté onion until golden, add ginger-garlic paste for 30 seconds.',
    'Add tomato and garam masala, cook until soft and pulpy.',
    'Stir in the spinach puree, simmer 3 minutes.',
    'Add paneer cubes, simmer 2 more minutes, pack hot with rice separately.',
  ],
})
