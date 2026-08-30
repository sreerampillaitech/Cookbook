import { createRecipe } from './createRecipe'

export default createRecipe({
    id: 'walnut-date-bites',
    name: 'Walnut & Date Energy Bites',
    cuisine: 'Mediterranean',
    mealType: 'Snack',
    goals: ['grey_hair', 'hair_growth', 'strength'],
    timeMinutes: 10,
    servings: 4,
    tags: ['no-cook'],
    diet: 'veg',
    nutrition: { calories: 110, protein: 3, carbs: 14, fat: 6 },
    ingredients: [
      { name: 'Dates, pitted', qty: 10, unit: 'whole' },
      { name: 'Walnuts', qty: 0.5, unit: 'cup' },
      { name: 'Cocoa powder', qty: 1, unit: 'tbsp' },
      { name: 'Chia seeds', qty: 1, unit: 'tbsp' },
      { name: 'Pinch of salt', qty: 1, unit: 'pinch' },
    ],
    steps: [
      'Pulse walnuts in a blender until coarsely ground.',
      'Add dates, cocoa powder, chia seeds, and salt, pulse until it forms a sticky mass.',
      'Roll into small balls, about 12.',
      'Refrigerate for at least 30 minutes to firm up, store in an airtight container.',
    ],
  })
