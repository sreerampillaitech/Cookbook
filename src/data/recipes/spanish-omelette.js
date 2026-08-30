import { createRecipe } from './createRecipe'

export default createRecipe({
    id: 'spanish-omelette',
    name: 'Spanish Omelette (Potato and Egg)',
    cuisine: 'Mediterranean',
    mealType: 'Breakfast',
    goals: ['b12_d3', 'strength'],
    timeMinutes: 10,
    servings: 1,
    tags: ['egg-based'],
    diet: 'egg',
    nutrition: { calories: 380, protein: 16, carbs: 28, fat: 22 },
    ingredients: [
      { name: 'Eggs', qty: 3, unit: 'whole' },
      { name: 'Potato, thinly sliced', qty: 0.5, unit: 'medium' },
      { name: 'Onion, thinly sliced', qty: 0.25, unit: 'medium' },
      { name: 'Olive oil', qty: 1, unit: 'tbsp' },
      { name: 'Salt and pepper', qty: 1, unit: 'pinch' },
    ],
    steps: [
      'Heat olive oil in a small pan, cook potato and onion slices on low heat until soft, about 6 minutes.',
      'Beat the eggs with salt and pepper, pour over the potatoes.',
      'Cook on low until mostly set, then flip carefully (a plate helps) to finish the other side.',
      'Slide onto a plate and slice into wedges.',
    ],
  })
