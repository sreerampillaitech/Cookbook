import { createRecipe } from './createRecipe'

export default createRecipe({
    id: 'french-omelette-herbs',
    name: 'French Omelette with Herbs',
    cuisine: 'Continental',
    mealType: 'Breakfast',
    goals: ['b12_d3', 'strength'],
    timeMinutes: 6,
    servings: 1,
    tags: ['egg-based', 'quick'],
    diet: 'egg',
    nutrition: { calories: 280, protein: 17, carbs: 2, fat: 22 },
    ingredients: [
      { name: 'Eggs', qty: 3, unit: 'whole' },
      { name: 'Butter', qty: 1, unit: 'tsp' },
      { name: 'Chives or parsley, chopped', qty: 1, unit: 'tbsp' },
      { name: 'Salt and pepper', qty: 1, unit: 'pinch' },
    ],
    steps: [
      'Beat the eggs with salt, pepper, and half the herbs until just combined.',
      'Melt butter in a pan over low heat, pour in the eggs.',
      'Stir gently with a fork for 20 seconds, then let it set undisturbed for 30 seconds.',
      'Fold into thirds, plate, and scatter the remaining herbs on top.',
    ],
  })
