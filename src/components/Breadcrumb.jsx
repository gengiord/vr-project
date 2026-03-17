import { Link, useLocation } from 'react-router-dom';

const LABELS = {
  '/': 'Home',
  '/tesi': 'Tesi',
  '/indice': 'Indice',
  '/bibliografia': 'Bibliografia',
  '/progetto': 'Progetto',
  '/storia': 'Storia',
  '/specifiche': 'Specifiche',
  '/gameplay': 'Gameplay',
  '/moodboard': 'Moodboard',
  '/timeline': 'Timeline',
  '/team': 'Team',
  '/documenti': 'Documenti',
  '/changelog': 'Changelog',
  '/da-implementare': 'Da Implementare',
  '/presentazione': 'Presentazione',
};

const SECTION = {
  '/tesi': { path: '/tesi', label: 'Tesi' },
  '/indice': { path: '/tesi', label: 'Tesi' },
  '/bibliografia': { path: '/tesi', label: 'Tesi' },
  '/progetto': { path: '/progetto', label: 'Progetto' },
  '/storia': { path: '/progetto', label: 'Progetto' },
  '/specifiche': { path: '/progetto', label: 'Progetto' },
  '/gameplay': { path: '/progetto', label: 'Progetto' },
  '/moodboard': { path: '/progetto', label: 'Progetto' },
  '/timeline': { path: '/progetto', label: 'Progetto' },
};

export default function Breadcrumb() {
  const { pathname } = useLocation();

  if (pathname === '/') return null;

  const parent = SECTION[pathname];
  const current = LABELS[pathname] ?? pathname.slice(1);

  return (
    <div className="breadcrumb" role="navigation" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {parent && parent.path !== pathname && (
        <>
          <span className="breadcrumb-sep">›</span>
          <Link to={parent.path}>{parent.label}</Link>
        </>
      )}
      <span className="breadcrumb-sep">›</span>
      <span className="breadcrumb-current">{current}</span>
    </div>
  );
}
