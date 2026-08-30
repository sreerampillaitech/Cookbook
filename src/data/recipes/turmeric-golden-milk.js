import { createRecipe } from './createRecipe'

export default createRecipe({
    id: 'turmeric-golden-milk',
    name: 'Turmeric Golden Milk',
    cuisine: 'North Indian',
    mealType: 'Snack',
    goals: ['grey_hair', 'strength'],
    timeMinutes: 6,
    servings: 1,
    tags: ['before-bed', 'quick'],
    diet: 'veg',
    nutrition: { calories: 130, protein: 6, carbs: 12, fat: 7 },
    ingredients: [
      { name: 'Milk (or plant milk)', qty: 1, unit: 'cup' },
      { name: 'Turmeric powder', qty: 0.5, unit: 'tsp' },
      { name: 'Black pepper', qty: 1, unit: 'pinch' },
      { name: 'Ghee', qty: 0.5, unit: 'tsp' },
      { name: 'Honey', qty: 1, unit: 'tsp' },
    ],
    steps: [
      'Warm the milk in a small pan, do not boil.',
      'Whisk in turmeric, black pepper, and ghee.',
      'Simmer gently for 2 minutes to let the turmeric infuse.',
      'Remove from heat, stir in honey once slightly cooled, and drink warm before bed.',
    ],
  })
