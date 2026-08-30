import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'japanese-donburi-bowl',
  name: 'Japanese Brown Rice Bowl (Donburi Style)',
  cuisine: 'Japanese',
  mealType: 'Lunch',
  goals: ['strength', 'b12_d3'],
  timeMinutes: 20,
  servings: 1,
  tags: ['heat-retaining'],
  diet: 'egg',
  nutrition: { calories: 420, protein: 20, carbs: 58, fat: 12 },
  ingredients: [
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
    { name: 'Egg', qty: 1, unit: 'whole' },
    { name: 'Onion, sliced', qty: 0.25, unit: 'medium' },
    { name: 'Soy sauce', qty: 1, unit: 'tbsp' },
    { name: 'Mirin', qty: 1, unit: 'tsp' },
    { name: 'Spring onion, sliced', qty: 1, unit: 'stalk' },
  ],
  steps: [
    'Simmer onion in soy sauce, mirin, and a little water for 3 minutes.',
    'Crack the egg over the onion, cover and cook until just set, 2 minutes.',
    'Slide over a bowl of hot rice, garnish with spring onion.',
  ],
})
