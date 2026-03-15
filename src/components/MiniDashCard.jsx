import { Link } from 'react-router-dom';

export default function MiniDashCard({ to, icon, title, description }) {
  return (
    <Link to={to} className="mini-dash-card">
      <span className="mini-dash-icon">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}
