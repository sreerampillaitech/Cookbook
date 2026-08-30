import { createRecipe } from './createRecipe'

export default createRecipe({
    id: 'kerala-egg-roast',
    name: 'Kerala Egg Roast',
    cuisine: 'Kerala',
    mealType: 'Breakfast',
    goals: ['b12_d3', 'hair_growth', 'strength'],
    timeMinutes: 9,
    servings: 1,
    tags: ['egg-based', 'quick'],
    diet: 'egg',
    nutrition: { calories: 320, protein: 16, carbs: 10, fat: 24 },
    ingredients: [
      { name: 'Eggs', qty: 2, unit: 'whole' },
      { name: 'Onion, sliced thin', qty: 0.5, unit: 'medium' },
      { name: 'Tomato, chopped', qty: 0.5, unit: 'medium' },
      { name: 'Curry leaves', qty: 1, unit: 'sprig' },
      { name: 'Coconut oil', qty: 1, unit: 'tbsp' },
      { name: 'Kashmiri chilli powder', qty: 0.5, unit: 'tsp' },
      { name: 'Turmeric powder', qty: 0.25, unit: 'tsp' },
      { name: 'Salt', qty: 1, unit: 'pinch' },
    ],
    steps: [
      'Boil the eggs for 6 minutes, cool under running water, peel and halve.',
      'Heat coconut oil in a pan, crackle the curry leaves.',
      'Add onion and cook on high heat until edges char slightly, about 2 minutes.',
      'Add tomato, turmeric, and chilli powder, cook until tomato softens, 2 minutes.',
      'Nestle the egg halves into the masala, spoon it over them, season with salt and serve hot.',
    ],
  })
