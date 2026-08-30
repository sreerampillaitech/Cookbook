import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'japanese-teriyaki-chicken-rice',
  name: 'Japanese Teriyaki Chicken with Brown Rice',
  cuisine: 'Japanese',
  mealType: 'Dinner',
  goals: ['strength'],
  timeMinutes: 25,
  servings: 1,
  tags: ['non-veg'],
  diet: 'chicken',
  nutrition: { calories: 420, protein: 34, carbs: 42, fat: 14 },
  ingredients: [
    { name: 'Chicken thigh, boneless', qty: 180, unit: 'g' },
    { name: 'Soy sauce', qty: 2, unit: 'tbsp' },
    { name: 'Mirin and honey', qty: 1.5, unit: 'tbsp' },
    { name: 'Garlic, minced', qty: 1, unit: 'clove' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Sear the chicken skin-side down until golden.',
    'Mix soy sauce, mirin, honey, and garlic, pour over the chicken.',
    'Simmer, basting, until the sauce thickens and coats the chicken, 8 minutes.',
    'Slice and serve with rice.',
  ],
})
