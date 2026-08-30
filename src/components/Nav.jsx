import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Browse', end: true },
  { to: '/planner', label: 'Weekly Planner' },
  { to: '/shopping-list', label: 'Shopping List' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 bg-[var(--teal)] text-[var(--card)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="font-display text-xl tracking-tight">
            The Kitchen Index
          </NavLink>
          <nav className="flex gap-1 sm:gap-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `px-2 sm:px-3 py-2 text-sm font-medium rounded transition-colors ${
                    isActive
                      ? 'bg-[var(--card)] text-[var(--teal-deep)]'
                      : 'text-[var(--card)]/80 hover:text-[var(--card)] hover:bg-white/10'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}