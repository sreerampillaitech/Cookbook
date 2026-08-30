import { createRecipe } from './createRecipe'

export default createRecipe({
    id: 'chinese-garlic-prawns',
    name: 'Chinese Garlic Prawns',
    cuisine: 'Chinese',
    mealType: 'Dinner',
    goals: ['strength', 'b12_d3'],
    timeMinutes: 15,
    servings: 1,
    tags: ['non-veg', 'quick'],
    diet: 'seafood',
    nutrition: { calories: 290, protein: 28, carbs: 10, fat: 15 },
    ingredients: [
      { name: 'Prawns, cleaned', qty: 150, unit: 'g' },
      { name: 'Garlic, minced', qty: 4, unit: 'cloves' },
      { name: 'Soy sauce', qty: 1, unit: 'tbsp' },
      { name: 'Shaoxing wine (or dry sherry)', qty: 1, unit: 'tsp' },
      { name: 'Spring onion, sliced', qty: 2, unit: 'stalks' },
      { name: 'Sesame oil', qty: 1, unit: 'tsp' },
    ],
    steps: [
      'Heat sesame oil on high, fry garlic until just golden, careful not to burn it.',
      'Add prawns, toss for 1–2 minutes until they turn pink.',
      'Splash in soy sauce and Shaoxing wine, toss another minute.',
      'Finish with spring onion and serve immediately over rice or noodles.',
    ],
  })
