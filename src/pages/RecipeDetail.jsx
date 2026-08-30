import { useMemo, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { RECIPES } from '../data/recipes'
import GoalStamp from '../components/GoalStamp'
import { DAYS, loadPlan, savePlan } from '../utils/storage'

function fmtQty(n) {
  if (Number.isInteger(n)) return String(n)
  const rounded = Math.round(n * 100) / 100
  return String(rounded)
}

export default function RecipeDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const recipe = RECIPES.find((r) => r.id === id)
  const [multiplier, setMultiplier] = useState(1)
  const [addTo, setAddTo] = useState({ day: 'Mon' })
  const [justAdded, setJustAdded] = useState(false)

  const scaled = useMemo(() => {
    if (!recipe) return null
    return {
      ingredients: recipe.ingredients.map((i) => ({ ...i, qty: i.qty * multiplier })),
      nutrition: Object.fromEntries(
        Object.entries(recipe.nutrition).map(([k, v]) => [k, Math.round(v * multiplier)])
      ),
    }
  }, [recipe, multiplier])

  if (!recipe) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <p className="font-mono text-sm">
          Recipe not found. <Link to="/" className="underline">Back to browse</Link>.
        </p>
      </div>
    )
  }

  const addToPlanner = () => {
    const plan = loadPlan()
    plan[addTo.day][recipe.mealType] = recipe.id
    savePlan(plan)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 2000)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <button
        onClick={() => navigate(-1)}
        className="font-mono text-xs text-[var(--ink-soft)] hover:text-[var(--ink)] mb-4 underline decoration-dashed underline-offset-4"
      >
        &larr; Back
      </button>

      <div className="card-index relative rounded-lg p-6 sm:p-8">
        <span className="cuisine-tab">{recipe.cuisine}</span>

        <h1 className="font-display text-3xl sm:text-4xl pr-4">{recipe.name}</h1>
        <p className="font-mono text-xs text-[var(--ink-soft)] mt-2">
          {recipe.mealType} &middot; {recipe.timeMinutes} min &middot; base serves {recipe.servings}
        </p>

        <div className="flex gap-2 flex-wrap mt-4">
          {recipe.goals.map((g) => (
            <div key={g} className="flex items-center gap-1.5">
              <GoalStamp goalId={g} />
            </div>
          ))}
        </div>

        <hr className="rule-dashed my-6" />

        <div className="grid grid-cols-4 gap-3 font-mono text-center mb-6">
          {[
            ['kcal', scaled.nutrition.calories],
            ['protein g', scaled.nutrition.protein],
            ['carbs g', scaled.nutrition.carbs],
            ['fat g', scaled.nutrition.fat],
          ].map(([label, val]) => (
            <div key={label} className="border border-[var(--line)] rounded py-2">
              <div className="text-lg font-medium">{val}</div>
              <div className="text-[0.65rem] uppercase tracking-wide text-[var(--ink-soft)]">
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-wide text-[var(--ink-soft)]">
            Scale
          </span>
          <div className="flex items-center border border-[var(--line)] rounded">
            <button
              onClick={() => setMultiplier((m) => Math.max(0.5, Math.round((m - 0.5) * 2) / 2))}
              className="px-3 py-1 hover:bg-[var(--paper)] font-mono"
              aria-label="Decrease servings"
            >
              −
            </button>
            <span className="px-3 font-mono text-sm">
              {fmtQty(recipe.servings * multiplier)} serving{recipe.servings * multiplier !== 1 ? 's' : ''}
            </span>
            <button
              onClick={() => setMultiplier((m) => Math.round((m + 0.5) * 2) / 2)}
              className="px-3 py-1 hover:bg-[var(--paper)] font-mono"
              aria-label="Increase servings"
            >
              +
            </button>
          </div>
        </div>

        <h2 className="font-display text-xl mb-3">Ingredients</h2>
        <ul className="space-y-1.5 mb-6">
          {scaled.ingredients.map((ing, i) => (
            <li key={i} className="flex justify-between font-mono text-sm border-b border-dotted border-[var(--line)] py-1">
              <span>{ing.name}</span>
              <span className="text-[var(--ink-soft)] pl-3 whitespace-nowrap">
                {fmtQty(ing.qty)} {ing.unit}
              </span>
            </li>
          ))}
        </ul>

        <h2 className="font-display text-xl mb-3">Method</h2>
        <ol className="space-y-3 mb-8">
          {recipe.steps.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="font-mono text-xs text-[var(--card)] bg-[var(--teal)] rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-sm leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>

        <hr className="rule-dashed my-6" />

        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-wide text-[var(--ink-soft)]">
            Add to planner
          </span>
          <select
            value={addTo.day}
            onChange={(e) => setAddTo({ day: e.target.value })}
            className="bg-[var(--paper)] border border-[var(--line)] rounded px-2 py-1.5 text-sm"
          >
            {DAYS.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          <button
            onClick={addToPlanner}
            className="bg-[var(--teal)] text-[var(--card)] text-sm font-medium px-4 py-1.5 rounded hover:bg-[var(--teal-deep)] transition-colors"
          >
            {justAdded ? 'Added ✓' : `Set as ${addTo.day} ${recipe.mealType}`}
          </button>
        </div>
      </div>
    </div>
  )
}