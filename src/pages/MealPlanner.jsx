import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RECIPES } from '../data/recipes'
import { MEAL_TYPES } from '../data/goals'
import { DAYS, loadPlan, savePlan, emptyPlan } from '../utils/storage'

const recipeById = Object.fromEntries(RECIPES.map((r) => [r.id, r]))

export default function MealPlanner() {
  const [plan, setPlan] = useState(loadPlan)

  useEffect(() => {
    savePlan(plan)
  }, [plan])

  const setSlot = (day, meal, recipeId) => {
    setPlan((p) => ({ ...p, [day]: { ...p[day], [meal]: recipeId || null } }))
  }

  const recipesForMeal = (meal) => RECIPES.filter((r) => r.mealType === meal)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--turmeric)]">
            Mon &mdash; Sun
          </p>
          <h1 className="font-display text-3xl sm:text-4xl mt-1">Weekly meal planner</h1>
        </div>
        <button
          onClick={() => setPlan(emptyPlan())}
          className="font-mono text-xs underline decoration-dashed underline-offset-4 text-[var(--ink-soft)] hover:text-[var(--ink)]"
        >
          Clear week
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[720px]">
          <thead>
            <tr>
              <th className="text-left font-mono text-xs uppercase tracking-wide text-[var(--ink-soft)] py-2 pr-3 w-24">
                Day
              </th>
              {MEAL_TYPES.map((m) => (
                <th key={m} className="text-left font-mono text-xs uppercase tracking-wide text-[var(--ink-soft)] py-2 px-2">
                  {m}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DAYS.map((day) => (
              <tr key={day} className="border-t border-[var(--line)]">
                <td className="py-3 pr-3 font-display text-lg align-top">{day}</td>
                {MEAL_TYPES.map((meal) => {
                  const recipeId = plan[day]?.[meal]
                  const recipe = recipeId ? recipeById[recipeId] : null
                  return (
                    <td key={meal} className="py-3 px-2 align-top">
                      <select
                        value={recipeId || ''}
                        onChange={(e) => setSlot(day, meal, e.target.value)}
                        className="w-full bg-[var(--card)] border border-[var(--line)] rounded px-2 py-1.5 text-sm mb-1"
                      >
                        <option value="">&mdash;</option>
                        {recipesForMeal(meal).map((r) => (
                          <option key={r.id} value={r.id}>{r.name}</option>
                        ))}
                      </select>
                      {recipe && (
                        <Link
                          to={`/recipe/${recipe.id}`}
                          className="font-mono text-[0.65rem] text-[var(--ink-soft)] hover:text-[var(--teal)] underline decoration-dashed underline-offset-2"
                        >
                          view card
                        </Link>
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="font-mono text-xs text-[var(--ink-soft)] mt-6">
        Saved to this browser. Head to the shopping list to pull ingredients for everything planned.
      </p>
    </div>
  )
}