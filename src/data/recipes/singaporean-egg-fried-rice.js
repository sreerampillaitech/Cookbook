import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'singaporean-egg-fried-rice',
  name: 'Singaporean Egg Fried Rice',
  cuisine: 'Singaporean',
  mealType: 'Lunch',
  goals: ['b12_d3', 'strength'],
  timeMinutes: 12,
  servings: 1,
  tags: ['heat-retaining'],
  diet: 'egg',
  nutrition: { calories: 380, protein: 15, carbs: 56, fat: 11 },
  ingredients: [
    { name: 'Cooked brown rice, day-old', qty: 1.5, unit: 'cup' },
    { name: 'Eggs', qty: 2, unit: 'whole' },
    { name: 'Spring onion, sliced', qty: 2, unit: 'stalks' },
    { name: 'Soy sauce', qty: 1, unit: 'tbsp' },
    { name: 'Neutral oil', qty: 1, unit: 'tbsp' },
  ],
  steps: [
    'Scramble the eggs lightly, set aside.',
    'Heat oil, add rice, breaking up clumps, stir fry 3 minutes.',
    'Fold the scrambled egg back in, add soy sauce.',
    'Finish with spring onion.',
  ],
})
