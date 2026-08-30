import { createRecipe } from './createRecipe'

export default createRecipe({
    id: 'tamagoyaki',
    name: 'Tamagoyaki (Japanese Rolled Omelette)',
    cuisine: 'Japanese',
    mealType: 'Breakfast',
    goals: ['b12_d3', 'strength'],
    timeMinutes: 7,
    servings: 1,
    tags: ['egg-based', 'quick'],
    diet: 'egg',
    nutrition: { calories: 240, protein: 14, carbs: 4, fat: 18 },
    ingredients: [
      { name: 'Eggs', qty: 3, unit: 'whole' },
      { name: 'Dashi stock (or water)', qty: 2, unit: 'tbsp' },
      { name: 'Soy sauce', qty: 1, unit: 'tsp' },
      { name: 'Mirin', qty: 1, unit: 'tsp' },
      { name: 'Neutral oil', qty: 1, unit: 'tsp' },
    ],
    steps: [
      'Whisk eggs with dashi, soy sauce, and mirin until smooth.',
      'Heat a lightly oiled pan on medium-low, pour a thin layer of egg to cover the base.',
      'When mostly set, roll it to one side, oil the empty space, pour more egg underneath and around the roll.',
      'Repeat until the egg is used up, then roll into a log, slice, and serve.',
    ],
  })
