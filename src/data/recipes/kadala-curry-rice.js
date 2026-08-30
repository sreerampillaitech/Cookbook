import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'kadala-curry-rice',
  name: 'Kerala Kadala Curry with Brown Rice',
  cuisine: 'South Indian',
  mealType: 'Lunch',
  goals: ['weight_loss', 'strength'],
  timeMinutes: 30,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 380, protein: 15, carbs: 58, fat: 9 },
  ingredients: [
    { name: 'Black chickpeas, soaked and boiled', qty: 1, unit: 'cup' },
    { name: 'Coconut, grated', qty: 0.25, unit: 'cup' },
    { name: 'Onion, chopped', qty: 0.5, unit: 'medium' },
    { name: 'Coriander powder', qty: 1, unit: 'tsp' },
    { name: 'Curry leaves', qty: 1, unit: 'sprig' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Dry roast grated coconut until golden, blend to a paste.',
    'Sauté onion and curry leaves, add coriander powder.',
    'Add boiled chickpeas and coconut paste with a little water, simmer 10 minutes.',
    'Pack hot with rice separately.',
  ],
})
