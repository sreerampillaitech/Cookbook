import { createRecipe } from './createRecipe'

export default createRecipe({
    id: 'moong-sprout-chaat',
    name: 'Moong Sprout Chaat',
    cuisine: 'North Indian',
    mealType: 'Snack',
    goals: ['weight_loss', 'hair_growth'],
    timeMinutes: 8,
    servings: 1,
    tags: ['quick'],
    diet: 'veg',
    nutrition: { calories: 180, protein: 11, carbs: 26, fat: 4 },
    ingredients: [
      { name: 'Moong sprouts', qty: 1, unit: 'cup' },
      { name: 'Onion, finely chopped', qty: 0.25, unit: 'medium' },
      { name: 'Tomato, finely chopped', qty: 0.25, unit: 'medium' },
      { name: 'Lemon juice', qty: 1, unit: 'tsp' },
      { name: 'Chaat masala', qty: 0.5, unit: 'tsp' },
      { name: 'Coriander leaves, chopped', qty: 1, unit: 'tbsp' },
    ],
    steps: [
      'Steam the moong sprouts for 3 minutes until just tender, then cool.',
      'Toss with onion, tomato, lemon juice, and chaat masala.',
      'Garnish with coriander leaves and serve immediately.',
    ],
  })
