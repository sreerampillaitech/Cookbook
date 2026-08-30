import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'japanese-miso-soup-rice',
  name: 'Japanese Miso Soup with Rice',
  cuisine: 'Japanese',
  mealType: 'Lunch',
  goals: ['weight_loss'],
  timeMinutes: 15,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 280, protein: 10, carbs: 46, fat: 6 },
  ingredients: [
    { name: 'Miso paste', qty: 1, unit: 'tbsp' },
    { name: 'Tofu, cubed', qty: 0.5, unit: 'cup' },
    { name: 'Wakame or spinach', qty: 0.25, unit: 'cup' },
    { name: 'Spring onion, sliced', qty: 1, unit: 'stalk' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Bring 2 cups water to a gentle simmer, do not boil hard.',
    'Whisk in miso paste until dissolved.',
    'Add tofu and wakame or spinach, simmer 2 minutes.',
    'Garnish with spring onion, pack hot with rice separately.',
  ],
})
