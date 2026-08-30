import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'brown-rice-buddha-bowl',
  name: 'Brown Rice Buddha Bowl',
  cuisine: 'Continental',
  mealType: 'Lunch',
  goals: ['weight_loss', 'eyesight'],
  timeMinutes: 20,
  servings: 1,
  tags: ['vegetarian'],
  diet: 'veg',
  nutrition: { calories: 400, protein: 13, carbs: 60, fat: 12 },
  ingredients: [
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
    { name: 'Roasted chickpeas', qty: 0.5, unit: 'cup' },
    { name: 'Avocado, sliced', qty: 0.25, unit: 'whole' },
    { name: 'Spinach leaves', qty: 1, unit: 'cup' },
    { name: 'Tahini dressing', qty: 1, unit: 'tbsp' },
  ],
  steps: [
    'Arrange rice, chickpeas, avocado, and spinach in a bowl.',
    'Drizzle with tahini dressing just before eating.',
  ],
})
