import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'egg-curry-kerala-rice',
  name: 'Egg Curry Kerala Style with Brown Rice',
  cuisine: 'South Indian',
  mealType: 'Lunch',
  goals: ['b12_d3', 'strength'],
  timeMinutes: 25,
  servings: 1,
  tags: ['heat-retaining'],
  diet: 'egg',
  nutrition: { calories: 400, protein: 18, carbs: 40, fat: 20 },
  ingredients: [
    { name: 'Eggs, boiled', qty: 3, unit: 'whole' },
    { name: 'Onion, sliced', qty: 0.5, unit: 'medium' },
    { name: 'Tomato, chopped', qty: 0.5, unit: 'medium' },
    { name: 'Coconut milk', qty: 0.5, unit: 'cup' },
    { name: 'Kerala garam masala', qty: 0.5, unit: 'tsp' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Sauté onion until golden, add tomato and spices, cook until soft.',
    'Add coconut milk, simmer gently 5 minutes without boiling hard.',
    'Halve the boiled eggs and nestle into the curry.',
    'Pack hot with rice separately.',
  ],
})
