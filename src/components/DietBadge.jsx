import { DIET_MAP } from '../data/goals'

export default function DietBadge({ dietId }) {
  const diet = DIET_MAP[dietId]
  if (!diet) return null
  return (
    <span
      className="inline-flex items-center justify-center w-6 h-6 rounded-full border"
      style={{
        borderColor: diet.isVeg ? '#3f7d3f' : '#a83a2c',
        background: diet.isVeg ? 'rgba(63,125,63,0.08)' : 'rgba(168,58,44,0.08)',
      }}
      title={diet.label}
    >
      <span className="text-[0.85rem] leading-none">{diet.mark}</span>
    </span>
  )
}
