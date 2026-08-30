import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'chana-masala-rice',
  name: 'Chana Masala with Brown Rice',
  cuisine: 'North Indian',
  mealType: 'Lunch',
  goals: ['weight_loss', 'strength'],
  timeMinutes: 30,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 400, protein: 16, carbs: 60, fat: 9 },
  ingredients: [
    { name: 'Chickpeas, boiled', qty: 1.5, unit: 'cup' },
    { name: 'Onion, chopped', qty: 0.5, unit: 'medium' },
    { name: 'Tomato, chopped', qty: 1, unit: 'medium' },
    { name: 'Ginger-garlic paste', qty: 1, unit: 'tsp' },
    { name: 'Chana masala powder', qty: 1, unit: 'tsp' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Sauté onion until golden, add ginger-garlic paste.',
    'Add tomato and chana masala powder, cook until pulpy.',
    'Add chickpeas with a little water, simmer 10 minutes, mashing a few for body.',
    'Pack hot with rice separately.',
  ],
})
