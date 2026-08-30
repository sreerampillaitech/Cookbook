import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'pasta-arrabiata',
  name: 'Whole Wheat Pasta Arrabiata',
  cuisine: 'Continental',
  mealType: 'Lunch',
  goals: ['weight_loss'],
  timeMinutes: 20,
  servings: 1,
  tags: ['vegetarian'],
  diet: 'veg',
  nutrition: { calories: 400, protein: 12, carbs: 68, fat: 10 },
  ingredients: [
    { name: 'Whole wheat pasta', qty: 80, unit: 'g' },
    { name: 'Tomato, chopped', qty: 2, unit: 'medium' },
    { name: 'Garlic, minced', qty: 2, unit: 'cloves' },
    { name: 'Red chilli flakes', qty: 0.5, unit: 'tsp' },
    { name: 'Olive oil', qty: 1, unit: 'tbsp' },
    { name: 'Basil leaves', qty: 4, unit: 'whole' },
  ],
  steps: [
    'Boil pasta according to package directions, reserve some pasta water.',
    'Sauté garlic and chilli flakes in olive oil for 30 seconds.',
    'Add tomato, cook until it breaks down into a sauce, 8 minutes.',
    'Toss the pasta through the sauce, loosen with pasta water if needed, finish with basil.',
  ],
})
