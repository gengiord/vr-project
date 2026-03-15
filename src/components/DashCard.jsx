import { Link } from 'react-router-dom';

export default function DashCard({ to, icon, title, description }) {
  return (
    <Link to={to} className="dash-card">
      <span className="dash-icon">{icon}</span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}
