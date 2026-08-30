import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'lebanese-chicken-fattoush-bowl',
  name: 'Lebanese Chicken Fattoush Bowl',
  cuisine: 'Middle Eastern',
  mealType: 'Dinner',
  goals: ['strength', 'weight_loss'],
  timeMinutes: 25,
  servings: 1,
  tags: ['non-veg'],
  diet: 'chicken',
  nutrition: { calories: 400, protein: 34, carbs: 26, fat: 18 },
  ingredients: [
    { name: 'Chicken breast, grilled and sliced', qty: 180, unit: 'g' },
    { name: 'Cucumber, tomato, and radish, chopped', qty: 1.5, unit: 'cup' },
    { name: 'Toasted pita, broken', qty: 0.5, unit: 'whole' },
    { name: 'Sumac dressing', qty: 1, unit: 'tbsp' },
  ],
  steps: [
    'Toss the vegetables with sumac dressing.',
    'Top with sliced grilled chicken and toasted pita pieces.',
  ],
})
