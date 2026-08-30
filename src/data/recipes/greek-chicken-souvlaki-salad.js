import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'greek-chicken-souvlaki-salad',
  name: 'Greek Chicken Souvlaki with Salad',
  cuisine: 'Mediterranean',
  mealType: 'Dinner',
  goals: ['strength', 'weight_loss'],
  timeMinutes: 25,
  servings: 1,
  tags: ['non-veg'],
  diet: 'chicken',
  nutrition: { calories: 380, protein: 36, carbs: 16, fat: 18 },
  ingredients: [
    { name: 'Chicken breast, cubed', qty: 200, unit: 'g' },
    { name: 'Lemon, oregano, and olive oil marinade', qty: 2, unit: 'tbsp' },
    { name: 'Greek salad (cucumber, tomato, feta, olives)', qty: 1.5, unit: 'cup' },
  ],
  steps: [
    'Marinate chicken in lemon, oregano, and olive oil for 15 minutes.',
    'Skewer and grill or pan-sear until cooked through.',
    'Serve with Greek salad.',
  ],
})
