import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'korean-dakgalbi-rice',
  name: 'Korean Dakgalbi (Spicy Chicken) with Rice',
  cuisine: 'Korean',
  mealType: 'Dinner',
  goals: ['strength'],
  timeMinutes: 30,
  servings: 1,
  tags: ['non-veg'],
  diet: 'chicken',
  nutrition: { calories: 430, protein: 34, carbs: 42, fat: 16 },
  ingredients: [
    { name: 'Chicken thigh, boneless, cubed', qty: 200, unit: 'g' },
    { name: 'Gochujang (Korean chilli paste)', qty: 1.5, unit: 'tbsp' },
    { name: 'Cabbage, chopped', qty: 1, unit: 'cup' },
    { name: 'Garlic and ginger', qty: 1, unit: 'tbsp' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Marinate chicken in gochujang, garlic, and ginger for 10 minutes.',
    'Stir fry the chicken until nearly cooked through.',
    'Add cabbage, stir fry until just wilted, 3 minutes.',
    'Serve with rice.',
  ],
})
