import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'indonesian-chicken-satay-rice',
  name: 'Indonesian Chicken Satay with Rice',
  cuisine: 'Indonesian',
  mealType: 'Dinner',
  goals: ['strength'],
  timeMinutes: 25,
  servings: 1,
  tags: ['non-veg'],
  diet: 'chicken',
  nutrition: { calories: 420, protein: 34, carbs: 34, fat: 18 },
  ingredients: [
    { name: 'Chicken breast, cubed', qty: 200, unit: 'g' },
    { name: 'Peanut sauce', qty: 2, unit: 'tbsp' },
    { name: 'Turmeric and coriander', qty: 1, unit: 'tsp' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Marinate chicken in turmeric and coriander for 15 minutes.',
    'Skewer and grill or pan-sear until cooked through and lightly charred.',
    'Serve with peanut sauce and rice.',
  ],
})
