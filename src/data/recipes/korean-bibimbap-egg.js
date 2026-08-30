import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'korean-bibimbap-egg',
  name: 'Korean Bibimbap with Egg and Vegetables',
  cuisine: 'Korean',
  mealType: 'Lunch',
  goals: ['eyesight', 'strength'],
  timeMinutes: 25,
  servings: 1,
  tags: ['heat-retaining'],
  diet: 'egg',
  nutrition: { calories: 440, protein: 18, carbs: 62, fat: 14 },
  ingredients: [
    { name: 'Cooked brown rice', qty: 1, unit: 'cup' },
    { name: 'Egg, fried', qty: 1, unit: 'whole' },
    { name: 'Carrot, julienned and sautéed', qty: 0.25, unit: 'cup' },
    { name: 'Spinach, blanched', qty: 0.5, unit: 'cup' },
    { name: 'Bean sprouts, blanched', qty: 0.5, unit: 'cup' },
    { name: 'Gochujang or chilli paste', qty: 1, unit: 'tsp' },
  ],
  steps: [
    'Arrange rice in a bowl, top with carrot, spinach, and bean sprouts in separate sections.',
    'Top with the fried egg.',
    'Serve with gochujang on the side to mix in before eating.',
  ],
})
