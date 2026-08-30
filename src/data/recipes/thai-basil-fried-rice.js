import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'thai-basil-fried-rice',
  name: 'Thai Basil Fried Rice (Brown Rice)',
  cuisine: 'Thai',
  mealType: 'Lunch',
  goals: ['weight_loss'],
  timeMinutes: 15,
  servings: 1,
  tags: ['vegetarian'],
  diet: 'veg',
  nutrition: { calories: 380, protein: 10, carbs: 64, fat: 10 },
  ingredients: [
    { name: 'Cooked brown rice, day-old', qty: 1.5, unit: 'cup' },
    { name: 'Garlic, minced', qty: 2, unit: 'cloves' },
    { name: 'Bird\'s eye chilli, chopped', qty: 1, unit: 'whole' },
    { name: 'Thai basil leaves', qty: 0.5, unit: 'cup' },
    { name: 'Soy sauce', qty: 1, unit: 'tbsp' },
    { name: 'Neutral oil', qty: 1, unit: 'tbsp' },
  ],
  steps: [
    'Heat oil, fry garlic and chilli until fragrant.',
    'Add rice, breaking up clumps, stir fry 3 minutes.',
    'Stir in soy sauce, toss until well coated.',
    'Fold in basil at the end until just wilted.',
  ],
})
