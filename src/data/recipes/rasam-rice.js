import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'rasam-rice',
  name: 'Rasam with Brown Rice',
  cuisine: 'South Indian',
  mealType: 'Lunch',
  goals: ['weight_loss', 'eyesight'],
  timeMinutes: 25,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 300, protein: 8, carbs: 55, fat: 5 },
  ingredients: [
    { name: 'Toor dal, cooked and mashed', qty: 0.25, unit: 'cup' },
    { name: 'Tomato, chopped', qty: 1, unit: 'medium' },
    { name: 'Tamarind pulp', qty: 1, unit: 'tbsp' },
    { name: 'Rasam powder', qty: 1, unit: 'tsp' },
    { name: 'Mustard seeds and curry leaves', qty: 1, unit: 'tsp' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Boil tomato, tamarind pulp, and rasam powder in 2 cups water for 8 minutes.',
    'Stir in the mashed dal, simmer 5 minutes.',
    'Temper mustard seeds and curry leaves in oil, pour over the rasam.',
    'Pack hot with rice separately.',
  ],
})
