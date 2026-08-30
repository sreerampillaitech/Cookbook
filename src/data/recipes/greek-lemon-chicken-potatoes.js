import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'greek-lemon-chicken-potatoes',
  name: 'Greek Lemon Chicken with Potatoes',
  cuisine: 'Mediterranean',
  mealType: 'Dinner',
  goals: ['strength'],
  timeMinutes: 35,
  servings: 1,
  tags: ['non-veg'],
  diet: 'chicken',
  nutrition: { calories: 420, protein: 34, carbs: 32, fat: 18 },
  ingredients: [
    { name: 'Chicken thighs, boneless', qty: 200, unit: 'g' },
    { name: 'Potato, cubed', qty: 1, unit: 'medium' },
    { name: 'Lemon juice, oregano, and olive oil', qty: 2, unit: 'tbsp' },
  ],
  steps: [
    'Toss chicken and potato in lemon juice, oregano, and olive oil.',
    'Bake at 200°C for 30 minutes until chicken is cooked through and potatoes are tender.',
  ],
})
