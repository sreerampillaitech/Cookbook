import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'italian-chicken-piccata-pasta',
  name: 'Italian Chicken Piccata with Pasta',
  cuisine: 'Mediterranean',
  mealType: 'Dinner',
  goals: ['strength'],
  timeMinutes: 25,
  servings: 1,
  tags: ['non-veg'],
  diet: 'chicken',
  nutrition: { calories: 440, protein: 34, carbs: 44, fat: 16 },
  ingredients: [
    { name: 'Chicken breast, sliced thin', qty: 180, unit: 'g' },
    { name: 'Lemon juice and capers', qty: 1.5, unit: 'tbsp' },
    { name: 'Whole wheat pasta, cooked', qty: 0.75, unit: 'cup' },
    { name: 'Olive oil', qty: 1, unit: 'tbsp' },
  ],
  steps: [
    'Pan-sear the chicken until golden and cooked through.',
    'Deglaze the pan with lemon juice and capers.',
    'Toss the pasta through the sauce, top with chicken.',
  ],
})
