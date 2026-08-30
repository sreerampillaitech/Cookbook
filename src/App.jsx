import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import RecipeDetail from './pages/RecipeDetail'
import MealPlanner from './pages/MealPlanner'
import ShoppingList from './pages/ShoppingList'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/planner" element={<MealPlanner />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
        </Routes>
      </main>
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <hr className="rule-dashed mb-4" />
        <p className="font-mono text-[0.7rem] text-[var(--ink-soft)] leading-relaxed">
          Personal reference only, not medical advice. Nutrition figures are estimates. Health-goal
          stamps reflect commonly cited dietary support (e.g. B12/D3-rich foods, protein for
          strength) rather than guaranteed outcomes.
        </p>
      </footer>
    </div>
  )
}