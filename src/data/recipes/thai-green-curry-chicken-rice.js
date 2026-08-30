import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'thai-green-curry-chicken-rice',
  name: 'Thai Green Curry Chicken with Brown Rice',
  cuisine: 'Thai',
  mealType: 'Dinner',
  goals: ['strength'],
  timeMinutes: 30,
  servings: 1,
  tags: ['non-veg'],
  diet: 'chicken',
  nutrition: { calories: 420, protein: 32, carbs: 38, fat: 18 },
  ingredients: [
    { name: 'Chicken breast, sliced', qty: 180, unit: 'g' },
    { name: 'Green curry paste', qty: 1.5, unit: 'tbsp' },
    { name: 'Coconut milk', qty: 0.5, unit: 'cup' },
    { name: 'Thai eggplant or bell pepper', qty: 0.5, unit: 'cup' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Fry green curry paste in a little oil until fragrant.',
    'Add chicken, cook until sealed.',
    'Add coconut milk and vegetables, simmer 12 minutes.',
    'Serve with rice.',
  ],
})
