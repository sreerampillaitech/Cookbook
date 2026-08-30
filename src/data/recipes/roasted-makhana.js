import { createRecipe } from './createRecipe'

export default createRecipe({
    id: 'roasted-makhana',
    name: 'Roasted Makhana (Fox Nuts)',
    cuisine: 'North Indian',
    mealType: 'Snack',
    goals: ['weight_loss', 'strength'],
    timeMinutes: 10,
    servings: 1,
    tags: ['quick'],
    diet: 'veg',
    nutrition: { calories: 150, protein: 5, carbs: 20, fat: 6 },
    ingredients: [
      { name: 'Makhana (fox nuts)', qty: 1, unit: 'cup' },
      { name: 'Ghee', qty: 1, unit: 'tsp' },
      { name: 'Black pepper', qty: 0.25, unit: 'tsp' },
      { name: 'Rock salt', qty: 1, unit: 'pinch' },
    ],
    steps: [
      'Heat ghee in a pan on low heat.',
      'Add makhana and roast, stirring often, for 6–7 minutes until crisp.',
      'Sprinkle black pepper and rock salt, toss to coat.',
      'Cool slightly before eating so they crisp up fully.',
    ],
  })
