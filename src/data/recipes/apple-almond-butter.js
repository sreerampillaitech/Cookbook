import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'apple-almond-butter',
  name: 'Apple with Almond Butter',
  cuisine: 'Continental',
  mealType: 'Snack',
  goals: ['weight_loss'],
  timeMinutes: 3,
  servings: 1,
  tags: ['quick', 'no-cook'],
  diet: 'veg',
  nutrition: { calories: 190, protein: 5, carbs: 26, fat: 9 },
  ingredients: [
    { name: 'Apple, sliced', qty: 1, unit: 'medium' },
    { name: 'Almond butter', qty: 1, unit: 'tbsp' },
  ],
  steps: [
    'Slice the apple.',
    'Serve with almond butter for dipping.',
  ],
})
