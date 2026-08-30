import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'whole-wheat-pasta-primavera',
  name: 'Whole Wheat Pasta Primavera',
  cuisine: 'Continental',
  mealType: 'Lunch',
  goals: ['weight_loss', 'eyesight'],
  timeMinutes: 25,
  servings: 1,
  tags: ['vegetarian'],
  diet: 'veg',
  nutrition: { calories: 390, protein: 12, carbs: 62, fat: 11 },
  ingredients: [
    { name: 'Whole wheat pasta', qty: 80, unit: 'g' },
    { name: 'Zucchini, sliced', qty: 0.5, unit: 'cup' },
    { name: 'Bell pepper, sliced', qty: 0.5, unit: 'cup' },
    { name: 'Garlic, minced', qty: 2, unit: 'cloves' },
    { name: 'Olive oil', qty: 1, unit: 'tbsp' },
    { name: 'Parmesan, grated', qty: 1, unit: 'tbsp' },
  ],
  steps: [
    'Boil the pasta according to package directions.',
    'Sauté garlic, zucchini, and bell pepper in olive oil until just tender.',
    'Toss the pasta through the vegetables.',
    'Finish with grated parmesan.',
  ],
})
