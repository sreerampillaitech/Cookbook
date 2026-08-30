import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'chicken-stir-fry-rice-dinner',
  name: 'Chicken Stir Fry with Brown Rice',
  cuisine: 'Continental',
  mealType: 'Dinner',
  goals: ['strength'],
  timeMinutes: 20,
  servings: 1,
  tags: ['non-veg'],
  diet: 'chicken',
  nutrition: { calories: 400, protein: 34, carbs: 40, fat: 12 },
  ingredients: [
    { name: 'Chicken breast, sliced', qty: 180, unit: 'g' },
    { name: 'Mixed vegetables (bell pepper, carrot, broccoli)', qty: 1.5, unit: 'cup' },
    { name: 'Garlic, minced', qty: 2, unit: 'cloves' },
    { name: 'Soy sauce', qty: 1, unit: 'tbsp' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Stir fry chicken in a hot pan until sealed and cooked through.',
    'Add garlic and vegetables, stir fry 4 minutes.',
    'Add soy sauce, toss to coat.',
    'Serve with rice.',
  ],
})
