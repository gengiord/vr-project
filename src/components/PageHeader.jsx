export default function PageHeader({ icon, title, subtitle }) {
  return (
    <div className="page-header">
      <span className="page-icon">{icon}</span>
      <div>
        <h1>{title}</h1>
        {subtitle && <div className="subtitle">{subtitle}</div>}
      </div>
    </div>
  );
}
