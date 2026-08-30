import { useEffect, useMemo, useState } from 'react'
import { RECIPES } from '../data/recipes'
import { loadPlan } from '../utils/storage'

const recipeById = Object.fromEntries(RECIPES.map((r) => [r.id, r]))
const CHECKED_KEY = 'recipe-book:shopping-checked:v1'

function fmtQty(n) {
  if (Number.isInteger(n)) return String(n)
  return String(Math.round(n * 100) / 100)
}

export default function ShoppingList() {
  const plan = loadPlan()

  const plannedRecipes = useMemo(() => {
    const ids = new Set()
    Object.values(plan).forEach((day) => {
      Object.values(day).forEach((id) => id && ids.add(id))
    })
    return [...ids].map((id) => recipeById[id]).filter(Boolean)
  }, [plan])

  const aggregated = useMemo(() => {
    const map = new Map()
    for (const r of plannedRecipes) {
      for (const ing of r.ingredients) {
        const key = `${ing.name.toLowerCase()}|${ing.unit || ''}`
        if (map.has(key)) {
          const existing = map.get(key)
          existing.qty += ing.qty
          existing.recipes.push(r.name)
        } else {
          map.set(key, { name: ing.name, unit: ing.unit, qty: ing.qty, recipes: [r.name] })
        }
      }
    }
    return [...map.values()].sort((a, b) => a.name.localeCompare(b.name))
  }, [plannedRecipes])

  const [checked, setChecked] = useState({})

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CHECKED_KEY)
      if (raw) setChecked(JSON.parse(raw))
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(CHECKED_KEY, JSON.stringify(checked))
    } catch {
      /* ignore */
    }
  }, [checked])

  const toggle = (key) => setChecked((c) => ({ ...c, [key]: !c[key] }))

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <p className="font-mono text-xs uppercase tracking-widest text-[var(--turmeric)]">
        {plannedRecipes.length} recipe{plannedRecipes.length !== 1 ? 's' : ''} planned this week
      </p>
      <h1 className="font-display text-3xl sm:text-4xl mt-1 mb-6">Shopping list</h1>

      {plannedRecipes.length === 0 ? (
        <p className="text-[var(--ink-soft)] font-mono text-sm">
          Nothing planned yet. Add recipes to the weekly planner and they'll show up here, combined
          into one list.
        </p>
      ) : (
        <div className="card-index rounded-lg p-5 sm:p-6">
          <ul className="space-y-2">
            {aggregated.map((item) => {
              const key = `${item.name}|${item.unit}`
              return (
                <li key={key} className="flex items-start gap-3 border-b border-dotted border-[var(--line)] py-2">
                  <input
                    type="checkbox"
                    checked={!!checked[key]}
                    onChange={() => toggle(key)}
                    className="mt-1 w-4 h-4 accent-[var(--teal)]"
                  />
                  <div className={`flex-1 ${checked[key] ? 'line-through text-[var(--ink-soft)]' : ''}`}>
                    <div className="flex justify-between font-mono text-sm">
                      <span>{item.name}</span>
                      <span className="text-[var(--ink-soft)] pl-3 whitespace-nowrap">
                        {fmtQty(item.qty)} {item.unit}
                      </span>
                    </div>
                    <div className="text-[0.65rem] text-[var(--ink-soft)] font-mono mt-0.5">
                      for {[...new Set(item.recipes)].join(', ')}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}