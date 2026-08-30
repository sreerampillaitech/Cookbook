import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'grilled-fish-roasted-veg',
  name: 'Grilled Fish with Roasted Vegetables',
  cuisine: 'Continental',
  mealType: 'Dinner',
  goals: ['b12_d3', 'eyesight'],
  timeMinutes: 30,
  servings: 1,
  tags: ['non-veg'],
  diet: 'fish',
  nutrition: { calories: 360, protein: 32, carbs: 18, fat: 16 },
  ingredients: [
    { name: 'White fish fillet', qty: 180, unit: 'g' },
    { name: 'Mixed vegetables (zucchini, bell pepper, carrot)', qty: 1.5, unit: 'cup' },
    { name: 'Olive oil and herbs', qty: 1, unit: 'tbsp' },
    { name: 'Lemon wedge', qty: 1, unit: 'whole' },
  ],
  steps: [
    'Toss vegetables in olive oil and herbs, roast at 200°C for 15 minutes.',
    'Grill or pan-sear the fish 3-4 minutes per side.',
    'Serve together with a squeeze of lemon.',
  ],
})
