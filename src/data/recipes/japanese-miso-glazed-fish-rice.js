import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'japanese-miso-glazed-fish-rice',
  name: 'Japanese Miso Glazed Fish with Rice',
  cuisine: 'Japanese',
  mealType: 'Dinner',
  goals: ['b12_d3', 'eyesight'],
  timeMinutes: 20,
  servings: 1,
  tags: ['non-veg'],
  diet: 'fish',
  nutrition: { calories: 380, protein: 32, carbs: 32, fat: 16 },
  ingredients: [
    { name: 'White fish fillet', qty: 200, unit: 'g' },
    { name: 'Miso paste', qty: 1.5, unit: 'tbsp' },
    { name: 'Mirin and sugar', qty: 1, unit: 'tbsp' },
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
  ],
  steps: [
    'Mix miso, mirin, and a little sugar into a glaze.',
    'Coat the fish and marinate 10 minutes.',
    'Broil or pan-sear until caramelized and cooked through, about 4 minutes per side.',
    'Serve with rice.',
  ],
})
