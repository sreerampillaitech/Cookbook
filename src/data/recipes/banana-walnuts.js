import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'banana-walnuts',
  name: 'Banana with Walnuts',
  cuisine: 'Continental',
  mealType: 'Snack',
  goals: ['grey_hair', 'hair_growth'],
  timeMinutes: 2,
  servings: 1,
  tags: ['quick', 'no-cook'],
  diet: 'veg',
  nutrition: { calories: 180, protein: 4, carbs: 27, fat: 8 },
  ingredients: [
    { name: 'Banana', qty: 1, unit: 'whole' },
    { name: 'Walnuts', qty: 1, unit: 'tbsp' },
  ],
  steps: [
    'Eat the banana with a small handful of walnuts alongside.',
  ],
})
