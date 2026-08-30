import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'greek-yogurt-mixed-nuts',
  name: 'Greek Yoghurt with Mixed Nuts',
  cuisine: 'Mediterranean',
  mealType: 'Snack',
  goals: ['strength', 'grey_hair'],
  timeMinutes: 3,
  servings: 1,
  tags: ['quick', 'no-cook'],
  diet: 'veg',
  nutrition: { calories: 200, protein: 12, carbs: 10, fat: 12 },
  ingredients: [
    { name: 'Greek yoghurt', qty: 1, unit: 'cup' },
    { name: 'Mixed nuts (almonds, walnuts)', qty: 2, unit: 'tbsp' },
  ],
  steps: [
    'Spoon yoghurt into a bowl.',
    'Top with mixed nuts and eat.',
  ],
})
