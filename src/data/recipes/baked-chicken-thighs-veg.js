import { createRecipe } from './createRecipe'

export default createRecipe({
  id: 'baked-chicken-thighs-veg',
  name: 'Baked Chicken Thighs with Vegetables',
  cuisine: 'Continental',
  mealType: 'Dinner',
  goals: ['strength'],
  timeMinutes: 35,
  servings: 1,
  tags: ['non-veg'],
  diet: 'chicken',
  nutrition: { calories: 420, protein: 34, carbs: 20, fat: 22 },
  ingredients: [
    { name: 'Chicken thighs, boneless', qty: 200, unit: 'g' },
    { name: 'Mixed vegetables (potato, carrot, onion)', qty: 1.5, unit: 'cup' },
    { name: 'Olive oil and paprika', qty: 1, unit: 'tbsp' },
  ],
  steps: [
    'Toss chicken and vegetables in olive oil and paprika.',
    'Arrange on a tray, bake at 200°C for 25-30 minutes until chicken is cooked through and vegetables are tender.',
  ],
})
