import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'israeli-shakshuka-lunch',
  name: 'Israeli Shakshuka',
  cuisine: 'Middle Eastern',
  mealType: 'Lunch',
  goals: ['b12_d3', 'eyesight'],
  timeMinutes: 20,
  servings: 1,
  tags: ['heat-retaining'],
  diet: 'egg',
  nutrition: { calories: 300, protein: 16, carbs: 16, fat: 18 },
  ingredients: [
    { name: 'Eggs', qty: 2, unit: 'whole' },
    { name: 'Tomato, chopped', qty: 2, unit: 'medium' },
    { name: 'Bell pepper, diced', qty: 0.5, unit: 'medium' },
    { name: 'Cumin and paprika', qty: 1, unit: 'tsp' },
    { name: 'Olive oil', qty: 1, unit: 'tbsp' },
  ],
  steps: [
    'Sauté bell pepper in olive oil for 2 minutes.',
    'Add tomato, cumin, and paprika, simmer until it forms a thick sauce, 8 minutes.',
    'Make wells and crack in the eggs, cover and cook until whites set, 4 minutes.',
    'Pack in an insulated container, or eat fresh.',
  ],
})
