import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'baked-lemon-herb-chicken',
  name: 'Baked Lemon Herb Chicken with Vegetables',
  cuisine: 'Continental',
  mealType: 'Dinner',
  goals: ['strength', 'weight_loss'],
  timeMinutes: 35,
  servings: 1,
  tags: ['non-veg'],
  diet: 'chicken',
  nutrition: { calories: 380, protein: 38, carbs: 14, fat: 18 },
  ingredients: [
    { name: 'Chicken breast', qty: 200, unit: 'g' },
    { name: 'Lemon, juiced and zested', qty: 1, unit: 'whole' },
    { name: 'Mixed herbs (thyme, rosemary)', qty: 1, unit: 'tsp' },
    { name: 'Mixed vegetables (broccoli, carrot)', qty: 1.5, unit: 'cup' },
    { name: 'Olive oil', qty: 1, unit: 'tbsp' },
  ],
  steps: [
    'Marinate chicken in lemon, herbs, and olive oil for 15 minutes.',
    'Bake at 200°C for 20-25 minutes until cooked through.',
    'Roast the vegetables alongside for the last 15 minutes.',
    'Serve together.',
  ],
})
