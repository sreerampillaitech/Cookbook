import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'israeli-baked-chicken-veg',
  name: 'Israeli Baked Chicken with Vegetables',
  cuisine: 'Middle Eastern',
  mealType: 'Dinner',
  goals: ['strength'],
  timeMinutes: 35,
  servings: 1,
  tags: ['non-veg'],
  diet: 'chicken',
  nutrition: { calories: 400, protein: 34, carbs: 22, fat: 18 },
  ingredients: [
    { name: 'Chicken thighs, boneless', qty: 200, unit: 'g' },
    { name: 'Mixed vegetables (zucchini, bell pepper, onion)', qty: 1.5, unit: 'cup' },
    { name: 'Za\'atar and olive oil', qty: 1, unit: 'tbsp' },
  ],
  steps: [
    'Toss chicken and vegetables in za\'atar and olive oil.',
    'Bake at 200°C for 25-30 minutes until chicken is cooked through.',
  ],
})
