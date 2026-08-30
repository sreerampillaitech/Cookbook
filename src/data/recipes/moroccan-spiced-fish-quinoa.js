import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'moroccan-spiced-fish-quinoa',
  name: 'Moroccan Spiced Fish with Quinoa',
  cuisine: 'Middle Eastern',
  mealType: 'Dinner',
  goals: ['b12_d3', 'eyesight'],
  timeMinutes: 25,
  servings: 1,
  tags: ['non-veg'],
  diet: 'fish',
  nutrition: { calories: 380, protein: 32, carbs: 32, fat: 14 },
  ingredients: [
    { name: 'White fish fillet', qty: 200, unit: 'g' },
    { name: 'Ras el hanout or cumin-paprika mix', qty: 1.5, unit: 'tsp' },
    { name: 'Quinoa, cooked', qty: 0.75, unit: 'cup' },
    { name: 'Lemon wedge', qty: 1, unit: 'whole' },
  ],
  steps: [
    'Coat the fish in spice mix.',
    'Pan-sear 4 minutes per side until cooked through.',
    'Serve over quinoa with a squeeze of lemon.',
  ],
})
