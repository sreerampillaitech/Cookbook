const PLAN_KEY = 'recipe-book:meal-plan:v1'

export const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

// Plan shape: { Mon: { Breakfast: 'recipe-id'|null, Lunch: ..., Dinner: ..., Snack: ... }, ... }
export function loadPlan() {
  try {
    const raw = localStorage.getItem(PLAN_KEY)
    if (!raw) return emptyPlan()
    const parsed = JSON.parse(raw)
    return { ...emptyPlan(), ...parsed }
  } catch {
    return emptyPlan()
  }
}

export function savePlan(plan) {
  try {
    localStorage.setItem(PLAN_KEY, JSON.stringify(plan))
  } catch {
    // storage unavailable (private browsing etc.) — fail silently
  }
}

export function emptyPlan() {
  const plan = {}
  for (const d of DAYS) {
    plan[d] = { Breakfast: null, Lunch: null, Dinner: null, Snack: null }
  }
  return plan
}