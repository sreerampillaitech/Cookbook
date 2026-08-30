import { createRecipe } from './createRecipe'

export default createRecipe({
    id: 'middle-eastern-shawarma-bowl',
    name: 'Middle Eastern Chicken Shawarma Bowl',
    cuisine: 'Middle Eastern',
    mealType: 'Dinner',
    goals: ['weight_loss', 'strength'],
    timeMinutes: 30,
    servings: 1,
    tags: ['non-veg'],
    diet: 'chicken',
    nutrition: { calories: 400, protein: 35, carbs: 24, fat: 17 },
    ingredients: [
      { name: 'Chicken thigh, boneless', qty: 150, unit: 'g' },
      { name: 'Yoghurt', qty: 2, unit: 'tbsp' },
      { name: 'Shawarma spice mix (cumin, paprika, turmeric, cinnamon)', qty: 1.5, unit: 'tsp' },
      { name: 'Garlic, minced', qty: 1, unit: 'clove' },
      { name: 'Cucumber-tomato salad', qty: 1, unit: 'cup' },
      { name: 'Hummus', qty: 2, unit: 'tbsp' },
      { name: 'Olive oil', qty: 1, unit: 'tsp' },
    ],
    steps: [
      'Mix yoghurt, spice mix, garlic, and a pinch of salt, marinate chicken for at least 15 minutes.',
      'Sear the chicken in a hot pan with olive oil, 5–6 minutes per side, then rest and slice.',
      'Build the bowl with salad and hummus as the base, top with sliced chicken.',
      'Finish with a drizzle of olive oil and a squeeze of lemon.',
    ],
  })
