import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'hummus-veggie-wrap',
  name: 'Hummus and Veggie Wrap',
  cuisine: 'Continental',
  mealType: 'Lunch',
  goals: ['weight_loss'],
  timeMinutes: 12,
  servings: 1,
  tags: ['vegetarian'],
  diet: 'veg',
  nutrition: { calories: 340, protein: 11, carbs: 46, fat: 12 },
  ingredients: [
    { name: 'Hummus', qty: 3, unit: 'tbsp' },
    { name: 'Whole wheat tortilla', qty: 1, unit: 'whole' },
    { name: 'Cucumber, julienned', qty: 0.25, unit: 'cup' },
    { name: 'Carrot, julienned', qty: 0.25, unit: 'cup' },
    { name: 'Lettuce leaves', qty: 2, unit: 'whole' },
  ],
  steps: [
    'Spread hummus generously over the tortilla.',
    'Layer lettuce, cucumber, and carrot.',
    'Roll tightly and wrap for transport.',
  ],
})
