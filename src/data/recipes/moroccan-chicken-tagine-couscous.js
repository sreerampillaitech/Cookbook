import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'moroccan-chicken-tagine-couscous',
  name: 'Moroccan Chicken Tagine with Couscous',
  cuisine: 'Middle Eastern',
  mealType: 'Dinner',
  goals: ['strength'],
  timeMinutes: 40,
  servings: 1,
  tags: ['non-veg', 'heat-retaining'],
  diet: 'chicken',
  nutrition: { calories: 430, protein: 34, carbs: 38, fat: 16 },
  ingredients: [
    { name: 'Chicken, curry cut', qty: 200, unit: 'g' },
    { name: 'Dried apricots, chopped', qty: 3, unit: 'whole' },
    { name: 'Cumin, cinnamon, and ginger', qty: 1, unit: 'tsp' },
    { name: 'Couscous, cooked', qty: 0.75, unit: 'cup' },
  ],
  steps: [
    'Sauté onion and spices, add chicken, cook until sealed.',
    'Add apricots and a little water, cover and simmer 25 minutes until tender.',
    'Serve over couscous.',
  ],
})
