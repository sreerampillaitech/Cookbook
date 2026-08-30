import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'indonesian-nasi-goreng',
  name: 'Indonesian Nasi Goreng (Brown Rice)',
  cuisine: 'Indonesian',
  mealType: 'Lunch',
  goals: ['weight_loss'],
  timeMinutes: 15,
  servings: 1,
  tags: ['heat-retaining'],
  diet: 'egg',
  nutrition: { calories: 400, protein: 14, carbs: 62, fat: 11 },
  ingredients: [
    { name: 'Cooked brown rice, day-old', qty: 1.5, unit: 'cup' },
    { name: 'Egg', qty: 1, unit: 'whole' },
    { name: 'Garlic and shallot, minced', qty: 1, unit: 'tbsp' },
    { name: 'Sweet soy sauce (kecap manis)', qty: 1, unit: 'tbsp' },
    { name: 'Bird\'s eye chilli, chopped', qty: 1, unit: 'whole' },
  ],
  steps: [
    'Fry the egg sunny-side up, set aside.',
    'Sauté garlic, shallot, and chilli until fragrant.',
    'Add rice, breaking up clumps, stir fry 3 minutes.',
    'Add sweet soy sauce, toss to coat, top with the fried egg.',
  ],
})
