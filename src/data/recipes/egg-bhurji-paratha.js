import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'egg-bhurji-paratha-dinner',
  name: 'Egg Bhurji with Paratha (Dinner)',
  cuisine: 'North Indian',
  mealType: 'Dinner',
  goals: ['b12_d3', 'strength'],
  timeMinutes: 15,
  servings: 1,
  tags: ['egg-based', 'heat-retaining'],
  diet: 'egg',
  nutrition: { calories: 420, protein: 20, carbs: 36, fat: 22 },
  ingredients: [
    { name: 'Eggs', qty: 3, unit: 'whole' },
    { name: 'Onion, chopped', qty: 0.5, unit: 'medium' },
    { name: 'Tomato, chopped', qty: 0.5, unit: 'medium' },
    { name: 'Capsicum, chopped', qty: 0.25, unit: 'medium' },
    { name: 'Green chilli, chopped', qty: 1, unit: 'whole' },
    { name: 'Garam masala', qty: 0.5, unit: 'tsp' },
    { name: 'Whole wheat paratha', qty: 2, unit: 'whole' },
  ],
  steps: [
    'Sauté onion and capsicum until softened, 3 minutes.',
    'Add tomato, green chilli, and garam masala, cook until pulpy.',
    'Beat the eggs and pour in, scramble until just set, breaking into coarse pieces.',
    'Serve hot with two parathas for a fuller dinner portion.',
  ],
})