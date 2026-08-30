import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'kerala-egg-roast-appam',
  name: 'Kerala Egg Roast with Appam',
  cuisine: 'Kerala',
  mealType: 'Dinner',
  goals: ['b12_d3', 'strength'],
  timeMinutes: 20,
  servings: 1,
  tags: ['heat-retaining'],
  diet: 'egg',
  nutrition: { calories: 380, protein: 16, carbs: 40, fat: 18 },
  ingredients: [
    { name: 'Eggs, boiled', qty: 3, unit: 'whole' },
    { name: 'Onion, sliced', qty: 1, unit: 'medium' },
    { name: 'Kashmiri chilli powder', qty: 1, unit: 'tsp' },
    { name: 'Curry leaves', qty: 1, unit: 'sprig' },
    { name: 'Appam', qty: 2, unit: 'whole' },
  ],
  steps: [
    'Sauté onion on high heat until deeply caramelized, 8 minutes.',
    'Add curry leaves and chilli powder, cook 1 minute.',
    'Halve the boiled eggs and coat generously in the onion masala.',
    'Serve with warm appam.',
  ],
})
