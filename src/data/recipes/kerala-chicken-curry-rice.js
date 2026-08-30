import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'kerala-chicken-curry-rice',
  name: 'Kerala Chicken Curry with Brown Rice',
  cuisine: 'Kerala',
  mealType: 'Dinner',
  goals: ['strength', 'b12_d3'],
  timeMinutes: 40,
  servings: 1,
  tags: ['non-veg', 'heat-retaining'],
  diet: 'chicken',
  nutrition: { calories: 420, protein: 36, carbs: 30, fat: 18 },
  ingredients: [
    { name: 'Chicken, curry cut', qty: 200, unit: 'g' },
    { name: 'Onion, sliced', qty: 1, unit: 'medium' },
    { name: 'Tomato, chopped', qty: 1, unit: 'medium' },
    { name: 'Kerala garam masala', qty: 1, unit: 'tsp' },
    { name: 'Coconut oil', qty: 1, unit: 'tbsp' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Sauté onion until deep golden, add tomato and spices, cook until pulpy.',
    'Add chicken, coat well in the masala.',
    'Add a little water, cover and simmer 20 minutes until chicken is tender.',
    'Serve with rice.',
  ],
})
