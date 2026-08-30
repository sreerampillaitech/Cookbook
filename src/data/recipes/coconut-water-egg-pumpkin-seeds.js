import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'coconut-water-egg-pumpkin-seeds',
  name: 'Coconut Water with Boiled Egg and Pumpkin Seeds',
  cuisine: 'Continental',
  mealType: 'Snack',
  goals: ['b12_d3', 'strength'],
  timeMinutes: 5,
  servings: 1,
  tags: ['quick'],
  diet: 'egg',
  nutrition: { calories: 160, protein: 9, carbs: 10, fat: 9 },
  ingredients: [
    { name: 'Coconut water', qty: 1, unit: 'cup' },
    { name: 'Egg, boiled', qty: 1, unit: 'whole' },
    { name: 'Pumpkin seeds', qty: 1, unit: 'tbsp' },
  ],
  steps: [
    'Boil the egg ahead of time and keep on hand.',
    'Serve the egg with pumpkin seeds and a glass of coconut water.',
  ],
})
