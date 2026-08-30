import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'kalan-rice',
  name: 'Kalan (Curd Curry) with Brown Rice',
  cuisine: 'South Indian',
  mealType: 'Lunch',
  goals: ['weight_loss'],
  timeMinutes: 20,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 280, protein: 9, carbs: 46, fat: 7 },
  ingredients: [
    { name: 'Raw banana or yam, cubed', qty: 1, unit: 'cup' },
    { name: 'Yoghurt, whisked', qty: 0.5, unit: 'cup' },
    { name: 'Coconut, grated', qty: 0.25, unit: 'cup' },
    { name: 'Turmeric powder', qty: 0.25, unit: 'tsp' },
    { name: 'Mustard seeds and curry leaves', qty: 1, unit: 'tsp' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Boil the raw banana or yam with turmeric until tender.',
    'Blend coconut coarsely, stir in.',
    'Remove from heat, whisk in yoghurt (do not boil after adding).',
    'Temper mustard seeds and curry leaves, pour over, pack with rice.',
  ],
})
