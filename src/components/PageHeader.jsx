import Breadcrumb from './Breadcrumb';

export default function PageHeader({ icon, title, subtitle }) {
  return (
    <div className="page-header-wrapper">
      <div className="page-header">
        <span className="page-icon">{icon}</span>
        <div style={{ flex: 1 }}>
          <h1>{title}</h1>
          {subtitle && <div className="subtitle">{subtitle}</div>}
        </div>
        <Breadcrumb />
      </div>
    </div>
  );
}
