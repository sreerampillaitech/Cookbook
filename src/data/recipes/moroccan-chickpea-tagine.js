import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'moroccan-chickpea-tagine',
  name: 'Moroccan Chickpea Tagine',
  cuisine: 'Middle Eastern',
  mealType: 'Lunch',
  goals: ['weight_loss', 'strength'],
  timeMinutes: 30,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 380, protein: 15, carbs: 60, fat: 9 },
  ingredients: [
    { name: 'Chickpeas, boiled', qty: 1, unit: 'cup' },
    { name: 'Tomato, chopped', qty: 1, unit: 'medium' },
    { name: 'Onion, chopped', qty: 0.25, unit: 'medium' },
    { name: 'Cumin, cinnamon, and paprika', qty: 1, unit: 'tsp' },
    { name: 'Dried apricots, chopped', qty: 3, unit: 'whole' },
  ],
  steps: [
    'Sauté onion until soft, add spices, cook 30 seconds.',
    'Add tomato, chickpeas, apricots, and a little water, simmer 15 minutes.',
    'Pack hot in an insulated container.',
  ],
})
