import { Link, NavLink } from 'react-router-dom';

// All navigation items with valid react-router-dom routes
const navItems = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Planner', path: '/planner' },
  { name: 'Marketplace', path: '/marketplace' },
  { name: 'Tasks', path: '/tasks' },
  { name: 'Badges', path: '/badges' },
  { name: 'Family', path: '/family' },
];

export default function Navbar() {
  // Fallback render check
  // Commented out icon/dark mode logic for isolated testing
  // Layout: flex container for all links, spacing, revert placeholder markup removal
  return (
    <>
      <div>Navbar Loaded</div>
      <nav className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white">
        <div className="text-xl font-bold">DaFT</div>
        <div className="flex space-x-4">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-2 py-1 rounded-md ${isActive ? 'bg-yellow-300 text-black' : ''}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        {/* 
        // Dark mode toggle or icon logic temporarily commented for isolated testing
        <div className="icon-btn">
          <button aria-label="Toggle Dark Mode">
            <span role="img" aria-label="moon">🌙</span>
          </button>
        </div>
        */}
      </nav>
    </>
  );
}