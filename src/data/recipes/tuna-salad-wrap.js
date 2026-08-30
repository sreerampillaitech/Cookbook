import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'tuna-salad-wrap',
  name: 'Tuna Salad Wrap (Whole Wheat)',
  cuisine: 'Continental',
  mealType: 'Lunch',
  goals: ['strength', 'b12_d3'],
  timeMinutes: 15,
  servings: 1,
  tags: ['heat-retaining'],
  diet: 'fish',
  nutrition: { calories: 380, protein: 28, carbs: 32, fat: 14 },
  ingredients: [
    { name: 'Canned tuna, drained', qty: 100, unit: 'g' },
    { name: 'Yoghurt or light mayo', qty: 1, unit: 'tbsp' },
    { name: 'Celery, diced', qty: 2, unit: 'tbsp' },
    { name: 'Whole wheat tortilla', qty: 1, unit: 'whole' },
    { name: 'Lettuce leaves', qty: 2, unit: 'whole' },
  ],
  steps: [
    'Mix tuna with yoghurt or light mayo and celery.',
    'Lay lettuce on the tortilla, spoon tuna mix over it.',
    'Roll tightly and wrap for transport.',
  ],
})
