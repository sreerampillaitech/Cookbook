import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'korean-doenjang-jjigae',
  name: 'Korean Doenjang Jjigae (Egg and Tofu Stew)',
  cuisine: 'Korean',
  mealType: 'Dinner',
  goals: ['b12_d3', 'strength'],
  timeMinutes: 20,
  servings: 1,
  tags: ['heat-retaining'],
  diet: 'egg',
  nutrition: { calories: 320, protein: 20, carbs: 22, fat: 16 },
  ingredients: [
    { name: 'Doenjang (Korean soybean paste)', qty: 1.5, unit: 'tbsp' },
    { name: 'Tofu, cubed', qty: 0.75, unit: 'cup' },
    { name: 'Egg', qty: 1, unit: 'whole' },
    { name: 'Zucchini and onion, sliced', qty: 0.5, unit: 'cup' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Bring water to a simmer, whisk in doenjang paste.',
    'Add zucchini and onion, simmer 5 minutes.',
    'Add tofu, crack in the egg, simmer until egg is just set.',
    'Serve with rice.',
  ],
})
