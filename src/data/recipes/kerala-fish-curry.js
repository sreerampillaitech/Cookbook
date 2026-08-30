import { createRecipe } from './createRecipe'

export default createRecipe({
    id: 'kerala-fish-curry',
    name: 'Kerala Fish Curry (Meen Curry)',
    cuisine: 'Kerala',
    mealType: 'Dinner',
    goals: ['b12_d3', 'eyesight', 'hair_growth'],
    timeMinutes: 30,
    servings: 1,
    tags: ['non-veg'],
    diet: 'fish',
    nutrition: { calories: 340, protein: 30, carbs: 8, fat: 20 },
    ingredients: [
      { name: 'Fish steaks (kingfish or pomfret)', qty: 150, unit: 'g' },
      { name: 'Kudampuli (gambooge), soaked', qty: 2, unit: 'pieces' },
      { name: 'Kashmiri chilli powder', qty: 1, unit: 'tsp' },
      { name: 'Coriander powder', qty: 1, unit: 'tsp' },
      { name: 'Coconut milk', qty: 0.5, unit: 'cup' },
      { name: 'Shallots, sliced', qty: 3, unit: 'whole' },
      { name: 'Curry leaves', qty: 1, unit: 'sprig' },
      { name: 'Coconut oil', qty: 1, unit: 'tbsp' },
    ],
    steps: [
      'Heat coconut oil, soften shallots and curry leaves.',
      'Add chilli and coriander powder, cook 30 seconds, then add kudampuli with its soaking water.',
      'Add fish and enough water to just cover, simmer gently 10–12 minutes without stirring hard.',
      'Pour in coconut milk, warm through without boiling, and rest 10 minutes before serving for the flavour to settle.',
    ],
  })
