import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'avial-rice',
  name: 'Avial with Brown Rice',
  cuisine: 'South Indian',
  mealType: 'Lunch',
  goals: ['eyesight', 'weight_loss'],
  timeMinutes: 30,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 320, protein: 8, carbs: 52, fat: 10 },
  ingredients: [
    { name: 'Mixed vegetables (drumstick, carrot, beans, raw banana)', qty: 2, unit: 'cup' },
    { name: 'Coconut, grated', qty: 0.25, unit: 'cup' },
    { name: 'Yoghurt', qty: 2, unit: 'tbsp' },
    { name: 'Cumin seeds', qty: 0.5, unit: 'tsp' },
    { name: 'Coconut oil', qty: 1, unit: 'tsp' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Boil the mixed vegetables until just tender.',
    'Blend coconut and cumin into a coarse paste, stir into the vegetables.',
    'Remove from heat, fold in yoghurt and a drizzle of coconut oil.',
    'Pack with rice separately.',
  ],
})
