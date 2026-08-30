import { useMemo, useState } from 'react'
import { RECIPES } from '../data/recipes'
import RecipeCard from '../components/RecipeCard'
import FilterBar from '../components/FilterBar'

export default function Home() {
  const [filters, setFilters] = useState({ mealType: '', cuisine: '', goal: '', search: '' })

  const filtered = useMemo(() => {
    const q = filters.search.trim().toLowerCase()
    return RECIPES.filter((r) => {
      if (filters.mealType && r.mealType !== filters.mealType) return false
      if (filters.cuisine && r.cuisine !== filters.cuisine) return false
      if (filters.goal && !r.goals.includes(filters.goal)) return false
      if (q) {
        const hay = [r.name, r.cuisine, ...r.ingredients.map((i) => i.name)]
          .join(' ')
          .toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
  }, [filters])

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--turmeric)]">
          {RECIPES.length} recipes on file
        </p>
        <h1 className="font-display text-3xl sm:text-4xl mt-1">The kitchen index</h1>
        <p className="text-[var(--ink-soft)] mt-2 max-w-xl">
          Every card here is stamped with the health goal it's stocked for &mdash; weight loss,
          strength, B12/D3, hair growth, grey hair reversal, or eyesight. Filter below, or browse
          the whole box.
        </p>
      </div>

      <div className="card-index rounded-lg p-4 sm:p-5 mb-8">
        <FilterBar filters={filters} setFilters={setFilters} />
      </div>

      {filtered.length === 0 ? (
        <p className="text-[var(--ink-soft)] font-mono text-sm">
          No cards match that combination. Try clearing a filter.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      )}
    </div>
  )
}