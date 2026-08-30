import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'minestrone-soup-bread',
  name: 'Minestrone Soup with Bread',
  cuisine: 'Continental',
  mealType: 'Lunch',
  goals: ['weight_loss'],
  timeMinutes: 30,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 330, protein: 12, carbs: 52, fat: 8 },
  ingredients: [
    { name: 'Mixed vegetables (carrot, beans, zucchini)', qty: 1.5, unit: 'cup' },
    { name: 'Kidney beans, boiled', qty: 0.5, unit: 'cup' },
    { name: 'Tomato, chopped', qty: 1, unit: 'medium' },
    { name: 'Small pasta shapes', qty: 0.25, unit: 'cup' },
    { name: 'Whole wheat bread', qty: 1, unit: 'slice' },
  ],
  steps: [
    'Sauté vegetables briefly, add tomato and enough water for a soup consistency.',
    'Add pasta and kidney beans, simmer until pasta is cooked, about 10 minutes.',
    'Season with salt and pepper, pack hot with bread.',
  ],
})
