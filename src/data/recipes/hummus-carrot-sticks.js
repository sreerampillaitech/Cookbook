import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'hummus-carrot-sticks',
  name: 'Hummus with Carrot Sticks',
  cuisine: 'Middle Eastern',
  mealType: 'Snack',
  goals: ['weight_loss'],
  timeMinutes: 5,
  servings: 1,
  tags: ['quick', 'no-cook'],
  diet: 'veg',
  nutrition: { calories: 150, protein: 5, carbs: 16, fat: 8 },
  ingredients: [
    { name: 'Hummus', qty: 3, unit: 'tbsp' },
    { name: 'Carrot, cut into sticks', qty: 1, unit: 'medium' },
  ],
  steps: [
    'Cut the carrot into sticks.',
    'Serve with hummus for dipping.',
  ],
})
