import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'turkish-chicken-shish-rice',
  name: 'Turkish Chicken Shish with Rice',
  cuisine: 'Middle Eastern',
  mealType: 'Dinner',
  goals: ['strength'],
  timeMinutes: 30,
  servings: 1,
  tags: ['non-veg'],
  diet: 'chicken',
  nutrition: { calories: 400, protein: 36, carbs: 32, fat: 14 },
  ingredients: [
    { name: 'Chicken breast, cubed', qty: 200, unit: 'g' },
    { name: 'Yoghurt and paprika marinade', qty: 2, unit: 'tbsp' },
    { name: 'Bell pepper and onion, cubed', qty: 0.5, unit: 'cup' },
    { name: 'Cooked rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Marinate chicken in yoghurt and paprika for 15 minutes.',
    'Skewer with bell pepper and onion, grill or pan-sear until cooked through.',
    'Serve with rice.',
  ],
})
