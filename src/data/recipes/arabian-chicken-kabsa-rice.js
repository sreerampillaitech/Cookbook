import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'arabian-chicken-kabsa-rice',
  name: 'Arabian Chicken Kabsa with Rice',
  cuisine: 'Middle Eastern',
  mealType: 'Dinner',
  goals: ['strength'],
  timeMinutes: 40,
  servings: 1,
  tags: ['non-veg', 'heat-retaining'],
  diet: 'chicken',
  nutrition: { calories: 450, protein: 36, carbs: 46, fat: 16 },
  ingredients: [
    { name: 'Chicken, curry cut', qty: 200, unit: 'g' },
    { name: 'Basmati rice, parboiled', qty: 1, unit: 'cup' },
    { name: 'Kabsa spice mix', qty: 1.5, unit: 'tsp' },
    { name: 'Tomato, chopped', qty: 1, unit: 'medium' },
  ],
  steps: [
    'Sauté onion and kabsa spices, add chicken, cook until sealed.',
    'Add tomato and a little water, simmer 15 minutes.',
    'Layer parboiled rice on top, cover and cook on low heat 15 minutes until rice is done.',
  ],
})
