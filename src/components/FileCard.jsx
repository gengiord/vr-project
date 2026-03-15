export default function FileCard({ icon, title, description, href, disabled }) {
  return (
    <div className="file-card">
      <div className="file-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={href || '#'} className={`btn${disabled ? ' disabled' : ''}`}>
        {disabled ? 'Non ancora disponibile' : 'Download'}
      </a>
    </div>
  );
}
