import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'chicken-caesar-salad',
  name: 'Chicken Caesar Salad',
  cuisine: 'Continental',
  mealType: 'Dinner',
  goals: ['strength', 'weight_loss'],
  timeMinutes: 20,
  servings: 1,
  tags: ['non-veg'],
  diet: 'chicken',
  nutrition: { calories: 400, protein: 36, carbs: 14, fat: 22 },
  ingredients: [
    { name: 'Chicken breast, grilled and sliced', qty: 180, unit: 'g' },
    { name: 'Romaine lettuce', qty: 2, unit: 'cup' },
    { name: 'Parmesan, shaved', qty: 2, unit: 'tbsp' },
    { name: 'Light caesar dressing', qty: 2, unit: 'tbsp' },
    { name: 'Whole wheat croutons', qty: 0.25, unit: 'cup' },
  ],
  steps: [
    'Toss lettuce with dressing.',
    'Top with sliced grilled chicken, parmesan, and croutons.',
  ],
})
