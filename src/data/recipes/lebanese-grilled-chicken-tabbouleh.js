import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'lebanese-grilled-chicken-tabbouleh',
  name: 'Lebanese Grilled Chicken with Tabbouleh',
  cuisine: 'Middle Eastern',
  mealType: 'Dinner',
  goals: ['strength', 'weight_loss'],
  timeMinutes: 30,
  servings: 1,
  tags: ['non-veg'],
  diet: 'chicken',
  nutrition: { calories: 400, protein: 36, carbs: 26, fat: 16 },
  ingredients: [
    { name: 'Chicken breast, grilled', qty: 200, unit: 'g' },
    { name: 'Bulgur or quinoa, cooked', qty: 0.5, unit: 'cup' },
    { name: 'Parsley, finely chopped', qty: 1, unit: 'cup' },
    { name: 'Tomato, diced', qty: 0.5, unit: 'cup' },
    { name: 'Lemon and olive oil dressing', qty: 1, unit: 'tbsp' },
  ],
  steps: [
    'Marinate and grill the chicken until cooked through.',
    'Toss bulgur with parsley, tomato, and dressing for the tabbouleh.',
    'Serve chicken alongside the tabbouleh.',
  ],
})
