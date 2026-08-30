import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'grilled-chicken-quinoa-salad',
  name: 'Grilled Chicken with Quinoa Salad',
  cuisine: 'Continental',
  mealType: 'Dinner',
  goals: ['strength', 'weight_loss'],
  timeMinutes: 25,
  servings: 1,
  tags: ['non-veg'],
  diet: 'chicken',
  nutrition: { calories: 400, protein: 36, carbs: 32, fat: 14 },
  ingredients: [
    { name: 'Chicken breast, grilled', qty: 180, unit: 'g' },
    { name: 'Quinoa, cooked', qty: 0.75, unit: 'cup' },
    { name: 'Cherry tomatoes and cucumber', qty: 1, unit: 'cup' },
    { name: 'Olive oil and lemon dressing', qty: 1, unit: 'tbsp' },
  ],
  steps: [
    'Grill the chicken until cooked through, slice.',
    'Toss quinoa with cherry tomatoes and cucumber.',
    'Dress with olive oil and lemon, top with sliced chicken.',
  ],
})
