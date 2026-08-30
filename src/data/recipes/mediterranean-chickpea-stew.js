import { createRecipe } from './createRecipe'

export default createRecipe({
    id: 'mediterranean-chickpea-stew',
    name: 'Mediterranean Chickpea Stew',
    cuisine: 'Mediterranean',
    mealType: 'Lunch',
    goals: ['weight_loss', 'hair_growth'],
    timeMinutes: 30,
    servings: 1,
    tags: ['vegetarian', 'heat-retaining'],
    diet: 'veg',
    nutrition: { calories: 390, protein: 15, carbs: 52, fat: 12 },
    ingredients: [
      { name: 'Chickpeas, boiled', qty: 1, unit: 'cup' },
      { name: 'Spinach, chopped', qty: 1, unit: 'cup' },
      { name: 'Tomato, chopped', qty: 1, unit: 'medium' },
      { name: 'Garlic, minced', qty: 2, unit: 'cloves' },
      { name: 'Cumin powder', qty: 0.5, unit: 'tsp' },
      { name: 'Olive oil', qty: 1, unit: 'tbsp' },
      { name: 'Lemon juice', qty: 1, unit: 'tsp' },
    ],
    steps: [
      'Warm olive oil, sauté garlic until fragrant.',
      'Add tomato and cumin, cook until pulpy, 4 minutes.',
      'Add chickpeas and a splash of water, simmer 10 minutes.',
      'Stir in spinach until wilted, finish with lemon juice, and pack hot for a long-hold lunch box.',
    ],
  })
