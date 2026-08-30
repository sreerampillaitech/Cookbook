import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'spanish-garlic-chicken-rice',
  name: 'Spanish Garlic Chicken with Brown Rice',
  cuisine: 'Mediterranean',
  mealType: 'Dinner',
  goals: ['strength'],
  timeMinutes: 25,
  servings: 1,
  tags: ['non-veg'],
  diet: 'chicken',
  nutrition: { calories: 400, protein: 34, carbs: 34, fat: 16 },
  ingredients: [
    { name: 'Chicken thigh, boneless', qty: 200, unit: 'g' },
    { name: 'Garlic, sliced', qty: 4, unit: 'cloves' },
    { name: 'Olive oil and paprika', qty: 1, unit: 'tbsp' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Sear the chicken in olive oil until golden.',
    'Add garlic and paprika, cook until fragrant and chicken is cooked through.',
    'Serve with rice.',
  ],
})
