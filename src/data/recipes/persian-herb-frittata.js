import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'persian-herb-frittata',
  name: 'Persian Herb Frittata (Kuku Sabzi)',
  cuisine: 'Middle Eastern',
  mealType: 'Dinner',
  goals: ['b12_d3', 'eyesight'],
  timeMinutes: 20,
  servings: 1,
  tags: ['heat-retaining'],
  diet: 'egg',
  nutrition: { calories: 320, protein: 18, carbs: 12, fat: 22 },
  ingredients: [
    { name: 'Eggs', qty: 4, unit: 'whole' },
    { name: 'Mixed herbs (parsley, dill, coriander), chopped', qty: 1.5, unit: 'cup' },
    { name: 'Walnuts, chopped', qty: 2, unit: 'tbsp' },
    { name: 'Turmeric', qty: 0.25, unit: 'tsp' },
  ],
  steps: [
    'Beat the eggs with turmeric and mix in the herbs and walnuts.',
    'Pour into a lightly oiled pan, cook on low heat until set on the bottom.',
    'Flip or finish under a broiler until fully set.',
  ],
})
