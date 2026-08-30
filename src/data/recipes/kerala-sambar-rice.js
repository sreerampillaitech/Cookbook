import { createRecipe } from './createRecipe'

export default createRecipe({
    id: 'kerala-sambar-rice',
    name: 'Kerala Sambar Rice',
    cuisine: 'Kerala',
    mealType: 'Lunch',
    goals: ['weight_loss', 'eyesight'],
    timeMinutes: 35,
    servings: 1,
    tags: ['vegetarian', 'heat-retaining'],
    diet: 'veg',
    nutrition: { calories: 420, protein: 14, carbs: 68, fat: 9 },
    ingredients: [
      { name: 'Toor dal, cooked', qty: 0.5, unit: 'cup' },
      { name: 'Mixed vegetables (carrot, drumstick, pumpkin)', qty: 1, unit: 'cup' },
      { name: 'Tamarind pulp', qty: 1, unit: 'tbsp' },
      { name: 'Sambar powder', qty: 1.5, unit: 'tsp' },
      { name: 'Mustard seeds', qty: 0.5, unit: 'tsp' },
      { name: 'Curry leaves', qty: 1, unit: 'sprig' },
      { name: 'Coconut oil', qty: 1, unit: 'tsp' },
      { name: 'Cooked rice', qty: 1, unit: 'cup' },
    ],
    steps: [
      'Boil the mixed vegetables until fork-tender in a little water.',
      'Add cooked dal, tamarind pulp, sambar powder, and salt, simmer 10 minutes.',
      'Temper mustard seeds and curry leaves in coconut oil, pour over the sambar.',
      'Pack hot rice and sambar in separate compartments of an insulated tiffin so it stays warm 6–7 hours.',
    ],
  })
