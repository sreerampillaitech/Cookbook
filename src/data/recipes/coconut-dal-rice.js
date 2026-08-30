import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'coconut-dal-rice',
  name: 'Coconut Dal with Brown Rice',
  cuisine: 'South Indian',
  mealType: 'Lunch',
  goals: ['weight_loss', 'strength'],
  timeMinutes: 25,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 370, protein: 15, carbs: 54, fat: 10 },
  ingredients: [
    { name: 'Moong dal, cooked', qty: 0.75, unit: 'cup' },
    { name: 'Coconut, grated', qty: 0.25, unit: 'cup' },
    { name: 'Turmeric powder', qty: 0.25, unit: 'tsp' },
    { name: 'Mustard seeds and curry leaves', qty: 1, unit: 'tsp' },
    { name: 'Green chilli', qty: 1, unit: 'whole' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Cook dal with turmeric and green chilli until soft.',
    'Blend in grated coconut, simmer 3 minutes.',
    'Temper mustard seeds and curry leaves in oil, pour over the dal.',
    'Pack hot with rice separately.',
  ],
})
