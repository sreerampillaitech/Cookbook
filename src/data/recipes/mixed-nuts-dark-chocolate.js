import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'mixed-nuts-dark-chocolate',
  name: 'Mixed Nuts with Dark Chocolate',
  cuisine: 'Continental',
  mealType: 'Snack',
  goals: ['grey_hair', 'hair_growth'],
  timeMinutes: 2,
  servings: 1,
  tags: ['quick', 'no-cook'],
  diet: 'veg',
  nutrition: { calories: 190, protein: 5, carbs: 14, fat: 14 },
  ingredients: [
    { name: 'Mixed nuts (almonds, walnuts, cashews)', qty: 2, unit: 'tbsp' },
    { name: 'Dark chocolate (70%+)', qty: 1, unit: 'small square' },
  ],
  steps: [
    'Portion out the nuts and chocolate together and enjoy.',
  ],
})
