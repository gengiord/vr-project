export default function SectionCard({ title, children, className = '' }) {
  return (
    <div className={`section-card ${className}`.trim()}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}
