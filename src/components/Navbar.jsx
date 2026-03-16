import { NavLink, useLocation } from 'react-router-dom';
import { mainNav, tesiSub, progettoSub } from '../data/navigation';

const tesiPaths = ['/tesi', '/indice', '/bibliografia'];
const progettoPaths = ['/progetto', '/storia', '/specifiche', '/gameplay', '/moodboard', '/audio', '/reference', '/timeline'];

export default function Navbar({ section }) {
  const subNav = section === 'tesi' ? tesiSub : section === 'progetto' ? progettoSub : null;
  const { pathname } = useLocation();

  function mainActive(path) {
    if (path === '/tesi' && tesiPaths.includes(pathname)) return 'active';
    if (path === '/progetto' && progettoPaths.includes(pathname)) return 'active';
    if (path === pathname) return 'active';
    return '';
  }

  return (
    <nav>
      <div className="nav-main">
        {mainNav.map(({ path, label, icon }) => (
          <NavLink key={path} to={path} className={mainActive(path)} end>
            <span className="nav-icon">{icon}</span>{label}
          </NavLink>
        ))}
      </div>
      {subNav && (
        <div className="nav-sub">
          {subNav.map(({ path, label, icon }) => (
            <NavLink key={path} to={path} className={({ isActive }) => isActive ? 'active' : ''} end>
              <span className="nav-icon">{icon}</span>{label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
