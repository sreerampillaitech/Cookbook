import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'arabian-veg-biryani',
  name: 'Arabian Vegetable Biryani',
  cuisine: 'Middle Eastern',
  mealType: 'Lunch',
  goals: ['weight_loss'],
  timeMinutes: 35,
  servings: 1,
  tags: ['vegetarian', 'heat-retaining'],
  diet: 'veg',
  nutrition: { calories: 420, protein: 10, carbs: 72, fat: 10 },
  ingredients: [
    { name: 'Basmati rice, parboiled', qty: 1, unit: 'cup' },
    { name: 'Mixed vegetables (carrot, beans, peas)', qty: 1.5, unit: 'cup' },
    { name: 'Onion, sliced and fried', qty: 0.5, unit: 'medium' },
    { name: 'Biryani spice mix', qty: 1, unit: 'tsp' },
    { name: 'Saffron milk', qty: 2, unit: 'tbsp' },
  ],
  steps: [
    'Sauté vegetables with biryani spice mix until half-cooked.',
    'Layer parboiled rice over the vegetables in a pot.',
    'Drizzle saffron milk and top with fried onions.',
    'Cover tightly and cook on low heat for 15 minutes, then rest 5 minutes before serving.',
  ],
})
