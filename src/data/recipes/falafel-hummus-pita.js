import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'falafel-hummus-pita',
  name: 'Falafel with Hummus and Pita',
  cuisine: 'Middle Eastern',
  mealType: 'Lunch',
  goals: ['weight_loss', 'strength'],
  timeMinutes: 25,
  servings: 1,
  tags: ['vegetarian'],
  diet: 'veg',
  nutrition: { calories: 420, protein: 16, carbs: 54, fat: 16 },
  ingredients: [
    { name: 'Chickpeas, soaked (not boiled)', qty: 1, unit: 'cup' },
    { name: 'Garlic and onion, chopped', qty: 2, unit: 'tbsp' },
    { name: 'Cumin and coriander powder', qty: 1, unit: 'tsp' },
    { name: 'Hummus', qty: 3, unit: 'tbsp' },
    { name: 'Whole wheat pita', qty: 1, unit: 'whole' },
  ],
  steps: [
    'Blend soaked chickpeas with garlic, onion, and spices into a coarse mixture.',
    'Shape into small patties, pan-fry in a little oil until golden on both sides.',
    'Serve in pita with a generous spread of hummus.',
  ],
})
