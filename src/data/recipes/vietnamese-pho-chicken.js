import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'vietnamese-pho-chicken',
  name: 'Vietnamese Pho with Chicken',
  cuisine: 'Vietnamese',
  mealType: 'Dinner',
  goals: ['strength', 'b12_d3'],
  timeMinutes: 30,
  servings: 1,
  tags: ['non-veg', 'heat-retaining'],
  diet: 'chicken',
  nutrition: { calories: 380, protein: 30, carbs: 42, fat: 10 },
  ingredients: [
    { name: 'Chicken breast, shredded', qty: 150, unit: 'g' },
    { name: 'Rice noodles', qty: 1, unit: 'cup' },
    { name: 'Star anise and cinnamon', qty: 1, unit: 'pinch' },
    { name: 'Bean sprouts and herbs', qty: 0.5, unit: 'cup' },
    { name: 'Chicken stock', qty: 2, unit: 'cup' },
  ],
  steps: [
    'Simmer stock with star anise and cinnamon for 10 minutes, then strain.',
    'Cook rice noodles separately.',
    'Assemble noodles and shredded chicken in a bowl, pour over hot broth.',
    'Top with bean sprouts and herbs.',
  ],
})
