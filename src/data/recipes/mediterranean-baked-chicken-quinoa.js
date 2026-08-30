import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'mediterranean-baked-chicken-quinoa',
  name: 'Mediterranean Baked Chicken with Quinoa',
  cuisine: 'Mediterranean',
  mealType: 'Dinner',
  goals: ['strength', 'weight_loss'],
  timeMinutes: 30,
  servings: 1,
  tags: ['non-veg'],
  diet: 'chicken',
  nutrition: { calories: 410, protein: 34, carbs: 36, fat: 14 },
  ingredients: [
    { name: 'Chicken breast', qty: 200, unit: 'g' },
    { name: 'Mediterranean spice mix (oregano, garlic, paprika)', qty: 1, unit: 'tsp' },
    { name: 'Quinoa, cooked', qty: 0.75, unit: 'cup' },
    { name: 'Olive oil', qty: 1, unit: 'tbsp' },
  ],
  steps: [
    'Coat chicken in spice mix and olive oil.',
    'Bake at 200°C for 22-25 minutes until cooked through.',
    'Serve over quinoa.',
  ],
})
