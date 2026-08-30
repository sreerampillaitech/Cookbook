import { createRecipe } from './createRecipe'

export default createRecipe({
    id: 'rajma-chawal',
    name: 'Rajma Chawal',
    cuisine: 'North Indian',
    mealType: 'Lunch',
    goals: ['strength', 'weight_loss'],
    timeMinutes: 40,
    servings: 1,
    tags: ['vegetarian', 'heat-retaining'],
    diet: 'veg',
    nutrition: { calories: 480, protein: 20, carbs: 78, fat: 8 },
    ingredients: [
      { name: 'Kidney beans, soaked and boiled', qty: 1, unit: 'cup' },
      { name: 'Onion, chopped', qty: 0.5, unit: 'medium' },
      { name: 'Tomato puree', qty: 0.5, unit: 'cup' },
      { name: 'Ginger-garlic paste', qty: 1, unit: 'tsp' },
      { name: 'Garam masala', qty: 0.5, unit: 'tsp' },
      { name: 'Cooked rice', qty: 1, unit: 'cup' },
      { name: 'Ghee', qty: 1, unit: 'tsp' },
    ],
    steps: [
      'Heat ghee, sauté onion until golden, add ginger-garlic paste for 30 seconds.',
      'Add tomato puree and garam masala, cook until oil separates.',
      'Add boiled kidney beans with a splash of their cooking water, simmer 15 minutes, mashing a few beans to thicken.',
      'Pack hot over rice in an insulated tiffin to keep warm through the day.',
    ],
  })
