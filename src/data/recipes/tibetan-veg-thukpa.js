import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'tibetan-veg-thukpa',
  name: 'Tibetan Vegetable Thukpa',
  cuisine: 'Tibetan',
  mealType: 'Lunch',
  goals: ['weight_loss'],
  timeMinutes: 25,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 320, protein: 11, carbs: 54, fat: 6 },
  ingredients: [
    { name: 'Noodles', qty: 1, unit: 'cup' },
    { name: 'Mixed vegetables (cabbage, carrot, beans)', qty: 1.5, unit: 'cup' },
    { name: 'Garlic and ginger, minced', qty: 1, unit: 'tbsp' },
    { name: 'Soy sauce', qty: 1, unit: 'tbsp' },
    { name: 'Vegetable stock or water', qty: 2, unit: 'cup' },
  ],
  steps: [
    'Sauté garlic and ginger, add vegetables, stir fry 3 minutes.',
    'Add stock and bring to a boil, simmer 8 minutes.',
    'Add noodles, cook until tender.',
    'Season with soy sauce, pack hot in an insulated container.',
  ],
})
