import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'mackerel-curry-rice',
  name: 'Kerala Mackerel Curry (Ayala Curry) with Brown Rice',
  cuisine: 'Kerala',
  mealType: 'Dinner',
  goals: ['b12_d3', 'eyesight', 'hair_growth'],
  timeMinutes: 40,
  servings: 1,
  tags: ['non-veg'],
  diet: 'fish',
  nutrition: { calories: 400, protein: 34, carbs: 30, fat: 18 },
  ingredients: [
    { name: 'Mackerel, cleaned and cut', qty: 200, unit: 'g' },
    { name: 'Kudampuli, soaked', qty: 2, unit: 'pieces' },
    { name: 'Onion, sliced', qty: 0.5, unit: 'medium' },
    { name: 'Kashmiri chilli powder', qty: 1, unit: 'tsp' },
    { name: 'Curry leaves', qty: 1, unit: 'sprig' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Sauté onion and curry leaves in coconut oil until soft.',
    'Add chilli powder, cook 30 seconds, then add kudampuli with its soaking water.',
    'Add fish and enough water to just cover, simmer gently 15 minutes without stirring hard.',
    'Rest 5 minutes before serving with rice.',
  ],
})
