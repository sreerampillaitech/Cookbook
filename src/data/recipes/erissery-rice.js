import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'erissery-rice',
  name: 'Pumpkin Erissery with Brown Rice',
  cuisine: 'South Indian',
  mealType: 'Lunch',
  goals: ['eyesight', 'weight_loss'],
  timeMinutes: 25,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 320, protein: 9, carbs: 54, fat: 8 },
  ingredients: [
    { name: 'Pumpkin, cubed', qty: 1.5, unit: 'cup' },
    { name: 'Black-eyed peas, boiled', qty: 0.5, unit: 'cup' },
    { name: 'Coconut, grated', qty: 0.25, unit: 'cup' },
    { name: 'Cumin seeds', qty: 0.5, unit: 'tsp' },
    { name: 'Mustard seeds and curry leaves', qty: 1, unit: 'tsp' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Boil pumpkin until soft, mash slightly.',
    'Add boiled black-eyed peas.',
    'Blend coconut and cumin coarsely, stir in, simmer 5 minutes.',
    'Temper mustard seeds and curry leaves, pour over, pack with rice.',
  ],
})
