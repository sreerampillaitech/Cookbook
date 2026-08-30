import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'plain-popcorn-coconut-water',
  name: 'Plain Popcorn with Coconut Water',
  cuisine: 'Continental',
  mealType: 'Snack',
  goals: ['weight_loss'],
  timeMinutes: 8,
  servings: 1,
  tags: ['quick'],
  diet: 'veg',
  nutrition: { calories: 140, protein: 3, carbs: 24, fat: 4 },
  ingredients: [
    { name: 'Popcorn kernels', qty: 2, unit: 'tbsp' },
    { name: 'Coconut water', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Pop the kernels in a covered pan with a little oil, no butter or salt.',
    'Serve alongside a glass of coconut water.',
  ],
})
