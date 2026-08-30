import { createRecipe } from './createRecipe'

export default createRecipe({
    id: 'continental-grilled-salmon',
    name: 'Continental Grilled Salmon with Greens',
    cuisine: 'Continental',
    mealType: 'Dinner',
    goals: ['b12_d3', 'eyesight', 'hair_growth'],
    timeMinutes: 20,
    servings: 1,
    tags: ['non-veg'],
    diet: 'fish',
    nutrition: { calories: 380, protein: 32, carbs: 8, fat: 24 },
    ingredients: [
      { name: 'Salmon fillet', qty: 150, unit: 'g' },
      { name: 'Olive oil', qty: 1, unit: 'tbsp' },
      { name: 'Lemon', qty: 0.5, unit: 'whole' },
      { name: 'Garlic, minced', qty: 1, unit: 'clove' },
      { name: 'Sautéed spinach or broccoli', qty: 1, unit: 'cup' },
      { name: 'Black pepper', qty: 1, unit: 'pinch' },
    ],
    steps: [
      'Pat the salmon dry, season with salt, pepper, and minced garlic.',
      'Sear skin-side down in olive oil over medium-high heat, 4 minutes, then flip for 2–3 minutes.',
      'Squeeze lemon over the fillet while resting.',
      'Serve over sautéed greens with the pan juices spooned on top.',
    ],
  })
