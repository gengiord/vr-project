import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

export default function Domande() {
  return (
    <Layout>
      <div className="page">
        <PageHeader
          icon="❓"
          title="Domande per il Relatore"
          subtitle="Chiarimenti su scope, sviluppo e direzione della tesi — Prof. Corrado Piscitelli"
        />
        <SectionCard>
          <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
            Il professore ha risposto. Le domande sono state risolte.
          </p>
        </SectionCard>
      </div>
    </Layout>
  );
}
