import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'tandoori-chicken-salad',
  name: 'Tandoori Chicken (Air Fryer) with Salad',
  cuisine: 'North Indian',
  mealType: 'Dinner',
  goals: ['strength', 'weight_loss'],
  timeMinutes: 30,
  servings: 1,
  tags: ['non-veg'],
  diet: 'chicken',
  nutrition: { calories: 380, protein: 38, carbs: 10, fat: 18 },
  ingredients: [
    { name: 'Chicken leg or breast', qty: 200, unit: 'g' },
    { name: 'Yoghurt', qty: 3, unit: 'tbsp' },
    { name: 'Tandoori masala', qty: 1.5, unit: 'tsp' },
    { name: 'Mixed salad greens', qty: 2, unit: 'cup' },
    { name: 'Lemon wedge', qty: 1, unit: 'whole' },
  ],
  steps: [
    'Marinate chicken in yoghurt and tandoori masala for at least 20 minutes.',
    'Air fry at 190°C for 18-20 minutes, turning once, until cooked through.',
    'Serve with salad greens and a squeeze of lemon.',
  ],
})
