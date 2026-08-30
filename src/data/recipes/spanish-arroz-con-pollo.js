import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'spanish-arroz-con-pollo',
  name: 'Spanish Chicken and Rice (Arroz con Pollo)',
  cuisine: 'Mediterranean',
  mealType: 'Dinner',
  goals: ['strength'],
  timeMinutes: 35,
  servings: 1,
  tags: ['non-veg', 'heat-retaining'],
  diet: 'chicken',
  nutrition: { calories: 430, protein: 32, carbs: 46, fat: 14 },
  ingredients: [
    { name: 'Chicken, curry cut', qty: 200, unit: 'g' },
    { name: 'Rice', qty: 0.75, unit: 'cup' },
    { name: 'Bell pepper and tomato', qty: 0.5, unit: 'cup' },
    { name: 'Paprika and saffron', qty: 1, unit: 'tsp' },
  ],
  steps: [
    'Sauté chicken until browned, set aside.',
    'Sauté bell pepper and tomato with paprika and saffron.',
    'Add rice and chicken back in with enough water, cover and simmer 18 minutes until rice is cooked.',
  ],
})
