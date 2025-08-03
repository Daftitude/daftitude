import { Link, NavLink } from 'react-router-dom';
import { useMode } from "../../context/modeContext";

const navItems = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Planner', path: '/planner' },
  { name: 'Marketplace', path: '/marketplace' },
  { name: 'Tasks', path: '/tasks' },
  { name: 'Badges', path: '/badges' },
  { name: 'Family', path: '/family' },
];

export default function Navbar() {
  const { mode, toggleMode } = useMode();

  return (
    <nav className="bg-[#1f1f1f]/90 backdrop-blur-md shadow-md sticky top-0 z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <Link to="/" className="text-2xl font-extrabold text-orange-500 tracking-tight">
            DaFT<span className="text-white">itude</span>
          </Link>

          {/* Center: Navigation links */}
          <div className="flex gap-2 text-sm font-semibold tracking-wide">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `navbar-link ${isActive ? 'navbar-link-active' : ''}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Right: Mode Display + Toggle */}
          <div className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1 rounded-full shadow transition duration-150">
            <span
              className="navbar-link cursor-default text-gray-300"
              title="Current App Mode"
            >
              Mode: <span className="text-white capitalize">{mode}</span>
            </span>
            <button
              onClick={toggleMode}
              className="navbar-link hover:navbar-link-active"
            >
              Switch to {mode === 'family' ? 'Legacy' : 'Family'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}