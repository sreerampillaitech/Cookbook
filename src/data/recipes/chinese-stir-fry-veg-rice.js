import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'chinese-stir-fry-veg-rice',
  name: 'Chinese Stir Fry Vegetables with Brown Rice',
  cuisine: 'Chinese',
  mealType: 'Lunch',
  goals: ['weight_loss', 'eyesight'],
  timeMinutes: 15,
  servings: 1,
  tags: ['vegetarian'],
  diet: 'veg',
  nutrition: { calories: 340, protein: 9, carbs: 58, fat: 8 },
  ingredients: [
    { name: 'Mixed vegetables (broccoli, carrot, bell pepper)', qty: 2, unit: 'cup' },
    { name: 'Garlic, minced', qty: 2, unit: 'cloves' },
    { name: 'Soy sauce', qty: 1, unit: 'tbsp' },
    { name: 'Sesame oil', qty: 1, unit: 'tsp' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Heat sesame oil, fry garlic until fragrant.',
    'Add vegetables, stir fry on high heat for 4 minutes until crisp-tender.',
    'Add soy sauce, toss to coat.',
    'Pack hot with rice separately.',
  ],
})
