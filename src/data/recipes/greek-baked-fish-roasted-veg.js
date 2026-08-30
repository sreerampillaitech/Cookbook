import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'greek-baked-fish-roasted-veg',
  name: 'Greek Baked Fish with Roasted Vegetables',
  cuisine: 'Mediterranean',
  mealType: 'Dinner',
  goals: ['b12_d3', 'eyesight'],
  timeMinutes: 30,
  servings: 1,
  tags: ['non-veg'],
  diet: 'fish',
  nutrition: { calories: 360, protein: 32, carbs: 20, fat: 16 },
  ingredients: [
    { name: 'White fish fillet', qty: 200, unit: 'g' },
    { name: 'Mixed vegetables (zucchini, tomato, onion)', qty: 1.5, unit: 'cup' },
    { name: 'Olive oil and oregano', qty: 1, unit: 'tbsp' },
    { name: 'Lemon wedge', qty: 1, unit: 'whole' },
  ],
  steps: [
    'Toss vegetables in olive oil and oregano, roast at 200°C for 12 minutes.',
    'Add fish to the tray, bake 12-15 more minutes.',
    'Serve with a squeeze of lemon.',
  ],
})
