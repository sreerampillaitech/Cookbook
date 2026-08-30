import { createRecipe } from './createRecipe'

export default createRecipe({
    id: 'thai-basil-chicken',
    name: 'Thai Basil Chicken (Pad Krapow Gai)',
    cuisine: 'Thai',
    mealType: 'Dinner',
    goals: ['strength', 'weight_loss'],
    timeMinutes: 20,
    servings: 1,
    tags: ['non-veg'],
    diet: 'chicken',
    nutrition: { calories: 350, protein: 34, carbs: 14, fat: 16 },
    ingredients: [
      { name: 'Chicken, minced', qty: 150, unit: 'g' },
      { name: 'Thai holy basil (or regular basil)', qty: 1, unit: 'cup' },
      { name: 'Garlic, minced', qty: 3, unit: 'cloves' },
      { name: 'Bird\'s eye chilli, chopped', qty: 2, unit: 'whole' },
      { name: 'Fish sauce', qty: 1, unit: 'tbsp' },
      { name: 'Oyster sauce', qty: 1, unit: 'tsp' },
      { name: 'Neutral oil', qty: 1, unit: 'tbsp' },
      { name: 'Egg', qty: 1, unit: 'whole' },
    ],
    steps: [
      'Heat oil on high, fry garlic and chilli for 20 seconds until fragrant.',
      'Add minced chicken, breaking it up, cook until no longer pink.',
      'Stir in fish sauce and oyster sauce, cook 2 minutes.',
      'Remove from heat, fold in basil leaves until wilted, top with a fried egg.',
    ],
  })
