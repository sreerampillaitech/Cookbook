import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'boiled-egg-cucumber-slices',
  name: 'Boiled Egg with Cucumber Slices',
  cuisine: 'Continental',
  mealType: 'Snack',
  goals: ['b12_d3', 'weight_loss'],
  timeMinutes: 5,
  servings: 1,
  tags: ['quick'],
  diet: 'egg',
  nutrition: { calories: 110, protein: 7, carbs: 4, fat: 6 },
  ingredients: [
    { name: 'Egg, boiled', qty: 1, unit: 'whole' },
    { name: 'Cucumber, sliced', qty: 0.5, unit: 'medium' },
  ],
  steps: [
    'Slice the boiled egg and cucumber.',
    'Season with a pinch of salt and pepper if desired.',
  ],
})
