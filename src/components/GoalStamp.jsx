import { GOAL_MAP } from '../data/goals'

const COLORS = {
  weight_loss: 'var(--teal)',
  strength: 'var(--chili)',
  b12_d3: 'var(--turmeric)',
  hair_growth: '#5a7247',
  grey_hair: 'var(--ink-soft)',
  eyesight: '#2b6ea3',
}

export default function GoalStamp({ goalId, size = 'default' }) {
  const goal = GOAL_MAP[goalId]
  if (!goal) return null
  const dims = size === 'small' ? 'w-7 h-7 text-[0.55rem]' : ''
  return (
    <span
      className={`goal-stamp ${dims}`}
      style={{ color: COLORS[goalId] || 'var(--ink)' }}
      title={goal.label}
    >
      {goal.mark}
    </span>
  )
}