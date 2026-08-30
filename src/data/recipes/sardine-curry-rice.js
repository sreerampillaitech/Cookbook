import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'sardine-curry-rice',
  name: 'Kerala Sardine Curry (Mathi Curry) with Brown Rice',
  cuisine: 'Kerala',
  mealType: 'Dinner',
  goals: ['b12_d3', 'eyesight', 'hair_growth'],
  timeMinutes: 35,
  servings: 1,
  tags: ['non-veg'],
  diet: 'fish',
  nutrition: { calories: 380, protein: 32, carbs: 28, fat: 16 },
  ingredients: [
    { name: 'Sardines, cleaned', qty: 200, unit: 'g' },
    { name: 'Kudampuli, soaked', qty: 2, unit: 'pieces' },
    { name: 'Shallots, sliced', qty: 4, unit: 'whole' },
    { name: 'Coriander and chilli powder', qty: 1.5, unit: 'tsp' },
    { name: 'Curry leaves', qty: 1, unit: 'sprig' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Sauté shallots and curry leaves in coconut oil.',
    'Add spices, cook briefly, add kudampuli water.',
    'Add sardines and simmer gently 12 minutes.',
    'Rest before serving with rice.',
  ],
})
