import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'malaysian-veg-curry-rice',
  name: 'Malaysian Vegetable Curry with Rice',
  cuisine: 'Malaysian',
  mealType: 'Lunch',
  goals: ['weight_loss'],
  timeMinutes: 25,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 370, protein: 9, carbs: 58, fat: 11 },
  ingredients: [
    { name: 'Mixed vegetables (potato, carrot, beans)', qty: 2, unit: 'cup' },
    { name: 'Coconut milk', qty: 0.5, unit: 'cup' },
    { name: 'Curry powder', qty: 1, unit: 'tsp' },
    { name: 'Onion, chopped', qty: 0.25, unit: 'medium' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Sauté onion until soft, add curry powder, cook 30 seconds.',
    'Add vegetables and coconut milk, simmer 15 minutes until tender.',
    'Pack hot with rice separately.',
  ],
})
