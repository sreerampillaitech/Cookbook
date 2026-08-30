import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'egyptian-koshari-bowl',
  name: 'Egyptian Koshari Bowl',
  cuisine: 'Middle Eastern',
  mealType: 'Lunch',
  goals: ['weight_loss', 'strength'],
  timeMinutes: 30,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 430, protein: 16, carbs: 76, fat: 8 },
  ingredients: [
    { name: 'Brown rice, cooked', qty: 0.75, unit: 'cup' },
    { name: 'Brown lentils, cooked', qty: 0.5, unit: 'cup' },
    { name: 'Small pasta, cooked', qty: 0.25, unit: 'cup' },
    { name: 'Tomato sauce with garlic and cumin', qty: 0.5, unit: 'cup' },
    { name: 'Crispy fried onions', qty: 2, unit: 'tbsp' },
  ],
  steps: [
    'Layer rice, lentils, and pasta in a bowl.',
    'Top with warm tomato sauce.',
    'Finish with crispy onions, pack components separately if traveling.',
  ],
})
