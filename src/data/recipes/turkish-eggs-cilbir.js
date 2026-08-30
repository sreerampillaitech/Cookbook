import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'turkish-eggs-cilbir',
  name: 'Turkish Eggs (Çılbır)',
  cuisine: 'Middle Eastern',
  mealType: 'Lunch',
  goals: ['b12_d3', 'strength'],
  timeMinutes: 12,
  servings: 1,
  tags: ['heat-retaining'],
  diet: 'egg',
  nutrition: { calories: 320, protein: 16, carbs: 10, fat: 24 },
  ingredients: [
    { name: 'Eggs, poached', qty: 2, unit: 'whole' },
    { name: 'Yoghurt, whisked with garlic', qty: 0.5, unit: 'cup' },
    { name: 'Butter', qty: 1, unit: 'tsp' },
    { name: 'Chilli flakes and paprika', qty: 0.5, unit: 'tsp' },
  ],
  steps: [
    'Poach the eggs in gently simmering water for 3 minutes.',
    'Spread garlic yoghurt on a plate.',
    'Melt butter with chilli flakes and paprika until sizzling.',
    'Place poached eggs on the yoghurt, drizzle with the spiced butter.',
  ],
})
