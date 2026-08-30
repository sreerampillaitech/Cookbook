import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'lebanese-fattoush-eggs',
  name: 'Lebanese Fattoush Salad with Eggs',
  cuisine: 'Middle Eastern',
  mealType: 'Lunch',
  goals: ['weight_loss', 'b12_d3', 'eyesight'],
  timeMinutes: 15,
  servings: 1,
  tags: ['heat-retaining'],
  diet: 'egg',
  nutrition: { calories: 320, protein: 15, carbs: 26, fat: 18 },
  ingredients: [
    { name: 'Eggs, boiled', qty: 2, unit: 'whole' },
    { name: 'Cucumber and tomato, chopped', qty: 1, unit: 'cup' },
    { name: 'Radish, sliced', qty: 0.25, unit: 'cup' },
    { name: 'Toasted pita, broken into pieces', qty: 0.5, unit: 'whole' },
    { name: 'Sumac and olive oil dressing', qty: 1, unit: 'tbsp' },
  ],
  steps: [
    'Combine cucumber, tomato, and radish.',
    'Toss with sumac and olive oil dressing.',
    'Top with halved boiled eggs and toasted pita pieces just before eating.',
  ],
})
