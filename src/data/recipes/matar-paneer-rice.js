import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'matar-paneer-rice',
  name: 'Matar Paneer with Brown Rice',
  cuisine: 'North Indian',
  mealType: 'Lunch',
  goals: ['strength', 'eyesight'],
  timeMinutes: 25,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 410, protein: 17, carbs: 42, fat: 18 },
  ingredients: [
    { name: 'Paneer, cubed', qty: 100, unit: 'g' },
    { name: 'Green peas', qty: 0.75, unit: 'cup' },
    { name: 'Tomato puree', qty: 0.5, unit: 'cup' },
    { name: 'Onion, chopped', qty: 0.25, unit: 'medium' },
    { name: 'Garam masala', qty: 0.5, unit: 'tsp' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Sauté onion until soft, add tomato puree and garam masala, cook 5 minutes.',
    'Add peas, simmer 5 minutes until tender.',
    'Add paneer cubes, warm through 2 minutes.',
    'Pack hot with rice separately.',
  ],
})
