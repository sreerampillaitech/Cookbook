import { Link } from 'react-router-dom'
import GoalStamp from './GoalStamp'

export default function RecipeCard({ recipe }) {
  return (
    <Link
      to={`/recipe/${recipe.id}`}
      className="card-index relative block rounded-lg p-5 pt-7 hover:-translate-y-0.5 transition-transform"
    >
      <span className="cuisine-tab">{recipe.cuisine}</span>
      <h3 className="font-display text-lg leading-snug pr-2">{recipe.name}</h3>
      <p className="font-mono text-xs text-[var(--ink-soft)] mt-1">
        {recipe.mealType} &middot; {recipe.timeMinutes} min &middot; {recipe.nutrition.calories} kcal
      </p>
      <hr className="rule-dashed my-3" />
      <div className="flex gap-1.5 flex-wrap">
        {recipe.goals.map((g) => (
          <GoalStamp key={g} goalId={g} size="small" />
        ))}
      </div>
    </Link>
  )
}