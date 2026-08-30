import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'quinoa-salad-bowl',
  name: 'Quinoa Salad Bowl',
  cuisine: 'Continental',
  mealType: 'Lunch',
  goals: ['weight_loss', 'strength'],
  timeMinutes: 20,
  servings: 1,
  tags: ['vegetarian'],
  diet: 'veg',
  nutrition: { calories: 380, protein: 13, carbs: 52, fat: 14 },
  ingredients: [
    { name: 'Quinoa, cooked', qty: 1, unit: 'cup' },
    { name: 'Cucumber, diced', qty: 0.5, unit: 'cup' },
    { name: 'Cherry tomatoes, halved', qty: 0.5, unit: 'cup' },
    { name: 'Feta, crumbled', qty: 2, unit: 'tbsp' },
    { name: 'Olive oil and lemon juice', qty: 1, unit: 'tbsp' },
  ],
  steps: [
    'Toss cooked quinoa with cucumber and cherry tomatoes.',
    'Dress with olive oil and lemon juice.',
    'Top with crumbled feta, pack for later or eat immediately.',
  ],
})
