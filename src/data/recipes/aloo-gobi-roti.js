import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'aloo-gobi-roti',
  name: 'Aloo Gobi with Roti',
  cuisine: 'North Indian',
  mealType: 'Lunch',
  goals: ['weight_loss'],
  timeMinutes: 25,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 360, protein: 9, carbs: 52, fat: 12 },
  ingredients: [
    { name: 'Potato, cubed', qty: 1, unit: 'medium' },
    { name: 'Cauliflower florets', qty: 1.5, unit: 'cup' },
    { name: 'Cumin seeds', qty: 0.5, unit: 'tsp' },
    { name: 'Turmeric powder', qty: 0.25, unit: 'tsp' },
    { name: 'Coriander powder', qty: 0.5, unit: 'tsp' },
    { name: 'Whole wheat roti', qty: 2, unit: 'whole' },
  ],
  steps: [
    'Heat oil, crackle cumin seeds.',
    'Add potato and cauliflower with turmeric and coriander powder.',
    'Cover and cook on low heat, stirring occasionally, 15 minutes until tender.',
    'Pack hot with roti.',
  ],
})
