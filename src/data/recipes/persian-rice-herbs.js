import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'persian-rice-herbs',
  name: 'Persian Rice with Herbs (Sabzi Polo)',
  cuisine: 'Middle Eastern',
  mealType: 'Lunch',
  goals: ['eyesight'],
  timeMinutes: 30,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 380, protein: 8, carbs: 68, fat: 9 },
  ingredients: [
    { name: 'Basmati rice, parboiled', qty: 1, unit: 'cup' },
    { name: 'Fresh dill, parsley, coriander, chopped', qty: 1, unit: 'cup' },
    { name: 'Butter or oil', qty: 1, unit: 'tbsp' },
    { name: 'Saffron strands (optional)', qty: 1, unit: 'pinch' },
  ],
  steps: [
    'Mix chopped herbs through the parboiled rice.',
    'Steam the herbed rice with butter until fully cooked and fragrant, about 15 minutes.',
    'Fluff and pack hot in an insulated container.',
  ],
})
