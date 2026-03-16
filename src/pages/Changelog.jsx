import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

const changelog = [
  // Le entry più recenti vengono inserite qui sopra
];

function ChangeEntry({ version, date, type, items }) {
  const typeLabel = {
    feature: { label: 'Nuovo', className: 'change-badge feature' },
    update: { label: 'Aggiornamento', className: 'change-badge update' },
    fix: { label: 'Fix', className: 'change-badge fix' },
    content: { label: 'Contenuto', className: 'change-badge content' },
  };

  const badge = typeLabel[type] || { label: type, className: 'change-badge' };

  return (
    <div className="change-entry">
      <div className="change-header">
        <div className="change-meta">
          <span className="change-version">{version}</span>
          <span className="change-date">{date}</span>
        </div>
        <span className={badge.className}>{badge.label}</span>
      </div>
      <ul className="change-list">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
}

export default function Changelog() {
  return (
    <Layout section={null}>
      <div className="page">
        <PageHeader icon="📝" title="Changelog" subtitle="Storico delle modifiche e degli aggiornamenti del progetto" />

        {changelog.length === 0 ? (
          <SectionCard>
            <div className="changelog-empty">
              <p>Nessun aggiornamento ancora registrato. Le modifiche verranno inserite qui man mano che il progetto evolve.</p>
            </div>
          </SectionCard>
        ) : (
          <SectionCard>
            <div className="changelog-timeline">
              {changelog.map((entry, i) => (
                <ChangeEntry key={i} {...entry} />
              ))}
            </div>
          </SectionCard>
        )}
      </div>
    </Layout>
  );
}
