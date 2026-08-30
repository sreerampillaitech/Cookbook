import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'olan-rice',
  name: 'Olan with Brown Rice',
  cuisine: 'South Indian',
  mealType: 'Lunch',
  goals: ['weight_loss'],
  timeMinutes: 25,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 290, protein: 6, carbs: 50, fat: 7 },
  ingredients: [
    { name: 'Pumpkin, cubed', qty: 1, unit: 'cup' },
    { name: 'Black-eyed peas, boiled', qty: 0.5, unit: 'cup' },
    { name: 'Coconut milk, thin', qty: 0.5, unit: 'cup' },
    { name: 'Green chilli, slit', qty: 1, unit: 'whole' },
    { name: 'Curry leaves', qty: 1, unit: 'sprig' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Boil pumpkin with green chilli until just tender.',
    'Add boiled black-eyed peas and coconut milk, simmer gently without boiling hard.',
    'Finish with curry leaves and a drizzle of coconut oil.',
    'Pack with rice separately.',
  ],
})
