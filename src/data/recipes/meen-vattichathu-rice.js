import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'meen-vattichathu-rice',
  name: 'Meen Vattichathu (Red Fish Curry) with Rice',
  cuisine: 'Kerala',
  mealType: 'Dinner',
  goals: ['b12_d3', 'eyesight'],
  timeMinutes: 30,
  servings: 1,
  tags: ['non-veg'],
  diet: 'fish',
  nutrition: { calories: 360, protein: 30, carbs: 26, fat: 16 },
  ingredients: [
    { name: 'Fish steaks', qty: 200, unit: 'g' },
    { name: 'Kudampuli, soaked', qty: 2, unit: 'pieces' },
    { name: 'Shallots, sliced', qty: 4, unit: 'whole' },
    { name: 'Kashmiri chilli powder', qty: 1.5, unit: 'tsp' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Sauté shallots until soft, add chilli powder.',
    'Add kudampuli water and fish, simmer gently 15 minutes.',
    'Rest to let the deep red gravy thicken, serve with rice.',
  ],
})
