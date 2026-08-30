import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'vietnamese-spring-roll-bowl',
  name: 'Vietnamese Spring Roll Bowl',
  cuisine: 'Vietnamese',
  mealType: 'Lunch',
  goals: ['weight_loss', 'eyesight'],
  timeMinutes: 20,
  servings: 1,
  tags: ['vegetarian'],
  diet: 'veg',
  nutrition: { calories: 350, protein: 10, carbs: 56, fat: 9 },
  ingredients: [
    { name: 'Rice noodles, cooked', qty: 1, unit: 'cup' },
    { name: 'Carrot, julienned', qty: 0.25, unit: 'cup' },
    { name: 'Cucumber, julienned', qty: 0.25, unit: 'cup' },
    { name: 'Fresh mint and coriander', qty: 0.25, unit: 'cup' },
    { name: 'Peanuts, crushed', qty: 1, unit: 'tbsp' },
    { name: 'Fish sauce dressing', qty: 1, unit: 'tbsp' },
  ],
  steps: [
    'Arrange noodles in a bowl with carrot, cucumber, and herbs.',
    'Drizzle with fish sauce dressing.',
    'Top with crushed peanuts just before eating.',
  ],
})
