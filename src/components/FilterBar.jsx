import { CUISINES, MEAL_TYPES, GOALS } from '../data/goals'

function Select({ label, value, onChange, options }) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      <span className="font-mono text-xs uppercase tracking-wide text-[var(--ink-soft)]">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-[var(--card)] border border-[var(--line)] rounded px-2 py-1.5 text-sm min-w-[9rem]"
      >
        <option value="">All</option>
        {options.map((o) => (
          <option key={o.value ?? o} value={o.value ?? o}>
            {o.label ?? o}
          </option>
        ))}
      </select>
    </label>
  )
}

export default function FilterBar({ filters, setFilters }) {
  const update = (key) => (val) => setFilters((f) => ({ ...f, [key]: val }))

  return (
    <div className="flex flex-wrap gap-4 items-end">
      <Select label="Meal type" value={filters.mealType} onChange={update('mealType')} options={MEAL_TYPES} />
      <Select label="Cuisine" value={filters.cuisine} onChange={update('cuisine')} options={CUISINES} />
      <Select
        label="Health goal"
        value={filters.goal}
        onChange={update('goal')}
        options={GOALS.map((g) => ({ value: g.id, label: g.label }))}
      />
      <div className="flex-1 min-w-[10rem]">
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-mono text-xs uppercase tracking-wide text-[var(--ink-soft)]">
            Search
          </span>
          <input
            type="text"
            value={filters.search}
            onChange={(e) => update('search')(e.target.value)}
            placeholder="e.g. egg, salmon, sambar…"
            className="bg-[var(--card)] border border-[var(--line)] rounded px-2 py-1.5 text-sm"
          />
        </label>
      </div>
      {(filters.mealType || filters.cuisine || filters.goal || filters.search) && (
        <button
          onClick={() => setFilters({ mealType: '', cuisine: '', goal: '', search: '' })}
          className="text-sm font-mono underline decoration-dashed underline-offset-4 text-[var(--ink-soft)] hover:text-[var(--ink)] pb-1.5"
        >
          Clear filters
        </button>
      )}
    </div>
  )
}