import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'mix-veg-curry-rice',
  name: 'Mix Vegetable Curry with Brown Rice',
  cuisine: 'North Indian',
  mealType: 'Lunch',
  goals: ['weight_loss', 'eyesight'],
  timeMinutes: 25,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 340, protein: 8, carbs: 56, fat: 8 },
  ingredients: [
    { name: 'Mixed vegetables (carrot, beans, peas, potato)', qty: 2, unit: 'cup' },
    { name: 'Onion, chopped', qty: 0.25, unit: 'medium' },
    { name: 'Tomato, chopped', qty: 0.5, unit: 'medium' },
    { name: 'Coriander powder', qty: 1, unit: 'tsp' },
    { name: 'Turmeric powder', qty: 0.25, unit: 'tsp' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Sauté onion until soft, add tomato and spices, cook 3 minutes.',
    'Add mixed vegetables with a splash of water, cover and simmer 12 minutes until tender.',
    'Pack hot with rice separately.',
  ],
})
