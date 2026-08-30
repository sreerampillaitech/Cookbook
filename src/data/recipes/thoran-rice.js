import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'thoran-rice',
  name: 'Beans Thoran with Brown Rice',
  cuisine: 'South Indian',
  mealType: 'Lunch',
  goals: ['weight_loss', 'eyesight'],
  timeMinutes: 20,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 310, protein: 8, carbs: 52, fat: 8 },
  ingredients: [
    { name: 'French beans, finely chopped', qty: 2, unit: 'cup' },
    { name: 'Coconut, grated', qty: 0.25, unit: 'cup' },
    { name: 'Turmeric powder', qty: 0.25, unit: 'tsp' },
    { name: 'Mustard seeds and curry leaves', qty: 1, unit: 'tsp' },
    { name: 'Green chilli, chopped', qty: 1, unit: 'whole' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Temper mustard seeds and curry leaves in oil.',
    'Add green chilli and beans, stir fry 3 minutes.',
    'Add turmeric and grated coconut, cover and cook 8 minutes until beans are tender.',
    'Pack hot with rice separately.',
  ],
})
