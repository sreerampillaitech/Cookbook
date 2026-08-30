import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'greek-salad-boiled-eggs',
  name: 'Greek Salad with Boiled Eggs',
  cuisine: 'Mediterranean',
  mealType: 'Lunch',
  goals: ['weight_loss', 'b12_d3'],
  timeMinutes: 15,
  servings: 1,
  tags: ['heat-retaining'],
  diet: 'egg',
  nutrition: { calories: 340, protein: 16, carbs: 16, fat: 24 },
  ingredients: [
    { name: 'Eggs, boiled', qty: 2, unit: 'whole' },
    { name: 'Cucumber, chopped', qty: 0.5, unit: 'cup' },
    { name: 'Tomato, chopped', qty: 0.5, unit: 'cup' },
    { name: 'Feta, cubed', qty: 2, unit: 'tbsp' },
    { name: 'Olives', qty: 6, unit: 'whole' },
    { name: 'Olive oil and oregano', qty: 1, unit: 'tbsp' },
  ],
  steps: [
    'Combine cucumber, tomato, feta, and olives.',
    'Dress with olive oil and oregano.',
    'Top with halved boiled eggs, pack in a sealed container to keep cool.',
  ],
})
