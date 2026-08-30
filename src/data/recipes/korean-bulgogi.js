import { createRecipe } from './createRecipe'

export default createRecipe({
    id: 'korean-bulgogi',
    name: 'Korean Beef Bulgogi',
    cuisine: 'Korean',
    mealType: 'Dinner',
    goals: ['strength', 'b12_d3'],
    timeMinutes: 25,
    servings: 1,
    tags: ['non-veg'],
    diet: 'red_meat',
    nutrition: { calories: 410, protein: 32, carbs: 18, fat: 22 },
    ingredients: [
      { name: 'Beef, thinly sliced', qty: 150, unit: 'g' },
      { name: 'Soy sauce', qty: 2, unit: 'tbsp' },
      { name: 'Brown sugar', qty: 1, unit: 'tsp' },
      { name: 'Garlic, minced', qty: 2, unit: 'cloves' },
      { name: 'Sesame oil', qty: 1, unit: 'tsp' },
      { name: 'Spring onion, sliced', qty: 2, unit: 'stalks' },
      { name: 'Sesame seeds', qty: 1, unit: 'tsp' },
    ],
    steps: [
      'Mix soy sauce, brown sugar, garlic, and sesame oil, marinate the beef for 10 minutes.',
      'Heat a pan until very hot, sear the beef in batches so it browns rather than steams.',
      'Toss in spring onion for the last minute of cooking.',
      'Finish with sesame seeds and serve with steamed rice or lettuce wraps.',
    ],
  })
